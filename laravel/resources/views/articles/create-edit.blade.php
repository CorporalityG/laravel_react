@extends('layouts.app')

@section('Title', (!empty($article) ? 'Edit' : 'Add').' Article')

@section('content')

	<div class="row">
        <div class="col-md-12">
            @include('layouts.messages')
            
            <div class="card card-info">
                <div class="card-header">
                    <h4 class="card-title">@yield('Title')</h4>
                </div>

                <div class="card-body">
                    @if( !empty($article) )
                        @php $action = route('articles.update', $article->id); @endphp
                    @else
                        @php $action = route('articles.store'); @endphp
                    @endif
                    <form method="POST" action="{{ $action }}" enctype="multipart/form-data">
                        @csrf
                        @if( !empty($article) ) {{ method_field('PUT') }} @endif
                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="article_title">{{ __('Article Title') }}</label>
                                    <input type="text" name="article_title" id="article_title" value="{{ old('article_title', $article->article_title ?? '') }}" class="form-control{{ $errors->has('article_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Article Title') }}" autofocus>

                                    @if ($errors->has('article_title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('article_title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="article_slug">{{ __('Article Slug') }}</label>
                                    <input type="text" name="article_slug" id="article_slug" value="{{ old('article_slug', $article->article_slug ?? '') }}" class="form-control{{ $errors->has('article_slug') ? ' is-invalid' : '' }}" placeholder="{{ __('Article Slug') }}" autofocus>

                                    @if ($errors->has('article_slug'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('article_slug') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="article_subtitle">{{ __('Article Subtitle') }}</label>
                                    <input type="text" name="article_subtitle" id="article_subtitle" value="{{ old('article_subtitle', $article->article_subtitle ?? '') }}" class="form-control{{ $errors->has('article_subtitle') ? ' is-invalid' : '' }}" placeholder="{{ __('Article Subtitle') }}">

                                    @if ($errors->has('article_subtitle'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('article_subtitle') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="article_short_description">{{ __('Short Description') }}</label>
                                    <textarea name="article_short_description" id="article_short_description" class="form-control{{ $errors->has('article_short_description') ? ' is-invalid' : '' }}" placeholder="{{ __('Short Description') }}">{{ old('article_short_description', $article->article_short_description ?? '') }}</textarea>

                                    @if ($errors->has('article_short_description'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('article_short_description') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="categories_id">{{ __('Category') }}</label>
                                    <div class="select2-purple">
                                        <select name="categories_id[]" id="categories_id" multiple="multiple" class="select2 form-control{{ $errors->has('category_id') ? ' is-invalid' : '' }}" data-placeholder="{{ __('-- Select Category --') }}" data-dropdown-css-class="select2-purple">
                                            @forelse( $categories as $Key=>$Val )
                                                <option value="{{ $Key }}" @if( !empty($article_categories_id) && in_array($Key, $article_categories_id) ) selected @endif>{{ $Val }}</option>
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

                            @forelse( $tags as $Key=>$Val )
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="description_{{ $Key }}">{{ $Val }} {{ __('Description') }}</label>
                                        <textarea name="description[{{ $Key }}]" id="description_{{ $Key }}" class="form-control tag_description{{ $errors->has('description') ? ' is-invalid' : '' }}" placeholder="{{ __('Description') }}" rows="10">{{ old('description', $article->description ?? '') }}</textarea>

                                        @if ($errors->has('description'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('description') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                            @empty
                            @endforelse

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="meta_title">{{ __('Meta Title (Page Title)') }}</label>
                                    <input type="text" name="meta_title" id="meta_title" value="{{ old('meta_title', $article->meta_title ?? '') }}" class="form-control{{ $errors->has('meta_title') ? ' is-invalid' : '' }}" placeholder="{{ __('Meta Title (Page Title)') }}">

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
                                    <input type="text" name="meta_keywords" id="meta_keywords" value="{{ old('meta_keywords', $article->meta_keywords ?? '') }}" class="form-control{{ $errors->has('meta_keywords') ? ' is-invalid' : '' }}" placeholder="{{ __('Meta Keywords') }}">

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
                                    <textarea name="meta_description" id="meta_description" class="form-control{{ $errors->has('meta_description') ? ' is-invalid' : '' }}" placeholder="{{ __('Meta Description') }}">{{ old('meta_description', $article->meta_description ?? '') }}</textarea>

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
                                    <label for="article_image">{{ __('Article Image') }}</label>
                                    <div class="input-group{{ $errors->has('article_image') ? ' is-invalid' : '' }}">
                                        <div class="custom-file">
                                            <input type="file" name="article_image" id="article_image" value="{{ old('article_image') }}" class="custom-file-input" placeholder="Article Image" accept="image/*">
                                            <label class="custom-file-label" for="article_image">Choose Article image</label>
                                        </div>
                                    </div>

                                    @if ($errors->has('article_image'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('article_image') }}</strong>
                                        </span>
                                    @endif

                                    @if( !empty($article->article_image) )
                                        <img src="{{ url('uploads/'.$article->article_image) }}" alt="{{ $article->article_title }}" class="max-height-150 mt-3">
                                    @endif
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-info btn-fill">Submit</button>
                        <a href="{{ route('articles.index') }}" class="btn btn-default float-right">Back</a>
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
    $('#article_short_description').summernote();
    $('.tag_description').summernote();

    //Initialize Select2 Elements
    $('.select2').select2();

    //Date and time picker
    var defDateVal = '<?php echo $article->created_at ?? ''; ?>';
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
    if( empty($article) )
    {
    ?>
        $("#article_title").on('blur', function (e) {
            e.preventDefault();

            var article_title = $(this).val();

            $.ajax({
                url:"<?php echo route('articles.slug'); ?>",
                cache: false,
                data: {
                    title: article_title,
                },
                beforeSend: function(){
                    // Show image container
                    // jQuery("#loader").show();
                },
                success: function(response){
                    // console.log(response);
                    $('#article_slug').val(response);
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