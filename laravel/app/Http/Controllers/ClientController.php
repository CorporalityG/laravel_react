<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Requests\ClientValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class ClientController extends Controller
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
            $RS_Results = Client::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('clients.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$RS_Row->id.'" data-url="'.route('clients.destroy', $RS_Row->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('clients.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
        else {
            return view('clients.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('clients.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New Client created successfully.');

            return redirect::route('clients.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create Client.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        $RS_Row = Client::findOrFail($client->id);

        return view('clients.show', compact('RS_Row'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        $RS_Row = Client::findOrFail($client->id);

        return view('clients.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(ClientValidateRequest $request, Client $client)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $client->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Client updated successfully.');

            return redirect::route('clients.show', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update Client.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        $RS_Row = Client::findOrFail($client->id);

        $destinationPath = public_path('/uploads/clients/');

        if( !empty($RS_Row->glance_1_image) && File::exists($destinationPath.$RS_Row->glance_1_image) )
        {
            File::delete($destinationPath.$RS_Row->glance_1_image);
        }

        if( !empty($RS_Row->glance_2_image) && File::exists($destinationPath.$RS_Row->glance_2_image) )
        {
            File::delete($destinationPath.$RS_Row->glance_2_image);
        }

        if( !empty($RS_Row->glance_3_image) && File::exists($destinationPath.$RS_Row->glance_3_image) )
        {
            File::delete($destinationPath.$RS_Row->glance_3_image);
        }

        if( !empty($RS_Row->logo) && File::exists($destinationPath.$RS_Row->logo) )
        {
            File::delete($destinationPath.$RS_Row->logo);
        }

        if( !empty($RS_Row->logo_icon) && File::exists($destinationPath.$RS_Row->logo_icon) )
        {
            File::delete($destinationPath.$RS_Row->logo_icon);
        }

        if( !empty($RS_Row->image) && File::exists($destinationPath.$RS_Row->image) )
        {
            File::delete($destinationPath.$RS_Row->image);
        }

        if( !empty($RS_Row->video_thumnail) && File::exists($destinationPath.$RS_Row->video_thumnail) )
        {
            File::delete($destinationPath.$RS_Row->video_thumnail);
        }

        $RS_Row->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Client deleted successfully.');

            return redirect::route('clients.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete Client.');

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
            $RS_Save = Client::findOrFail($id);
            // $imageName = $RS_Save->image;
        }
        else
        {
            $RS_Save = new Client();
            // $imageName = '';
        }

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->client_name = $request->client_name;
        $RS_Save->slug = $request->slug;
        $RS_Save->title = $request->title;
        $RS_Save->short_description = $request->short_description;
        $RS_Save->glance_1_title = $request->glance_1_title;
        $RS_Save->glance_2_title = $request->glance_2_title;
        $RS_Save->glance_3_title = $request->glance_3_title;
        $RS_Save->description = $request->description;
        $RS_Save->video_url_iframe = $request->video_url_iframe;
        $RS_Save->quote = $request->quote;
        $RS_Save->business_level_title = $request->business_level_title;
        $RS_Save->business_level_description = $request->business_level_description;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;

        if( $request->hasFile('glance_1_image') )
        {
            $image_name = $this->uploadImage($request->file('glance_1_image'), $request->glance_1_title, $RS_Save->glance_1_image);

            $RS_Save->glance_1_image = $image_name;
        }

        if( $request->hasFile('glance_2_image') )
        {
            $image_name = $this->uploadImage($request->file('glance_2_image'), $request->glance_2_title, $RS_Save->glance_2_image);

            $RS_Save->glance_2_image = $image_name;
        }

        if( $request->hasFile('glance_3_image') )
        {
            $image_name = $this->uploadImage($request->file('glance_3_image'), $request->glance_3_title, $RS_Save->glance_3_image);

            $RS_Save->glance_3_image = $image_name;
        }

        if( $request->hasFile('logo') )
        {
            $image_name = $this->uploadImage($request->file('logo'), $request->client_name, $RS_Save->logo);

            $RS_Save->logo = $image_name;
        }

        if( $request->hasFile('logo_icon') )
        {
            $image_name = $this->uploadImage($request->file('logo_icon'), $request->client_name.'_icon', $RS_Save->logo_icon);

            $RS_Save->logo_icon = $image_name;
        }

        if( $request->hasFile('image') )
        {
            $image_name = $this->uploadImage($request->file('image'), $request->client_name.'_banner', $RS_Save->image);

            $RS_Save->image = $image_name;
        }

        if( $request->hasFile('video_thumnail') )
        {
            $image_name = $this->uploadImage($request->file('video_thumnail'), $request->client_name.'_video_thumb', $RS_Save->video_thumnail);

            $RS_Save->video_thumnail = $image_name;
        }

        $RS_Save->save();

        return $RS_Save->id;
    }


    /**
     * upload the specified resource image.
     *
     */
    private function uploadImage($image, $image_prefix, $image_name='')
    {
        $destinationPath = public_path('/uploads/clients/');

        if( !empty($image_name) && File::exists($destinationPath.$image_name) )
        {
            File::delete($destinationPath.$image_name);
        }

        $imgName = Str::slug($image_prefix, '-').'.'.$image->getClientOriginalExtension();
        $image->move($destinationPath, $imgName);

        return $imgName;
    }


    /**
     * return slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSlug(Request $request)
    {
        return Str::slug($request->client_name, '-');
    }
}
