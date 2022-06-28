<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Requests\PageValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->ajax() ) {

            $RS_Results = Page::latest()->get();

            return Datatables::of($RS_Results)
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('pages.edit', $RS_Row->id).'" class="edit btn btn-success btn-sm mr-2" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
                        <a href="'.route('pages.show', $RS_Row->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
        else {
            return view('pages.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.create-edit');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PageValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New page created successfully.');

            return redirect::route('pages.edit', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create page.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        $RS_Row = Page::findOrFail($page->id);
        $RS_Meta = $RS_Row->getAllMeta()->toArray();
        // $RS_Meta = $RS_Row->getMeta('banner_title');

        return view('pages.show', compact('RS_Row', 'RS_Meta'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function edit(Page $page)
    {
        $RS_Row = Page::findOrFail($page->id);

        return view('pages.create-edit', compact('RS_Row'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(PageValidateRequest $request, Page $page)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $page->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Page updated successfully.');

            return redirect::route('pages.edit', $response);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update page.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        $RS_Row = Page::findOrFail($page->id)->delete();

        if( !empty($RS_Row) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Page deleted successfully.');

            return redirect::route('pages.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete page.');

            return redirect::back();
        endif;
    }

    /**
     * return slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSlug(Request $request)
    {
        return Str::slug($request->title, '-');
    }

    /**
     * store and update record
    */
    private function StoreUpdate($request, $id='')
    {
        if( !empty($id) )
        {
            $RS_Save = Page::findOrFail($id);
        }
        else
        {
            $RS_Save = new Page();
        }

        $title = $request->title;
        $slug = $request->slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->title = $title;
        $RS_Save->slug = $slug;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;

        $RS_Save->save();

        return $RS_Save->id;
    }

    /**
     * upload the specified resource image.
     *
     */
    private function uploadImage($image, $image_prefix, $image_name='')
    {
        $destinationPath = public_path('/uploads/pages/');

        if( !empty($image_name) && File::exists($destinationPath.$image_name) )
        {
            File::delete($destinationPath.$image_name);
        }

        $imgName = Str::slug($image_prefix, '-').'_'.time().'.'.$image->getClientOriginalExtension();
        $image->move($destinationPath, $imgName);

        return $imgName;
    }

    public function saveMeta(Request $request)
    {
        $data = $request->all();
        // dd($request->counter_3_title);

        $RS_Row = Page::findOrFail($request->page_id);

        $banner_image = $RS_Row->getMeta('banner_image');
        if( $request->hasFile('banner_image') )
        {
            $image_name = $this->uploadImage($request->file('banner_image'), $request->banner_title, $banner_image);
            $data['banner_image'] = $image_name;
        }
        else
        {
            $data['banner_image'] = $banner_image;
        }

        $author_image = $RS_Row->getMeta('author_image');
        if( $request->hasFile('author_image') )
        {
            $image_name = $this->uploadImage($request->file('author_image'), $request->author_name, $author_image);
            $data['author_image'] = $image_name;
        }
        else
        {
            $data['author_image'] = $author_image;
        }

        $counter_1_icon = $RS_Row->getMeta('counter_1_icon');
        if( $request->hasFile('counter_1_icon') )
        {
            $image_name = $this->uploadImage($request->file('counter_1_icon'), $request->counter_1_number, $counter_1_icon);
            $data['counter_1_icon'] = $image_name;
        }
        else
        {
            $data['counter_1_icon'] = $counter_1_icon;
        }

        $counter_2_icon = $RS_Row->getMeta('counter_2_icon');
        if( $request->hasFile('counter_2_icon') )
        {
            $image_name = $this->uploadImage($request->file('counter_2_icon'), $request->counter_2_number, $counter_2_icon);
            $data['counter_2_icon'] = $image_name;
        }
        else
        {
            $data['counter_2_icon'] = $counter_2_icon;
        }

        $counter_3_icon = $RS_Row->getMeta('counter_3_icon');
        if( $request->hasFile('counter_3_icon') )
        {
            $image_name = $this->uploadImage($request->file('counter_3_icon'), $request->counter_3_number, $counter_3_icon);
            $data['counter_3_icon'] = $image_name;
        }
        else
        {
            $data['counter_3_icon'] = $counter_3_icon;
        }

        $fearless_image = $RS_Row->getMeta('fearless_image');
        if( $request->hasFile('fearless_image') )
        {
            $image_name = $this->uploadImage($request->file('fearless_image'), $request->fearless_title, $fearless_image);
            $data['fearless_image'] = $image_name;
        }
        else
        {
            $data['fearless_image'] = $fearless_image;
        }

        $world_map_image_1 = $RS_Row->getMeta('world_map_image_1');
        if( $request->hasFile('world_map_image_1') )
        {
            $image_name = $this->uploadImage($request->file('world_map_image_1'), 'wm_1', $world_map_image_1);
            $data['world_map_image_1'] = $image_name;
        }
        else
        {
            $data['world_map_image_1'] = $world_map_image_1;
        }

        $world_map_image_2 = $RS_Row->getMeta('world_map_image_2');
        if( $request->hasFile('world_map_image_2') )
        {
            $image_name = $this->uploadImage($request->file('world_map_image_2'), 'wm_2', $world_map_image_2);
            $data['world_map_image_2'] = $image_name;
        }
        else
        {
            $data['world_map_image_2'] = $world_map_image_2;
        }

        $community_item_1_image = $RS_Row->getMeta('community_item_1_image');
        if( $request->hasFile('community_item_1_image') )
        {
            $image_name = $this->uploadImage($request->file('community_item_1_image'), $request->community_item_1_title, $community_item_1_image);
            $data['community_item_1_image'] = $image_name;
        }
        else
        {
            $data['community_item_1_image'] = $community_item_1_image;
        }

        $community_item_2_image = $RS_Row->getMeta('community_item_2_image');
        if( $request->hasFile('community_item_2_image') )
        {
            $image_name = $this->uploadImage($request->file('community_item_2_image'), $request->community_item_2_title, $community_item_2_image);
            $data['community_item_2_image'] = $image_name;
        }
        else
        {
            $data['community_item_2_image'] = $community_item_2_image;
        }

        $team_member_1_image = $RS_Row->getMeta('team_member_1_image');
        if( $request->hasFile('team_member_1_image') )
        {
            $image_name = $this->uploadImage($request->file('team_member_1_image'), $request->team_member_1_name, $team_member_1_image);
            $data['team_member_1_image'] = $image_name;
        }
        else
        {
            $data['team_member_1_image'] = $team_member_1_image;
        }

        $team_member_2_image = $RS_Row->getMeta('team_member_2_image');
        if( $request->hasFile('team_member_2_image') )
        {
            $image_name = $this->uploadImage($request->file('team_member_2_image'), $request->team_member_2_name, $team_member_2_image);
            $data['team_member_2_image'] = $image_name;
        }
        else
        {
            $data['team_member_2_image'] = $team_member_2_image;
        }

        $join_us_image = $RS_Row->getMeta('join_us_image');
        if( $request->hasFile('join_us_image') )
        {
            $image_name = $this->uploadImage($request->file('join_us_image'), $request->join_us_title, $join_us_image);
            $data['join_us_image'] = $image_name;
        }
        else
        {
            $data['join_us_image'] = $join_us_image;
        }
        
        $join_us_image = $RS_Row->getMeta('join_us_image');
        if( $request->hasFile('join_us_image') )
        {
            $image_name = $this->uploadImage($request->file('join_us_image'), $request->join_us_title, $join_us_image);
            $data['join_us_image'] = $image_name;
        }
        else
        {
            $data['join_us_image'] = $join_us_image;
        }
        
        $combating_image = $RS_Row->getMeta('combating_image');
        if( $request->hasFile('combating_image') )
        {
            $image_name = $this->uploadImage($request->file('combating_image'), $request->combating_title, $combating_image);
            $data['combating_image'] = $image_name;
        }
        else
        {
            $data['combating_image'] = $combating_image;
        }
        
        $partner_logo_1 = $RS_Row->getMeta('partner_logo_1');
        if( $request->hasFile('partner_logo_1') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_1'), 'pl_1', $partner_logo_1);
            $data['partner_logo_1'] = $image_name;
        }
        else
        {
            $data['partner_logo_1'] = $partner_logo_1;
        }
        
        $partner_logo_2 = $RS_Row->getMeta('partner_logo_2');
        if( $request->hasFile('partner_logo_2') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_2'), 'pl_2', $partner_logo_2);
            $data['partner_logo_2'] = $image_name;
        }
        else
        {
            $data['partner_logo_2'] = $partner_logo_2;
        }
        
        $partner_logo_3 = $RS_Row->getMeta('partner_logo_3');
        if( $request->hasFile('partner_logo_3') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_3'), 'pl_3', $partner_logo_3);
            $data['partner_logo_3'] = $image_name;
        }
        else
        {
            $data['partner_logo_3'] = $partner_logo_3;
        }
        
        $partner_logo_4 = $RS_Row->getMeta('partner_logo_4');
        if( $request->hasFile('partner_logo_4') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_4'), 'pl_4', $partner_logo_4);
            $data['partner_logo_4'] = $image_name;
        }
        else
        {
            $data['partner_logo_4'] = $partner_logo_4;
        }
        
        $partner_logo_5 = $RS_Row->getMeta('partner_logo_5');
        if( $request->hasFile('partner_logo_5') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_5'), 'pl_5', $partner_logo_5);
            $data['partner_logo_5'] = $image_name;
        }
        else
        {
            $data['partner_logo_5'] = $partner_logo_5;
        }
        
        $partner_logo_6 = $RS_Row->getMeta('partner_logo_6');
        if( $request->hasFile('partner_logo_6') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_6'), 'pl_6', $partner_logo_6);
            $data['partner_logo_6'] = $image_name;
        }
        else
        {
            $data['partner_logo_6'] = $partner_logo_6;
        }
        
        $partner_logo_7 = $RS_Row->getMeta('partner_logo_7');
        if( $request->hasFile('partner_logo_7') )
        {
            $image_name = $this->uploadImage($request->file('partner_logo_7'), 'pl_7', $partner_logo_7);
            $data['partner_logo_7'] = $image_name;
        }
        else
        {
            $data['partner_logo_7'] = $partner_logo_7;
        }
        
        $spirit_item_1_image = $RS_Row->getMeta('spirit_item_1_image');
        if( $request->hasFile('spirit_item_1_image') )
        {
            $image_name = $this->uploadImage($request->file('spirit_item_1_image'), $request->spirit_item_1_title, $spirit_item_1_image);
            $data['spirit_item_1_image'] = $image_name;
        }
        else
        {
            $data['spirit_item_1_image'] = $spirit_item_1_image;
        }
        
        $spirit_item_2_image = $RS_Row->getMeta('spirit_item_2_image');
        if( $request->hasFile('spirit_item_2_image') )
        {
            $image_name = $this->uploadImage($request->file('spirit_item_2_image'), $request->spirit_item_2_title, $spirit_item_2_image);
            $data['spirit_item_2_image'] = $image_name;
        }
        else
        {
            $data['spirit_item_2_image'] = $spirit_item_2_image;
        }
        
        $work_us_image = $RS_Row->getMeta('work_us_image');
        if( $request->hasFile('work_us_image') )
        {
            $image_name = $this->uploadImage($request->file('work_us_image'), $request->work_us_title, $work_us_image);
            $data['work_us_image'] = $image_name;
        }
        else
        {
            $data['work_us_image'] = $work_us_image;
        }
        
        $our_faith_image = $RS_Row->getMeta('our_faith_image');
        if( $request->hasFile('our_faith_image') )
        {
            $image_name = $this->uploadImage($request->file('our_faith_image'), $request->our_faith_title, $our_faith_image);
            $data['our_faith_image'] = $image_name;
        }
        else
        {
            $data['our_faith_image'] = $our_faith_image;
        }
        
        $boundaries_item_1_image = $RS_Row->getMeta('boundaries_item_1_image');
        if( $request->hasFile('boundaries_item_1_image') )
        {
            $image_name = $this->uploadImage($request->file('boundaries_item_1_image'), $request->boundaries_item_1_title, $boundaries_item_1_image);
            $data['boundaries_item_1_image'] = $image_name;
        }
        else
        {
            $data['boundaries_item_1_image'] = $boundaries_item_1_image;
        }
        
        $boundaries_item_2_image = $RS_Row->getMeta('boundaries_item_2_image');
        if( $request->hasFile('boundaries_item_2_image') )
        {
            $image_name = $this->uploadImage($request->file('boundaries_item_2_image'), $request->boundaries_item_2_title, $boundaries_item_2_image);
            $data['boundaries_item_2_image'] = $image_name;
        }
        else
        {
            $data['boundaries_item_2_image'] = $boundaries_item_2_image;
        }
        
        $boundaries_item_3_image = $RS_Row->getMeta('boundaries_item_3_image');
        if( $request->hasFile('boundaries_item_3_image') )
        {
            $image_name = $this->uploadImage($request->file('boundaries_item_3_image'), $request->boundaries_item_3_title, $boundaries_item_3_image);
            $data['boundaries_item_3_image'] = $image_name;
        }
        else
        {
            $data['boundaries_item_3_image'] = $boundaries_item_3_image;
        }
        
        $boundaries_item_4_image = $RS_Row->getMeta('boundaries_item_4_image');
        if( $request->hasFile('boundaries_item_4_image') )
        {
            $image_name = $this->uploadImage($request->file('boundaries_item_4_image'), $request->boundaries_item_4_title, $boundaries_item_4_image);
            $data['boundaries_item_4_image'] = $image_name;
        }
        else
        {
            $data['boundaries_item_4_image'] = $boundaries_item_4_image;
        }
        
        $partnerships_item_1_image = $RS_Row->getMeta('partnerships_item_1_image');
        if( $request->hasFile('partnerships_item_1_image') )
        {
            $image_name = $this->uploadImage($request->file('partnerships_item_1_image'), $request->partnerships_item_1_title, $partnerships_item_1_image);
            $data['partnerships_item_1_image'] = $image_name;
        }
        else
        {
            $data['partnerships_item_1_image'] = $partnerships_item_1_image;
        }
        
        $partnerships_item_2_image = $RS_Row->getMeta('partnerships_item_2_image');
        if( $request->hasFile('partnerships_item_2_image') )
        {
            $image_name = $this->uploadImage($request->file('partnerships_item_2_image'), $request->partnerships_item_2_title, $partnerships_item_2_image);
            $data['partnerships_item_2_image'] = $image_name;
        }
        else
        {
            $data['partnerships_item_2_image'] = $partnerships_item_2_image;
        }
        
        $careers_image = $RS_Row->getMeta('careers_image');
        if( $request->hasFile('careers_image') )
        {
            $image_name = $this->uploadImage($request->file('careers_image'), 'ci', $careers_image);
            $data['careers_image'] = $image_name;
        }
        else
        {
            $data['careers_image'] = $careers_image;
        }
        
        $careers_image_bg = $RS_Row->getMeta('careers_image_bg');
        if( $request->hasFile('careers_image_bg') )
        {
            $image_name = $this->uploadImage($request->file('careers_image_bg'), 'ci_bg', $careers_image_bg);
            $data['careers_image_bg'] = $image_name;
        }
        else
        {
            $data['careers_image_bg'] = $careers_image_bg;
        }
        
        $newsletter_image = $RS_Row->getMeta('newsletter_image');
        if( $request->hasFile('newsletter_image') )
        {
            $image_name = $this->uploadImage($request->file('newsletter_image'), 'ni', $newsletter_image);
            $data['newsletter_image'] = $image_name;
        }
        else
        {
            $data['newsletter_image'] = $newsletter_image;
        }
        
        $conversation_image = $RS_Row->getMeta('conversation_image');
        if( $request->hasFile('conversation_image') )
        {
            $image_name = $this->uploadImage($request->file('conversation_image'), $request->conversation_title, $conversation_image);
            $data['conversation_image'] = $image_name;
        }
        else
        {
            $data['conversation_image'] = $conversation_image;
        }
        
        $partnership_logo_1 = $RS_Row->getMeta('partnership_logo_1');
        if( $request->hasFile('partnership_logo_1') )
        {
            $image_name = $this->uploadImage($request->file('partnership_logo_1'), 'pl_1', $partnership_logo_1);
            $data['partnership_logo_1'] = $image_name;
        }
        else
        {
            $data['partnership_logo_1'] = $partnership_logo_1;
        }
        
        $partnership_logo_2 = $RS_Row->getMeta('partnership_logo_2');
        if( $request->hasFile('partnership_logo_2') )
        {
            $image_name = $this->uploadImage($request->file('partnership_logo_2'), 'pl_2', $partnership_logo_2);
            $data['partnership_logo_2'] = $image_name;
        }
        else
        {
            $data['partnership_logo_2'] = $partnership_logo_2;
        }
        
        $partnership_logo_3 = $RS_Row->getMeta('partnership_logo_3');
        if( $request->hasFile('partnership_logo_3') )
        {
            $image_name = $this->uploadImage($request->file('partnership_logo_3'), 'pl_3', $partnership_logo_3);
            $data['partnership_logo_3'] = $image_name;
        }
        else
        {
            $data['partnership_logo_3'] = $partnership_logo_3;
        }
        
        $partnership_logo_4 = $RS_Row->getMeta('partnership_logo_4');
        if( $request->hasFile('partnership_logo_4') )
        {
            $image_name = $this->uploadImage($request->file('partnership_logo_4'), 'pl_4', $partnership_logo_4);
            $data['partnership_logo_4'] = $image_name;
        }
        else
        {
            $data['partnership_logo_4'] = $partnership_logo_4;
        }


        $RS_Row->syncMeta($data);

        if( !empty($request->page_id) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Page saved successfully.');

            return redirect::route('pages.show', $request->page_id);
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t save page.');

            return redirect::back()->withInput();
        endif;
    }
}
