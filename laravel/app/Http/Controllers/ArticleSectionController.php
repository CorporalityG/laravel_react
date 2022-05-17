<?php

namespace App\Http\Controllers;

use App\Models\ArticleSection;
use App\Http\Requests\ArticleSectionValidateRequest; // use validation
use Illuminate\Http\Request;
use App\Models\Article;
use Session, Redirect;
use Illuminate\Support\Str;

class ArticleSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if( !empty($request->article_id) )
        {
            $article = Article::
                select(['id', 'article_title'])
                ->find($request->article_id);

            if( !empty($article) )
            {
                return view('articles.sections.create-edit', compact('article'));
            }
            else
            {
                return redirect::route('articles.index');
            }
        }
        else
        {
            return redirect::route('articles.index');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleSectionValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();
        
        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New section created successfully.');

            return redirect::route('articles.show', $request->article_id);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create section.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ArticleSection  $articleSection
     * @return \Illuminate\Http\Response
     */
    public function show(ArticleSection $articleSection)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ArticleSection  $articleSection
     * @return \Illuminate\Http\Response
     */
    public function edit(ArticleSection $articleSection)
    {
        $section = ArticleSection::findOrFail($articleSection->id);
        $article = $articleSection->article;

        return view('articles.sections.create-edit', compact('article', 'section'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ArticleSection  $articleSection
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleSectionValidateRequest $request, ArticleSection $articleSection)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $articleSection->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Article Section updated successfully.');

            return redirect::route('articles.show', $request->article_id);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update article section.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ArticleSection  $articleSection
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArticleSection $articleSection, Request $request)
    {
        // only soft delete
        $article = ArticleSection::findOrFail($articleSection->id)->delete();

        if( !empty($article) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Article section deleted successfully.');

            return redirect::route('articles.show', $request->article_id);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete article section.');

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
            $RS_Save = ArticleSection::findOrFail($id);
        }
        else
        {
            $RS_Save = new ArticleSection();
        }

        $RS_Save->article_id = $request->article_id;
        $RS_Save->section_title = $request->section_title;
        $RS_Save->section_slug = Str::slug($request->section_title, '-');
        $RS_Save->section_description = $request->section_description;

        $result = $RS_Save->save();

        return $result;
    }
}
