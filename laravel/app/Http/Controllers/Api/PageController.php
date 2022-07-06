<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Page;

class PageController extends Controller
{
    // page detail
    public function getPageDetail(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = array();

            if( !empty($request->slug) )
            {
                $RS_Row = Page::where('slug', $request->slug)->first();

                if( !empty($RS_Row) )
                {
                    $RS_Results = $RS_Row;
                    $RS_Results['detail'] = $RS_Row->getAllMeta();
                    unset($RS_Results['meta']);
                }
            }

            return $RS_Results;
        }
    }

    // page section detail
    public function getPageSectionDetail(Request $request)
    {
        if( $request->is('api/*') )
        {
            $RS_Results = array();

            if( !empty($request->slug) )
            {
                $RS_Row = Page::where('slug', $request->slug)->first();

                if( !empty($RS_Row) )
                {
                    $RS_Results = $RS_Row;
                    $RS_Results['detail'] = $RS_Row->getAllMeta();
                    unset($RS_Results['meta']);
                }
            }

            return $RS_Results;
        }
    }
}
