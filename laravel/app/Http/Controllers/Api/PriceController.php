<?php

namespace App\Http\Controllers\Api;

use App\Models\Price;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function store(Request $request)
    {
        if( $request->is('api/*') )
        {
            $response = $this->StoreUpdate($request->data);

            return $response;
        }
    }

    /**
     * store and update record
    */
    private function StoreUpdate($request, $id='')
    {
        if( !empty($id) )
        {
            $RS_Save = Price::findOrFail($id);
        }
        else
        {
            $RS_Save = new Price();
        }

        $RS_Save->first_name = $request['first_name'];
        $RS_Save->last_name = $request['last_name'];
        $RS_Save->company_name = $request['company_name'];
        $RS_Save->work_email = $request['work_email'];
        $RS_Save->mobile_number = $request['mobile_number'];
        $RS_Save->service_name = $request['service_name'];
        $RS_Save->project_duration = $request['project_duration'];
        $RS_Save->project_currency = $request['project_currency'];
        $RS_Save->project_price = $request['project_price'];
        $RS_Save->project_grade_type = $request['project_grade_type'];

        $RS_Save->save();

        return $RS_Save->id;
    }
}
