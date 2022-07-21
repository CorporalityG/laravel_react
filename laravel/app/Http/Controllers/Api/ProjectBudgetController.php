<?php

namespace App\Http\Controllers\Api;

use App\Models\ProjectBudget;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectBudgetController extends Controller
{
    public function index(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = array();

            $qry = ProjectBudget::latest();

            if( !empty($request->service_name) )
            {
                $qry->where('service_name', $request->service_name);
            }

            if( !empty($request->duration) )
            {
                $qry->where('duration', $request->duration);
            }

            $RS_Results = $qry->first();

            return $RS_Results ?? array();
        }
    }
}
