@extends('layouts.app')

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').' Team Member')

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
                        @php $action = route('team-members.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('team-members.store'); @endphp
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
                                    <label for="image">{{ __('Image') }}</label>
                                    <div class="input-group{{ $errors->has('image') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="image" id="image" value="{{ old('image') }}" class="custom-file-input" placeholder="image" accept="image/*">
                                            <label class="custom-file-label" for="image">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('image'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('image') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->image) )
                                        <img src="{{ url('uploads/'.$RS_Row->image) }}" alt="{{ $RS_Row->title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('team-members.index') }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection