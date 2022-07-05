@extends('layouts.app')

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').' Client')

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
                        @php $action = route('clients.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('clients.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($RS_Row) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="client_name">{{ __('Client Name') }}</label>
                                    <input type="text" name="client_name" id="client_name" value="{{ old('client_name', $RS_Row->client_name ?? '') }}" class="form-control{{ $errors->has('client_name') ? ' is-invalid' : '' }}" placeholder="{{ __('Client Name') }}" autofocus>

                                    @if ($errors->has('client_name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('client_name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="slug">{{ __('Slug') }}</label>
                                    <input type="text" name="slug" id="slug" value="{{ old('slug', $RS_Row->slug ?? '') }}" class="form-control{{ $errors->has('slug') ? ' is-invalid' : '' }}" placeholder="{{ __('Slug') }}" autofocus>

                                    @if ($errors->has('slug'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('slug') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="logo">{{ __('Logo') }}</label>
                                    <div class="input-group{{ $errors->has('logo') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="logo" id="logo" value="{{ old('logo') }}" class="custom-file-input" accept="image/*">
                                            <label class="custom-file-label" for="logo">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('logo'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('logo') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->logo) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->logo) }}" alt="Logo" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="logo_icon">{{ __('Logo Icon') }}</label>
                                    <div class="input-group{{ $errors->has('logo_icon') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="logo_icon" id="logo_icon" value="{{ old('logo_icon') }}" class="custom-file-input" accept="image/*">
                                            <label class="custom-file-label" for="logo_icon">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('logo_icon'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('logo_icon') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->logo_icon) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->logo_icon) }}" alt="Logo Icon" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="title">{{ __('Title') }}</label>
                                    <input type="text" name="title" id="title" value="{{ old('title', $RS_Row->title ?? '') }}" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" placeholder="{{ __('Title') }}">

                                    @if ($errors->has('title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="short_description">{{ __('Short Description') }}</label>
                                    <textarea name="short_description" id="short_description" class="form-control{{ $errors->has('short_description') ? ' is-invalid' : '' }}" placeholder="{{ __('Short Description') }}">{{ old('short_description', $RS_Row->short_description ?? '') }}</textarea>

                                    @if ($errors->has('short_description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('short_description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="glance_1_title">{{ __('Glance 1 Title') }}</label>
                                    <input type="text" name="glance_1_title" id="glance_1_title" value="{{ old('glance_1_title', $RS_Row->glance_1_title ?? '') }}" class="form-control{{ $errors->has('glance_1_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Title') }}">

                                    @if ($errors->has('glance_1_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('glance_1_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="glance_1_image">{{ __('Glance 1 Image') }}</label>
                                    <div class="input-group{{ $errors->has('glance_1_image') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="glance_1_image" id="glance_1_image" value="{{ old('glance_1_image') }}" class="custom-file-input" accept="image/*">
                                            <label class="custom-file-label" for="glance_1_image">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('glance_1_image'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('glance_1_image') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->glance_1_image) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->glance_1_image) }}" alt="{{ $RS_Row->glance_1_title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="glance_2_title">{{ __('Glance 2 Title') }}</label>
                                    <input type="text" name="glance_2_title" id="glance_2_title" value="{{ old('glance_2_title', $RS_Row->glance_2_title ?? '') }}" class="form-control{{ $errors->has('glance_2_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Title') }}">

                                    @if ($errors->has('glance_2_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('glance_2_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="glance_2_image">{{ __('Glance 2 Image') }}</label>
                                    <div class="input-group{{ $errors->has('glance_2_image') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="glance_2_image" id="glance_2_image" value="{{ old('glance_2_image') }}" class="custom-file-input" accept="image/*">
                                            <label class="custom-file-label" for="glance_2_image">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('glance_2_image'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('glance_2_image') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->glance_2_image) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->glance_2_image) }}" alt="{{ $RS_Row->glance_2_title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="glance_3_title">{{ __('Glance 3 Title') }}</label>
                                    <input type="text" name="glance_3_title" id="glance_3_title" value="{{ old('glance_3_title', $RS_Row->glance_3_title ?? '') }}" class="form-control{{ $errors->has('glance_3_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Title') }}">

                                    @if ($errors->has('glance_3_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('glance_3_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="glance_3_image">{{ __('Glance 3 Image') }}</label>
                                    <div class="input-group{{ $errors->has('glance_3_image') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="glance_3_image" id="glance_3_image" value="{{ old('glance_3_image') }}" class="custom-file-input" accept="image/*">
                                            <label class="custom-file-label" for="glance_3_image">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('glance_3_image'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('glance_3_image') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->glance_3_image) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->glance_3_image) }}" alt="{{ $RS_Row->glance_3_title }}" class="max-height-150 mt-3">
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
                                    <label for="video_url_iframe">{{ __('Video Iframe') }}</label>
                                    <textarea name="video_url_iframe" id="video_url_iframe" class="form-control{{ $errors->has('video_url_iframe') ? ' is-invalid' : '' }}" placeholder="{{ __('Video Iframe') }}">{{ old('video_url_iframe', $RS_Row->video_url_iframe ?? '') }}</textarea>

                                    @if ($errors->has('video_url_iframe'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('video_url_iframe') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="video_thumnail">{{ __('Video Thumnail') }}</label>
                                    <div class="input-group{{ $errors->has('video_thumnail') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="video_thumnail" id="video_thumnail" value="{{ old('video_thumnail') }}" class="custom-file-input" accept="image/*">
                                            <label class="custom-file-label" for="video_thumnail">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('video_thumnail'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('video_thumnail') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->video_thumnail) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->video_thumnail) }}" alt="Video Thumnail" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="quote">{{ __('Quote') }}</label>
                                    <textarea name="quote" id="quote" class="form-control{{ $errors->has('quote') ? ' is-invalid' : '' }}" placeholder="{{ __('Quote') }}">{{ old('quote', $RS_Row->quote ?? '') }}</textarea>

                                    @if ($errors->has('quote'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('quote') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="business_level_title">{{ __('Business Level Title') }}</label>
                                    <input type="text" name="business_level_title" id="business_level_title" value="{{ old('business_level_title', $RS_Row->business_level_title ?? '') }}" class="form-control{{ $errors->has('business_level_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Business Level Title') }}">

                                    @if ($errors->has('business_level_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('business_level_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="business_level_description">{{ __('Business Level Description') }}</label>
                                    <textarea name="business_level_description" id="business_level_description" class="form-control{{ $errors->has('business_level_description') ? ' is-invalid' : '' }}" placeholder="{{ __('Business Level Description') }}">{{ old('business_level_description', $RS_Row->business_level_description ?? '') }}</textarea>

                                    @if ($errors->has('business_level_description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('business_level_description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
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

                            <div class="col-md-12">
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

                            <div class="col-md-12">
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

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="image">{{ __('Image') }}</label>
                                    <div class="input-group{{ $errors->has('image') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="image" id="image" value="{{ old('image') }}" class="custom-file-input" placeholder="Image" accept="image/*">
                                            <label class="custom-file-label" for="image">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('image'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('image') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->image) )
                                        <img src="{{ url('uploads/clients/'.$RS_Row->image) }}" alt="{{ $RS_Row->client_name }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('clients.index') }}" class="btn btn-default float-right">Back</a>
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
    $('#description').summernote();

    <?php
    if( empty($RS_Row) )
    {
    ?>
        $("#client_name").on('blur', function (e) {
            e.preventDefault();

            var client_name = $(this).val();

            $.ajax({
                url:"<?php echo route('clients.slug'); ?>",
                cache: false,
                data: {
                    client_name: client_name,
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
});
</script>
@endsection