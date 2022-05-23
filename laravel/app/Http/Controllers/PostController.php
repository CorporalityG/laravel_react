<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\CategoryPost;
use Illuminate\Http\Request;
use App\Http\Requests\PostValidateRequest; // use validation
use Illuminate\Support\Str;
use Auth, Session, Redirect, DataTables, File;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if( $request->is('api/*') )
        {
            // return Post::latest()->paginate(6);
            $qry = Post::latest();

            if( !empty($request->search_keyword) )
            {
                $qry->where('post_title', 'LIKE', '%' . $request->search_keyword . '%');
            }

            if( !empty($request->category) )
            {
                $category = Category::with('posts:id')->where('category_slug', $request->category)->first();

                if( !empty($category) )
                {
                    $posts = array_column($category->posts->toArray(), 'id');
                    $qry->whereIn('id', $posts);
                }
            }

            $results = $qry->with(['categories'])->paginate(6);
            return $results;
        }

        if( $request->ajax() ) {

            $posts = Post::latest()->get();

            return Datatables::of($posts)
                // ->addIndexColumn()
                ->addColumn('category', function($post) {
                    $post_categories = array();
                    if( !empty($post->categories) ):
                        foreach( $post->categories as $category ):
                            array_push($post_categories, $category->category_name);
                        endforeach;
                    endif;
                    
                    return $post_categories;
                })
                ->addColumn('subcategory', function($post) {
                    $post_subcategories = array();
                    if( !empty($post->subcategories) ):
                        foreach( $post->subcategories as $category ):
                            array_push($post_subcategories, ' '.$category->category_name);
                        endforeach;
                    endif;
                    
                    return $post_subcategories;
                })
                ->addColumn('created_at', function($post) {
                    return $post->getCreatedAt($post->created_at);
                })
                ->addColumn('action', function($post) {
                    $actionBtn = '<center>
                        <a href="'.route('posts.edit', $post->id).'" class="edit btn btn-success btn-sm" data-id="'.$post->id.'"><i class="fas fa-edit"></i></a>
                        <a href="javascript:;" data-id="'.$post->id.'" data-url="'.route('posts.destroy', $post->id).'" class="btn btn-sm btn-danger mx-2 delete"><i class="fas fa-trash"></i></a>
                        <a href="'.route('posts.show', $post->id).'" class="show btn bg-purple btn-sm"><i class="fas fa-eye"></i></a>
                        </center>';

                    return $actionBtn;
                })
                ->rawColumns(['category', 'subcategory', 'created_at', 'action'])
                ->make(true);
        }
        else {
            return view('posts.index');
        }
    }

    /**
     * Display a latest blog.
     *
     * @return \Illuminate\Http\Response
     */
    public function latestBlog(Request $request)
    {
        if( $request->is('api/*') )
        {
            $post = Post::with(['categories'])->latest()->first();
            $post->timeAgo = $post->created_at->diffForHumans();
            return $post;
        }
    }


    /**
     * return slug.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSlug(Request $request)
    {
        return Str::slug($request->post_title, '-');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = $this->categories();
        $post_categories_id = array();
        $post_subcategories_id = '';

        return view('posts.create-edit', compact('categories', 'post_categories_id', 'post_subcategories_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostValidateRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'New post created successfully.');

            return redirect::route('posts.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t create post.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        // $post = Post::with('categories:category_name')->findOrFail($post->id);
        $post = Post::
                with(['categories' => function ($q) {
                        $q->select('category_name')->orderBy('category_name', 'ASC');
                    }])
                ->findOrFail($post->id);
        
        $post_categories = array();
        if( !empty($post->categories) ):
            foreach( $post->categories as $category ):
                array_push($post_categories, $category->category_name);
            endforeach;
        endif;
        // dd($post->categories);
        $categories = implode(', ', $post_categories);

        return view('posts.show', compact('post', 'categories'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    { 
        $post = Post::with('categories')->findOrFail($post->id);
        
        $post_categories_id = array();
        $post_subcategories_id = array();

        if( !empty($post->categories) ):
            foreach( $post->categories as $category ):
                array_push($post_categories_id, $category->id);
            endforeach;
        endif;

        if( !empty($post->subcategories) ):
            foreach( $post->subcategories as $category ):
                array_push($post_subcategories_id, $category->id);
            endforeach;

            $post_subcategories_id = implode(', ', $post_subcategories_id);
        endif;
        // dd($post_subcategories_id);

        $categories = $this->categories();

        return view('posts.create-edit', compact('post', 'post_categories_id', 'post_subcategories_id', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(PostValidateRequest $request, Post $post)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();

        $response = $this->StoreUpdate($request, $post->id);

        if( !empty($response) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Post updated successfully.');

            return redirect::route('posts.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t update post.');

            return redirect::back()->withInput();
        endif;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        // only soft delete
        $post = Post::findOrFail($post->id)->delete();

        if( !empty($post) ):
            Session::flash('messageType', 'success');
            Session::flash('message', 'Post deleted successfully.');

            return redirect::route('posts.index');
        else:
            Session::flash('messageType', 'error');
            Session::flash('message', 'Can\'t delete post.');

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
            $RS_Save = Post::findOrFail($id);
            $postImage = $RS_Save->post_image;
        }
        else
        {
            $RS_Save = new Post();
            $postImage = '';
        }

        $post_title = $request->post_title;
        // $post_slug = Str::slug($post_title, '-');
        $post_slug = $request->post_slug;

        $RS_Save->user_id = Auth::user()->id;
        $RS_Save->post_title = $post_title;
        $RS_Save->post_slug = $post_slug;
        $RS_Save->post_short_description = $request->post_short_description;
        $RS_Save->post_description = $request->post_description;
        $RS_Save->meta_title = $request->meta_title;
        $RS_Save->meta_keywords = $request->meta_keywords;
        $RS_Save->meta_description = $request->meta_description;
        $RS_Save->created_at = $request->created_at;

        if( $request->hasFile('post_image') )
        {
            $image_name = $this->uploadImage($request->file('post_image'), $post_slug, $postImage);

            $RS_Save->post_image = $image_name;
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
    private function uploadImage($image, $post_slug, $image_name='')
    {
        $destinationPath = public_path('/uploads/');

        if( !empty($image_name) && File::exists($destinationPath.$image_name) )
        {
            File::delete($destinationPath.$image_name);
        }

        $imgName = $post_slug.'.'.$image->getClientOriginalExtension();
        $image->move($destinationPath, $imgName);

        return $imgName;
    }


    /**
     * get a listing of the category.
     */
    private function categories($parentID=0)
    {
        return Category::where('parent_id', $parentID)->orderby('category_name', 'ASC')->pluck('category_name', 'id');
    }


    /**
     * Display a get single blog.
     *
     * @return \Illuminate\Http\Response
     */
    public function getBlog(Request $request)
    {
        if( $request->is('api/*') )
        {
            // return $request->slug;
            return Post::with(['categories'])->where('post_slug', $request->slug)->first();
        }
    }

    /**
     * Display a get related post.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRelatedPosts(Request $request)
    {
        if( $request->is('api/*') )
        {
            // dd($request->categories);
            $qry = Post::latest();

            if( !empty($request->slug) )
            {
                $qry->where('post_slug', '!=', $request->slug);
            }

            $results = $qry->paginate(12);
            
            return $results;
        }
    }


    public function latestBlog2(Request $request)
    {
        if( $request->is('api/*') )
        {
            return Post::with(['categories'])->skip(1)->take(4)->orderBy('created_at', 'DESC')->get();
        }
    }


    public function CorporateStrategyBlog(Request $request)
    {
        if( $request->is('api/*') )
        {
            $qry = Post::latest();

            $category = Category::with('posts:id')->where('category_slug', 'corporate-strategy')->first();

            if( !empty($category) )
            {
                $posts = array_column($category->posts->toArray(), 'id');
                $qry->whereIn('id', $posts);
            }

            $results = $qry->paginate(6);
            return $results;
        }
    }


    public function DigitalMediaMarketingBlog(Request $request)
    {
        if( $request->is('api/*') )
        {
            $qry = Post::latest();

            $category = Category::with('posts:id')->where('category_slug', 'digital-media-marketing')->first();

            if( !empty($category) )
            {
                $posts = array_column($category->posts->toArray(), 'id');
                $qry->whereIn('id', $posts);
            }

            $results = $qry->paginate(4);
            return $results;
        }
    }


    public function LeadGenAndSalesStrategyBlog(Request $request)
    {
        if( $request->is('api/*') )
        {
            $qry = Post::latest();

            $category = Category::with('posts:id')->where('category_slug', 'lead-gen-and-sales-strategy')->first();

            if( !empty($category) )
            {
                $posts = array_column($category->posts->toArray(), 'id');
                $qry->whereIn('id', $posts);
            }

            $results = $qry->paginate(3);
            return $results;
        }
    }

    public function getRelatedPosts2(Request $request)
    {
        if( $request->is('api/*') )
        {
            $post = array();
            if( !empty($request->slug) )
            {
                $post = Post::where('post_slug', '=', $request->slug)->first();
            }
            $relatedPost = Post::whereHas('categories', function ($q) use ($post) {
                return $q->whereIn('category_slug', $post->categories->pluck('category_slug')); 
            })
            ->latest()->take(6)
            ->where('post_slug', '!=', $request->slug) // So you won't fetch same post
            ->get();

            return $relatedPost;
        }
    }


    public function randomBlogs(Request $request)
    {
        if( $request->is('api/*') )
        {
            return Post::inRandomOrder()->limit(3)->get();
        }
    }
}
