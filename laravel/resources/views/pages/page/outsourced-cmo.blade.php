<div class="row">
	<div class="col-12">
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Banner Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_title">{{ __('Title') }}</label>
							<input type="text" name="banner_title" id="banner_title" value="{{ old('banner_title', $RS_Meta['banner_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="banner_subtitle" id="banner_subtitle" value="{{ old('banner_subtitle', $RS_Meta['banner_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_description">{{ __('Description') }}</label>
							<textarea name="banner_description" id="banner_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('banner_description', $RS_Meta['banner_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="banner_btn_text" id="banner_btn_text" value="{{ old('banner_btn_text', $RS_Meta['banner_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="banner_btn_link" id="banner_btn_link" value="{{ old('banner_btn_link', $RS_Meta['banner_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('banner_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_video" id="banner_video" value="{{ old('banner_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="banner_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['banner_video']) }}" type="video/mp4">
									Your browser does not support the video tag.
								</video>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Lifecycle Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_title">{{ __('Title') }}</label>
							<input type="text" name="lifecycle_title" id="lifecycle_title" value="{{ old('lifecycle_title', $RS_Meta['lifecycle_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_description">{{ __('Description') }}</label>
							<textarea name="lifecycle_description" id="lifecycle_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('lifecycle_description', $RS_Meta['lifecycle_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('lifecycle_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="lifecycle_image" id="lifecycle_image" value="{{ old('lifecycle_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="lifecycle_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['lifecycle_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['lifecycle_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="lifecycle_step_1_title" id="lifecycle_step_1_title" value="{{ old('lifecycle_step_1_title', $RS_Meta['lifecycle_step_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="lifecycle_step_1_description" id="lifecycle_step_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('lifecycle_step_1_description', $RS_Meta['lifecycle_step_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="lifecycle_step_2_title" id="lifecycle_step_2_title" value="{{ old('lifecycle_step_2_title', $RS_Meta['lifecycle_step_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="lifecycle_step_2_description" id="lifecycle_step_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('lifecycle_step_2_description', $RS_Meta['lifecycle_step_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="lifecycle_step_3_title" id="lifecycle_step_3_title" value="{{ old('lifecycle_step_3_title', $RS_Meta['lifecycle_step_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="lifecycle_step_3_description" id="lifecycle_step_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('lifecycle_step_3_description', $RS_Meta['lifecycle_step_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="lifecycle_step_4_title" id="lifecycle_step_4_title" value="{{ old('lifecycle_step_4_title', $RS_Meta['lifecycle_step_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="lifecycle_step_4_description" id="lifecycle_step_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('lifecycle_step_4_description', $RS_Meta['lifecycle_step_4_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="lifecycle_step_5_title" id="lifecycle_step_5_title" value="{{ old('lifecycle_step_5_title', $RS_Meta['lifecycle_step_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="lifecycle_step_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="lifecycle_step_5_description" id="lifecycle_step_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('lifecycle_step_5_description', $RS_Meta['lifecycle_step_5_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">What to expect? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_title">{{ __('Title') }}</label>
							<input type="text" name="what_expect_title" id="what_expect_title" value="{{ old('what_expect_title', $RS_Meta['what_expect_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="what_expect_subtitle" id="what_expect_subtitle" value="{{ old('what_expect_subtitle', $RS_Meta['what_expect_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_description">{{ __('Description') }}</label>
							<textarea name="what_expect_description" id="what_expect_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_description', $RS_Meta['what_expect_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="what_expect_btn_text" id="what_expect_btn_text" value="{{ old('what_expect_btn_text', $RS_Meta['what_expect_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="what_expect_btn_link" id="what_expect_btn_link" value="{{ old('what_expect_btn_link', $RS_Meta['what_expect_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('what_expect_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_image" id="what_expect_image" value="{{ old('what_expect_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Why hire? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_title">{{ __('Title') }}</label>
							<input type="text" name="why_hire_title" id="why_hire_title" value="{{ old('why_hire_title', $RS_Meta['why_hire_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_description">{{ __('Description') }}</label>
							<textarea name="why_hire_description" id="why_hire_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('why_hire_description', $RS_Meta['why_hire_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="why_hire_item_1_title" id="why_hire_item_1_title" value="{{ old('why_hire_item_1_title', $RS_Meta['why_hire_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_1_image" id="why_hire_item_1_image" value="{{ old('why_hire_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="why_hire_item_2_title" id="why_hire_item_2_title" value="{{ old('why_hire_item_2_title', $RS_Meta['why_hire_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_2_image" id="why_hire_item_2_image" value="{{ old('why_hire_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="why_hire_item_3_title" id="why_hire_item_3_title" value="{{ old('why_hire_item_3_title', $RS_Meta['why_hire_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_3_image" id="why_hire_item_3_image" value="{{ old('why_hire_item_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="why_hire_item_4_title" id="why_hire_item_4_title" value="{{ old('why_hire_item_4_title', $RS_Meta['why_hire_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_4_image" id="why_hire_item_4_image" value="{{ old('why_hire_item_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Frequently asked Questions Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_title">{{ __('Title') }}</label>
							<input type="text" name="faq_title" id="faq_title" value="{{ old('faq_title', $RS_Meta['faq_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="faq_subtitle" id="faq_subtitle" value="{{ old('faq_subtitle', $RS_Meta['faq_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_1_title">{{ __('FAQ 1 Title') }}</label>
							<input type="text" name="faq_item_1_title" id="faq_item_1_title" value="{{ old('faq_item_1_title', $RS_Meta['faq_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_1_description">{{ __('FAQ 1 Description') }}</label>
							<textarea name="faq_item_1_description" id="faq_item_1_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_1_description', $RS_Meta['faq_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_2_title">{{ __('FAQ 2 Title') }}</label>
							<input type="text" name="faq_item_2_title" id="faq_item_2_title" value="{{ old('faq_item_2_title', $RS_Meta['faq_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_2_description">{{ __('FAQ 2 Description') }}</label>
							<textarea name="faq_item_2_description" id="faq_item_2_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_2_description', $RS_Meta['faq_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_3_title">{{ __('FAQ 3 Title') }}</label>
							<input type="text" name="faq_item_3_title" id="faq_item_3_title" value="{{ old('faq_item_3_title', $RS_Meta['faq_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_3_description">{{ __('FAQ 3 Description') }}</label>
							<textarea name="faq_item_3_description" id="faq_item_3_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_3_description', $RS_Meta['faq_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

<!-- Page specific script -->
<script>
$(function () {
    // Summernote
    $('.faq_description').summernote();
	$('#what_expect_description').summernote();
});
</script>