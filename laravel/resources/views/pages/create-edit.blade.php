@extends('layouts.app')

@php
    $type = '';
    $typeName = ' Page';
@endphp

@if( Request::get('type')=='section' )
    @php
        $type = '?type=section';
        $typeName = ' Section';
    @endphp
@endif

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').$typeName)

@section('content')

	<div class="row">
        <div class="col-md-12">
            @include('layouts.messages')
            
            <div class="card card-info">
                <div class="card-header">
                    <h4 class="card-title">@yield('Title')</h4>
                </div>

                <div class="card-body">
                    @if( !empty($RS_Row) )
                        @php $action = route('pages.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('pages.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($RS_Row) ) {{ method_field('PUT') }} @endif
                        <input type="hidden" name="type" id="type" value="{{ Request::get('type')=='section' ? 'section' : 'page' }}" class="form-control{{ $errors->has('type') ? ' is-invalid' : '' }}" placeholder="{{ __('Type') }}">
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="text" name="title" id="title" value="{{ old('title', $RS_Row->title ?? '') }}" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" placeholder="{{ __('Title') }}" autofocus>

                                    @if ($errors->has('title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug" value="{{ old('slug', $RS_Row->slug ?? '') }}" class="form-control{{ $errors->has('slug') ? ' is-invalid' : '' }}" placeholder="{{ __('Slug') }}">

                                    @if ($errors->has('slug'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('slug') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12{{ Request::get('type')=='section' ? ' d-none' : '' }}">
                                <div class="form-group">
                                    <label for="meta_title">{{ __('Meta Title (Page Title)') }}</label>
                                    <input type="text" name="meta_title" id="meta_title" value="{{ old('meta_title', $RS_Row->meta_title ?? '') }}" class="form-control{{ $errors->has('meta_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Meta Title (Page Title)') }}">

                                    @if ($errors->has('meta_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('meta_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12{{ Request::get('type')=='section' ? ' d-none' : '' }}">
                                <div class="form-group">
                                    <label for="meta_keywords">{{ __('Meta Keywords') }}</label>
                                    <input type="text" name="meta_keywords" id="meta_keywords" value="{{ old('meta_keywords', $RS_Row->meta_keywords ?? '') }}" class="form-control{{ $errors->has('meta_keywords') ? ' is-invalid' : '' }}" placeholder="{{ __('Meta Keywords') }}">

                                    @if ($errors->has('meta_keywords'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('meta_keywords') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12{{ Request::get('type')=='section' ? ' d-none' : '' }}">
                                <div class="form-group">
                                    <label for="meta_description">{{ __('Meta Description') }}</label>
                                    <textarea name="meta_description" id="meta_description" class="form-control{{ $errors->has('meta_description') ? ' is-invalid' : '' }}" placeholder="{{ __('Meta Description') }}">{{ old('meta_description', $RS_Row->meta_description ?? '') }}</textarea>

                                    @if ($errors->has('meta_description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('meta_description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('pages.index').$type }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<!-- Page specific script -->
<script>
$(function () {
    <?php
    if( empty($RS_Row) )
    {
    ?>
        $("#title").on('blur', function (e) {
            e.preventDefault();

            var title = $(this).val();

            $.ajax({
                url:"<?php echo route('pages.slug'); ?>",
                cache: false,
                data: {
                    title: title,
                },
                beforeSend: function(){
                    // Show image container
                    // jQuery("#loader").show();
                },
                success: function(response){
                    // console.log(response);
                    $('#slug').val(response);
                },
                complete:function(data){
                    // Hide image container
                    // jQuery("#loader").hide();
                }
            });
        });
    <?php
    }
    ?>
})
</script>
@endsection