@extends('layouts.app')

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').' Research Paper')

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
                        @php $action = route('research-papers.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('research-papers.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($RS_Row) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="title">{{ __('Research Paper Title') }}</label>
                                    <input type="text" name="title" id="title" value="{{ old('title', $RS_Row->title ?? '') }}" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" placeholder="{{ __('Research Paper Title') }}" autofocus>

                                    @if ($errors->has('title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="slug">{{ __('Research Paper Slug') }}</label>
                                    <input type="text" name="slug" id="slug" value="{{ old('slug', $RS_Row->slug ?? '') }}" class="form-control{{ $errors->has('slug') ? ' is-invalid' : '' }}" placeholder="{{ __('Research Paper Slug') }}" autofocus>

                                    @if ($errors->has('slug'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('slug') }}</strong>
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
                                    <label>Publish Date and time:</label>
                                    <div class="input-group date" id="created_at_target" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" data-target="#created_at_target" name="created_at" id="created_at" />
                                        <div class="input-group-append" data-target="#created_at_target" data-toggle="datetimepicker">
                                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="image_file">{{ __('Image') }}</label>
                                    <div class="input-group{{ $errors->has('image_file') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="image_file" id="image_file" value="{{ old('image_file') }}" class="custom-file-input" placeholder="Image" accept="image/*">
                                            <label class="custom-file-label" for="image_file">Choose image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('image_file'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('image_file') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($RS_Row->image_file) )
                                        <img src="{{ url('uploads/'.$RS_Row->image_file) }}" alt="{{ $RS_Row->title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('research-papers.index') }}" class="btn btn-default float-right">Back</a>
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

    //Initialize Select2 Elements
    $('.select2').select2();

    //Date and time picker
    var defDateVal = '<?php echo $RS_Row->created_at ?? ''; ?>';
    var defaultDateVal = new Date();
    if( defDateVal!='' )
    {
        defaultDateVal = defDateVal;
    }
    $('#created_at_target').datetimepicker({
        icons: { time: 'far fa-clock' },
        format: 'yyyy-MM-DD HH:mm',
        defaultDate: defaultDateVal,
    });
    // $('#created_at').attr('readonly', 'readonly');

    <?php
    if( empty($RS_Row) )
    {
    ?>
        $("#title").on('blur', function (e) {
            e.preventDefault();

            var title = $(this).val();

            $.ajax({
                url:"<?php echo route('research-papers.slug'); ?>",
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
});
</script>
@endsection