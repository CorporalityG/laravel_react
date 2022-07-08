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
							<label for="banner_heading">{{ __('Heading') }}</label>
							<input type="text" name="banner_heading" id="banner_heading" value="{{ old('banner_heading', $RS_Meta['banner_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_title">{{ __('Title') }}</label>
							<input type="text" name="banner_title" id="banner_title" value="{{ old('banner_title', $RS_Meta['banner_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="banner_subtitle" id="banner_subtitle" value="{{ old('banner_subtitle', $RS_Meta['banner_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
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
							<label for="banner_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('banner_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_image" id="banner_image" value="{{ old('banner_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Why Marketing Models? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_title">{{ __('Title') }}</label>
							<input type="text" name="marketing_models_title" id="marketing_models_title" value="{{ old('marketing_models_title', $RS_Meta['marketing_models_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="marketing_models_subtitle" id="marketing_models_subtitle" value="{{ old('marketing_models_subtitle', $RS_Meta['marketing_models_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_description">{{ __('Description') }}</label>
							<textarea name="marketing_models_description" id="marketing_models_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_models_description', $RS_Meta['marketing_models_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="marketing_models_btn_text" id="marketing_models_btn_text" value="{{ old('marketing_models_btn_text', $RS_Meta['marketing_models_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="marketing_models_btn_link" id="marketing_models_btn_link" value="{{ old('marketing_models_btn_link', $RS_Meta['marketing_models_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_models_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_models_image" id="marketing_models_image" value="{{ old('marketing_models_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_models_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_models_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_models_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_models_image_caption">{{ __('Image Caption') }}</label>
							<input type="text" name="marketing_models_image_caption" id="marketing_models_image_caption" value="{{ old('marketing_models_image_caption', $RS_Meta['marketing_models_image_caption'] ?? '') }}" class="form-control" placeholder="{{ __('Image Caption') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Approach Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_title">{{ __('Title') }}</label>
							<input type="text" name="marketing_approach_title" id="marketing_approach_title" value="{{ old('marketing_approach_title', $RS_Meta['marketing_approach_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_description">{{ __('Description') }}</label>
							<textarea name="marketing_approach_description" id="marketing_approach_description" class="form-control marketing_approach_step_description" placeholder="{{ __('Description') }}">{{ old('marketing_approach_description', $RS_Meta['marketing_approach_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_1_title">{{ __('Step 1 Title') }}</label>
							<input type="text" name="marketing_approach_step_1_title" id="marketing_approach_step_1_title" value="{{ old('marketing_approach_step_1_title', $RS_Meta['marketing_approach_step_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_2_title">{{ __('Step 2 Title') }}</label>
							<input type="text" name="marketing_approach_step_2_title" id="marketing_approach_step_2_title" value="{{ old('marketing_approach_step_2_title', $RS_Meta['marketing_approach_step_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_3_title">{{ __('Step 3 Title') }}</label>
							<input type="text" name="marketing_approach_step_3_title" id="marketing_approach_step_3_title" value="{{ old('marketing_approach_step_3_title', $RS_Meta['marketing_approach_step_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_4_title">{{ __('Step 4 Title') }}</label>
							<input type="text" name="marketing_approach_step_4_title" id="marketing_approach_step_4_title" value="{{ old('marketing_approach_step_4_title', $RS_Meta['marketing_approach_step_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_5_title">{{ __('Step 5 Title') }}</label>
							<input type="text" name="marketing_approach_step_5_title" id="marketing_approach_step_5_title" value="{{ old('marketing_approach_step_5_title', $RS_Meta['marketing_approach_step_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_6_title">{{ __('Step 6 Title') }}</label>
							<input type="text" name="marketing_approach_step_6_title" id="marketing_approach_step_6_title" value="{{ old('marketing_approach_step_6_title', $RS_Meta['marketing_approach_step_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_approach_step_7_title">{{ __('Step 7 Title') }}</label>
							<input type="text" name="marketing_approach_step_7_title" id="marketing_approach_step_7_title" value="{{ old('marketing_approach_step_7_title', $RS_Meta['marketing_approach_step_7_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
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
	$('#marketing_models_description').summernote();
});
</script>