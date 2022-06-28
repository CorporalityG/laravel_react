@extends('layouts.app')

@section('Title', 'Page Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')
            
            <form method="POST" action="{{ route('pages.meta') }}" enctype="multipart/form-data">
                @csrf
                <input type="hidden" name="page_id" id="page_id" value="{{ old('page_id', $RS_Row->id) }}" class="form-control" placeholder="{{ __('Page ID') }}" >

                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-6 align-self-center">
                                <h4 class="card-title">{{ $RS_Row->title }}</h4>
                            </div>
                            <div class="col-md-6 text-right">
                                <a href="{{ route('pages.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        @if( $RS_Row->slug=='about-corporality' )
                            @include('pages.page.about-corporality')
                        @elseif( $RS_Row->slug=='work-with-clients' )
                            @include('pages.page.work-with-clients')
                        @elseif( $RS_Row->slug=='inclusion-and-diversity' )
                            @include('pages.page.inclusion-and-diversity')
                        @elseif( $RS_Row->slug=='partnership-programmes' )
                            @include('pages.page.partnership-programmes')
                        @endif
                    </div>

                    <div class="card-footer">
                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('pages.index') }}" class="btn btn-default float-right">Back</a>
                    </div>
                </div>

            </form>
        </div>
    </div>

@endsection
