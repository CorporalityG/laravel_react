<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Job;

class JobController extends Controller
{
    public function index(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = Job::latest()->get();

            return $RS_Results;
        }
    }
}
