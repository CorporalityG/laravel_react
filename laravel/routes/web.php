<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;

use App\Http\Controllers\ArticleCategoryController;
use App\Http\Controllers\ArticleController;

use App\Http\Controllers\ResearchPaperController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return redirect('/login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Route::group(['middleware'=>'auth'], function()
{
    Route::resources(['categories' => CategoryController::class]);
    Route::resources(['posts' => PostController::class]);
    Route::get('post-slug', [PostController::class, 'getSlug'])->name('posts.slug');

    Route::resources(['article-categories' => ArticleCategoryController::class]);
    Route::resources(['articles' => ArticleController::class]);
    Route::get('article-slug', [ArticleController::class, 'getSlug'])->name('articles.slug');

    Route::resources(['research-papers' => ResearchPaperController::class]);
    Route::get('research-paper-slug', [ResearchPaperController::class, 'getSlug'])->name('research-papers.slug');
});
