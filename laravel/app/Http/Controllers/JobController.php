<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use App\Http\Requests\JobValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class JobController extends Controller
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
            $RS_Results = Job::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('created_at', function($RS_Row) {
                    return $RS_Row->getCreatedAt($RS_Row->created_at);
                })
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('jobs.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('jobs.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('jobs.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['created_at', 'action'])
                ->make(true);
        }
        else {
            return view('jobs.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('jobs.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\JobValidateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New Job created successfully.');

            return redirect::route('jobs.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create Job.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show(Job $job)
    {
        $RS_Row = Job::findOrFail($job->id);

        return view('jobs.show', compact('RS_Row'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        $RS_Row = Job::findOrFail($job->id);

        return view('jobs.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\JobValidateRequest  $request
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(JobValidateRequest $request, Job $job)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $job->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Job updated successfully.');

            return redirect::route('jobs.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Job.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(Job $job)
    {
        $RS_Row = Job::findOrFail($job->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Job deleted successfully.');

            return redirect::route('jobs.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete Job.');

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
            $RS_Save = Job::findOrFail($id);
            $iconName = $RS_Save->icon;
        }
        else
        {
            $RS_Save = new Job();
            $iconName = '';
        }

        $title = $request->title;
        $slug = $request->slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->title = $title;
        $RS_Save->slug = $slug;
        $RS_Save->description = $request->description;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;

        if( $request->hasFile('icon') )
        {
            $icon_name = $this->uploadImage($request->file('icon'), $slug, $iconName);

            $RS_Save->icon = $icon_name;
        }

        $RS_Save->save();

        return $RS_Save->id;
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
}
