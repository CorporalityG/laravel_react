@extends('layouts.app')

@section('Title', (!empty($section) ? 'Edit' : 'Add').' Article Section')

@section('content')

	<div class="row">
        <div class="col-md-12">
            @include('layouts.messages')
            
            <div class="card card-info">
                <div class="card-header">
                    <h4 class="card-title"><b>{{ $article->article_title }}</b> Article Section</h4>
                </div>

                <div class="card-body">
                    @if( !empty($section) )
                        @php $action = route('article-sections.update', $section->id); @endphp
                    @else
                        @php $action = route('article-sections.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}">
                        @csrf
                        @if( !empty($section) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <input type="hidden" name="article_id" id="article_id" value="{{ $article->id }}" class="form-control" placeholder="{{ __('Article ID') }}">

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="section_title">{{ __('Section Name') }}</label>
                                    <input type="text" name="section_title" id="section_title" value="{{ old('section_title', $section->section_title ?? '') }}" class="form-control{{ $errors->has('section_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Section Name') }}" autofocus>

                                    @if ($errors->has('section_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('section_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="section_description">{{ __('Section Description') }}</label>
                                    <textarea name="section_description" id="section_description" class="form-control{{ $errors->has('section_description') ? ' is-invalid' : '' }}" placeholder="{{ __('Section Description') }}">{{ old('section_description', $section->section_description ?? '') }}</textarea>

                                    @if ($errors->has('section_description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('section_description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('articles.show', $article->id) }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<!-- Page specific script -->
<script>
$(function () {
    // Summernote
    $('#section_description').summernote();
});
</script>
@endsection