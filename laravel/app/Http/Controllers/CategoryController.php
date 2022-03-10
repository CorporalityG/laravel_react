<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryValidateRequest; // use validation
use Illuminate\Support\Str;
use Session, Redirect, DataTables;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->is('api/*') )
        {
            $categories = Category::orderby('category_name', 'ASC')->get();

            return $categories;
        }

        if( $request->ajax() ) {

            $categories = Category::latest()->get();

            return Datatables::of($categories)
                // ->addIndexColumn()
                ->addColumn('count', function($category) {
                    return '<center>'.$category->posts->count().'</center>';
                })
                ->addColumn('action', function($category) {
                    /*$deleteLink = '<form action="'.route('categories.destroy', $category->id).'" method="POST" class="d-inline-block">
                            <input type="hidden" name="_token" value="'.csrf_token().'">
                            <input type="hidden" name="_method" value="DELETE">
                            <button class="btn btn-sm btn-danger mx-2 delete" type="submit"><i class="fas fa-trash"></i></button>
                            </form>';*/

                    $actionBtn = '<center>
                            <a href="'.route('categories.edit', $category->id).'" class="edit btn btn-success btn-sm" data-id="'.$category->id.'"><i class="fas fa-edit"></i></a>
                            <a href="javascript:;" data-id="'.$category->id.'" data-url="'.route('categories.destroy', $category->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                            <a href="'.route('categories.show', $category->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';
                        
                    return $actionBtn;
                })
                ->rawColumns(['count', 'action'])
                ->make(true);
        }
        else {
            return view('categories.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('categories.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Category created successfully.');

            return redirect::route('categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create category.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $category = Category::findOrFail($category->id);

        return view('categories.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        $category = Category::findOrFail($category->id);

        return view('categories.create-edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryValidateRequest $request, Category $category)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $category->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Category updated successfully.');

            return redirect::route('categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Category.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category = Category::findOrFail($category->id);
        // dd($category->posts->count());

        if( empty($category->posts->count()) ):
            $category->delete();

            Session::flash('messageType', 'success');
            Session::flash('message', 'Category deleted successfully.');

            return redirect::route('categories.index');
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
            $RS_Save = Category::findOrFail($id);
        }
        else
        {
            $RS_Save = new Category();
        }

        $categoryName = $request->category_name;

        $RS_Save->category_name = $categoryName;
        $RS_Save->category_slug = Str::slug($categoryName, '-');
        $RS_Save->description = $request->description;

        $result = $RS_Save->save();

        return $result;
    }
}
