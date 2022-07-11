<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\TeamMember;

class TeamMemberController extends Controller
{
    public function index(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = TeamMember::latest()->get();

            return $RS_Results;
        }
    }
}
