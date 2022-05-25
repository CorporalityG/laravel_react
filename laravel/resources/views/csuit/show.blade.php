@extends('layouts.app')

@section('Title', 'Single CSuit Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $csuit->title }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('csuit.edit', $csuit->id) }}" class="btn btn-sm btn-secondary">Edit Post</a>
                            <a href="{{ route('csuit.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            @if( !empty($csuit->image) )
                                <div class="post">
                                    <img src="{{ url('uploads/'.$csuit->image) }}" alt="{{ $csuit->title }}" class="h-100">
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <h6><b>Published:~</b> {{ $csuit->getCreatedAt($csuit->created_at) }}</h6>
                            <div class="post"></div>

                            @if( !empty($categories) )
                                <h6><b>Categories:~</b></h6>
                                <div class="post">
                                    <p>{{ $categories }}</p>
                                </div>
                            @endif

                            @if( !empty($csuit->short_description) )
                                <h6><b>Short Description:~</b></h6>
                                <div class="post">
                                    <p>{{ $csuit->short_description }}</p>
                                </div>
                                
                            @endif
                        </div>
                        
                        <div class="col-12">
                            <div class="post"></div><div class="post"></div>
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Meta Title (Page Title)') }}:~</b> {{ $csuit->meta_title }}
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Meta Keywords') }}:~</b> {{ $csuit->meta_keywords }}
                        </div>

                        <div class="col-12">
                            <b>{{ __('Meta Description') }}:~</b> {{ $csuit->meta_description }}
                        </div>

                        <div class="col-12">
                            <div class="post"></div><div class="post"></div>
                        </div>

                        @if( !empty($csuit->description) )
                            <div class="col-12">
                                <h6><b>Description:~</b></h6>
                                <div class="post">
                                    {!! $csuit->description !!}
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
