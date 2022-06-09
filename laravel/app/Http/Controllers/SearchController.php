<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\Post;
use App\Models\Category;
use App\Models\Csuit;
use App\Models\CsuitCategory;
use App\Models\IndustrialArticle;
use App\Models\IndustrialArticleCategory;
use DB;

class SearchController extends Controller
{
    public function getSearch(Request $request)
    {
        if( $request->is('api/*') )
        {
            $results = array();
            
            if( !empty($request->search_keyword) )
            {
                $qry = '';

                $qryPost = Post::select('id', 'post_title as title', 'post_slug AS slug', 'post_image AS image', 'post_short_description AS short_description', 'post_description AS description', 'created_at', 'updated_at', DB::raw('"" as source'));

                $qryArticle = Article::select('id', 'article_title AS title', 'article_slug AS slug', 'article_image AS image', 'article_short_description AS short_description', 'article_description AS description', 'created_at', 'updated_at', DB::raw('"article" as source'));

                $qryCsuit = Csuit::select('id', 'title', 'slug', 'image', 'short_description', 'description', 'created_at', 'updated_at', DB::raw('"csuit" as source'));

                $qryIndustrialArticle = IndustrialArticle::select('id', 'title', 'slug', 'image', 'short_description', 'description', 'created_at', 'updated_at', DB::raw('"industrail-article" as source'));

                if( $request->search_keyword=='articles' || $request->search_keyword=='article' || $request->search_keyword=='service-insights' )
                {
                    $qry = $qryArticle;

                    if( !empty($request->filter_category) )
                    {
                        $category = ArticleCategory::with(['articles:id', 'subcategoriesArticles:id'])->whereIn('category_slug', explode(',', $request->filter_category))->get();

                        if( !empty($category) )
                        {
                            $articleIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'articles'));
                            $articles = array_column($articleIDs, 'id');

                            $subCatArticleIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'subcategories_articles'));
                            $subCatArticles = array_column($subCatArticleIDs, 'id');
                            
                            $allArticles = array_unique(array_merge($articles, $subCatArticles));

                            $qry->whereIn('id', $allArticles);
                        }
                    }
                }
                else if( $request->search_keyword=='blogs' || $request->search_keyword=='blog' )
                {
                    $qry = $qryPost;
                    
                    if( !empty($request->filter_category) )
                    {
                        $category = Category::with(['posts:id', 'subcategoriesPosts:id'])->whereIn('category_slug', explode(',', $request->filter_category))->get();

                        if( !empty($category) )
                        {
                            $postIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'posts'));
                            $posts = array_column($postIDs, 'id');

                            $subCatPostIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'subcategories_posts'));
                            $subCatPosts = array_column($subCatPostIDs, 'id');
                            
                            $allPosts = array_unique(array_merge($posts, $subCatPosts));

                            $qry->whereIn('id', $allPosts);
                        }
                    }
                }
                else if( $request->search_keyword=='csuit' )
                {
                    $qry = $qryCsuit;
                    
                    if( !empty($request->filter_category) )
                    {
                        $category = CsuitCategory::with(['csuits:id', 'subcategoriesCsuits:id'])->whereIn('category_slug', explode(',', $request->filter_category))->get();

                        if( !empty($category) )
                        {
                            $csuitIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'csuits'));
                            $csuits = array_column($csuitIDs, 'id');

                            $subCatCsuitIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'subcategories_csuits'));
                            $subCatCsuits = array_column($subCatCsuitIDs, 'id');
                            
                            $allCsuits = array_unique(array_merge($csuits, $subCatCsuits));

                            $qry->whereIn('id', $allCsuits);
                        }
                    }
                }
                else if( $request->search_keyword=='industrial-article' )
                {
                    $qry = $qryIndustrialArticle;
                    
                    if( !empty($request->filter_category) )
                    {
                        $category = IndustrialArticleCategory::with(['industrialArticles:id', 'subcategoriesIndustrialArticles:id'])->whereIn('category_slug', explode(',', $request->filter_category))->get();

                        if( !empty($category) )
                        {
                            $IndustrialArticleIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'industrial_articles'));
                            $IndustrialArticles = array_column($IndustrialArticleIDs, 'id');

                            $subCatIndustrialArticleIDs = call_user_func_array('array_merge', array_column($category->toArray(), 'subcategories_industrial_articles'));
                            $subCatIndustrialArticles = array_column($subCatIndustrialArticleIDs, 'id');
                            
                            $allIndustrialArticles = array_unique(array_merge($IndustrialArticles, $subCatIndustrialArticles));

                            $qry->whereIn('id', $allIndustrialArticles);
                        }
                    }
                }
                else
                {
                    $search_keyword = str_replace('-', ' ', $request->search_keyword);

                    $articles = $qryArticle
                            ->where('article_title', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('article_short_description', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('article_description', 'LIKE', '%' . $search_keyword . '%');

                    $csuits = $qryCsuit
                            ->where('title', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('short_description', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('description', 'LIKE', '%' . $search_keyword . '%');

                    $industrialArticles = $qryIndustrialArticle
                            ->where('title', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('short_description', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('description', 'LIKE', '%' . $search_keyword . '%');

                    $qry = $qryPost
                            ->where('post_title', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('post_short_description', 'LIKE', '%' . $search_keyword . '%')
                            ->orWhere('post_description', 'LIKE', '%' . $search_keyword . '%')
                            ->union($articles)
                            ->union($csuits)
                            ->union($industrialArticles);
                }

                if( !empty($qry) )
                {
                    if( !empty($request->sort_by) && $request->sort_by=='date')
                    {
                        $qry->orderBy('updated_at', 'DESC');
                    }
                    else
                    {
                        $qry->latest();
                    }

                    $results = $qry->with(['categories'])->paginate(6);
                }
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
                if( $request->search_slug=='articles' || $request->search_slug=='article' || $request->search_slug=='service-insights' )
                {
                    $results = ArticleCategory::withCount([
                                    'articles AS count', 
                                    'subcategoriesArticles AS sub_count'
                                ])
                                ->orderby('category_name', 'ASC')->get();
                }
                else if( $request->search_slug=='blogs' || $request->search_slug=='blog' )
                {
                    $results = Category::withCount([
                                    'posts AS count', 
                                    'subcategoriesPosts AS sub_count'
                                ])
                                ->orderby('category_name', 'ASC')->get();
                }
                else if( $request->search_slug=='csuit' )
                {
                    $results = CsuitCategory::withCount([
                                    'csuits AS count', 
                                    'subcategoriesCsuits AS sub_count'
                                ])
                                ->orderby('category_name', 'ASC')->get();
                }
                else if( $request->search_slug=='industrial-article' )
                {
                    $results = IndustrialArticleCategory::withCount([
                                    'industrialArticles AS count', 
                                    'subcategoriesIndustrialArticles AS sub_count'
                                ])
                                ->orderby('category_name', 'ASC')->get();
                }
            }

            return $results;
        }
    }
}
