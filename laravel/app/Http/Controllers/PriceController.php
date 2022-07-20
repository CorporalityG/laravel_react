<?php

namespace App\Http\Controllers;

use App\Models\Price;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class PriceController extends Controller
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
            $RS_Results = Price::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('full_name', function($RS_Row) {
                    return $RS_Row->first_name.' '.$RS_Row->last_name;
                })
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('prices.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('prices.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger ml-2 delete"><i class="fas fa-trash"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['full_name', 'action'])
                ->make(true);
        }
        else {
            return view('prices.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Price  $price
     * @return \Illuminate\Http\Response
     */
    public function show(Price $price)
    {
        $RS_Row = Price::findOrFail($price->id);

        return view('prices.show', compact('RS_Row'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Price  $price
     * @return \Illuminate\Http\Response
     */
    public function edit(Price $price)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Price  $price
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Price $price)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Price  $price
     * @return \Illuminate\Http\Response
     */
    public function destroy(Price $price)
    {
        $RS_Row = Price::findOrFail($price->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Record deleted successfully.');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete record.');
        endif;

        return redirect::route('prices.index');
    }
}
