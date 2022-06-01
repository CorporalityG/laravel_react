@extends('layouts.app')

@section('Title', 'Single Industrial Article Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $RS_Row->title }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('industrial-articles.edit', $RS_Row->id) }}" class="btn btn-sm btn-secondary">Edit Industrial Article</a>
                            <a href="{{ route('industrial-articles.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            @if( !empty($RS_Row->image) )
                                <div class="post">
                                    <img src="{{ url('uploads/'.$RS_Row->image) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <h6><b>Published:~</b> {{ $RS_Row->getCreatedAt($RS_Row->created_at) }}</h6>
                            <div class="post"></div>

                            @if( !empty($categories) )
                                <h6><b>Categories:~</b></h6>
                                <div class="post">
                                    <p>{{ $categories }}</p>
                                </div>
                            @endif

                            @if( !empty($RS_Row->short_description) )
                                <h6><b>Short Description:~</b></h6>
                                <div class="post">
                                    <p>{{ $RS_Row->short_description }}</p>
                                </div>
                                
                            @endif
                        </div>
                        
                        <div class="col-12">
                            <div class="post"></div><div class="post"></div>
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Meta Title (Page Title)') }}:~</b> {{ $RS_Row->meta_title }}
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Meta Keywords') }}:~</b> {{ $RS_Row->meta_keywords }}
                        </div>

                        <div class="col-12">
                            <b>{{ __('Meta Description') }}:~</b> {{ $RS_Row->meta_description }}
                        </div>

                        <div class="col-12">
                            <div class="post"></div><div class="post"></div>
                        </div>

                        @if( !empty($RS_Row->description) )
                            <div class="col-12">
                                <h6><b>Description:~</b></h6>
                                <div class="post">
                                    {!! $RS_Row->description !!}
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
