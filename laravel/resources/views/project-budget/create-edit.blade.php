@extends('layouts.app')

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').' Project Budget')

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
                        @php $action = route('project-budget.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('project-budget.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($RS_Row) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="service_name">{{ __('Service') }}</label>
                                    <select name="service_name" id="service_name" class="form-control{{ $errors->has('service_name') ? ' is-invalid' : '' }}" required>
                                        <option value="">{{ __('-- Select Service --') }}</option>
                                        <option value="Digital Media Marketing" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Digital Media Marketing' ) selected @endif>Digital Media Marketing</option>
                                        <option value="Brand Positioning" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Brand Positioning' ) selected @endif>Brand Positioning</option>
                                        <option value="Go to Marketing Strategy" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Go to Marketing Strategy' ) selected @endif>Go to Marketing Strategy</option>
                                        <option value="Account Based Marketing" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Account Based Marketing' ) selected @endif>Account Based Marketing</option>
                                        <option value="Interactive Blueprint" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Interactive Blueprint' ) selected @endif>Interactive Blueprint</option>
                                        <option value="Outsourced CXO" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Outsourced CXO' ) selected @endif>Outsourced CXO</option>
                                        <option value="Outsourced CMO" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Outsourced CMO' ) selected @endif>Outsourced CMO</option>
                                        <option value="Outsourced COO" @if( !empty($RS_Row->service_name) && $RS_Row->service_name=='Outsourced COO' ) selected @endif>Outsourced COO</option>
                                    </select>

                                    @if ($errors->has('service_name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('service_name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="duration">{{ __('Duration') }}</label>
                                    <select name="duration" id="duration" class="form-control{{ $errors->has('duration') ? ' is-invalid' : '' }}" required>
                                        <option value="">{{ __('-- Select Duration --') }}</option>
                                        <option value="Monthly" @if( !empty($RS_Row->duration) && $RS_Row->duration=='Monthly' ) selected @endif>Monthly</option>
                                        <option value="Quaterly" @if( !empty($RS_Row->duration) && $RS_Row->duration=='Quaterly' ) selected @endif>Quaterly</option>
                                        <option value="Yearly" @if( !empty($RS_Row->duration) && $RS_Row->duration=='Yearly' ) selected @endif>Yearly</option>
                                    </select>

                                    @if ($errors->has('duration'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('duration') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5>AUD Price</h5>

                                        <div class="form-group">
                                            <label for="price_grade_1[AUD]">{{ __('Grade 1 Price') }}</label>
                                            <input type="text" name="price_grade_1[AUD]" id="price_grade_1[AUD]" value="{{ old('price_grade_1[AUD]', $RS_Row->price_grade_1['AUD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_1[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_1[AUD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_1[AUD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="price_grade_2[AUD]">{{ __('Grade 2 Price') }}</label>
                                            <input type="text" name="price_grade_2[AUD]" id="price_grade_2[AUD]" value="{{ old('price_grade_2[AUD]', $RS_Row->price_grade_2['AUD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_2[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_2[AUD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_2[AUD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="price_grade_3[AUD]">{{ __('Grade 3 Price') }}</label>
                                            <input type="text" name="price_grade_3[AUD]" id="price_grade_3[AUD]" value="{{ old('price_grade_3[AUD]', $RS_Row->price_grade_3['AUD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_3[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_3[AUD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_3[AUD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="price_grade_4[AUD]">{{ __('Grade 4 Price') }}</label>
                                            <input type="text" name="price_grade_4[AUD]" id="price_grade_4[AUD]" value="{{ old('price_grade_4[AUD]', $RS_Row->price_grade_4['AUD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_4[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_4[AUD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_4[AUD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <h5>USD Price</h5>

                                        <div class="form-group">
                                            <label for="price_grade_1[USD]">{{ __('Grade 1 Price') }}</label>
                                            <input type="text" name="price_grade_1[USD]" id="price_grade_1[USD]" value="{{ old('price_grade_1[USD]', $RS_Row->price_grade_1['USD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_1[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_1[USD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_1[USD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="price_grade_2[USD]">{{ __('Grade 2 Price') }}</label>
                                            <input type="text" name="price_grade_2[USD]" id="price_grade_2[USD]" value="{{ old('price_grade_2[USD]', $RS_Row->price_grade_2['USD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_2[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_2[USD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_2[USD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="price_grade_3[USD]">{{ __('Grade 3 Price') }}</label>
                                            <input type="text" name="price_grade_3[USD]" id="price_grade_3[USD]" value="{{ old('price_grade_3[USD]', $RS_Row->price_grade_3['USD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_3[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_3[USD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_3[USD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label for="price_grade_4[USD]">{{ __('Grade 4 Price') }}</label>
                                            <input type="text" name="price_grade_4[USD]" id="price_grade_4[USD]" value="{{ old('price_grade_4[USD]', $RS_Row->price_grade_4['USD'] ?? '') }}" class="form-control{{ $errors->has('price_grade_4[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                            @if ($errors->has('price_grade_4[USD]'))
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $errors->first('price_grade_4[USD]') }}</strong>
                                                </span>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('project-budget.index') }}" class="btn btn-default float-right">Back</a>
                        <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection