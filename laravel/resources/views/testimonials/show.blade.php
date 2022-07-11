@extends('layouts.app')

@section('Title', 'Single Testimonial Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $RS_Row->full_name }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('testimonials.edit', $RS_Row->id) }}" class="btn btn-sm btn-secondary">Edit</a>
                            <a href="{{ route('testimonials.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            @if( !empty($RS_Row->avtar) )
                                <div class="post">
                                    <img src="{{ url('uploads/'.$RS_Row->avtar) }}" alt="{{ $RS_Row->title }}" class="h-100">
                                </div>
                            @endif
                        </div>
                        <div class="col-md-6">
                            <h6><b>Designation:~</b> {{ $RS_Row->designation }}</h6>
                            <div class="post"></div>
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
