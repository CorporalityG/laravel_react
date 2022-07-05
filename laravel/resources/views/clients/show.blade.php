@extends('layouts.app')

@section('Title', 'Single Client Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $RS_Row->client_name }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('clients.edit', $RS_Row->id) }}" class="btn btn-sm btn-secondary">Edit Client</a>
                            <a href="{{ route('clients.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            @if( !empty($RS_Row->image) )
                                <div class="post">
                                    <img src="{{ url('uploads/clients/'.$RS_Row->image) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <h6><b>Title:~</b> {{ $RS_Row->title }}</h6>
                            <div class="post"></div>

                            @if( !empty($RS_Row->short_description) )
                                <h6><b>Short Description:~</b></h6>
                                <div class="post">
                                    <p>{{ $RS_Row->short_description }}</p>
                                </div>
                            @endif

                            @if( !empty($RS_Row->logo) )
                                <div class="post">
                                    <img src="{{ url('uploads/clients/'.$RS_Row->logo) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                </div>
                            @endif

                            @if( !empty($RS_Row->logo_icon) )
                                <div class="post">
                                    <img src="{{ url('uploads/clients/'.$RS_Row->logo_icon) }}" alt="{{ $RS_Row->title }}" class="h-100">
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
                                <div class="post"></div>
                            </div>
                        @endif

                        <div class="col-12">
                            <h6><b>At a glance:~</b></h6>
                            <div class="post">
                                {{ $RS_Row->glance_1_title }}
                                <br><br>
                                @if( !empty($RS_Row->glance_1_image) )
                                    <img src="{{ url('uploads/clients/'.$RS_Row->glance_1_image) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                @endif
                            </div>

                            <div class="post">
                                {{ $RS_Row->glance_2_title }}
                                <br><br>
                                @if( !empty($RS_Row->glance_2_image) )
                                    <img src="{{ url('uploads/clients/'.$RS_Row->glance_2_image) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                @endif
                            </div>

                            <div class="post">
                                {{ $RS_Row->glance_3_title }}
                                <br><br>
                                @if( !empty($RS_Row->glance_3_image) )
                                    <img src="{{ url('uploads/clients/'.$RS_Row->glance_3_image) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
