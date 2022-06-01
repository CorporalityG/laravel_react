@extends('layouts.app')

@section('Title', (!empty($RS_Row) ? 'Edit' : 'Add').' Industrial Article')

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
                        @php $action = route('industrial-articles.update', $RS_Row->id); @endphp
                    @else
                        @php $action = route('industrial-articles.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($RS_Row) ) {{ method_field('PUT') }} @endif
                        
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
                                    <label for="subtitle">{{ __('Subtitle') }}</label>
                                    <input type="text" name="subtitle" id="subtitle" value="{{ old('subtitle', $RS_Row->subtitle ?? '') }}" class="form-control{{ $errors->has('subtitle') ? ' is-invalid' : '' }}" placeholder="{{ __('Subtitle') }}">

                                    @if ($errors->has('subtitle'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('subtitle') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="categories_id">{{ __('Category') }}</label>
                                    <div class="select2-info">
                                        <select name="categories_id[]" id="categories_id" class="select2 form-control{{ $errors->has('category_id') ? ' is-invalid' : '' }}" data-placeholder="{{ __('-- Select Category --') }}" data-dropdown-css-class="select2-info">
                                            <option value="0">{{ __('-- Select Category --') }}</option>
                                            @forelse( $categories as $Key=>$Val )
                                                <option value="{{ $Key }}" @if( !empty($categories_id) && in_array($Key, $categories_id) ) selected @endif>{{ $Val }}</option>
                                            @empty
                                            @endforelse
                                        </select>
                                    </div>

                                    @if ($errors->has('categories_id'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('categories_id') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <div id="subcategories_list">
                                    <div class="form-group">
                                        <label for="subcategories_id">{{ __('SubCategory') }}</label>
                                        <div class="select2-purple">
                                            <select name="subcategories_id[]" id="subcategories_id" multiple="multiple" class="select2 form-control{{ $errors->has('subcategories_id') ? ' is-invalid' : '' }}" data-placeholder="{{ __('-- Select Category --') }}" data-dropdown-css-class="select2-purple">
                                            </select>
                                        </div>

                                        @if ($errors->has('subcategories_id'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('subcategories_id') }}</strong>
                                            </span>
                                        @endif
                                    </div>
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
                                        <img src="{{ url('uploads/'.$RS_Row->image) }}" alt="{{ $RS_Row->title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('industrial-articles.index') }}" class="btn btn-default float-right">Back</a>
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
                url:"<?php echo route('industrial-articles.slug'); ?>",
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

    // subcategories start
    $(document).on('change', "#categories_id", function (e) {
        e.preventDefault();

        var category_id = $(this).val();

        subcategories_data(category_id);
    });

    subcategories_data('@php echo !empty($categories_id[0]) ? $categories_id[0] : 0; @endphp', "@php echo $subcategories_id @endphp");

    function subcategories_data(category_id, subcategories_id='')
    {
        // console.log(subcategories_id); return false;
        $.ajax({
            url:"<?php echo route('industrial-article-categories.subcategories'); ?>",
            cache: false,
            data: {
                category_id: category_id,
                subcategories_id: subcategories_id,
            },
            beforeSend: function() {
                // Show image container
                // jQuery("#loader").show();
            },
            success: function(response) {
                jQuery('#subcategories_list').html(response.subcategories);
            },
            complete:function(data) {
                // Hide image container
                // jQuery("#loader").hide();
            }
        });
    }
    // subcategories end
})
</script>
@endsection