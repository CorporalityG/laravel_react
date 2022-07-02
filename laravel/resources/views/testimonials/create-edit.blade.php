@extends('layouts.app')

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').' Testimonial')

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
                        @php $action = route('testimonials.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('testimonials.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($RS_Row) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="full_name">{{ __('Name') }}</label>
                                    <input type="text" name="full_name" id="full_name" value="{{ old('full_name', $RS_Row->full_name ?? '') }}" class="form-control{{ $errors->has('full_name') ? ' is-invalid' : '' }}" placeholder="{{ __('Name') }}" autofocus>

                                    @if ($errors->has('full_name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('full_name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="designation">{{ __('Designation') }}</label>
                                    <input type="text" name="designation" id="designation" value="{{ old('designation', $RS_Row->designation ?? '') }}" class="form-control{{ $errors->has('designation') ? ' is-invalid' : '' }}" placeholder="{{ __('Designation') }}">

                                    @if ($errors->has('designation'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('designation') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="description">{{ __('Description') }}</label>
                                    <textarea name="description" id="description" class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}" placeholder="{{ __('Description') }}" rows="10">{{ old('description', $RS_Row->description ?? '') }}</textarea>

                                    @if ($errors->has('description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="avtar">{{ __('Avtar') }}</label>
                                    <div class="input-group{{ $errors->has('avtar') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="avtar" id="avtar" value="{{ old('avtar') }}" class="custom-file-input" placeholder="avtar" accept="image/*">
                                            <label class="custom-file-label" for="avtar">Choose avtar</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('avtar'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('avtar') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->avtar) )
                                        <img src="{{ url('uploads/'.$RS_Row->avtar) }}" alt="{{ $RS_Row->title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('testimonials.index') }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection