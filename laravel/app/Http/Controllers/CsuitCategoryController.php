<?php

namespace App\Http\Controllers;

use App\Models\CsuitCategory;
use Illuminate\Http\Request;
use App\Http\Requests\CsuitCategoryValidateRequest; // use validation
use Illuminate\Support\Str;
use Session, Redirect, DataTables;

class CsuitCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->ajax() )
        {
            $categories = CsuitCategory::latest()->get();

            return Datatables::of($categories)
                ->addColumn('parent_category_name', function($category) {
                    return !empty($category->parent) ? $category->parent->category_name : '-';
                })
                ->addColumn('count', function($category) {
                    $count = empty($category->parent_id) ? $category->csuits->count() : $category->subcategoriesCsuits->count();

                    return '<center>'.$count.'</center>';
                })
                ->addColumn('action', function($category) {
                    $actionBtn = '<center>
                            <a href="'.route('csuit-categories.edit', $category->id).'" class="edit btn btn-success btn-sm" data-id="'.$category->id.'"><i class="fas fa-edit"></i></a>
                            <a href="javascript:;" data-id="'.$category->id.'" data-url="'.route('csuit-categories.destroy', $category->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                            <a href="'.route('csuit-categories.show', $category->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';
                        
                    return $actionBtn;
                })
                ->rawColumns(['count', 'action'])
                ->make(true);
        }
        else
        {
            return view('csuit.categories.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $parentCategories = $this->getCategories();

        return view('csuit.categories.create-edit', compact('parentCategories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CsuitCategoryValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Category created successfully.');

            return redirect::route('csuit-categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create category.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CsuitCategory  $csuitCategory
     * @return \Illuminate\Http\Response
     */
    public function show(CsuitCategory $csuitCategory)
    {
        $category = CsuitCategory::findOrFail($csuitCategory->id);

        return view('csuit.categories.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CsuitCategory  $csuitCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(CsuitCategory $csuitCategory)
    {
        $category = CsuitCategory::findOrFail($csuitCategory->id);
        $parentCategories = $this->getCategories(0, $csuitCategory->id);

        return view('csuit.categories.create-edit', compact('category', 'parentCategories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CsuitCategory  $csuitCategory
     * @return \Illuminate\Http\Response
     */
    public function update(CsuitCategoryValidateRequest $request, CsuitCategory $csuitCategory)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $csuitCategory->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Category updated successfully.');

            return redirect::route('csuit-categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Category.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CsuitCategory  $csuitCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(CsuitCategory $csuitCategory)
    {
        $category = CsuitCategory::findOrFail($csuitCategory->id);

        if( empty($category->csuits->count()) && empty($category->subcategoriesCsuits->count()) ):
            $category->delete();

            Session::flash('messageType', 'success');
            Session::flash('message', 'Category deleted successfully.');

            return redirect::route('csuit-categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'You Can\'t delete category.');

            return redirect::back();
        endif;
    }

    /**
     * store and update record
    */
    private function StoreUpdate($request, $id='')
    {
        if( !empty($id) )
        {
            $RS_Save = CsuitCategory::findOrFail($id);
        }
        else
        {
            $RS_Save = new CsuitCategory();
        }

        $categoryName = $request->category_name;

        $RS_Save->parent_id = $request->parent_category_id;
        $RS_Save->category_name = $categoryName;
        $RS_Save->category_slug = Str::slug($categoryName, '-');
        $RS_Save->description = $request->description;

        $result = $RS_Save->save();

        return $result;
    }

    /**
     * get category
    */
    private function getCategories($parentID=0, $equalID=0)
    {
        return CsuitCategory::where('parent_id', $parentID)
                ->whereNotIn('id', [$equalID])
                ->orderby('category_name', 'ASC')->get();
    }


    /**
     * get subcategory
    */
    public function getSubcategories(Request $request)
    {
        $subcategories = array();

        if( !empty($request->category_id) )
        {
            $subcategories = $this->getCategories($request->category_id);
            $subcategories_id = array();

            if( !empty($request->subcategories_id) )
            {
                $subcategories_id = explode(', ', $request->subcategories_id);
            }
            
            if( $request->ajax() )
            {
                return response()
                        ->json([
                                'subcategories' => view('csuit.categories.subcategories_list', compact('subcategories', 'subcategories_id'))->render()
                            ]);
            }
        }
        
        return $subcategories;
    }

    /**
     * get category
    */
    public function getCsuitsCategories(Request $request)
    {
        if( $request->is('api/*') )
        {
            return CsuitCategory::where('parent_id', 5)
                    ->orderby('category_name', 'ASC')
                    ->get();
        }
    }
}
