<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;

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
