<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Client;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = Client::latest()->get();

            return $RS_Results;
        }
    }

    public function getSingle(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Row = array();

            if( !empty($request->slug) )
            {
                $RS_Result = Client::where('slug', $request->slug)->first();

                if( !empty($RS_Result) )
                {
                    $RS_Row = $RS_Result;
                }
            }
        
            return $RS_Row;
        }
    }

    public function getRelatedClients(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = array();

            $RS_Qry = Client::latest();

            if( !empty($request->slug) )
            {
                $RS_Qry->where('slug', '!=', $request->slug);
            }

            $RS_Results = $RS_Qry->take(9)->get();

            return $RS_Results;
        }
    }
}
