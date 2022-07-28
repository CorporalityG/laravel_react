<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    public function homeLatestInsights(Request $request)
    {
        if( $request->is('api/*') )
        {
            return Post::latest()
                    ->select(['id', 'post_title', 'post_slug', 'post_short_description', 'post_image', 'created_at'])
                    ->with(['categories'])->take(3)->get();
        }
    }
}
