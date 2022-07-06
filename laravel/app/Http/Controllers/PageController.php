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

            $RS_Results = Page::latest();

            if( $request->type=='section' )
            {
                $RS_Results->where('type', 'section');
            }
            else
            {
                $RS_Results->where('type', 'page')->orWhereNull('type');
            }

            $RS_Results->get();

            return Datatables::of($RS_Results)
                ->addColumn('action', function($RS_Row) {
                    $actionBtn = '<center>
                        <a href="'.route('pages.edit', $RS_Row->id).'?type='.$RS_Row->type.'" class="edit btn btn-success btn-sm mr-2" data-id="'.$RS_Row->id.'"><i class="fas fa-edit"></i></a>
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
            $type = $request->type=='section' ? '?type=section' : '';
            $redircetURL = route('pages.edit', $response).$type;

            Session::flash('messageType', 'success');
            Session::flash('message', 'New page created successfully.');

            return redirect($redircetURL);
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
            $type = $request->type=='section' ? '?type=section' : '';
            $redircetURL = route('pages.edit', $response).$type;

            Session::flash('messageType', 'success');
            Session::flash('message', 'Page updated successfully.');

            return redirect($redircetURL);
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
        $RS_Save->type = $request->type;
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
        if( !empty($image) )
        {
            $destinationPath = public_path('/uploads/pages/');

            if( !empty($image_name) && File::exists($destinationPath.$image_name) )
            {
                File::delete($destinationPath.$image_name);
            }

            $imgName = Str::slug($image_prefix, '-').'_'.time().'.'.$image->getClientOriginalExtension();
            $image->move($destinationPath, $imgName);
        }
        else
        {
            $imgName = $image_name;
        }

        return $imgName;
    }

    public function saveMeta(Request $request)
    {
        $data = $request->all();
        // dd($request->counter_3_title);

        $RS_Row = Page::findOrFail($request->page_id);

        $banner_1_image = $this->uploadImage($request->file('banner_1_image'), $request->banner_1_title, $RS_Row->getMeta('banner_1_image'));
        if( !empty($banner_1_image) )
        {
            $data['banner_1_image'] = $banner_1_image;
        }

        $banner_1_bg_image = $this->uploadImage($request->file('banner_1_bg_image'), $request->banner_1_title.'_bg', $RS_Row->getMeta('banner_1_bg_image'));
        if( !empty($banner_1_bg_image) )
        {
            $data['banner_1_bg_image'] = $banner_1_bg_image;
        }

        $banner_1_video_thumbnail = $this->uploadImage($request->file('banner_1_video_thumbnail'), $request->banner_2_title.'_vt', $RS_Row->getMeta('banner_1_video_thumbnail'));
        if( !empty($banner_1_video_thumbnail) )
        {
            $data['banner_1_video_thumbnail'] = $banner_1_video_thumbnail;
        }

        $banner_1_video_url = $this->uploadImage($request->file('banner_1_video_url'), $request->banner_1_title.'_v', $RS_Row->getMeta('banner_1_video_url'));
        if( !empty($banner_1_video_url) )
        {
            $data['banner_1_video_url'] = $banner_1_video_url;
        }

        $banner_2_image = $this->uploadImage($request->file('banner_2_image'), $request->banner_2_title, $RS_Row->getMeta('banner_2_image'));
        if( !empty($banner_2_image) )
        {
            $data['banner_2_image'] = $banner_2_image;
        }

        $banner_2_bg_image = $this->uploadImage($request->file('banner_2_bg_image'), $request->banner_2_title.'_bg', $RS_Row->getMeta('banner_2_bg_image'));
        if( !empty($banner_2_bg_image) )
        {
            $data['banner_2_bg_image'] = $banner_2_bg_image;
        }

        $banner_2_video_thumbnail = $this->uploadImage($request->file('banner_2_video_thumbnail'), $request->banner_2_title.'_vt', $RS_Row->getMeta('banner_2_video_thumbnail'));
        if( !empty($banner_2_video_thumbnail) )
        {
            $data['banner_2_video_thumbnail'] = $banner_2_video_thumbnail;
        }

        $banner_2_video_url = $this->uploadImage($request->file('banner_2_video_url'), $request->banner_2_title.'_v', $RS_Row->getMeta('banner_2_video_url'));
        if( !empty($banner_2_video_url) )
        {
            $data['banner_2_video_url'] = $banner_2_video_url;
        }

        $banner_3_image = $this->uploadImage($request->file('banner_3_image'), $request->banner_3_title, $RS_Row->getMeta('banner_3_image'));
        if( !empty($banner_3_image) )
        {
            $data['banner_3_image'] = $banner_3_image;
        }

        $banner_3_bg_image = $this->uploadImage($request->file('banner_3_bg_image'), $request->banner_3_title.'_bg', $RS_Row->getMeta('banner_3_bg_image'));
        if( !empty($banner_3_bg_image) )
        {
            $data['banner_3_bg_image'] = $banner_3_bg_image;
        }

        $banner_3_video_thumbnail = $this->uploadImage($request->file('banner_3_video_thumbnail'), $request->banner_3_title.'_vt', $RS_Row->getMeta('banner_3_video_thumbnail'));
        if( !empty($banner_3_video_thumbnail) )
        {
            $data['banner_3_video_thumbnail'] = $banner_3_video_thumbnail;
        }

        $banner_3_video_url = $this->uploadImage($request->file('banner_3_video_url'), $request->banner_3_title.'_v', $RS_Row->getMeta('banner_3_video_url'));
        if( !empty($banner_3_video_url) )
        {
            $data['banner_3_video_url'] = $banner_3_video_url;
        }

        $box_1_icon = $this->uploadImage($request->file('box_1_icon'), $request->box_1_title, $RS_Row->getMeta('box_1_icon'));
        if( !empty($box_1_icon) )
        {
            $data['box_1_icon'] = $box_1_icon;
        }

        $box_2_icon = $this->uploadImage($request->file('box_2_icon'), $request->box_2_title, $RS_Row->getMeta('box_2_icon'));
        if( !empty($box_2_icon) )
        {
            $data['box_2_icon'] = $box_2_icon;
        }

        $box_3_icon = $this->uploadImage($request->file('box_3_icon'), $request->box_3_title, $RS_Row->getMeta('box_3_icon'));
        if( !empty($box_3_icon) )
        {
            $data['box_3_icon'] = $box_3_icon;
        }

        $emotional_quest_video_thumbnail = $this->uploadImage($request->file('emotional_quest_video_thumbnail'), $request->emotional_quest_title, $RS_Row->getMeta('emotional_quest_video_thumbnail'));
        if( !empty($emotional_quest_video_thumbnail) )
        {
            $data['emotional_quest_video_thumbnail'] = $emotional_quest_video_thumbnail;
        }

        $emotional_quest_video_url = $this->uploadImage($request->file('emotional_quest_video_url'), $request->emotional_quest_title, $RS_Row->getMeta('emotional_quest_video_url'));
        if( !empty($emotional_quest_video_url) )
        {
            $data['emotional_quest_video_url'] = $emotional_quest_video_url;
        }

        $initiatives_1_image = $this->uploadImage($request->file('initiatives_1_image'), $request->initiatives_1_title, $RS_Row->getMeta('initiatives_1_image'));
        if( !empty($initiatives_1_image) )
        {
            $data['initiatives_1_image'] = $initiatives_1_image;
        }

        $initiatives_2_image = $this->uploadImage($request->file('initiatives_2_image'), $request->initiatives_2_title, $RS_Row->getMeta('initiatives_2_image'));
        if( !empty($initiatives_2_image) )
        {
            $data['initiatives_2_image'] = $initiatives_2_image;
        }

        $initiatives_3_image = $this->uploadImage($request->file('initiatives_3_image'), $request->initiatives_3_title, $RS_Row->getMeta('initiatives_3_image'));
        if( !empty($initiatives_3_image) )
        {
            $data['initiatives_3_image'] = $initiatives_3_image;
        }

        $initiatives_4_image = $this->uploadImage($request->file('initiatives_4_image'), $request->initiatives_4_title, $RS_Row->getMeta('initiatives_4_image'));
        if( !empty($initiatives_4_image) )
        {
            $data['initiatives_4_image'] = $initiatives_4_image;
        }

        $initiatives_5_image = $this->uploadImage($request->file('initiatives_5_image'), $request->initiatives_5_title, $RS_Row->getMeta('initiatives_5_image'));
        if( !empty($initiatives_5_image) )
        {
            $data['initiatives_5_image'] = $initiatives_5_image;
        }

        $banner_image = $this->uploadImage($request->file('banner_image'), $request->banner_title, $RS_Row->getMeta('banner_image'));
        if( !empty($banner_image) )
        {
            $data['banner_image'] = $banner_image;
        }

        $author_image = $this->uploadImage($request->file('author_image'), $request->author_name, $RS_Row->getMeta('author_image'));
        if( !empty($author_image) )
        {
            $data['author_image'] = $author_image;
        }

        $counter_1_icon = $this->uploadImage($request->file('counter_1_icon'), $request->counter_1_number, $RS_Row->getMeta('counter_1_icon'));
        if( !empty($counter_1_icon) )
        {
            $data['counter_1_icon'] = $counter_1_icon;
        }

        $counter_2_icon = $this->uploadImage($request->file('counter_2_icon'), $request->counter_2_number, $RS_Row->getMeta('counter_2_icon'));
        if( !empty($counter_2_icon) )
        {
            $data['counter_2_icon'] = $counter_2_icon;
        }

        $counter_3_icon = $this->uploadImage($request->file('counter_3_icon'), $request->counter_3_number, $RS_Row->getMeta('counter_3_icon'));
        if( !empty($counter_3_icon) )
        {
            $data['counter_3_icon'] = $counter_3_icon;
        }

        $fearless_image = $this->uploadImage($request->file('fearless_image'), $request->fearless_title, $RS_Row->getMeta('fearless_image'));
        if( !empty($fearless_image) )
        {
            $data['fearless_image'] = $fearless_image;
        }

        $fearless_item_1_icon = $this->uploadImage($request->file('fearless_item_1_icon'), $request->fearless_item_1_title, $RS_Row->getMeta('fearless_item_1_icon'));
        if( !empty($fearless_item_1_icon) )
        {
            $data['fearless_item_1_icon'] = $fearless_item_1_icon;
        }

        $fearless_item_2_icon = $this->uploadImage($request->file('fearless_item_2_icon'), $request->fearless_item_2_title, $RS_Row->getMeta('fearless_item_2_icon'));
        if( !empty($fearless_item_2_icon) )
        {
            $data['fearless_item_2_icon'] = $fearless_item_2_icon;
        }

        $fearless_item_3_icon = $this->uploadImage($request->file('fearless_item_3_icon'), $request->fearless_item_3_title, $RS_Row->getMeta('fearless_item_3_icon'));
        if( !empty($fearless_item_3_icon) )
        {
            $data['fearless_item_3_icon'] = $fearless_item_3_icon;
        }

        $world_map_image_1 = $this->uploadImage($request->file('world_map_image_1'), 'wm_1', $RS_Row->getMeta('world_map_image_1'));
        if( !empty($world_map_image_1) )
        {
            $data['world_map_image_1'] = $world_map_image_1;
        }

        $world_map_image_2 = $this->uploadImage($request->file('world_map_image_2'), 'wm_2', $RS_Row->getMeta('world_map_image_2'));
        if( !empty($world_map_image_2) )
        {
            $data['world_map_image_2'] = $world_map_image_2;
        }

        $community_item_1_image = $this->uploadImage($request->file('community_item_1_image'), $request->community_item_1_title, $RS_Row->getMeta('community_item_1_image'));
        if( !empty($community_item_1_image) )
        {
            $data['community_item_1_image'] = $community_item_1_image;
        }

        $community_item_2_image = $this->uploadImage($request->file('community_item_2_image'), $request->community_item_2_title, $RS_Row->getMeta('community_item_2_image'));
        if( !empty($community_item_2_image) )
        {
            $data['community_item_2_image'] = $community_item_2_image;
        }

        $team_member_1_image = $this->uploadImage($request->file('team_member_1_image'), $request->team_member_1_name, $RS_Row->getMeta('team_member_1_image'));
        if( !empty($team_member_1_image) )
        {
            $data['team_member_1_image'] = $team_member_1_image;
        }

        $team_member_2_image = $this->uploadImage($request->file('team_member_2_image'), $request->team_member_2_name, $RS_Row->getMeta('team_member_2_image'));
        if( !empty($team_member_2_image) )
        {
            $data['team_member_2_image'] = $team_member_2_image;
        }

        $join_us_image = $this->uploadImage($request->file('join_us_image'), $request->join_us_title, $RS_Row->getMeta('join_us_image'));
        if( !empty($join_us_image) )
        {
            $data['join_us_image'] = $join_us_image;
        }
        
        $combating_image = $this->uploadImage($request->file('combating_image'), $request->combating_title, $RS_Row->getMeta('combating_image'));
        if( !empty($combating_image) )
        {
            $data['combating_image'] = $combating_image;
        }
        
        $partner_logo_1 = $this->uploadImage($request->file('partner_logo_1'), 'pl_1', $RS_Row->getMeta('partner_logo_1'));
        if( !empty($partner_logo_1) )
        {
            $data['partner_logo_1'] = $partner_logo_1;
        }
        
        $partner_logo_2 = $this->uploadImage($request->file('partner_logo_2'), 'pl_2', $RS_Row->getMeta('partner_logo_2'));
        if( !empty($partner_logo_2) )
        {
            $data['partner_logo_2'] = $partner_logo_2;
        }
        
        $partner_logo_3 = $this->uploadImage($request->file('partner_logo_3'), 'pl_3', $RS_Row->getMeta('partner_logo_3'));
        if( !empty($partner_logo_3) )
        {
            $data['partner_logo_3'] = $partner_logo_3;
        }
        
        $partner_logo_4 = $this->uploadImage($request->file('partner_logo_4'), 'pl_4', $RS_Row->getMeta('partner_logo_4'));
        if( !empty($partner_logo_4) )
        {
            $data['partner_logo_4'] = $partner_logo_4;
        }
        
        $partner_logo_5 = $this->uploadImage($request->file('partner_logo_5'), 'pl_5', $RS_Row->getMeta('partner_logo_5'));
        if( !empty($partner_logo_5) )
        {
            $data['partner_logo_5'] = $partner_logo_5;
        }
        
        $partner_logo_6 = $this->uploadImage($request->file('partner_logo_6'), 'pl_6', $RS_Row->getMeta('partner_logo_6'));
        if( !empty($partner_logo_6) )
        {
            $data['partner_logo_6'] = $partner_logo_6;
        }
        
        $partner_logo_7 = $this->uploadImage($request->file('partner_logo_7'), 'pl_7', $RS_Row->getMeta('partner_logo_7'));
        if( !empty($partner_logo_7) )
        {
            $data['partner_logo_7'] = $partner_logo_7;
        }
        
        $spirit_item_1_image = $this->uploadImage($request->file('spirit_item_1_image'), $request->spirit_item_1_title, $RS_Row->getMeta('spirit_item_1_image'));
        if( !empty($spirit_item_1_image) )
        {
            $data['spirit_item_1_image'] = $spirit_item_1_image;
        }
        
        $spirit_item_2_image = $this->uploadImage($request->file('spirit_item_2_image'), $request->spirit_item_2_title, $RS_Row->getMeta('spirit_item_2_image'));
        if( !empty($spirit_item_2_image) )
        {
            $data['spirit_item_2_image'] = $spirit_item_2_image;
        }
        
        $work_us_image = $this->uploadImage($request->file('work_us_image'), $request->work_us_title, $RS_Row->getMeta('work_us_image'));
        if( !empty($work_us_image) )
        {
            $data['work_us_image'] = $work_us_image;
        }
        
        $our_faith_image = $this->uploadImage($request->file('our_faith_image'), $request->our_faith_title, $RS_Row->getMeta('our_faith_image'));
        if( !empty($our_faith_image) )
        {
            $data['our_faith_image'] = $our_faith_image;
        }
        
        $boundaries_item_1_image = $this->uploadImage($request->file('boundaries_item_1_image'), $request->boundaries_item_1_title, $RS_Row->getMeta('boundaries_item_1_image'));
        if( !empty($boundaries_item_1_image) )
        {
            $data['boundaries_item_1_image'] = $boundaries_item_1_image;
        }
        
        $boundaries_item_2_image = $this->uploadImage($request->file('boundaries_item_2_image'), $request->boundaries_item_2_title, $RS_Row->getMeta('boundaries_item_2_image'));
        if( !empty($boundaries_item_2_image) )
        {
            $data['boundaries_item_2_image'] = $boundaries_item_2_image;
        }
        
        $boundaries_item_3_image = $this->uploadImage($request->file('boundaries_item_3_image'), $request->boundaries_item_3_title, $RS_Row->getMeta('boundaries_item_3_image'));
        if( !empty($boundaries_item_3_image) )
        {
            $data['boundaries_item_3_image'] = $boundaries_item_3_image;
        }
        
        $boundaries_item_4_image = $this->uploadImage($request->file('boundaries_item_4_image'), $request->boundaries_item_4_title, $RS_Row->getMeta('boundaries_item_4_image'));
        if( !empty($boundaries_item_4_image) )
        {
            $data['boundaries_item_4_image'] = $boundaries_item_4_image;
        }
        
        $partnerships_item_1_image = $this->uploadImage($request->file('partnerships_item_1_image'), $request->partnerships_item_1_title, $RS_Row->getMeta('partnerships_item_1_image'));
        if( !empty($partnerships_item_1_image) )
        {
            $data['partnerships_item_1_image'] = $partnerships_item_1_image;
        }
        
        $partnerships_item_2_image = $this->uploadImage($request->file('partnerships_item_2_image'), $request->partnerships_item_2_title, $RS_Row->getMeta('partnerships_item_2_image'));
        if( !empty($partnerships_item_2_image) )
        {
            $data['partnerships_item_2_image'] = $partnerships_item_2_image;
        }
        
        $careers_image = $this->uploadImage($request->file('careers_image'), 'ci', $RS_Row->getMeta('careers_image'));
        if( !empty($careers_image) )
        {
            $data['careers_image'] = $careers_image;
        }
        
        $careers_image_bg = $this->uploadImage($request->file('careers_image_bg'), 'ci_bg', $RS_Row->getMeta('careers_image_bg'));
        if( !empty($careers_image_bg) )
        {
            $data['careers_image_bg'] = $careers_image_bg;
        }
        
        $newsletter_image = $this->uploadImage($request->file('newsletter_image'), 'ni', $RS_Row->getMeta('newsletter_image'));
        if( !empty($newsletter_image) )
        {
            $data['newsletter_image'] = $newsletter_image;
        }
        
        $conversation_image = $this->uploadImage($request->file('conversation_image'), $request->conversation_title, $RS_Row->getMeta('conversation_image'));
        if( !empty($conversation_image) )
        {
            $data['conversation_image'] = $conversation_image;
        }
        
        $partnership_logo_1 = $this->uploadImage($request->file('partnership_logo_1'), 'pl_1', $RS_Row->getMeta('partnership_logo_1'));
        if( !empty($partnership_logo_1) )
        {
            $data['partnership_logo_1'] = $partnership_logo_1;
        }
        
        $partnership_logo_2 = $this->uploadImage($request->file('partnership_logo_2'), 'pl_2', $RS_Row->getMeta('partnership_logo_2'));
        if( !empty($partnership_logo_2) )
        {
            $data['partnership_logo_2'] = $partnership_logo_2;
        }
        
        $partnership_logo_3 = $this->uploadImage($request->file('partnership_logo_3'), 'pl_3', $RS_Row->getMeta('partnership_logo_3'));
        if( !empty($partnership_logo_3) )
        {
            $data['partnership_logo_3'] = $partnership_logo_3;
        }
        
        $partnership_logo_4 = $this->uploadImage($request->file('partnership_logo_4'), 'pl_4', $RS_Row->getMeta('partnership_logo_4'));
        if( !empty($partnership_logo_4) )
        {
            $data['partnership_logo_4'] = $partnership_logo_4;
        }
        
        $sustainability_image = $this->uploadImage($request->file('sustainability_image'), $request->sustainability_title, $RS_Row->getMeta('sustainability_image'));
        if( !empty($sustainability_image) )
        {
            $data['sustainability_image'] = $sustainability_image;
        }
        
        $approach_image = $this->uploadImage($request->file('approach_image'), 'approach', $RS_Row->getMeta('approach_image'));
        if( !empty($approach_image) )
        {
            $data['approach_image'] = $approach_image;
        }
        
        $approach_item_1_icon = $this->uploadImage($request->file('approach_item_1_icon'), $request->approach_item_1_title, $RS_Row->getMeta('approach_item_1_icon'));
        if( !empty($approach_item_1_icon) )
        {
            $data['approach_item_1_icon'] = $approach_item_1_icon;
        }

        $approach_item_2_icon = $this->uploadImage($request->file('approach_item_2_icon'), $request->approach_item_2_title, $RS_Row->getMeta('approach_item_2_icon'));
        if( !empty($approach_item_2_icon) )
        {
            $data['approach_item_2_icon'] = $approach_item_2_icon;
        }

        $approach_item_3_icon = $this->uploadImage($request->file('approach_item_3_icon'), $request->approach_item_3_title, $RS_Row->getMeta('approach_item_3_icon'));
        if( !empty($approach_item_3_icon) )
        {
            $data['approach_item_3_icon'] = $approach_item_3_icon;
        }

        $approach_item_4_icon = $this->uploadImage($request->file('approach_item_4_icon'), $request->approach_item_4_title, $RS_Row->getMeta('approach_item_4_icon'));
        if( !empty($approach_item_4_icon) )
        {
            $data['approach_item_4_icon'] = $approach_item_4_icon;
        }

        $case_studies_image = $this->uploadImage($request->file('case_studies_image'), $request->case_studies_title, $RS_Row->getMeta('case_studies_image'));
        if( !empty($case_studies_image) )
        {
            $data['case_studies_image'] = $case_studies_image;
        }

        $organic_growth_image = $this->uploadImage($request->file('organic_growth_image'), $request->organic_growth_title, $RS_Row->getMeta('organic_growth_image'));
        if( !empty($organic_growth_image) )
        {
            $data['organic_growth_image'] = $organic_growth_image;
        }

        $implementation_image = $this->uploadImage($request->file('implementation_image'), $request->implementation_title, $RS_Row->getMeta('implementation_image'));
        if( !empty($implementation_image) )
        {
            $data['implementation_image'] = $implementation_image;
        }

        $implementation_item_1_icon = $this->uploadImage($request->file('implementation_item_1_icon'), $request->implementation_item_1_title, $RS_Row->getMeta('implementation_item_1_icon'));
        if( !empty($implementation_item_1_icon) )
        {
            $data['implementation_item_1_icon'] = $implementation_item_1_icon;
        }

        $implementation_item_2_icon = $this->uploadImage($request->file('implementation_item_2_icon'), $request->implementation_item_1_title, $RS_Row->getMeta('implementation_item_2_icon'));
        if( !empty($implementation_item_2_icon) )
        {
            $data['implementation_item_2_icon'] = $implementation_item_2_icon;
        }

        $know_item_1_image = $this->uploadImage($request->file('know_item_1_image'), $request->know_item_1_title, $RS_Row->getMeta('know_item_1_image'));
        if( !empty($know_item_1_image) )
        {
            $data['know_item_1_image'] = $know_item_1_image;
        }

        $know_item_2_image = $this->uploadImage($request->file('know_item_2_image'), $request->know_item_2_title, $RS_Row->getMeta('know_item_2_image'));
        if( !empty($know_item_2_image) )
        {
            $data['know_item_2_image'] = $know_item_2_image;
        }

        $innovators_image = $this->uploadImage($request->file('innovators_image'), $request->innovators_title, $RS_Row->getMeta('innovators_image'));
        if( !empty($innovators_image) )
        {
            $data['innovators_image'] = $innovators_image;
        }

        $innovate_educate_image = $this->uploadImage($request->file('innovate_educate_image'), $request->innovate_educate_title, $RS_Row->getMeta('innovate_educate_image'));
        if( !empty($innovate_educate_image) )
        {
            $data['innovate_educate_image'] = $innovate_educate_image;
        }

        $commitment_title_image = $this->uploadImage($request->file('commitment_title_image'), 'ct', $RS_Row->getMeta('commitment_title_image'));
        if( !empty($commitment_title_image) )
        {
            $data['commitment_title_image'] = $commitment_title_image;
        }

        $right_for_you_item_1_icon = $this->uploadImage($request->file('right_for_you_item_1_icon'), $request->right_for_you_item_1_title, $RS_Row->getMeta('right_for_you_item_1_icon'));
        if( !empty($right_for_you_item_1_icon) )
        {
            $data['right_for_you_item_1_icon'] = $right_for_you_item_1_icon;
        }

        $right_for_you_item_2_icon = $this->uploadImage($request->file('right_for_you_item_2_icon'), $request->right_for_you_item_2_title, $RS_Row->getMeta('right_for_you_item_2_icon'));
        if( !empty($right_for_you_item_2_icon) )
        {
            $data['right_for_you_item_2_icon'] = $right_for_you_item_2_icon;
        }

        $right_for_you_item_3_icon = $this->uploadImage($request->file('right_for_you_item_3_icon'), $request->right_for_you_item_3_title, $RS_Row->getMeta('right_for_you_item_3_icon'));
        if( !empty($right_for_you_item_3_icon) )
        {
            $data['right_for_you_item_3_icon'] = $right_for_you_item_3_icon;
        }

        $work_item_1_icon = $this->uploadImage($request->file('work_item_1_icon'), $request->work_item_1_title, $RS_Row->getMeta('work_item_1_icon'));
        if( !empty($work_item_1_icon) )
        {
            $data['work_item_1_icon'] = $work_item_1_icon;
        }

        $work_item_2_icon = $this->uploadImage($request->file('work_item_2_icon'), $request->work_item_2_title, $RS_Row->getMeta('work_item_2_icon'));
        if( !empty($work_item_2_icon) )
        {
            $data['work_item_2_icon'] = $work_item_2_icon;
        }

        $work_item_3_icon = $this->uploadImage($request->file('work_item_3_icon'), $request->work_item_3_title, $RS_Row->getMeta('work_item_3_icon'));
        if( !empty($work_item_3_icon) )
        {
            $data['work_item_3_icon'] = $work_item_3_icon;
        }

        $work_item_4_icon = $this->uploadImage($request->file('work_item_4_icon'), $request->work_item_4_title, $RS_Row->getMeta('work_item_4_icon'));
        if( !empty($work_item_4_icon) )
        {
            $data['work_item_4_icon'] = $work_item_4_icon;
        }

        $work_item_5_icon = $this->uploadImage($request->file('work_item_5_icon'), $request->work_item_5_title, $RS_Row->getMeta('work_item_5_icon'));
        if( !empty($work_item_5_icon) )
        {
            $data['work_item_5_icon'] = $work_item_5_icon;
        }

        $work_item_6_icon = $this->uploadImage($request->file('work_item_6_icon'), $request->work_item_6_title, $RS_Row->getMeta('work_item_6_icon'));
        if( !empty($work_item_6_icon) )
        {
            $data['work_item_6_icon'] = $work_item_6_icon;
        }

        $factor_driving_image = $this->uploadImage($request->file('factor_driving_image'), $request->factor_driving_title, $RS_Row->getMeta('factor_driving_image'));
        if( !empty($factor_driving_image) )
        {
            $data['factor_driving_image'] = $factor_driving_image;
        }

        $key_elements_item_1_icon = $this->uploadImage($request->file('key_elements_item_1_icon'), $request->key_elements_item_1_title, $RS_Row->getMeta('key_elements_item_1_icon'));
        if( !empty($key_elements_item_1_icon) )
        {
            $data['key_elements_item_1_icon'] = $key_elements_item_1_icon;
        }

        $key_elements_item_2_icon = $this->uploadImage($request->file('key_elements_item_2_icon'), $request->key_elements_item_2_title, $RS_Row->getMeta('key_elements_item_2_icon'));
        if( !empty($key_elements_item_2_icon) )
        {
            $data['key_elements_item_2_icon'] = $key_elements_item_2_icon;
        }

        $key_elements_item_3_icon = $this->uploadImage($request->file('key_elements_item_3_icon'), $request->key_elements_item_3_title, $RS_Row->getMeta('key_elements_item_3_icon'));
        if( !empty($key_elements_item_3_icon) )
        {
            $data['key_elements_item_3_icon'] = $key_elements_item_3_icon;
        }

        $key_elements_item_4_icon = $this->uploadImage($request->file('key_elements_item_4_icon'), $request->key_elements_item_4_title, $RS_Row->getMeta('key_elements_item_4_icon'));
        if( !empty($key_elements_item_4_icon) )
        {
            $data['key_elements_item_4_icon'] = $key_elements_item_4_icon;
        }

        $key_elements_item_5_icon = $this->uploadImage($request->file('key_elements_item_5_icon'), $request->key_elements_item_5_title, $RS_Row->getMeta('key_elements_item_5_icon'));
        if( !empty($key_elements_item_5_icon) )
        {
            $data['key_elements_item_5_icon'] = $key_elements_item_5_icon;
        }

        $work_mind_image = $this->uploadImage($request->file('work_mind_image'), $request->work_mind_title, $RS_Row->getMeta('work_mind_image'));
        if( !empty($work_mind_image) )
        {
            $data['work_mind_image'] = $work_mind_image;
        }

        $work_image = $this->uploadImage($request->file('work_image'), $request->work_title, $RS_Row->getMeta('work_image'));
        if( !empty($work_image) )
        {
            $data['work_image'] = $work_image;
        }

        $process_item_1_icon = $this->uploadImage($request->file('process_item_1_icon'), $request->process_item_1_title, $RS_Row->getMeta('process_item_1_icon'));
        if( !empty($process_item_1_icon) )
        {
            $data['process_item_1_icon'] = $process_item_1_icon;
        }

        $process_item_2_icon = $this->uploadImage($request->file('process_item_2_icon'), $request->process_item_2_title, $RS_Row->getMeta('process_item_2_icon'));
        if( !empty($process_item_2_icon) )
        {
            $data['process_item_2_icon'] = $process_item_2_icon;
        }

        $process_item_3_icon = $this->uploadImage($request->file('process_item_3_icon'), $request->process_item_3_title, $RS_Row->getMeta('process_item_3_icon'));
        if( !empty($process_item_3_icon) )
        {
            $data['process_item_3_icon'] = $process_item_3_icon;
        }

        $shifting_image = $this->uploadImage($request->file('shifting_image'), $request->shifting_title, $RS_Row->getMeta('shifting_image'));
        if( !empty($shifting_image) )
        {
            $data['shifting_image'] = $shifting_image;
        }

        $problems_tackle_image = $this->uploadImage($request->file('problems_tackle_image'), $request->problems_tackle_title, $RS_Row->getMeta('problems_tackle_image'));
        if( !empty($problems_tackle_image) )
        {
            $data['problems_tackle_image'] = $problems_tackle_image;
        }

        $marketing_model_image = $this->uploadImage($request->file('marketing_model_image'), 'mm_', $RS_Row->getMeta('marketing_model_image'));
        if( !empty($marketing_model_image) )
        {
            $data['marketing_model_image'] = $marketing_model_image;
        }

        $striker_item_1_image = $this->uploadImage($request->file('striker_item_1_image'), $request->striker_item_1_title, $RS_Row->getMeta('striker_item_1_image'));
        if( !empty($striker_item_1_image) )
        {
            $data['striker_item_1_image'] = $striker_item_1_image;
        }

        $striker_item_2_image = $this->uploadImage($request->file('striker_item_2_image'), $request->striker_item_2_title, $RS_Row->getMeta('striker_item_2_image'));
        if( !empty($striker_item_2_image) )
        {
            $data['striker_item_2_image'] = $striker_item_2_image;
        }

        $striker_item_3_image = $this->uploadImage($request->file('striker_item_3_image'), $request->striker_item_3_title, $RS_Row->getMeta('striker_item_3_image'));
        if( !empty($striker_item_3_image) )
        {
            $data['striker_item_3_image'] = $striker_item_3_image;
        }

        $striker_item_4_image = $this->uploadImage($request->file('striker_item_4_image'), $request->striker_item_4_title, $RS_Row->getMeta('striker_item_4_image'));
        if( !empty($striker_item_4_image) )
        {
            $data['striker_item_4_image'] = $striker_item_4_image;
        }

        $striker_item_5_image = $this->uploadImage($request->file('striker_item_5_image'), $request->striker_item_5_title, $RS_Row->getMeta('striker_item_5_image'));
        if( !empty($striker_item_5_image) )
        {
            $data['striker_item_5_image'] = $striker_item_5_image;
        }

        $striker_item_6_image = $this->uploadImage($request->file('striker_item_6_image'), $request->striker_item_6_title, $RS_Row->getMeta('striker_item_6_image'));
        if( !empty($striker_item_6_image) )
        {
            $data['striker_item_6_image'] = $striker_item_6_image;
        }

        $improved_company_image = $this->uploadImage($request->file('improved_company_image'), 'improved', $RS_Row->getMeta('improved_company_image'));
        if( !empty($improved_company_image) )
        {
            $data['improved_company_image'] = $improved_company_image;
        }

        $customer_loyalty_image = $this->uploadImage($request->file('customer_loyalty_image'), 'customer', $RS_Row->getMeta('customer_loyalty_image'));
        if( !empty($customer_loyalty_image) )
        {
            $data['customer_loyalty_image'] = $customer_loyalty_image;
        }

        $relatable_identity_image = $this->uploadImage($request->file('relatable_identity_image'), 'relatable', $RS_Row->getMeta('relatable_identity_image'));
        if( !empty($relatable_identity_image) )
        {
            $data['relatable_identity_image'] = $relatable_identity_image;
        }

        $omni_effect_image = $this->uploadImage($request->file('omni_effect_image'), 'omni', $RS_Row->getMeta('omni_effect_image'));
        if( !empty($omni_effect_image) )
        {
            $data['omni_effect_image'] = $omni_effect_image;
        }

        $successfull_branding_strategy_image = $this->uploadImage($request->file('successfull_branding_strategy_image'), 'successfull', $RS_Row->getMeta('successfull_branding_strategy_image'));
        if( !empty($successfull_branding_strategy_image) )
        {
            $data['successfull_branding_strategy_image'] = $successfull_branding_strategy_image;
        }

        $framework_methodology_image = $this->uploadImage($request->file('framework_methodology_image'), $request->framework_methodology_title, $RS_Row->getMeta('framework_methodology_image'));
        if( !empty($framework_methodology_image) )
        {
            $data['framework_methodology_image'] = $framework_methodology_image;
        }

        $framework_methodology_item_1_image = $this->uploadImage($request->file('framework_methodology_item_1_image'), $request->framework_methodology_item_1_title, $RS_Row->getMeta('framework_methodology_item_1_image'));
        if( !empty($framework_methodology_item_1_image) )
        {
            $data['framework_methodology_item_1_image'] = $framework_methodology_item_1_image;
        }

        $framework_methodology_item_2_image = $this->uploadImage($request->file('framework_methodology_item_2_image'), $request->framework_methodology_item_2_title, $RS_Row->getMeta('framework_methodology_item_2_image'));
        if( !empty($framework_methodology_item_2_image) )
        {
            $data['framework_methodology_item_2_image'] = $framework_methodology_item_2_image;
        }

        $indomitable_item_1_icon = $this->uploadImage($request->file('indomitable_item_1_icon'), $request->indomitable_item_1_title.'_icon', $RS_Row->getMeta('indomitable_item_1_icon'));
        if( !empty($indomitable_item_1_icon) )
        {
            $data['indomitable_item_1_icon'] = $indomitable_item_1_icon;
        }

        $indomitable_item_1_image = $this->uploadImage($request->file('indomitable_item_1_image'), $request->indomitable_item_1_title, $RS_Row->getMeta('indomitable_item_1_image'));
        if( !empty($indomitable_item_1_image) )
        {
            $data['indomitable_item_1_image'] = $indomitable_item_1_image;
        }

        $indomitable_item_2_icon = $this->uploadImage($request->file('indomitable_item_2_icon'), $request->indomitable_item_2_title.'_icon', $RS_Row->getMeta('indomitable_item_2_icon'));
        if( !empty($indomitable_item_2_icon) )
        {
            $data['indomitable_item_2_icon'] = $indomitable_item_2_icon;
        }

        $indomitable_item_2_image = $this->uploadImage($request->file('indomitable_item_2_image'), $request->indomitable_item_2_title, $RS_Row->getMeta('indomitable_item_2_image'));
        if( !empty($indomitable_item_2_image) )
        {
            $data['indomitable_item_2_image'] = $indomitable_item_2_image;
        }

        $indomitable_item_3_icon = $this->uploadImage($request->file('indomitable_item_3_icon'), $request->indomitable_item_3_title.'_icon', $RS_Row->getMeta('indomitable_item_3_icon'));
        if( !empty($indomitable_item_3_icon) )
        {
            $data['indomitable_item_3_icon'] = $indomitable_item_3_icon;
        }

        $indomitable_item_3_image = $this->uploadImage($request->file('indomitable_item_3_image'), $request->indomitable_item_3_title, $RS_Row->getMeta('indomitable_item_3_image'));
        if( !empty($indomitable_item_3_image) )
        {
            $data['indomitable_item_3_image'] = $indomitable_item_3_image;
        }

        $indomitable_item_4_icon = $this->uploadImage($request->file('indomitable_item_4_icon'), $request->indomitable_item_4_title.'_icon', $RS_Row->getMeta('indomitable_item_4_icon'));
        if( !empty($indomitable_item_4_icon) )
        {
            $data['indomitable_item_4_icon'] = $indomitable_item_4_icon;
        }

        $indomitable_item_4_image = $this->uploadImage($request->file('indomitable_item_4_image'), $request->indomitable_item_4_title, $RS_Row->getMeta('indomitable_item_4_image'));
        if( !empty($indomitable_item_4_image) )
        {
            $data['indomitable_item_4_image'] = $indomitable_item_4_image;
        }

        $indomitable_item_5_icon = $this->uploadImage($request->file('indomitable_item_5_icon'), $request->indomitable_item_5_title.'_icon', $RS_Row->getMeta('indomitable_item_5_icon'));
        if( !empty($indomitable_item_5_icon) )
        {
            $data['indomitable_item_5_icon'] = $indomitable_item_5_icon;
        }

        $indomitable_item_5_image = $this->uploadImage($request->file('indomitable_item_5_image'), $request->indomitable_item_5_title, $RS_Row->getMeta('indomitable_item_5_image'));
        if( !empty($indomitable_item_5_image) )
        {
            $data['indomitable_item_5_image'] = $indomitable_item_5_image;
        }

        $articulating_planning_phase_item_1_image = $this->uploadImage($request->file('articulating_planning_phase_item_1_image'), $request->articulating_planning_phase_item_1_title, $RS_Row->getMeta('articulating_planning_phase_item_1_image'));
        if( !empty($articulating_planning_phase_item_1_image) )
        {
            $data['articulating_planning_phase_item_1_image'] = $articulating_planning_phase_item_1_image;
        }

        $articulating_planning_phase_item_2_image = $this->uploadImage($request->file('articulating_planning_phase_item_2_image'), $request->articulating_planning_phase_item_2_title, $RS_Row->getMeta('articulating_planning_phase_item_2_image'));
        if( !empty($articulating_planning_phase_item_2_image) )
        {
            $data['articulating_planning_phase_item_2_image'] = $articulating_planning_phase_item_2_image;
        }

        $articulating_planning_phase_item_3_image = $this->uploadImage($request->file('articulating_planning_phase_item_3_image'), $request->articulating_planning_phase_item_3_title, $RS_Row->getMeta('articulating_planning_phase_item_3_image'));
        if( !empty($articulating_planning_phase_item_3_image) )
        {
            $data['articulating_planning_phase_item_3_image'] = $articulating_planning_phase_item_3_image;
        }

        $articulating_planning_phase_item_4_image = $this->uploadImage($request->file('articulating_planning_phase_item_4_image'), $request->articulating_planning_phase_item_4_title, $RS_Row->getMeta('articulating_planning_phase_item_4_image'));
        if( !empty($articulating_planning_phase_item_4_image) )
        {
            $data['articulating_planning_phase_item_4_image'] = $articulating_planning_phase_item_4_image;
        }

        $articulating_planning_phase_item_5_image = $this->uploadImage($request->file('articulating_planning_phase_item_5_image'), $request->articulating_planning_phase_item_5_title, $RS_Row->getMeta('articulating_planning_phase_item_5_image'));
        if( !empty($articulating_planning_phase_item_5_image) )
        {
            $data['articulating_planning_phase_item_5_image'] = $articulating_planning_phase_item_5_image;
        }

        $articulating_prep_phase_item_1_image = $this->uploadImage($request->file('articulating_prep_phase_item_1_image'), $request->articulating_prep_phase_item_1_title, $RS_Row->getMeta('articulating_prep_phase_item_1_image'));
        if( !empty($articulating_prep_phase_item_1_image) )
        {
            $data['articulating_prep_phase_item_1_image'] = $articulating_prep_phase_item_1_image;
        }

        $articulating_prep_phase_item_2_image = $this->uploadImage($request->file('articulating_prep_phase_item_2_image'), $request->articulating_prep_phase_item_2_title, $RS_Row->getMeta('articulating_prep_phase_item_2_image'));
        if( !empty($articulating_prep_phase_item_2_image) )
        {
            $data['articulating_prep_phase_item_2_image'] = $articulating_prep_phase_item_2_image;
        }

        $articulating_prep_phase_item_3_image = $this->uploadImage($request->file('articulating_prep_phase_item_3_image'), $request->articulating_prep_phase_item_3_title, $RS_Row->getMeta('articulating_prep_phase_item_3_image'));
        if( !empty($articulating_prep_phase_item_3_image) )
        {
            $data['articulating_prep_phase_item_3_image'] = $articulating_prep_phase_item_3_image;
        }

        $articulating_prep_phase_item_4_image = $this->uploadImage($request->file('articulating_prep_phase_item_4_image'), $request->articulating_prep_phase_item_4_title, $RS_Row->getMeta('articulating_prep_phase_item_4_image'));
        if( !empty($articulating_prep_phase_item_4_image) )
        {
            $data['articulating_prep_phase_item_4_image'] = $articulating_prep_phase_item_4_image;
        }

        $articulating_prep_phase_item_5_image = $this->uploadImage($request->file('articulating_prep_phase_item_5_image'), $request->articulating_prep_phase_item_5_title, $RS_Row->getMeta('articulating_prep_phase_item_5_image'));
        if( !empty($articulating_prep_phase_item_5_image) )
        {
            $data['articulating_prep_phase_item_5_image'] = $articulating_prep_phase_item_5_image;
        }

        $articulating_execution_phase_item_1_image = $this->uploadImage($request->file('articulating_execution_phase_item_1_image'), $request->articulating_execution_phase_item_1_title, $RS_Row->getMeta('articulating_execution_phase_item_1_image'));
        if( !empty($articulating_execution_phase_item_1_image) )
        {
            $data['articulating_execution_phase_item_1_image'] = $articulating_execution_phase_item_1_image;
        }

        $articulating_execution_phase_item_2_image = $this->uploadImage($request->file('articulating_execution_phase_item_2_image'), $request->articulating_execution_phase_item_2_title, $RS_Row->getMeta('articulating_execution_phase_item_2_image'));
        if( !empty($articulating_execution_phase_item_2_image) )
        {
            $data['articulating_execution_phase_item_2_image'] = $articulating_execution_phase_item_2_image;
        }

        $articulating_execution_phase_item_3_image = $this->uploadImage($request->file('articulating_execution_phase_item_3_image'), $request->articulating_execution_phase_item_3_title, $RS_Row->getMeta('articulating_execution_phase_item_3_image'));
        if( !empty($articulating_execution_phase_item_3_image) )
        {
            $data['articulating_execution_phase_item_3_image'] = $articulating_execution_phase_item_3_image;
        }

        $articulating_execution_phase_item_4_image = $this->uploadImage($request->file('articulating_execution_phase_item_4_image'), $request->articulating_execution_phase_item_4_title, $RS_Row->getMeta('articulating_execution_phase_item_4_image'));
        if( !empty($articulating_execution_phase_item_4_image) )
        {
            $data['articulating_execution_phase_item_4_image'] = $articulating_execution_phase_item_4_image;
        }

        $articulating_execution_phase_item_5_image = $this->uploadImage($request->file('articulating_execution_phase_item_5_image'), $request->articulating_execution_phase_item_5_title, $RS_Row->getMeta('articulating_execution_phase_item_5_image'));
        if( !empty($articulating_execution_phase_item_5_image) )
        {
            $data['articulating_execution_phase_item_5_image'] = $articulating_execution_phase_item_5_image;
        }

        $articulating_monitoring_phase_item_1_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_1_image'), $request->articulating_monitoring_phase_item_1_title, $RS_Row->getMeta('articulating_monitoring_phase_item_1_image'));
        if( !empty($articulating_monitoring_phase_item_1_image) )
        {
            $data['articulating_monitoring_phase_item_1_image'] = $articulating_monitoring_phase_item_1_image;
        }

        $articulating_monitoring_phase_item_2_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_2_image'), $request->articulating_monitoring_phase_item_2_title, $RS_Row->getMeta('articulating_monitoring_phase_item_2_image'));
        if( !empty($articulating_monitoring_phase_item_2_image) )
        {
            $data['articulating_monitoring_phase_item_2_image'] = $articulating_monitoring_phase_item_2_image;
        }

        $articulating_monitoring_phase_item_3_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_3_image'), $request->articulating_monitoring_phase_item_3_title, $RS_Row->getMeta('articulating_monitoring_phase_item_3_image'));
        if( !empty($articulating_monitoring_phase_item_3_image) )
        {
            $data['articulating_monitoring_phase_item_3_image'] = $articulating_monitoring_phase_item_3_image;
        }

        $articulating_monitoring_phase_item_4_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_4_image'), $request->articulating_monitoring_phase_item_4_title, $RS_Row->getMeta('articulating_monitoring_phase_item_4_image'));
        if( !empty($articulating_monitoring_phase_item_4_image) )
        {
            $data['articulating_monitoring_phase_item_4_image'] = $articulating_monitoring_phase_item_4_image;
        }

        $articulating_monitoring_phase_item_5_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_5_image'), $request->articulating_monitoring_phase_item_5_title, $RS_Row->getMeta('articulating_monitoring_phase_item_5_image'));
        if( !empty($articulating_monitoring_phase_item_5_image) )
        {
            $data['articulating_monitoring_phase_item_5_image'] = $articulating_monitoring_phase_item_5_image;
        }

        $articulating_monitoring_phase_item_6_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_6_image'), $request->articulating_monitoring_phase_item_6_title, $RS_Row->getMeta('articulating_monitoring_phase_item_6_image'));
        if( !empty($articulating_monitoring_phase_item_6_image) )
        {
            $data['articulating_monitoring_phase_item_6_image'] = $articulating_monitoring_phase_item_6_image;
        }

        $articulating_monitoring_phase_item_7_image = $this->uploadImage($request->file('articulating_monitoring_phase_item_7_image'), $request->articulating_monitoring_phase_item_7_title, $RS_Row->getMeta('articulating_monitoring_phase_item_7_image'));
        if( !empty($articulating_monitoring_phase_item_7_image) )
        {
            $data['articulating_monitoring_phase_item_7_image'] = $articulating_monitoring_phase_item_7_image;
        }

        $marketing_strategy_step_1_image = $this->uploadImage($request->file('marketing_strategy_step_1_image'), $request->marketing_strategy_step_1_title, $RS_Row->getMeta('marketing_strategy_step_1_image'));
        if( !empty($marketing_strategy_step_1_image) )
        {
            $data['marketing_strategy_step_1_image'] = $marketing_strategy_step_1_image;
        }

        $marketing_strategy_step_2_image = $this->uploadImage($request->file('marketing_strategy_step_2_image'), $request->marketing_strategy_step_2_title, $RS_Row->getMeta('marketing_strategy_step_2_image'));
        if( !empty($marketing_strategy_step_2_image) )
        {
            $data['marketing_strategy_step_2_image'] = $marketing_strategy_step_2_image;
        }

        $marketing_strategy_step_3_image = $this->uploadImage($request->file('marketing_strategy_step_3_image'), $request->marketing_strategy_step_3_title, $RS_Row->getMeta('marketing_strategy_step_3_image'));
        if( !empty($marketing_strategy_step_3_image) )
        {
            $data['marketing_strategy_step_3_image'] = $marketing_strategy_step_3_image;
        }

        $marketing_strategy_step_4_image = $this->uploadImage($request->file('marketing_strategy_step_4_image'), $request->marketing_strategy_step_4_title, $RS_Row->getMeta('marketing_strategy_step_4_image'));
        if( !empty($marketing_strategy_step_4_image) )
        {
            $data['marketing_strategy_step_4_image'] = $marketing_strategy_step_4_image;
        }

        $key_objectives_image = $this->uploadImage($request->file('key_objectives_image'), $request->key_objectives_title, $RS_Row->getMeta('key_objectives_image'));
        if( !empty($key_objectives_image) )
        {
            $data['key_objectives_image'] = $key_objectives_image;
        }

        $marketing_goals_item_image = $this->uploadImage($request->file('marketing_goals_item_image'), $request->marketing_goals_item_title, $RS_Row->getMeta('marketing_goals_item_image'));
        if( !empty($marketing_goals_item_image) )
        {
            $data['marketing_goals_item_image'] = $marketing_goals_item_image;
        }

        $what_expect_image = $this->uploadImage($request->file('what_expect_image'), $request->what_expect_title, $RS_Row->getMeta('what_expect_image'));
        if( !empty($what_expect_image) )
        {
            $data['what_expect_image'] = $what_expect_image;
        }

        $what_expect_item_1_image = $this->uploadImage($request->file('what_expect_item_1_image'), $request->what_expect_item_1_title, $RS_Row->getMeta('what_expect_item_1_image'));
        if( !empty($what_expect_item_1_image) )
        {
            $data['what_expect_item_1_image'] = $what_expect_item_1_image;
        }

        $what_expect_item_2_image = $this->uploadImage($request->file('what_expect_item_2_image'), $request->what_expect_item_2_title, $RS_Row->getMeta('what_expect_item_2_image'));
        if( !empty($what_expect_item_2_image) )
        {
            $data['what_expect_item_2_image'] = $what_expect_item_2_image;
        }

        $what_expect_item_3_image = $this->uploadImage($request->file('what_expect_item_3_image'), $request->what_expect_item_3_title, $RS_Row->getMeta('what_expect_item_3_image'));
        if( !empty($what_expect_item_3_image) )
        {
            $data['what_expect_item_3_image'] = $what_expect_item_3_image;
        }

        $what_expect_item_4_image = $this->uploadImage($request->file('what_expect_item_4_image'), $request->what_expect_item_4_title, $RS_Row->getMeta('what_expect_item_4_image'));
        if( !empty($what_expect_item_4_image) )
        {
            $data['what_expect_item_4_image'] = $what_expect_item_4_image;
        }

        $what_expect_item_5_image = $this->uploadImage($request->file('what_expect_item_5_image'), $request->what_expect_item_5_title, $RS_Row->getMeta('what_expect_item_5_image'));
        if( !empty($what_expect_item_5_image) )
        {
            $data['what_expect_item_5_image'] = $what_expect_item_5_image;
        }

        $pitch_image = $this->uploadImage($request->file('pitch_image'), $request->pitch_title, $RS_Row->getMeta('pitch_image'));
        if( !empty($pitch_image) )
        {
            $data['pitch_image'] = $pitch_image;
        }

        $guide_image = $this->uploadImage($request->file('guide_image'), $request->guide_title, $RS_Row->getMeta('guide_image'));
        if( !empty($guide_image) )
        {
            $data['guide_image'] = $guide_image;
        }

        $guide_item_1_image = $this->uploadImage($request->file('guide_item_1_image'), $request->guide_item_1_title, $RS_Row->getMeta('guide_item_1_image'));
        if( !empty($guide_item_1_image) )
        {
            $data['guide_item_1_image'] = $guide_item_1_image;
        }

        $guide_item_2_image = $this->uploadImage($request->file('guide_item_2_image'), $request->guide_item_2_title, $RS_Row->getMeta('guide_item_2_image'));
        if( !empty($guide_item_2_image) )
        {
            $data['guide_item_2_image'] = $guide_item_2_image;
        }

        $guide_item_3_image = $this->uploadImage($request->file('guide_item_3_image'), $request->guide_item_3_title, $RS_Row->getMeta('guide_item_3_image'));
        if( !empty($guide_item_3_image) )
        {
            $data['guide_item_3_image'] = $guide_item_3_image;
        }

        $guide_item_4_image = $this->uploadImage($request->file('guide_item_4_image'), $request->guide_item_4_title, $RS_Row->getMeta('guide_item_4_image'));
        if( !empty($guide_item_4_image) )
        {
            $data['guide_item_4_image'] = $guide_item_4_image;
        }

        $leverage_model_item_1_image = $this->uploadImage($request->file('leverage_model_item_1_image'), $request->leverage_model_item_1_title, $RS_Row->getMeta('leverage_model_item_1_image'));
        if( !empty($leverage_model_item_1_image) )
        {
            $data['leverage_model_item_1_image'] = $leverage_model_item_1_image;
        }

        $leverage_model_item_2_image = $this->uploadImage($request->file('leverage_model_item_2_image'), $request->leverage_model_item_2_title, $RS_Row->getMeta('leverage_model_item_2_image'));
        if( !empty($leverage_model_item_2_image) )
        {
            $data['leverage_model_item_2_image'] = $leverage_model_item_2_image;
        }

        $leverage_model_item_3_image = $this->uploadImage($request->file('leverage_model_item_3_image'), $request->leverage_model_item_3_title, $RS_Row->getMeta('leverage_model_item_3_image'));
        if( !empty($leverage_model_item_3_image) )
        {
            $data['leverage_model_item_3_image'] = $leverage_model_item_3_image;
        }

        $leverage_model_item_4_image = $this->uploadImage($request->file('leverage_model_item_4_image'), $request->leverage_model_item_4_title, $RS_Row->getMeta('leverage_model_item_4_image'));
        if( !empty($leverage_model_item_4_image) )
        {
            $data['leverage_model_item_4_image'] = $leverage_model_item_4_image;
        }

        $lifecycle_image = $this->uploadImage($request->file('lifecycle_image'), $request->lifecycle_title, $RS_Row->getMeta('lifecycle_image'));
        if( !empty($lifecycle_image) )
        {
            $data['lifecycle_image'] = $lifecycle_image;
        }

        $why_hire_item_1_image = $this->uploadImage($request->file('why_hire_item_1_image'), $request->why_hire_item_1_title, $RS_Row->getMeta('why_hire_item_1_image'));
        if( !empty($why_hire_item_1_image) )
        {
            $data['why_hire_item_1_image'] = $why_hire_item_1_image;
        }

        $why_hire_item_2_image = $this->uploadImage($request->file('why_hire_item_2_image'), $request->why_hire_item_2_title, $RS_Row->getMeta('why_hire_item_2_image'));
        if( !empty($why_hire_item_2_image) )
        {
            $data['why_hire_item_2_image'] = $why_hire_item_2_image;
        }

        $why_hire_item_3_image = $this->uploadImage($request->file('why_hire_item_3_image'), $request->why_hire_item_3_title, $RS_Row->getMeta('why_hire_item_3_image'));
        if( !empty($why_hire_item_3_image) )
        {
            $data['why_hire_item_3_image'] = $why_hire_item_3_image;
        }

        $why_hire_item_4_image = $this->uploadImage($request->file('why_hire_item_4_image'), $request->why_hire_item_4_title, $RS_Row->getMeta('why_hire_item_4_image'));
        if( !empty($why_hire_item_4_image) )
        {
            $data['why_hire_item_4_image'] = $why_hire_item_4_image;
        }

        $strategic_issues_image = $this->uploadImage($request->file('strategic_issues_image'), 'ss', $RS_Row->getMeta('strategic_issues_image'));
        if( !empty($strategic_issues_image) )
        {
            $data['strategic_issues_image'] = $strategic_issues_image;
        }

        $methodology_process_audit_item_1_image = $this->uploadImage($request->file('methodology_process_audit_item_1_image'), $request->methodology_process_audit_item_1_title, $RS_Row->getMeta('methodology_process_audit_item_1_image'));
        if( !empty($methodology_process_audit_item_1_image) )
        {
            $data['methodology_process_audit_item_1_image'] = $methodology_process_audit_item_1_image;
        }

        $methodology_process_audit_item_2_image = $this->uploadImage($request->file('methodology_process_audit_item_2_image'), $request->methodology_process_audit_item_2_title, $RS_Row->getMeta('methodology_process_audit_item_2_image'));
        if( !empty($methodology_process_audit_item_2_image) )
        {
            $data['methodology_process_audit_item_2_image'] = $methodology_process_audit_item_2_image;
        }

        $methodology_process_audit_item_3_image = $this->uploadImage($request->file('methodology_process_audit_item_3_image'), $request->methodology_process_audit_item_3_title, $RS_Row->getMeta('methodology_process_audit_item_3_image'));
        if( !empty($methodology_process_audit_item_3_image) )
        {
            $data['methodology_process_audit_item_3_image'] = $methodology_process_audit_item_3_image;
        }

        $methodology_process_audit_item_4_image = $this->uploadImage($request->file('methodology_process_audit_item_4_image'), $request->methodology_process_audit_item_4_title, $RS_Row->getMeta('methodology_process_audit_item_4_image'));
        if( !empty($methodology_process_audit_item_4_image) )
        {
            $data['methodology_process_audit_item_4_image'] = $methodology_process_audit_item_4_image;
        }

        $methodology_process_vision_item_1_image = $this->uploadImage($request->file('methodology_process_vision_item_1_image'), $request->methodology_process_vision_item_1_title, $RS_Row->getMeta('methodology_process_vision_item_1_image'));
        if( !empty($methodology_process_vision_item_1_image) )
        {
            $data['methodology_process_vision_item_1_image'] = $methodology_process_vision_item_1_image;
        }

        $methodology_process_vision_item_2_image = $this->uploadImage($request->file('methodology_process_vision_item_2_image'), $request->methodology_process_vision_item_2_title, $RS_Row->getMeta('methodology_process_vision_item_2_image'));
        if( !empty($methodology_process_vision_item_2_image) )
        {
            $data['methodology_process_vision_item_2_image'] = $methodology_process_vision_item_2_image;
        }

        $methodology_process_vision_item_3_image = $this->uploadImage($request->file('methodology_process_vision_item_3_image'), $request->methodology_process_vision_item_3_title, $RS_Row->getMeta('methodology_process_vision_item_3_image'));
        if( !empty($methodology_process_vision_item_3_image) )
        {
            $data['methodology_process_vision_item_3_image'] = $methodology_process_vision_item_3_image;
        }

        $methodology_process_strategizing_item_1_image = $this->uploadImage($request->file('methodology_process_strategizing_item_1_image'), $request->methodology_process_strategizing_item_1_title, $RS_Row->getMeta('methodology_process_strategizing_item_1_image'));
        if( !empty($methodology_process_strategizing_item_1_image) )
        {
            $data['methodology_process_strategizing_item_1_image'] = $methodology_process_strategizing_item_1_image;
        }

        $methodology_process_strategizing_item_2_image = $this->uploadImage($request->file('methodology_process_strategizing_item_2_image'), $request->methodology_process_strategizing_item_2_title, $RS_Row->getMeta('methodology_process_strategizing_item_2_image'));
        if( !empty($methodology_process_strategizing_item_2_image) )
        {
            $data['methodology_process_strategizing_item_2_image'] = $methodology_process_strategizing_item_2_image;
        }

        $methodology_process_strategizing_item_3_image = $this->uploadImage($request->file('methodology_process_strategizing_item_3_image'), $request->methodology_process_strategizing_item_3_title, $RS_Row->getMeta('methodology_process_strategizing_item_3_image'));
        if( !empty($methodology_process_strategizing_item_3_image) )
        {
            $data['methodology_process_strategizing_item_3_image'] = $methodology_process_strategizing_item_3_image;
        }

        $methodology_process_strategizing_item_4_image = $this->uploadImage($request->file('methodology_process_strategizing_item_4_image'), $request->methodology_process_strategizing_item_4_title, $RS_Row->getMeta('methodology_process_strategizing_item_4_image'));
        if( !empty($methodology_process_strategizing_item_4_image) )
        {
            $data['methodology_process_strategizing_item_4_image'] = $methodology_process_strategizing_item_4_image;
        }

        $methodology_process_task_force_item_1_image = $this->uploadImage($request->file('methodology_process_task_force_item_1_image'), $request->methodology_process_task_force_item_1_title, $RS_Row->getMeta('methodology_process_task_force_item_1_image'));
        if( !empty($methodology_process_task_force_item_1_image) )
        {
            $data['methodology_process_task_force_item_1_image'] = $methodology_process_task_force_item_1_image;
        }

        $methodology_process_task_force_item_2_image = $this->uploadImage($request->file('methodology_process_task_force_item_2_image'), $request->methodology_process_task_force_item_2_title, $RS_Row->getMeta('methodology_process_task_force_item_2_image'));
        if( !empty($methodology_process_task_force_item_2_image) )
        {
            $data['methodology_process_task_force_item_2_image'] = $methodology_process_task_force_item_2_image;
        }

        $methodology_process_task_force_item_3_image = $this->uploadImage($request->file('methodology_process_task_force_item_3_image'), $request->methodology_process_task_force_item_3_title, $RS_Row->getMeta('methodology_process_task_force_item_3_image'));
        if( !empty($methodology_process_task_force_item_3_image) )
        {
            $data['methodology_process_task_force_item_3_image'] = $methodology_process_task_force_item_3_image;
        }

        $methodology_process_task_force_item_4_image = $this->uploadImage($request->file('methodology_process_task_force_item_4_image'), $request->methodology_process_task_force_item_4_title, $RS_Row->getMeta('methodology_process_task_force_item_4_image'));
        if( !empty($methodology_process_task_force_item_4_image) )
        {
            $data['methodology_process_task_force_item_4_image'] = $methodology_process_task_force_item_4_image;
        }

        $methodology_process_asset_building_item_1_image = $this->uploadImage($request->file('methodology_process_asset_building_item_1_image'), $request->methodology_process_asset_building_item_1_title, $RS_Row->getMeta('methodology_process_asset_building_item_1_image'));
        if( !empty($methodology_process_asset_building_item_1_image) )
        {
            $data['methodology_process_asset_building_item_1_image'] = $methodology_process_asset_building_item_1_image;
        }

        $methodology_process_asset_building_item_2_image = $this->uploadImage($request->file('methodology_process_asset_building_item_2_image'), $request->methodology_process_asset_building_item_2_title, $RS_Row->getMeta('methodology_process_asset_building_item_2_image'));
        if( !empty($methodology_process_asset_building_item_2_image) )
        {
            $data['methodology_process_asset_building_item_2_image'] = $methodology_process_asset_building_item_2_image;
        }

        $methodology_process_plan_item_1_image = $this->uploadImage($request->file('methodology_process_plan_item_1_image'), $request->methodology_process_plan_item_1_title, $RS_Row->getMeta('methodology_process_plan_item_1_image'));
        if( !empty($methodology_process_plan_item_1_image) )
        {
            $data['methodology_process_plan_item_1_image'] = $methodology_process_plan_item_1_image;
        }

        $methodology_process_plan_item_2_image = $this->uploadImage($request->file('methodology_process_plan_item_2_image'), $request->methodology_process_plan_item_2_title, $RS_Row->getMeta('methodology_process_plan_item_2_image'));
        if( !empty($methodology_process_plan_item_2_image) )
        {
            $data['methodology_process_plan_item_2_image'] = $methodology_process_plan_item_2_image;
        }

        $what_expect_item_1_image = $this->uploadImage($request->file('what_expect_item_1_image'), $request->what_expect_item_1_title, $RS_Row->getMeta('what_expect_item_1_image'));
        if( !empty($what_expect_item_1_image) )
        {
            $data['what_expect_item_1_image'] = $what_expect_item_1_image;
        }

        $what_expect_item_2_image = $this->uploadImage($request->file('what_expect_item_2_image'), $request->what_expect_item_2_title, $RS_Row->getMeta('what_expect_item_2_image'));
        if( !empty($what_expect_item_2_image) )
        {
            $data['what_expect_item_2_image'] = $what_expect_item_2_image;
        }

        $what_expect_item_3_image = $this->uploadImage($request->file('what_expect_item_3_image'), $request->what_expect_item_3_title, $RS_Row->getMeta('what_expect_item_3_image'));
        if( !empty($what_expect_item_3_image) )
        {
            $data['what_expect_item_3_image'] = $what_expect_item_3_image;
        }

        $what_expect_item_4_image = $this->uploadImage($request->file('what_expect_item_4_image'), $request->what_expect_item_4_title, $RS_Row->getMeta('what_expect_item_4_image'));
        if( !empty($what_expect_item_4_image) )
        {
            $data['what_expect_item_4_image'] = $what_expect_item_4_image;
        }

        $success_strategy_image = $this->uploadImage($request->file('success_strategy_image'), $request->success_strategy_title, $RS_Row->getMeta('success_strategy_image'));
        if( !empty($success_strategy_image) )
        {
            $data['success_strategy_image'] = $success_strategy_image;
        }

        $our_approach_image = $this->uploadImage($request->file('our_approach_image'), $request->our_approach_title, $RS_Row->getMeta('our_approach_image'));
        if( !empty($our_approach_image) )
        {
            $data['our_approach_image'] = $our_approach_image;
        }

        $faq_item_4_box_1_item_image = $this->uploadImage($request->file('faq_item_4_box_1_item_image'), $request->faq_item_4_box_1_title, $RS_Row->getMeta('faq_item_4_box_1_item_image'));
        if( !empty($faq_item_4_box_1_item_image) )
        {
            $data['faq_item_4_box_1_item_image'] = $faq_item_4_box_1_item_image;
        }

        $faq_item_4_box_2_item_image = $this->uploadImage($request->file('faq_item_4_box_2_item_image'), $request->faq_item_4_box_2_title, $RS_Row->getMeta('faq_item_4_box_2_item_image'));
        if( !empty($faq_item_4_box_2_item_image) )
        {
            $data['faq_item_4_box_2_item_image'] = $faq_item_4_box_2_item_image;
        }

        $market_expand_image = $this->uploadImage($request->file('market_expand_image'), $request->market_expand_title, $RS_Row->getMeta('market_expand_image'));
        if( !empty($market_expand_image) )
        {
            $data['market_expand_image'] = $market_expand_image;
        }

        $product_strategy_image = $this->uploadImage($request->file('product_strategy_image'), $request->product_strategy_title, $RS_Row->getMeta('product_strategy_image'));
        if( !empty($product_strategy_image) )
        {
            $data['product_strategy_image'] = $product_strategy_image;
        }

        $you_know_item_1_image = $this->uploadImage($request->file('you_know_item_1_image'), $request->you_know_item_1_title, $RS_Row->getMeta('you_know_item_1_image'));
        if( !empty($you_know_item_1_image) )
        {
            $data['you_know_item_1_image'] = $you_know_item_1_image;
        }

        $you_know_item_2_image = $this->uploadImage($request->file('you_know_item_2_image'), $request->you_know_item_2_title, $RS_Row->getMeta('you_know_item_2_image'));
        if( !empty($you_know_item_2_image) )
        {
            $data['you_know_item_2_image'] = $you_know_item_2_image;
        }

        $client_logo_1_image = $this->uploadImage($request->file('client_logo_1_image'), 'cl_1', $RS_Row->getMeta('client_logo_1_image'));
        if( !empty($client_logo_1_image) )
        {
            $data['client_logo_1_image'] = $client_logo_1_image;
        }

        $client_logo_2_image = $this->uploadImage($request->file('client_logo_2_image'), 'cl_2', $RS_Row->getMeta('client_logo_2_image'));
        if( !empty($client_logo_2_image) )
        {
            $data['client_logo_2_image'] = $client_logo_2_image;
        }

        $client_logo_3_image = $this->uploadImage($request->file('client_logo_3_image'), 'cl_3', $RS_Row->getMeta('client_logo_3_image'));
        if( !empty($client_logo_3_image) )
        {
            $data['client_logo_3_image'] = $client_logo_3_image;
        }

        $client_logo_4_image = $this->uploadImage($request->file('client_logo_4_image'), 'cl_4', $RS_Row->getMeta('client_logo_4_image'));
        if( !empty($client_logo_4_image) )
        {
            $data['client_logo_4_image'] = $client_logo_4_image;
        }

        $client_logo_5_image = $this->uploadImage($request->file('client_logo_5_image'), 'cl_5', $RS_Row->getMeta('client_logo_5_image'));
        if( !empty($client_logo_5_image) )
        {
            $data['client_logo_5_image'] = $client_logo_5_image;
        }

        $client_logo_6_image = $this->uploadImage($request->file('client_logo_6_image'), 'cl_6', $RS_Row->getMeta('client_logo_6_image'));
        if( !empty($client_logo_6_image) )
        {
            $data['client_logo_6_image'] = $client_logo_6_image;
        }

        $client_logo_7_image = $this->uploadImage($request->file('client_logo_7_image'), 'cl_7', $RS_Row->getMeta('client_logo_7_image'));
        if( !empty($client_logo_7_image) )
        {
            $data['client_logo_7_image'] = $client_logo_7_image;
        }

        $client_logo_8_image = $this->uploadImage($request->file('client_logo_8_image'), 'cl_8', $RS_Row->getMeta('client_logo_8_image'));
        if( !empty($client_logo_8_image) )
        {
            $data['client_logo_8_image'] = $client_logo_8_image;
        }

        $client_logo_9_image = $this->uploadImage($request->file('client_logo_9_image'), 'cl_9', $RS_Row->getMeta('client_logo_9_image'));
        if( !empty($client_logo_9_image) )
        {
            $data['client_logo_9_image'] = $client_logo_9_image;
        }

        $client_logo_10_image = $this->uploadImage($request->file('client_logo_10_image'), 'cl_10', $RS_Row->getMeta('client_logo_10_image'));
        if( !empty($client_logo_10_image) )
        {
            $data['client_logo_10_image'] = $client_logo_10_image;
        }

        $define_solve_image = $this->uploadImage($request->file('define_solve_image'), $request->define_solve_title, $RS_Row->getMeta('define_solve_image'));
        if( !empty($define_solve_image) )
        {
            $data['define_solve_image'] = $define_solve_image;
        }

        $connect_convert_image = $this->uploadImage($request->file('connect_convert_image'), $request->connect_convert_title, $RS_Row->getMeta('connect_convert_image'));
        if( !empty($connect_convert_image) )
        {
            $data['connect_convert_image'] = $connect_convert_image;
        }

        $marketing_models_image = $this->uploadImage($request->file('marketing_models_image'), $request->marketing_models_title, $RS_Row->getMeta('marketing_models_image'));
        if( !empty($marketing_models_image) )
        {
            $data['marketing_models_image'] = $marketing_models_image;
        }

        $priya_title_image = $this->uploadImage($request->file('priya_title_image'), 'priya_t', $RS_Row->getMeta('priya_title_image'));
        if( !empty($priya_title_image) )
        {
            $data['priya_title_image'] = $priya_title_image;
        }

        $priya_image = $this->uploadImage($request->file('priya_image'), 'priya', $RS_Row->getMeta('priya_image'));
        if( !empty($priya_image) )
        {
            $data['priya_image'] = $priya_image;
        }

        $privacy_policy_image = $this->uploadImage($request->file('privacy_policy_image'), $request->privacy_policy_title, $RS_Row->getMeta('privacy_policy_image'));
        if( !empty($privacy_policy_image) )
        {
            $data['privacy_policy_image'] = $privacy_policy_image;
        }

        $book_1_image = $this->uploadImage($request->file('book_1_image'), $request->book_1_title, $RS_Row->getMeta('book_1_image'));
        if( !empty($book_1_image) )
        {
            $data['book_1_image'] = $book_1_image;
        }

        $book_2_image = $this->uploadImage($request->file('book_2_image'), $request->book_2_title, $RS_Row->getMeta('book_2_image'));
        if( !empty($book_2_image) )
        {
            $data['book_2_image'] = $book_2_image;
        }

        $book_3_image = $this->uploadImage($request->file('book_3_image'), $request->book_3_title, $RS_Row->getMeta('book_3_image'));
        if( !empty($book_3_image) )
        {
            $data['book_3_image'] = $book_3_image;
        }

        $book_4_image = $this->uploadImage($request->file('book_4_image'), $request->book_4_title, $RS_Row->getMeta('book_4_image'));
        if( !empty($book_4_image) )
        {
            $data['book_4_image'] = $book_4_image;
        }

        $book_5_image = $this->uploadImage($request->file('book_5_image'), $request->book_5_title, $RS_Row->getMeta('book_5_image'));
        if( !empty($book_5_image) )
        {
            $data['book_5_image'] = $book_5_image;
        }

        $service_1_image = $this->uploadImage($request->file('service_1_image'), $request->service_1_title, $RS_Row->getMeta('service_1_image'));
        if( !empty($service_1_image) )
        {
            $data['service_1_image'] = $service_1_image;
        }

        $service_2_image = $this->uploadImage($request->file('service_2_image'), $request->service_2_title, $RS_Row->getMeta('service_2_image'));
        if( !empty($service_2_image) )
        {
            $data['service_2_image'] = $service_2_image;
        }

        $service_3_image = $this->uploadImage($request->file('service_3_image'), $request->service_3_title, $RS_Row->getMeta('service_3_image'));
        if( !empty($service_3_image) )
        {
            $data['service_3_image'] = $service_3_image;
        }

        $service_4_image = $this->uploadImage($request->file('service_4_image'), $request->service_4_title, $RS_Row->getMeta('service_4_image'));
        if( !empty($service_4_image) )
        {
            $data['service_4_image'] = $service_4_image;
        }

        $service_5_image = $this->uploadImage($request->file('service_5_image'), $request->service_5_title, $RS_Row->getMeta('service_5_image'));
        if( !empty($service_5_image) )
        {
            $data['service_5_image'] = $service_5_image;
        }

        $service_6_image = $this->uploadImage($request->file('service_6_image'), $request->service_6_title, $RS_Row->getMeta('service_6_image'));
        if( !empty($service_6_image) )
        {
            $data['service_6_image'] = $service_6_image;
        }

        $service_7_image = $this->uploadImage($request->file('service_7_image'), $request->service_7_title, $RS_Row->getMeta('service_7_image'));
        if( !empty($service_7_image) )
        {
            $data['service_7_image'] = $service_7_image;
        }

        $client_1_image = $this->uploadImage($request->file('client_1_image'), $request->client_1_name, $RS_Row->getMeta('client_1_image'));
        if( !empty($client_1_image) )
        {
            $data['client_1_image'] = $client_1_image;
        }

        $client_1_studies_image = $this->uploadImage($request->file('client_1_studies_image'), $request->client_1_studies_subtitle, $RS_Row->getMeta('client_1_studies_image'));
        if( !empty($client_1_studies_image) )
        {
            $data['client_1_studies_image'] = $client_1_studies_image;
        }

        $client_2_image = $this->uploadImage($request->file('client_2_image'), $request->client_2_name, $RS_Row->getMeta('client_2_image'));
        if( !empty($client_2_image) )
        {
            $data['client_2_image'] = $client_2_image;
        }

        $client_2_studies_image = $this->uploadImage($request->file('client_2_studies_image'), $request->client_2_studies_subtitle, $RS_Row->getMeta('client_2_studies_image'));
        if( !empty($client_2_studies_image) )
        {
            $data['client_2_studies_image'] = $client_2_studies_image;
        }

        $client_3_image = $this->uploadImage($request->file('client_3_image'), $request->client_3_name, $RS_Row->getMeta('client_3_image'));
        if( !empty($client_3_image) )
        {
            $data['client_3_image'] = $client_3_image;
        }

        $client_3_studies_image = $this->uploadImage($request->file('client_3_studies_image'), $request->client_3_studies_subtitle, $RS_Row->getMeta('client_3_studies_image'));
        if( !empty($client_3_studies_image) )
        {
            $data['client_3_studies_image'] = $client_3_studies_image;
        }

        $client_4_image = $this->uploadImage($request->file('client_4_image'), $request->client_4_name, $RS_Row->getMeta('client_4_image'));
        if( !empty($client_4_image) )
        {
            $data['client_4_image'] = $client_4_image;
        }

        $client_4_studies_image = $this->uploadImage($request->file('client_4_studies_image'), $request->client_4_studies_subtitle, $RS_Row->getMeta('client_4_studies_image'));
        if( !empty($client_4_studies_image) )
        {
            $data['client_4_studies_image'] = $client_4_studies_image;
        }

        $insight_1_image = $this->uploadImage($request->file('insight_1_image'), $request->insight_1_title, $RS_Row->getMeta('insight_1_image'));
        if( !empty($insight_1_image) )
        {
            $data['insight_1_image'] = $insight_1_image;
        }

        $insight_2_image = $this->uploadImage($request->file('insight_2_image'), $request->insight_2_title, $RS_Row->getMeta('insight_2_image'));
        if( !empty($insight_2_image) )
        {
            $data['insight_2_image'] = $insight_2_image;
        }

        $insight_3_image = $this->uploadImage($request->file('insight_3_image'), $request->insight_3_title, $RS_Row->getMeta('insight_3_image'));
        if( !empty($insight_3_image) )
        {
            $data['insight_3_image'] = $insight_3_image;
        }

        $insight_4_image = $this->uploadImage($request->file('insight_4_image'), $request->insight_4_title, $RS_Row->getMeta('insight_4_image'));
        if( !empty($insight_4_image) )
        {
            $data['insight_4_image'] = $insight_4_image;
        }

        $insight_5_image = $this->uploadImage($request->file('insight_5_image'), $request->insight_5_title, $RS_Row->getMeta('insight_5_image'));
        if( !empty($insight_5_image) )
        {
            $data['insight_5_image'] = $insight_5_image;
        }

        $involved_partner_image = $this->uploadImage($request->file('involved_partner_image'), $request->involved_partner_title, $RS_Row->getMeta('involved_partner_image'));
        if( !empty($involved_partner_image) )
        {
            $data['involved_partner_image'] = $involved_partner_image;
        }

        $involved_community_image = $this->uploadImage($request->file('involved_community_image'), $request->involved_community_title, $RS_Row->getMeta('involved_community_image'));
        if( !empty($involved_community_image) )
        {
            $data['involved_community_image'] = $involved_community_image;
        }

        $event_image = $this->uploadImage($request->file('event_image'), $request->event_title, $RS_Row->getMeta('event_image'));
        if( !empty($event_image) )
        {
            $data['event_image'] = $event_image;
        }

        $reach_out_image = $this->uploadImage($request->file('reach_out_image'), $request->reach_out_title, $RS_Row->getMeta('reach_out_image'));
        if( !empty($reach_out_image) )
        {
            $data['reach_out_image'] = $reach_out_image;
        }

        $we_organize_image = $this->uploadImage($request->file('we_organize_image'), $request->we_organize_title, $RS_Row->getMeta('we_organize_image'));
        if( !empty($we_organize_image) )
        {
            $data['we_organize_image'] = $we_organize_image;
        }

        $apple_podcasts_image = $this->uploadImage($request->file('apple_podcasts_image'), 'apple_pod', $RS_Row->getMeta('apple_podcasts_image'));
        if( !empty($apple_podcasts_image) )
        {
            $data['apple_podcasts_image'] = $apple_podcasts_image;
        }

        $spotify_image = $this->uploadImage($request->file('spotify_image'), 'spotify', $RS_Row->getMeta('spotify_image'));
        if( !empty($spotify_image) )
        {
            $data['spotify_image'] = $spotify_image;
        }

        $google_podcasts_image = $this->uploadImage($request->file('google_podcasts_image'), 'google_podcasts', $RS_Row->getMeta('google_podcasts_image'));
        if( !empty($google_podcasts_image) )
        {
            $data['google_podcasts_image'] = $google_podcasts_image;
        }

        $youtube_image = $this->uploadImage($request->file('youtube_image'), 'youtube', $RS_Row->getMeta('youtube_image'));
        if( !empty($youtube_image) )
        {
            $data['youtube_image'] = $youtube_image;
        }

        $service_insights_event_image = $this->uploadImage($request->file('service_insights_event_image'), 'si_event', $RS_Row->getMeta('service_insights_event_image'));
        if( !empty($service_insights_event_image) )
        {
            $data['service_insights_event_image'] = $service_insights_event_image;
        }

        $global_conference_image = $this->uploadImage($request->file('global_conference_image'), 'global_conference', $RS_Row->getMeta('global_conference_image'));
        if( !empty($global_conference_image) )
        {
            $data['global_conference_image'] = $global_conference_image;
        }

        $global_conference_bg_image = $this->uploadImage($request->file('global_conference_bg_image'), 'global_conference_bg', $RS_Row->getMeta('global_conference_bg_image'));
        if( !empty($global_conference_bg_image) )
        {
            $data['global_conference_bg_image'] = $global_conference_bg_image;
        }

        $book_calendar_image = $this->uploadImage($request->file('book_calendar_image'), $request->book_calendar_title, $RS_Row->getMeta('book_calendar_image'));
        if( !empty($book_calendar_image) )
        {
            $data['book_calendar_image'] = $book_calendar_image;
        }

        $ebook_image = $this->uploadImage($request->file('ebook_image'), $request->ebook_title, $RS_Row->getMeta('ebook_image'));
        if( !empty($ebook_image) )
        {
            $data['ebook_image'] = $ebook_image;
        }

        $research_paper_image = $this->uploadImage($request->file('research_paper_image'), $request->research_paper_title, $RS_Row->getMeta('research_paper_image'));
        if( !empty($research_paper_image) )
        {
            $data['research_paper_image'] = $research_paper_image;
        }

        $survey_image = $this->uploadImage($request->file('survey_image'), $request->survey_title, $RS_Row->getMeta('survey_image'));
        if( !empty($survey_image) )
        {
            $data['survey_image'] = $survey_image;
        }

        // data save
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
