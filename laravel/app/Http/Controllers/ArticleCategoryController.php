<?php

namespace App\Http\Controllers;

use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use App\Http\Requests\ArticleCategoryValidateRequest; // use validation
use Illuminate\Support\Str;
use Session, Redirect, DataTables;

class ArticleCategoryController extends Controller
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
            $categories = ArticleCategory::latest()->get();

            return Datatables::of($categories)
                // ->addIndexColumn()
                ->addColumn('count', function($category) {
                    return '<center>'.$category->articles->count().'</center>';
                })
                ->addColumn('action', function($category) {
                    $actionBtn = '<center>
                            <a href="'.route('article-categories.edit', $category->id).'" class="edit btn btn-success btn-sm" data-id="'.$category->id.'"><i class="fas fa-edit"></i></a>
                            <a href="javascript:;" data-id="'.$category->id.'" data-url="'.route('article-categories.destroy', $category->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                            <a href="'.route('article-categories.show', $category->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';
                        
                    return $actionBtn;
                })
                ->rawColumns(['count', 'action'])
                ->make(true);
        }
        else
        {
            return view('articles.categories.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('articles.categories.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleCategoryValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Category created successfully.');

            return redirect::route('article-categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create category.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ArticleCategory  $articleCategory
     * @return \Illuminate\Http\Response
     */
    public function show(ArticleCategory $articleCategory)
    {
        $category = ArticleCategory::findOrFail($articleCategory->id);

        return view('articles.categories.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ArticleCategory  $articleCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ArticleCategory $articleCategory)
    {
        $category = ArticleCategory::findOrFail($articleCategory->id);

        return view('articles.categories.create-edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ArticleCategory  $articleCategory
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleCategoryValidateRequest $request, ArticleCategory $articleCategory)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $articleCategory->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Category updated successfully.');

            return redirect::route('article-categories.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Category.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ArticleCategory  $articleCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArticleCategory $articleCategory)
    {
        $category = ArticleCategory::findOrFail($articleCategory->id);
        // dd($category->articles->count());

        if( empty($category->articles->count()) ):
            $category->delete();

            Session::flash('messageType', 'success');
            Session::flash('message', 'Category deleted successfully.');

            return redirect::route('article-categories.index');
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
            $RS_Save = ArticleCategory::findOrFail($id);
        }
        else
        {
            $RS_Save = new ArticleCategory();
        }

        $categoryName = $request->category_name;

        $RS_Save->category_name = $categoryName;
        $RS_Save->category_slug = Str::slug($categoryName, '-');
        $RS_Save->description = $request->description;

        $result = $RS_Save->save();

        return $result;
    }
}
