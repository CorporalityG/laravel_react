@extends('layouts.app')

@section('Title', 'Article Tag Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $tag->tag_name }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('article-categories.edit', $category->id) }}" class="btn btn-sm btn-secondary">Edit Tag</a>
                            <a href="{{ route('article-categories.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h4>{{ $tag->tag_name }}</h4>
                        </div>
                        <div class="col-12">
                            <p>{!! $tag->description !!}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-6 align-self-center">
                                            <h4 class="card-title">{{ __('Article List') }} ({{ $tag->articles->count() }})</h4>
                                        </div>
                                        <div class="col-md-6">
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <ul>
                                        @forelse( $tag->articles as $tag )
                                            <li class="mb-2"><a href="{{ route('articles.show', $article->id) }}" class="text-dark"><i class="fas fa-link mr-2"></i> {{ $article->article_title }}</a></li>
                                        @empty
                                            {{ __('Article not found') }}
                                        @endforelse
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
