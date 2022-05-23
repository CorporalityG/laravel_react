@extends('layouts.app')

@section('Title', (!empty($category) ? 'Edit' : 'Add').' Article Category')

@section('content')

	<div class="row">
        <div class="col-md-12">
            @include('layouts.messages')
            
            <div class="card card-info">
                <div class="card-header">
                    <h4 class="card-title">@yield('Title')</h4>
                </div>

                <div class="card-body">
                    @if( !empty($category) )
                        @php $action = route('article-categories.update', $category->id); @endphp
                    @else
                        @php $action = route('article-categories.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}">
                        @csrf
                        @if( !empty($category) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="category_name">{{ __('Category Name') }}</label>
                                    <input type="text" name="category_name" id="category_name" value="{{ old('category_name', $category->category_name ?? '') }}" class="form-control{{ $errors->has('category_name') ? ' is-invalid' : '' }}" placeholder="{{ __('Category Name') }}" autofocus>

                                    @if ($errors->has('category_name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('category_name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="parent_category_id">{{ __('Parent Category') }}</label>
                                    <div class="select2-purple">
                                        <select name="parent_category_id" id="parent_category_id" class="select2 form-control{{ $errors->has('parent_category_id') ? ' is-invalid' : '' }}" data-placeholder="{{ __('-- Select Category --') }}" data-dropdown-css-class="select2-purple" >
                                            <option value="0">{{ __('-- Select Parent Category --') }}</option>
                                            @forelse( $parentCategories as $parentCategory )
                                                <option value="{{ $parentCategory->id }}" @if( !empty($category->parent_id) && $parentCategory->id===$category->parent_id ) selected @endif>{{ $parentCategory->category_name }}</option>
                                            @empty
                                            @endforelse
                                        </select>
                                    </div>

                                    @if ($errors->has('parent_category_id'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('parent_category_id') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="description">{{ __('Description') }}</label>
                                    <textarea name="description" id="description" class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" placeholder="{{ __('Description') }}">{{ old('description', $category->description ?? '') }}</textarea>

                                    @if ($errors->has('description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('article-categories.index') }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection