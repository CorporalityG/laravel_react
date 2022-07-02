<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use App\Http\Requests\TeamMemberValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class TeamMemberController extends Controller
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
            $RS_Results = TeamMember::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('created_at', function($RS_Row) {
                    return $RS_Row->getCreatedAt($RS_Row->created_at);
                })
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('team-members.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('team-members.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('team-members.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['created_at', 'action'])
                ->make(true);
        }
        else {
            return view('team-members.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('team-members.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TeamMemberValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New member created successfully.');

            return redirect::route('team-members.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create member.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TeamMember  $teamMember
     * @return \Illuminate\Http\Response
     */
    public function show(TeamMember $teamMember)
    {
        $RS_Row = TeamMember::findOrFail($teamMember->id);

        return view('team-members.show', compact('RS_Row'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TeamMember  $teamMember
     * @return \Illuminate\Http\Response
     */
    public function edit(TeamMember $teamMember)
    {
        $RS_Row = TeamMember::findOrFail($teamMember->id);

        return view('team-members.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TeamMember  $teamMember
     * @return \Illuminate\Http\Response
     */
    public function update(TeamMemberValidateRequest $request, TeamMember $teamMember)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $teamMember->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Member updated successfully.');

            return redirect::route('team-members.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Member.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TeamMember  $teamMember
     * @return \Illuminate\Http\Response
     */
    public function destroy(TeamMember $teamMember)
    {
        $RS_Row = TeamMember::findOrFail($teamMember->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Member deleted successfully.');

            return redirect::route('team-members.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete Member.');

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
            $RS_Save = TeamMember::findOrFail($id);
            $imageName = $RS_Save->image;
        }
        else
        {
            $RS_Save = new TeamMember();
            $imageName = '';
        }

        $slug = Str::slug($request->full_name, '-');

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->full_name = $request->full_name;
        $RS_Save->designation = $request->designation;

        if( $request->hasFile('image') )
        {
            $image_name = $this->uploadImage($request->file('image'), $slug, $imageName);

            $RS_Save->image = $image_name;
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

        $imgName = $slug.'_'.time().'.'.$image->getClientOriginalExtension();
        $image->move($destinationPath, $imgName);

        return $imgName;
    }
}
