<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\ArticleCategory;

class SearchController extends Controller
{
    public function getSearch(Request $request)
    {
        if( $request->is('api/*') )
        {
            $results = array();

            if( !empty($request->search_slug) )
            {
                $qry = Article::latest();
                $results = $qry->with(['categories'])->paginate(6);
            }

            return $results;
        }
    }


    public function getSearchCategory(Request $request)
    {
        if( $request->is('api/*') )
        {
            $results = array();
            
            if( !empty($request->search_slug) )
            {
                $results = ArticleCategory::withCount(['articles'])->orderby('category_name', 'ASC')->get();
            }

            return $results;
        }
    }
}
