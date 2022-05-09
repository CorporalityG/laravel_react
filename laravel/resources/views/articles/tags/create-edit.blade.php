@extends('layouts.app')

@section('Title', (!empty($tag) ? 'Edit' : 'Add').' Article Tag')

@section('content')

	<div class="row">
        <div class="col-md-12">
            @include('layouts.messages')
            
            <div class="card card-info">
                <div class="card-header">
                    <h4 class="card-title">@yield('Title')</h4>
                </div>

                <div class="card-body">
                    @if( !empty($tag) )
                        @php $action = route('article-tags.update', $tag->id); @endphp
                    @else
                        @php $action = route('article-tags.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}">
                        @csrf
                        @if( !empty($tag) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="tag_name">{{ __('Tag Name') }}</label>
                                    <input type="text" name="tag_name" id="tag_name" value="{{ old('tag_name', $tag->tag_name ?? '') }}" class="form-control{{ $errors->has('tag_name') ? ' is-invalid' : '' }}" placeholder="{{ __('Tag Name') }}" autofocus>

                                    @if ($errors->has('tag_name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('tag_name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="description">{{ __('Description') }}</label>
                                    <textarea name="description" id="description" class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" placeholder="{{ __('Description') }}">{{ old('description', $tag->description ?? '') }}</textarea>

                                    @if ($errors->has('description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('article-tags.index') }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>  
        </div>
    </div>

@endsection