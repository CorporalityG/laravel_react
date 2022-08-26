@extends('layouts.app')

@section('Title', 'Single Post Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $post->post_title }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('posts.edit', $post->id) }}" class="btn btn-sm btn-secondary">Edit Post</a>
                            <a href="{{ route('posts.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            @if( !empty($post->post_image) )
                                <div class="post">
                                    <img src="{{ url('uploads/'.$post->post_image) }}" alt="{{ $post->post_title }}" class="h-100">
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <h6><b>Published:~</b> {{ $post->getCreatedAt($post->created_at) }}</h6>
                            <div class="post"></div>

                            @if( !empty($categories) )
                                <h6><b>Categories:~</b></h6>
                                <div class="post">
                                    <p>{{ $categories }}</p>
                                </div>
                            @endif

                            @if( !empty($post->post_short_description) )
                                <h6><b>Short Description:~</b></h6>
                                <div class="post">
                                    <p>{{ $post->post_short_description }}</p>
                                </div>
                                
                            @endif
                        </div>
                        
                        <div class="col-12">
                            <div class="post"></div><div class="post"></div>
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Meta Title (Page Title)') }}:~</b> {{ $post->meta_title }}
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Meta Keywords') }}:~</b> {{ $post->meta_keywords }}
                        </div>

                        <div class="col-12">
                            <b>{{ __('Meta Description') }}:~</b> {{ $post->meta_description }}
                        </div>

                        <div class="col-12">
                            <div class="post"></div><div class="post"></div>
                        </div>

                        <div class="col-12">
                            <h6><b>Description:~</b></h6>
                            @if( $post->listItems->count() > 0 )
                                <ul>
                                    @foreach( $post->listItems as $item )
                                        <li>{{ $item->list_item }}</li>
                                    @endforeach
                                </ul>
                            @endif

                            @if( !empty($post->post_description) )
                                <div class="post">
                                    {!! $post->post_description !!}
                                </div>
                            @endif
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
