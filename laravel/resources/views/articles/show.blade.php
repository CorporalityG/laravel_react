@extends('layouts.app')

@section('Title', 'Single Article Detail')

@section('content')

<div class="row">
    <div class="col-md-12">
        @include('layouts.messages')

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <h4 class="card-title">{{ $article->article_title }}</h4>
                    </div>
                    <div class="col-md-6 text-right">
                        <a href="{{ route('articles.edit', $article->id) }}" class="btn btn-sm btn-secondary">Edit Article</a>
                        <a href="{{ route('articles.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        @if( !empty($article->article_image) )
                            <div class="post">
                                <img src="{{ url('uploads/'.$article->article_image) }}" alt="{{ $article->article_title }}" class="h-100">
                            </div>
                        @endif
                    </div>
                    <div class="col-md-6">
                        <h6><b>Published:~</b> {{ $article->getCreatedAt($article->created_at) }}</h6>
                        <div class="post"></div>

                        @if( !empty($article->article_subtitle) )
                            <h6><b>Subtitle:~</b></h6>
                            <div class="post">
                                <p>{!! $article->article_subtitle !!}</p>
                            </div>
                        @endif

                        @if( !empty($categories) )
                            <h6><b>Categories:~</b></h6>
                            <div class="post">
                                <p>{{ $categories }}</p>
                            </div>
                        @endif

                        @if( !empty($article->article_short_description) )
                            <h6><b>Short Description:~</b></h6>
                            <div class="post">
                                <p>{!! $article->article_short_description !!}</p>
                            </div>
                        @endif
                    </div>

                    <div class="col-12">
                        <div class="post"></div>
                        <div class="post"></div>
                    </div>

                    <div class="col-12 mb-2">
                        <b>{{ __('Meta Title (Page Title)') }}:~</b> {{ $article->meta_title }}
                    </div>

                    <div class="col-12 mb-2">
                        <b>{{ __('Meta Keywords') }}:~</b> {{ $article->meta_keywords }}
                    </div>

                    <div class="col-12">
                        <b>{{ __('Meta Description') }}:~</b> {{ $article->meta_description }}
                    </div>

                    <div class="col-12">
                        <div class="post"></div>
                        <div class="post"></div>
                    </div>

                    <!-- @if( !empty($article->article_description) )
                    <div class="col-12">
                        <h6><b>Description:~</b></h6>
                        <div class="post">
                            {!! $article->article_description !!}
                        </div>
                    </div>
                    @endif -->
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <h4 class="card-title">Sections:~</h4>
                    </div>
                    <div class="col-md-6 text-right">
                        <a href="{{ route('article-sections.create', ['article_id' => $article->id]) }}" class="btn btn-sm btn-info">Add Section</a>
                    </div>
                </div>
            </div>

            <div class="card-body">
                @if( !empty($article->sections) )
                    <div class="row">
                        <div class="col-12" id="accordion">
                            @forelse( $article->sections as $section )
                                <div class="card card-secondary card-outline">
                                    <a class="d-block w-100" data-toggle="collapse" href="#collapse{{ $section->id }}">
                                        <div class="card-header d-flex">
                                            <h4 class="card-title text-dark w-100">{{ $section->section_title }}</h4>
                                            <div class="d-flex">
                                                <a href="{{ route('article-sections.edit', $section->id) }}" title="Edit" class="btn btn-sm text-success edit"><i class="fas fa-edit"></i></a>

                                                <a href="javascript:;" data-id="{{ $section->id }}" data-url="{{ route('article-sections.destroy', $section->id) }}" data-article-id="{{ $article->id }}" title="Delete" class="btn btn-sm text-danger delete"><i class="fas fa-trash"></i></a>
                                            </div>
                                        </div>
                                    </a>
                                    <div id="collapse{{ $section->id }}" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            {!! $section->section_description !!}
                                        </div>
                                    </div>
                                </div>
                            @empty
                            {{ __('Article section not found') }}
                            @endforelse
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>

@include('articles.sections.delete_modal')

<!-- Page specific script -->
<script>
jQuery(function () {
    // delete start
    jQuery(document).on('click', '.delete', function(e) {
        e.preventDefault();
        var id = jQuery(this).data('id');
        var url = jQuery(this).data('url');
        var article_id = jQuery(this).data('article-id');

        url += "?article_id="+article_id;
        
        jQuery('.frmAjaxDelete').attr('action', url);
        jQuery('#ajaxModelDelete').modal('show');
    });
    // delete end
});
</script>
@endsection