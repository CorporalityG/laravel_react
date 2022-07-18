<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;

use App\Http\Controllers\ArticleCategoryController;
use App\Http\Controllers\ArticleTagController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ArticleSectionController;

use App\Http\Controllers\ResearchPaperController;

use App\Http\Controllers\CsuitCategoryController;
use App\Http\Controllers\CsuitController;

use App\Http\Controllers\IndustrialArticleCategoryController;
use App\Http\Controllers\IndustrialArticleController;

use App\Http\Controllers\PageController;

use App\Http\Controllers\JobController;

use App\Http\Controllers\TestimonialController;

use App\Http\Controllers\TeamMemberController;

use App\Http\Controllers\ClientController;

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
    Route::get('subcategories', [CategoryController::class, 'getSubcategories'])->name('categories.subcategories');
    Route::resources(['posts' => PostController::class]);
    Route::get('post-slug', [PostController::class, 'getSlug'])->name('posts.slug');

    Route::resources(['article-categories' => ArticleCategoryController::class]);
    Route::get('article-subcategories', [ArticleCategoryController::class, 'getSubcategories'])->name('article-categories.subcategories');
    Route::resources(['article-tags' => ArticleTagController::class]);
    Route::resources(['articles' => ArticleController::class]);
    Route::get('article-slug', [ArticleController::class, 'getSlug'])->name('articles.slug');
    Route::resources(['article-sections' => ArticleSectionController::class], ['parameters' => [
        'create' => 'article_id'
    ]]);

    Route::resources(['research-papers' => ResearchPaperController::class]);
    Route::get('research-paper-slug', [ResearchPaperController::class, 'getSlug'])->name('research-papers.slug');

    Route::resources(['csuit-categories' => CsuitCategoryController::class]);
    Route::get('csuit-subcategories', [CsuitCategoryController::class, 'getSubcategories'])->name('csuit-categories.subcategories');
    Route::resources(['csuit' => CsuitController::class]);
    Route::get('csuit-slug', [CsuitController::class, 'getSlug'])->name('csuit.slug');

    Route::resources(['industrial-article-categories' => IndustrialArticleCategoryController::class]);
    Route::get('industrial-article-category-slug', [IndustrialArticleCategoryController::class, 'getSlug'])->name('industrial-article-categories.slug');
    Route::get('industrial-article-subcategories', [IndustrialArticleCategoryController::class, 'getSubcategories'])->name('industrial-article-categories.subcategories');
    Route::resources(['industrial-articles' => IndustrialArticleController::class]);
    Route::get('industrial-article-slug', [IndustrialArticleController::class, 'getSlug'])->name('industrial-articles.slug');

    Route::resources(['pages' => PageController::class]);
    Route::get('page-slug', [PageController::class, 'getSlug'])->name('pages.slug');
    Route::post('page-meta', [PageController::class, 'saveMeta'])->name('pages.meta');

    Route::resources(['jobs' => JobController::class]);
    Route::get('job-slug', [JobController::class, 'getSlug'])->name('jobs.slug');

    Route::resources(['testimonials' => TestimonialController::class]);

    Route::resources(['team-members' => TeamMemberController::class]);

    Route::resources(['clients' => ClientController::class]);
    Route::get('client-slug', [ClientController::class, 'getSlug'])->name('clients.slug');
});
