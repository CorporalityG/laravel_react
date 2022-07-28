<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CsuitController;
use App\Http\Controllers\CsuitCategoryController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\IndustrialArticleController;
use App\Http\Controllers\IndustrialArticleCategoryController;

use App\Http\Controllers\Api\PostController as ApiPostController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\TeamMemberController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\PriceController;
use App\Http\Controllers\Api\ProjectBudgetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/latest-blog', [PostController::class, 'latestBlog']);
Route::get('/latest-blog-2', [PostController::class, 'latestBlog2']);
Route::get('/corporate-strategy-blog', [PostController::class, 'CorporateStrategyBlog']);
Route::get('/digital-media-marketing-blog', [PostController::class, 'DigitalMediaMarketingBlog']);
Route::get('/lead-gen-and-sales-strategy-blog', [PostController::class, 'LeadGenAndSalesStrategyBlog']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/single-blog/{slug}', [PostController::class, 'getBlog']);
Route::get('/related-posts/{slug}/', [PostController::class, 'getRelatedPosts']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/related-posts-2/{slug}/', [PostController::class, 'getRelatedPosts2']);
Route::get('/random-blogs', [PostController::class, 'randomBlogs']);
Route::get('/category-posts/{slug?}', [PostController::class, 'categoyPosts']);
Route::get('/csuit-blogs', [PostController::class, 'getCSuitBlogs']);
Route::get('/home-latest-insights', [ApiPostController::class, 'homeLatestInsights']);

Route::get('/posts', [PostController::class, 'index']);

Route::get('/single-article/{slug}', [ArticleController::class, 'getArticle']);

Route::get('/latest-articles', [ArticleController::class, 'latestArticles']);
Route::get('/latest-articles-2', [ArticleController::class, 'latestArticles2']);
Route::get('/category-articles/{slug?}', [ArticleController::class, 'categoyArticles']);

Route::get('/csuit-subcat-posts', [PostController::class, 'getCSuitSubCatBlog']);
Route::get('/csuit-cat-posts', [PostController::class, 'getCSuitCatBlog']);

Route::get('/csuits/{category_slug?}', [CsuitController::class, 'categoyCSuits']);
Route::get('/csuits-announcement', [CsuitController::class, 'categoyCSuitsAnnouncement']);
Route::get('/single-csuit/{slug}', [CsuitController::class, 'getCSuit']);

Route::get('/latest-csuits', [CsuitController::class, 'latestCsuits']);
Route::get('/csuits-categories', [CsuitCategoryController::class, 'getCsuitsCategories']);
Route::get('/csuits-insights', [CsuitController::class, 'getCsuits']);

Route::get('/search', [SearchController::class, 'getSearch']);
Route::get('/search-category/{search_slug?}', [SearchController::class, 'getSearchCategory']);

Route::get('/latest-industrial-article/{category_slug?}', [IndustrialArticleController::class, 'latestIndustrialArticle']);
Route::get('/realted-industrial-articles/{category_slug?}', [IndustrialArticleController::class, 'relatedIndustrialCategoyArticles']);
Route::get('/single-industry-article/{slug}', [IndustrialArticleController::class, 'getIndustryArticle']);
Route::get('/single-realted-industrial-article/{slug?}', [IndustrialArticleController::class, 'singleRelatedIndustrialArticles']);

Route::get('/latest-in-article', [IndustrialArticleController::class, 'latestInArticle']);
Route::get('/industrial-article-categories', [IndustrialArticleCategoryController::class, 'getIACategories']);
Route::get('/industrial-articles', [IndustrialArticleController::class, 'getIndustrialArticles']);

Route::get('/page-detail/{slug?}', [PageController::class, 'getPageDetail']);
Route::get('/page-section-detail/{slug?}', [PageController::class, 'getPageSectionDetail']);

Route::get('/jobs', [JobController::class, 'index']);

Route::get('/testimonials', [TestimonialController::class, 'index']);

Route::get('/team-members', [TeamMemberController::class, 'index']);

Route::get('/clients', [ClientController::class, 'index']);
Route::get('/single-client/{slug}', [ClientController::class, 'getSingle']);
Route::get('/related-clients/{slug?}', [ClientController::class, 'getRelatedClients']);

Route::post('/pricing-store', [PriceController::class, 'store']);

Route::get('/project-budget', [ProjectBudgetController::class, 'index']);