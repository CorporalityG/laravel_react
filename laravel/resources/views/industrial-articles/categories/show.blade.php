@extends('layouts.app')

@section('Title', 'Category Detail')

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
                            <a href="{{ route('industrial-article-categories.edit', $category->id) }}" class="btn btn-sm btn-secondary">Edit Category</a>
                            <a href="{{ route('industrial-article-categories.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
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
                                            <h4 class="card-title">{{ __('Industrial Article List') }} ({{ empty($category->parent_id) ? $category->industrialArticles->count() : $category->subcategoriesIndustrialArticles->count() }})</h4>
                                        </div>
                                        <div class="col-md-6">
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <ul>
                                        @if( empty($category->parent_id) )
                                            @forelse( $category->industrialArticles as $RS_Row )
                                                <li class="mb-2"><a href="{{ route('csuit.show', $RS_Row->id) }}" class="text-dark"><i class="fas fa-link mr-2"></i> {{ $RS_Row->title }}</a></li>
                                            @empty
                                                {{ __('Industrial Article not found') }}
                                            @endforelse
                                        @else
                                            @forelse( $category->subcategoriesIndustrialArticles as $RS_Row )
                                                <li class="mb-2"><a href="{{ route('csuit.show', $RS_Row->id) }}" class="text-dark"><i class="fas fa-link mr-2"></i> {{ $RS_Row->title }}</a></li>
                                            @empty
                                                {{ __('Industrial Article not found') }}
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
