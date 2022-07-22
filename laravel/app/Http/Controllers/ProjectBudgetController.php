<?php

namespace App\Http\Controllers;

use App\Models\ProjectBudget;
use Illuminate\Http\Request;
use App\Http\Requests\ProjectBudgetValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class ProjectBudgetController extends Controller
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
            $RS_Results = ProjectBudget::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('project-budget.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('project-budget.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('project-budget.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
        else {
            return view('project-budget.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('project-budget.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectBudgetValidateRequest $request)
    {
        // dd($request->input());
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New Project Budget created successfully.');

            return redirect::route('project-budget.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create Project Budget.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectBudget  $projectBudget
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectBudget $projectBudget)
    {
        $RS_Row = ProjectBudget::findOrFail($projectBudget->id);

        return view('project-budget.show', compact('RS_Row'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectBudget  $projectBudget
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectBudget $projectBudget)
    {
        $RS_Row = ProjectBudget::findOrFail($projectBudget->id);

        return view('project-budget.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectBudget  $projectBudget
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectBudgetValidateRequest $request, ProjectBudget $projectBudget)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $projectBudget->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Project Budget updated successfully.');

            return redirect::route('project-budget.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Project Budget.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectBudget  $projectBudget
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectBudget $projectBudget)
    {
        $RS_Row = ProjectBudget::findOrFail($projectBudget->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Project Budget deleted successfully.');

            return redirect::route('project-budget.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete Project Budget.');

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
            $RS_Save = ProjectBudget::findOrFail($id);
        }
        else
        {
            $RS_Save = new ProjectBudget();
        }

        $RS_Save->service_name = $request->service_name;
        $RS_Save->duration = $request->duration;
        $RS_Save->currency = $request->currency;
        $RS_Save->grade_type_1 = $request->grade_type_1;
        $RS_Save->price_grade_1 = $request->price_grade_1;
        $RS_Save->total_price_grade_1 = $request->total_price_grade_1;
        $RS_Save->grade_type_2 = $request->grade_type_2;
        $RS_Save->price_grade_2 = $request->price_grade_2;
        $RS_Save->total_price_grade_2 = $request->total_price_grade_2;
        $RS_Save->grade_type_3 = $request->grade_type_3;
        $RS_Save->price_grade_3 = $request->price_grade_3;
        $RS_Save->total_price_grade_3 = $request->total_price_grade_3;
        $RS_Save->grade_type_4 = $request->grade_type_4;
        $RS_Save->price_grade_4 = $request->price_grade_4;
        $RS_Save->total_price_grade_4 = $request->total_price_grade_4;

        $RS_Save->save();

        return $RS_Save->id;
    }
}
