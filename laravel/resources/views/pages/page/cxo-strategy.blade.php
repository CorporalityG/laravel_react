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
				<h4 class="card-title text-dark w-100">The fifth role of the CXO - Guide Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_title">{{ __('Title') }}</label>
							<input type="text" name="guide_title" id="guide_title" value="{{ old('guide_title', $RS_Meta['guide_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_description">{{ __('Description') }}</label>
							<textarea name="guide_description" id="guide_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('guide_description', $RS_Meta['guide_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('guide_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="guide_image" id="guide_image" value="{{ old('guide_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="guide_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['guide_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['guide_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="guide_item_1_title" id="guide_item_1_title" value="{{ old('guide_item_1_title', $RS_Meta['guide_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('guide_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="guide_item_1_image" id="guide_item_1_image" value="{{ old('guide_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="guide_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['guide_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['guide_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="guide_item_2_title" id="guide_item_2_title" value="{{ old('guide_item_2_title', $RS_Meta['guide_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('guide_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="guide_item_2_image" id="guide_item_2_image" value="{{ old('guide_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="guide_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['guide_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['guide_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="guide_item_3_title" id="guide_item_3_title" value="{{ old('guide_item_3_title', $RS_Meta['guide_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('guide_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="guide_item_3_image" id="guide_item_3_image" value="{{ old('guide_item_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="guide_item_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['guide_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['guide_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="guide_item_4_title" id="guide_item_4_title" value="{{ old('guide_item_4_title', $RS_Meta['guide_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="guide_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('guide_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="guide_item_4_image" id="guide_item_4_image" value="{{ old('guide_item_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="guide_item_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['guide_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['guide_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
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

                    <div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_image_caption">{{ __('Image Caption') }}</label>
							<input type="text" name="what_expect_image_caption" id="what_expect_image_caption" value="{{ old('what_expect_image_caption', $RS_Meta['what_expect_image_caption'] ?? '') }}" class="form-control" placeholder="{{ __('Image Caption') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Leverage the on-Demand model Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_title">{{ __('Title') }}</label>
							<input type="text" name="leverage_model_title" id="leverage_model_title" value="{{ old('leverage_model_title', $RS_Meta['leverage_model_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_description">{{ __('Description') }}</label>
							<textarea name="leverage_model_description" id="leverage_model_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('leverage_model_description', $RS_Meta['leverage_model_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="leverage_model_item_1_title" id="leverage_model_item_1_title" value="{{ old('leverage_model_item_1_title', $RS_Meta['leverage_model_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('leverage_model_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="leverage_model_item_1_image" id="leverage_model_item_1_image" value="{{ old('leverage_model_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="leverage_model_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['leverage_model_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['leverage_model_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="leverage_model_item_2_title" id="leverage_model_item_2_title" value="{{ old('leverage_model_item_2_title', $RS_Meta['leverage_model_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('leverage_model_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="leverage_model_item_2_image" id="leverage_model_item_2_image" value="{{ old('leverage_model_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="leverage_model_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['leverage_model_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['leverage_model_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="leverage_model_item_3_title" id="leverage_model_item_3_title" value="{{ old('leverage_model_item_3_title', $RS_Meta['leverage_model_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('leverage_model_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="leverage_model_item_3_image" id="leverage_model_item_3_image" value="{{ old('leverage_model_item_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="leverage_model_item_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['leverage_model_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['leverage_model_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="leverage_model_item_4_title" id="leverage_model_item_4_title" value="{{ old('leverage_model_item_4_title', $RS_Meta['leverage_model_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="leverage_model_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('leverage_model_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="leverage_model_item_4_image" id="leverage_model_item_4_image" value="{{ old('leverage_model_item_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="leverage_model_item_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['leverage_model_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['leverage_model_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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