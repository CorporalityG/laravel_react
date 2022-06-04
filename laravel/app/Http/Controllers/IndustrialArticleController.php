<?php

namespace App\Http\Controllers;

use App\Models\IndustrialArticle;
use Illuminate\Http\Request;
use App\Models\IndustrialArticleCategory;
use App\Http\Requests\IndustrialArticleValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class IndustrialArticleController extends Controller
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
            $RS_Results = IndustrialArticle::latest()
                ->with(['categories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->with(['subcategories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->get();

            return Datatables::of($RS_Results)
                ->addColumn('category', function($RS_Row) {
                    $categories = array();
                    if( !empty($RS_Row->categories) ):
                        foreach( $RS_Row->categories as $category ):
                            array_push($categories, ' '.$category->category_name);
                        endforeach;
                    endif;
                    
                    return $categories;
                })
                ->addColumn('subcategory', function($RS_Row) {
                    $subcategories = array();
                    if( !empty($RS_Row->subcategories) ):
                        foreach( $RS_Row->subcategories as $category ):
                            array_push($subcategories, ' '.$category->category_name);
                        endforeach;
                    endif;
                    
                    return $subcategories;
                })
                ->addColumn('created_at', function($RS_Row) {
                    return $RS_Row->getCreatedAt($RS_Row->created_at);
                })
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('industrial-articles.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('industrial-articles.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('industrial-articles.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['category', 'subcategory', 'created_at', 'action'])
                ->make(true);
        }
        else {
            return view('industrial-articles.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = $this->categories();
        $categories_id = array();
        $subcategories_id = '';

        return view('industrial-articles.create-edit', compact('categories', 'categories_id', 'subcategories_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(IndustrialArticleValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New Industrial Article created successfully.');

            return redirect::route('industrial-articles.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create Industrial Article.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\IndustrialArticle  $industrialArticle
     * @return \Illuminate\Http\Response
     */
    public function show(IndustrialArticle $industrialArticle)
    {
        $RS_Row = IndustrialArticle::
                with(['categories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->findOrFail($industrialArticle->id);
        
        $categories = array();
        if( !empty($RS_Row->categories) ):
            foreach( $RS_Row->categories as $category ):
                array_push($categories, $category->category_name);
            endforeach;
        endif;
        
        $categories = implode(', ', $categories);

        return view('industrial-articles.show', compact('RS_Row', 'categories'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\IndustrialArticle  $industrialArticle
     * @return \Illuminate\Http\Response
     */
    public function edit(IndustrialArticle $industrialArticle)
    {
        $RS_Row = IndustrialArticle::with(['categories:id', 'subcategories:id'])->findOrFail($industrialArticle->id);

        $categories_id = array();
        $subcategories_id = array();

        if( !empty($RS_Row->categories) ):
            foreach( $RS_Row->categories as $category ):
                array_push($categories_id, $category->id);
            endforeach;
        endif;

        if( !empty($RS_Row->subcategories) ):
            foreach( $RS_Row->subcategories as $category ):
                array_push($subcategories_id, $category->id);
            endforeach;

            $subcategories_id = implode(', ', $subcategories_id);
        endif;

        $categories = $this->categories();

        return view('industrial-articles.create-edit', compact('RS_Row', 'categories_id', 'subcategories_id', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\IndustrialArticle  $industrialArticle
     * @return \Illuminate\Http\Response
     */
    public function update(IndustrialArticleValidateRequest $request, IndustrialArticle $industrialArticle)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $industrialArticle->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Industrial Article updated successfully.');

            return redirect::route('industrial-articles.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Industrial Article.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\IndustrialArticle  $industrialArticle
     * @return \Illuminate\Http\Response
     */
    public function destroy(IndustrialArticle $industrialArticle)
    {
        // only soft delete
        $RS_Row = IndustrialArticle::findOrFail($industrialArticle->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Industrial Article deleted successfully.');

            return redirect::route('industrial-articles.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete Industrial Article.');

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
            $RS_Save = IndustrialArticle::findOrFail($id);
            $imageName = $RS_Save->image;
        }
        else
        {
            $RS_Save = new IndustrialArticle();
            $imageName = '';
        }

        $title = $request->title;
        $slug = $request->slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->title = $title;
        $RS_Save->slug = $slug;
        $RS_Save->subtitle = $request->subtitle;
        $RS_Save->short_description = $request->short_description;
        $RS_Save->description = $request->description;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;
        $RS_Save->created_at = $request->created_at;

        if( $request->hasFile('image') )
        {
            $image_name = $this->uploadImage($request->file('image'), $slug, $imageName);

            $RS_Save->image = $image_name;
        }

        $result = $RS_Save->save();

        $RS_Save->categories()->sync($request->categories_id);
        $RS_Save->subcategories()->sync($request->subcategories_id);

        return $result;
    }


    /**
     * upload the specified resource image.
     *
     */
    private function uploadImage($image, $slug, $image_name='')
    {
        $destinationPath = public_path('/uploads/');

        if( !empty($image_name) && File::exists($destinationPath.$image_name) )
        {
            File::delete($destinationPath.$image_name);
        }

        $imgName = $slug.'.'.$image->getClientOriginalExtension();
        $image->move($destinationPath, $imgName);

        return $imgName;
    }


    /**
     * get a listing of the category.
     */
    private function categories($parentID=0)
    {
        return IndustrialArticleCategory::where('parent_id', $parentID)->orderby('category_name', 'ASC')->pluck('category_name', 'id');
    }


    /**
     * return slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSlug(Request $request)
    {
        return Str::slug($request->title, '-');
    }
}