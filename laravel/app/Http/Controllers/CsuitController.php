<?php

namespace App\Http\Controllers;

use App\Models\Csuit;
use Illuminate\Http\Request;
use App\Models\CsuitCategory;
use App\Http\Requests\CsuitValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class CsuitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->ajax() ) {

            $csuits = Csuit::latest()
                ->with(['categories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->with(['subcategories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->get();

            return Datatables::of($csuits)
                ->addColumn('category', function($csuit) {
                    $categories = array();
                    if( !empty($csuit->categories) ):
                        foreach( $csuit->categories as $category ):
                            array_push($categories, ' '.$category->category_name);
                        endforeach;
                    endif;
                    
                    return $categories;
                })
                ->addColumn('subcategory', function($csuit) {
                    $subcategories = array();
                    if( !empty($csuit->subcategories) ):
                        foreach( $csuit->subcategories as $category ):
                            array_push($subcategories, ' '.$category->category_name);
                        endforeach;
                    endif;
                    
                    return $subcategories;
                })
                ->addColumn('created_at', function($csuit) {
                    return $csuit->getCreatedAt($csuit->created_at);
                })
                ->addColumn('action', function($csuit) {
                    $actionBtn = '<center>
                        <a href="'.route('csuit.edit', $csuit->id).'" class="edit btn btn-success btn-sm" data-id="'.$csuit->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$csuit->id.'" data-url="'.route('csuit.destroy', $csuit->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('csuit.show', $csuit->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['category', 'subcategory', 'created_at', 'action'])
                ->make(true);
        }
        else {
            return view('csuit.index');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = $this->categories();
        $categories_id = array();
        $subcategories_id = '';

        return view('csuit.create-edit', compact('categories', 'categories_id', 'subcategories_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CsuitValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New CSuit created successfully.');

            return redirect::route('csuit.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create CSuit.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Csuit  $csuit
     * @return \Illuminate\Http\Response
     */
    public function show(Csuit $csuit)
    {
        $csuit = Csuit::
                with(['categories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->findOrFail($csuit->id);
        
        $categories = array();
        if( !empty($csuit->categories) ):
            foreach( $csuit->categories as $category ):
                array_push($categories, $category->category_name);
            endforeach;
        endif;
        
        $categories = implode(', ', $categories);

        return view('csuit.show', compact('csuit', 'categories'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Csuit  $csuit
     * @return \Illuminate\Http\Response
     */
    public function edit(Csuit $csuit)
    {
        $csuit = Csuit::with(['categories:id', 'subcategories:id'])->findOrFail($csuit->id);

        $categories_id = array();
        $subcategories_id = array();

        if( !empty($csuit->categories) ):
            foreach( $csuit->categories as $category ):
                array_push($categories_id, $category->id);
            endforeach;
        endif;

        if( !empty($csuit->subcategories) ):
            foreach( $csuit->subcategories as $category ):
                array_push($subcategories_id, $category->id);
            endforeach;

            $subcategories_id = implode(', ', $subcategories_id);
        endif;

        $categories = $this->categories();

        return view('csuit.create-edit', compact('csuit', 'categories_id', 'subcategories_id', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Csuit  $csuit
     * @return \Illuminate\Http\Response
     */
    public function update(CsuitValidateRequest $request, Csuit $csuit)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $csuit->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'CSuit updated successfully.');

            return redirect::route('csuit.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update CSuit.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Csuit  $csuit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Csuit $csuit)
    {
        // only soft delete
        $csuit = Csuit::findOrFail($csuit->id)->delete();

        if( !empty($csuit) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'CSuit deleted successfully.');

            return redirect::route('csuit.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete CSuit.');

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
            $RS_Save = Csuit::findOrFail($id);
            $imageName = $RS_Save->image;
        }
        else
        {
            $RS_Save = new Csuit();
            $imageName = '';
        }

        $title = $request->title;
        $slug = $request->slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->title = $title;
        $RS_Save->slug = $slug;
        $RS_Save->subtitle = $request->subtitle;
        $RS_Save->short_description = $request->short_description;
        $RS_Save->description = $request->description;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;
        $RS_Save->created_at = $request->created_at;

        if( $request->hasFile('image') )
        {
            $image_name = $this->uploadImage($request->file('image'), $slug, $imageName);

            $RS_Save->image = $image_name;
        }

        $result = $RS_Save->save();

        $RS_Save->categories()->sync($request->categories_id);
        $RS_Save->subcategories()->sync($request->subcategories_id);

        return $result;
    }


    /**
     * upload the specified resource image.
     *
     */
    private function uploadImage($image, $slug, $image_name='')
    {
        $destinationPath = public_path('/uploads/');

        if( !empty($image_name) && File::exists($destinationPath.$image_name) )
        {
            File::delete($destinationPath.$image_name);
        }

        $imgName = $slug.'.'.$image->getClientOriginalExtension();
        $image->move($destinationPath, $imgName);

        return $imgName;
    }


    /**
     * get a listing of the category.
     */
    private function categories($parentID=0)
    {
        return CsuitCategory::where('parent_id', $parentID)->orderby('category_name', 'ASC')->pluck('category_name', 'id');
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

    public function categoyCSuits(Request $request)
    {
        if( $request->is('api/*') )
        {
            $results = array();

            $qry = Csuit::latest();

            if( !empty($request->category_slug) )
            {
                $category = CsuitCategory::with('subcategoriesCsuits:id')->where('category_slug', $request->category_slug)->first();

                if( !empty($category) )
                {
                    $csuits = array_column($category->subcategoriesCsuits->toArray(), 'id');
                    $qry->whereIn('id', $csuits);
                }
            }

            $results = $qry->with(['categories', 'subcategories'])->take(11)->get();

            return $results;
        }
    }

    public function categoyCSuitsAnnouncement(Request $request)
    {
        if( $request->is('api/*') )
        {
            $categories = CsuitCategory::where('parent_id', '!=', 0)->get();

            $csuits = array();
            if( !empty($categories) )
            {
                foreach( $categories as $category )
                {
                    if( $category->subcategoriesCsuits()->count() > 0 )
                    {
                        array_push($csuits, $category->subcategoriesCsuits()->with(['subcategories'])->latest()->first());
                    }
                }
            }
            return $csuits;
        }
    }
}
