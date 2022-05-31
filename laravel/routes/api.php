<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CsuitController;

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

Route::get('/single-article/{slug}', [ArticleController::class, 'getArticle']);

Route::get('/latest-articles', [ArticleController::class, 'latestArticles']);
Route::get('/latest-articles-2', [ArticleController::class, 'latestArticles2']);
Route::get('/category-articles/{slug?}', [ArticleController::class, 'categoyArticles']);

Route::get('/csuit-subcat-posts', [PostController::class, 'getCSuitSubCatBlog']);
Route::get('/csuit-cat-posts', [PostController::class, 'getCSuitCatBlog']);

Route::get('/csuits/{category_slug?}', [CsuitController::class, 'categoyCSuits']);
Route::get('/csuits-announcement', [CsuitController::class, 'categoyCSuitsAnnouncement']);