@extends('layouts.app')

@php
    $type = '';
    $typeName = 'Page';
@endphp

@if( $RS_Row->type=='section' )
    @php
        $type = '?type=section';
        $typeName = 'Page Section';
    @endphp
@endif

@section('Title', $typeName.' Detail')

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
                                <a href="{{ route('pages.index').$type }}" class="btn btn-sm btn-default ml-2">Back</a>
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
                        @elseif( $RS_Row->slug=='goto-market-strategy' )
                            @include('pages.page.goto-market-strategy')
                        @elseif( $RS_Row->slug=='account-based-marketing' )
                            @include('pages.page.account-based-marketing')
                        @elseif( $RS_Row->slug=='marketing-model-approch' )
                            @include('pages.page.marketing-model-approch')
                        @elseif( $RS_Row->slug=='careers' )
                            @include('pages.page.careers')
                        @elseif( $RS_Row->slug=='our-team' )
                            @include('pages.page.our-team')
                        @elseif( $RS_Row->slug=='privacy-policy' )
                            @include('pages.page.privacy-policy')
                        @elseif( $RS_Row->slug=='terms-and-conditions' )
                            @include('pages.page.terms-and-conditions')
                        @elseif( $RS_Row->slug=='corporality-books' )
                            @include('pages.page.corporality-books')
                        @elseif( $RS_Row->slug=='service-insights' )
                            @include('pages.page.service-insights')
                        @elseif( $RS_Row->slug=='ceo-insights' )
                            @include('pages.page.ceo-insights')
                        @elseif( $RS_Row->slug=='cxo-insights' )
                            @include('pages.page.cxo-insights')
                        @elseif( $RS_Row->slug=='cmo-insights' )
                            @include('pages.page.cmo-insights')
                        @elseif( $RS_Row->slug=='coo-insights' )
                            @include('pages.page.coo-insights')
                        @elseif( $RS_Row->slug=='contact' )
                            @include('pages.page.contact')
                        @elseif( $RS_Row->slug=='medtech' )
                            @include('pages.page.medtech')
                        @elseif( $RS_Row->slug=='finance' )
                            @include('pages.page.finance')
                        @elseif( $RS_Row->slug=='geospatial' )
                            @include('pages.page.geospatial')
                        @elseif( $RS_Row->slug=='biotech' )
                            @include('pages.page.biotech')
                        @elseif( $RS_Row->slug=='nanotech' )
                            @include('pages.page.nanotech')
                        @elseif( $RS_Row->slug=='fintech' )
                            @include('pages.page.fintech')
                        @elseif( $RS_Row->slug=='allied' )
                            @include('pages.page.allied')
                        @elseif( $RS_Row->slug=='edutech' )
                            @include('pages.page.edutech')
                        @elseif( $RS_Row->slug=='metal' )
                            @include('pages.page.metal')
                        @elseif( $RS_Row->slug=='construction' )
                            @include('pages.page.construction')
                        @elseif( $RS_Row->slug=='manufacturing' )
                            @include('pages.page.manufacturing')
                        @elseif( $RS_Row->slug=='information-technology' )
                            @include('pages.page.information-technology')
                        @elseif( $RS_Row->slug=='high-tech' )
                            @include('pages.page.high-tech')
                        @elseif( $RS_Row->slug=='agriculture' )
                            @include('pages.page.agriculture')
                        @elseif( $RS_Row->slug=='insurtech' )
                            @include('pages.page.insurtech')
                        @elseif( $RS_Row->slug=='utilities-and-energy' )
                            @include('pages.page.utilities-and-energy')
                        @elseif( $RS_Row->slug=='clients' )
                            @include('pages.page.clients')
                        @endif


                        @if( $RS_Row->slug=='client-section' )
                            @include('pages.section.client')
                        @elseif( $RS_Row->slug=='our-insights-section' )
                            @include('pages.section.our-insights')
                        @elseif( $RS_Row->slug=='get-involved-section' )
                            @include('pages.section.get-involved')
                        @elseif( $RS_Row->slug=='industries-global-conference-section' )
                            @include('pages.section.industries-global-conference')
                        @endif
                    </div>

                    <div class="card-footer">
                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('pages.index').$type }}" class="btn btn-default float-right">Back</a>
                    </div>
                </div>

            </form>
        </div>
    </div>

@endsection
