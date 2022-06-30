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
                        @if( $RS_Row->slug=='home' )
                            @include('pages.page.home')
                        @elseif( $RS_Row->slug=='about-corporality' )
                            @include('pages.page.about-corporality')
                        @elseif( $RS_Row->slug=='work-with-clients' )
                            @include('pages.page.work-with-clients')
                        @elseif( $RS_Row->slug=='inclusion-and-diversity' )
                            @include('pages.page.inclusion-and-diversity')
                        @elseif( $RS_Row->slug=='partnership-programmes' )
                            @include('pages.page.partnership-programmes')
                        @elseif( $RS_Row->slug=='sustainable-growth' )
                            @include('pages.page.sustainable-growth')
                        @elseif( $RS_Row->slug=='strategy-and-consulting' )
                            @include('pages.page.strategy-and-consulting')
                        @elseif( $RS_Row->slug=='interactive-blueprint' )
                            @include('pages.page.interactive-blueprint')
                        @elseif( $RS_Row->slug=='why-corporality-effect' )
                            @include('pages.page.why-corporality-effect')
                        @elseif( $RS_Row->slug=='what-is-corporality-effect' )
                            @include('pages.page.what-is-corporality-effect')
                        @elseif( $RS_Row->slug=='corporality-culturally-conditioned' )
                            @include('pages.page.corporality-culturally-conditioned')
                        @elseif( $RS_Row->slug=='corporality-inbound-shiftings' )
                            @include('pages.page.corporality-inbound-shiftings')
                        @elseif( $RS_Row->slug=='corporality-striker' )
                            @include('pages.page.corporality-striker')
                        @elseif( $RS_Row->slug=='brand-positioning' )
                            @include('pages.page.brand-positioning')
                        @elseif( $RS_Row->slug=='digital-media-marketing' )
                            @include('pages.page.digital-media-marketing')
                        @elseif( $RS_Row->slug=='cxo-strategy' )
                            @include('pages.page.cxo-strategy')
                        @elseif( $RS_Row->slug=='outsourced-cmo' )
                            @include('pages.page.outsourced-cmo')
                        @elseif( $RS_Row->slug=='corporate-strategy' )
                            @include('pages.page.corporate-strategy')
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
