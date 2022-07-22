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
                                <div class="form-group">
                                    <label for="grade_type_1">{{ __('Grade Type 1') }}</label>
                                    <input type="text" name="grade_type_1" id="grade_type_1" value="{{ old('grade_type_1', $RS_Row->grade_type_1 ?? '') }}" class="cal_price_grade form-control{{ $errors->has('grade_type_1') ? ' is-invalid' : '' }}" placeholder="{{ __('Grade Type') }}" required>

                                    @if ($errors->has('grade_type_1'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('grade_type_1') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="grade_type_2">{{ __('Grade Type 2') }}</label>
                                    <input type="text" name="grade_type_2" id="grade_type_2" value="{{ old('grade_type_2', $RS_Row->grade_type_2 ?? '') }}" class="cal_price_grade form-control{{ $errors->has('grade_type_2') ? ' is-invalid' : '' }}" placeholder="{{ __('Grade Type') }}" required>

                                    @if ($errors->has('grade_type_2'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('grade_type_2') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="grade_type_3">{{ __('Grade Type 3') }}</label>
                                    <input type="text" name="grade_type_3" id="grade_type_3" value="{{ old('grade_type_3', $RS_Row->grade_type_3 ?? '') }}" class="cal_price_grade form-control{{ $errors->has('grade_type_3') ? ' is-invalid' : '' }}" placeholder="{{ __('Grade Type') }}" required>

                                    @if ($errors->has('grade_type_3'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('grade_type_3') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="grade_type_4">{{ __('Grade Type 4') }}</label>
                                    <input type="text" name="grade_type_4" id="grade_type_4" value="{{ old('grade_type_4', $RS_Row->grade_type_4 ?? '') }}" class="cal_price_grade form-control{{ $errors->has('grade_type_4') ? ' is-invalid' : '' }}" placeholder="{{ __('Grade Type') }}" required>

                                    @if ($errors->has('grade_type_4'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('grade_type_4') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5>AUD Price</h5>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_1_AUD">{{ __('Grade 1 Price') }}</label>
                                                    <input type="text" name="price_grade_1[AUD]" id="price_grade_1_AUD" value="{{ old('price_grade_1[AUD]', $RS_Row->price_grade_1['AUD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_1[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_1[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_1[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_1_AUD">{{ __('Grade 1 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_1[AUD]" id="total_price_grade_1_AUD" value="{{ old('total_price_grade_1[AUD]', $RS_Row->total_price_grade_1['AUD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_1[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_1[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_1[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_2_AUD">{{ __('Grade 2 Price') }}</label>
                                                    <input type="text" name="price_grade_2[AUD]" id="price_grade_2_AUD" value="{{ old('price_grade_2[AUD]', $RS_Row->price_grade_2['AUD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_2[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_2[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_2[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_2_AUD">{{ __('Grade 2 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_2[AUD]" id="total_price_grade_2_AUD" value="{{ old('total_price_grade_2[AUD]', $RS_Row->total_price_grade_2['AUD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_2[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_2[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_2[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_3_AUD">{{ __('Grade 3 Price') }}</label>
                                                    <input type="text" name="price_grade_3[AUD]" id="price_grade_3_AUD" value="{{ old('price_grade_3[AUD]', $RS_Row->price_grade_3['AUD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_3[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_3[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_3[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_3_AUD">{{ __('Grade 3 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_3[AUD]" id="total_price_grade_3_AUD" value="{{ old('total_price_grade_3[AUD]', $RS_Row->total_price_grade_3['AUD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_3[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_3[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_3[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_4_AUD">{{ __('Grade 4 Price') }}</label>
                                                    <input type="text" name="price_grade_4[AUD]" id="price_grade_4_AUD" value="{{ old('price_grade_4[AUD]', $RS_Row->price_grade_4['AUD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_4[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_4[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_4[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_4_AUD">{{ __('Grade 4 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_4[AUD]" id="total_price_grade_4_AUD" value="{{ old('total_price_grade_4[AUD]', $RS_Row->total_price_grade_4['AUD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_4[AUD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_4[AUD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_4[AUD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <h5>USD Price</h5>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_1_USD">{{ __('Grade 1 Price') }}</label>
                                                    <input type="text" name="price_grade_1[USD]" id="price_grade_1_USD" value="{{ old('price_grade_1[USD]', $RS_Row->price_grade_1['USD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_1[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_1[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_1[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_1_USD">{{ __('Grade 1 Price') }}</label>
                                                    <input type="text" name="total_price_grade_1[USD]" id="total_price_grade_1_USD" value="{{ old('total_price_grade_1[USD]', $RS_Row->total_price_grade_1['USD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_1[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('total_price_grade_1[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_1[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_2_USD">{{ __('Grade 2 Price') }}</label>
                                                    <input type="text" name="price_grade_2[USD]" id="price_grade_2_USD" value="{{ old('price_grade_2[USD]', $RS_Row->price_grade_2['USD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_2[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_2[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_2[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_2_USD">{{ __('Grade 2 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_2[USD]" id="total_price_grade_2_USD" value="{{ old('total_price_grade_2[USD]', $RS_Row->total_price_grade_2['USD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_2[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_2[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_2[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_3_USD">{{ __('Grade 3 Price') }}</label>
                                                    <input type="text" name="price_grade_3[USD]" id="price_grade_3_USD" value="{{ old('price_grade_3[USD]', $RS_Row->price_grade_3['USD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_3[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_3[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_3[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_3_USD">{{ __('Grade 3 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_3[USD]" id="total_price_grade_3_USD" value="{{ old('total_price_grade_3[USD]', $RS_Row->total_price_grade_3['USD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_3[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_3[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_3[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="price_grade_4_USD">{{ __('Grade 4 Price') }}</label>
                                                    <input type="text" name="price_grade_4[USD]" id="price_grade_4_USD" value="{{ old('price_grade_4[USD]', $RS_Row->price_grade_4['USD'] ?? '') }}" class="cal_price_grade form-control{{ $errors->has('price_grade_4[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Price') }}" required>

                                                    @if ($errors->has('price_grade_4[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('price_grade_4[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="total_price_grade_4_USD">{{ __('Grade 4 Yearly Price') }}</label>
                                                    <input type="text" name="total_price_grade_4[USD]" id="total_price_grade_4_USD" value="{{ old('total_price_grade_4[USD]', $RS_Row->total_price_grade_4['USD'] ?? '') }}" class="form-control{{ $errors->has('total_price_grade_4[USD]') ? ' is-invalid' : '' }}" placeholder="{{ __('Yearly Price') }}" required>

                                                    @if ($errors->has('total_price_grade_4[USD]'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('total_price_grade_4[USD]') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
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

<!-- Page specific script -->
<script>
$(function () {
    $(".cal_price_grade").on('blur', function (e) {
        e.preventDefault();

        var price = $(this).val();
        var id = $(this).attr('id');
        // console.log(id);

        $('#total_'+id).val(price * 12);
    });
});
</script>
@endsection