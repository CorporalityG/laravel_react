<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Requests\PageValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->ajax() ) {

            $RS_Results = Page::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('pages.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('pages.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('pages.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
        else {
            return view('pages.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PageValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New page created successfully.');

            return redirect::route('pages.edit', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create page.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function edit(Page $page)
    {
        $RS_Row = Page::findOrFail($page->id);

        return view('pages.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(PageValidateRequest $request, Page $page)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $page->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Page updated successfully.');

            return redirect::route('pages.edit', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update page.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        $RS_Row = Page::findOrFail($page->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Page deleted successfully.');

            return redirect::route('pages.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete page.');

            return redirect::back();
        endif;
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

    /**
     * store and update record
    */
    private function StoreUpdate($request, $id='')
    {
        if( !empty($id) )
        {
            $RS_Save = Page::findOrFail($id);
        }
        else
        {
            $RS_Save = new Page();
        }

        $title = $request->title;
        $slug = $request->slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->title = $title;
        $RS_Save->slug = $slug;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;

        $RS_Save->save();

        return $RS_Save->id;
    }
}
