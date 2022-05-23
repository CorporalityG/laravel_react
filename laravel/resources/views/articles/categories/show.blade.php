@extends('layouts.app')

@section('Title', 'Article Category Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $category->category_name }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('article-categories.edit', $category->id) }}" class="btn btn-sm btn-secondary">Edit Category</a>
                            <a href="{{ route('article-categories.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h4>{{ $category->category_name }}</h4>
                        </div>
                        <div class="col-12">
                            <p>{!! $category->description !!}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-6 align-self-center">
                                            <h4 class="card-title">{{ __('Article List') }} ({{ empty($category->parent_id) ? $category->articles->count() : $category->subcategoriesArticles->count() }})</h4>
                                        </div>
                                        <div class="col-md-6">
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <ul>
                                        @if( empty($category->parent_id) )
                                            @forelse( $category->articles as $article )
                                                <li class="mb-2"><a href="{{ route('articles.show', $article->id) }}" class="text-dark"><i class="fas fa-link mr-2"></i> {{ $article->article_title }}</a></li>
                                            @empty
                                                {{ __('Article not found') }}
                                            @endforelse
                                        @else
                                            @forelse( $category->subcategoriesArticles as $article )
                                                <li class="mb-2"><a href="{{ route('articles.show', $article->id) }}" class="text-dark"><i class="fas fa-link mr-2"></i> {{ $article->article_title }}</a></li>
                                            @empty
                                                {{ __('Article not found') }}
                                            @endforelse
                                        @endif
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
