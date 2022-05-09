<?php

namespace App\Http\Controllers;

use App\Models\ArticleTag;
use Illuminate\Http\Request;
use App\Http\Requests\ArticleTagValidateRequest; // use validation
use Illuminate\Support\Str;
use Session, Redirect, DataTables;

class ArticleTagController extends Controller
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
            $tags = ArticleTag::latest()->get();

            return Datatables::of($tags)
                // ->addIndexColumn()
                ->addColumn('count', function($tag) {
                    return '<center>'.$tag->articles->count().'</center>';
                })
                ->addColumn('action', function($tag) {
                    $actionBtn = '<center>
                            <a href="'.route('article-tags.edit', $tag->id).'" class="edit btn btn-success btn-sm" data-id="'.$tag->id.'"><i class="fas fa-edit"></i></a>
                            <a href="javascript:;" data-id="'.$tag->id.'" data-url="'.route('article-tags.destroy', $tag->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                            <a href="'.route('article-tags.show', $tag->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';
                        
                    return $actionBtn;
                })
                ->rawColumns(['count', 'action'])
                ->make(true);
        }
        else
        {
            return view('articles.tags.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('articles.tags.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleTagValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Tag created successfully.');

            return redirect::route('article-tags.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create Tag.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function show(ArticleTag $articleTag)
    {
        $tag = ArticleTag::findOrFail($articleTag->id);

        return view('articles.tags.show', compact('tag'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function edit(ArticleTag $articleTag)
    {
        $tag = ArticleTag::findOrFail($articleTag->id);

        return view('articles.tags.create-edit', compact('tag'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleTagValidateRequest $request, ArticleTag $articleTag)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $articleTag->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Tag updated successfully.');

            return redirect::route('article-tags.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Tag.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArticleTag $articleTag)
    {
        $tag = ArticleTag::findOrFail($articleTag->id);
        // dd($Tag->articles->count());

        if( empty($tag->articles->count()) ):
            $tag->delete();

            Session::flash('messageType', 'success');
            Session::flash('message', 'Tag deleted successfully.');

            return redirect::route('article-tags.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'You Can\'t delete tag.');

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
            $RS_Save = ArticleTag::findOrFail($id);
        }
        else
        {
            $RS_Save = new ArticleTag();
        }

        $tagName = $request->tag_name;

        $RS_Save->tag_name = $tagName;
        $RS_Save->tag_slug = Str::slug($tagName, '-');
        $RS_Save->description = $request->description;

        $result = $RS_Save->save();

        return $result;
    }
}
