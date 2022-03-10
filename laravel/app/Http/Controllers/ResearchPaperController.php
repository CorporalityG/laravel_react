<?php

namespace App\Http\Controllers;

use App\Models\ResearchPaper;
use Illuminate\Http\Request;
use App\Http\Requests\ResearchPaperValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class ResearchPaperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->ajax() ) {

            $RS_Results = ResearchPaper::latest()->get();

            return Datatables::of($RS_Results)
                // ->addIndexColumn()
                ->addColumn('created_at', function($RS_Row) {
                    return $RS_Row->getCreatedAt($RS_Row->created_at);
                })
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('research-papers.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('research-papers.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('research-papers.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['created_at', 'action'])
                ->make(true);
        }
        else {
            return view('research-papers.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('research-papers.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ResearchPaperValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New research paper created successfully.');

            return redirect::route('research-papers.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create research paper.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ResearchPaper  $researchPaper
     * @return \Illuminate\Http\Response
     */
    public function show(ResearchPaper $researchPaper)
    {
        $RS_Row = ResearchPaper::findOrFail($researchPaper->id);
        
        return view('research-papers.show', compact('RS_Row'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ResearchPaper  $researchPaper
     * @return \Illuminate\Http\Response
     */
    public function edit(ResearchPaper $researchPaper)
    {
        $RS_Row = ResearchPaper::findOrFail($researchPaper->id);
        
        return view('research-papers.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ResearchPaper  $researchPaper
     * @return \Illuminate\Http\Response
     */
    public function update(ResearchPaperValidateRequest $request, ResearchPaper $researchPaper)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $researchPaper->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Research Paper updated successfully.');

            return redirect::route('research-papers.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update research paper.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ResearchPaper  $researchPaper
     * @return \Illuminate\Http\Response
     */
    public function destroy(ResearchPaper $researchPaper)
    {
        // only soft delete
        $RS_Row = ResearchPaper::findOrFail($researchPaper->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Research Paper deleted successfully.');

            return redirect::route('research-papers.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete research paper.');

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
            $RS_Save = ResearchPaper::findOrFail($id);
            $imageName = $RS_Save->image_file;
        }
        else
        {
            $RS_Save = new ResearchPaper();
            $imageName = '';
        }

        $title = $request->title;
        // $slug = Str::slug($title, '-');
        $slug = $request->slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->title = $title;
        $RS_Save->slug = $slug;
        $RS_Save->short_description = $request->short_description;
        $RS_Save->description = $request->description;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;
        $RS_Save->created_at = $request->created_at;

        if( $request->hasFile('image_file') )
        {
            $image_name = $this->uploadImage($request->file('image_file'), $slug, $imageName);

            $RS_Save->image_file = $image_name;
        }

        $result = $RS_Save->save();

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
     * return slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSlug(Request $request)
    {
        return Str::slug($request->title, '-');
    }
}
