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
							<textarea name="banner_description" id="banner_description" class="form-control" placeholder="{{ __('Description') }}" rows="10">{{ old('banner_description', $RS_Meta['banner_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="banner_btn_1_text" id="banner_btn_1_text" value="{{ old('banner_btn_1_text', $RS_Meta['banner_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_btn_1_link">{{ __('Button 1 Link') }}</label>
							<input type="text" name="banner_btn_1_link" id="banner_btn_1_link" value="{{ old('banner_btn_1_link', $RS_Meta['banner_btn_1_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="banner_btn_2_text" id="banner_btn_2_text" value="{{ old('banner_btn_2_text', $RS_Meta['banner_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_btn_2_link">{{ __('Button 2 Link') }}</label>
							<input type="text" name="banner_btn_2_link" id="banner_btn_2_link" value="{{ old('banner_btn_2_link', $RS_Meta['banner_btn_2_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Factor driving conclusion Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_title">{{ __('Title') }}</label>
							<input type="text" name="factor_driving_title" id="factor_driving_title" value="{{ old('factor_driving_title', $RS_Meta['factor_driving_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_subtitle">{{ __('SubTitle') }}</label>
							<textarea name="factor_driving_subtitle" id="factor_driving_subtitle" class="form-control" placeholder="{{ __('SubTitle') }}">{{ old('factor_driving_subtitle', $RS_Meta['factor_driving_subtitle'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="factor_driving_btn_text" id="factor_driving_btn_text" value="{{ old('factor_driving_btn_text', $RS_Meta['factor_driving_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="factor_driving_btn_link" id="factor_driving_btn_link" value="{{ old('factor_driving_btn_link', $RS_Meta['factor_driving_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button 1 Link') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_description">{{ __('Description') }}</label>
							<textarea name="factor_driving_description" id="factor_driving_description" class="form-control" placeholder="{{ __('Description') }}" rows="10">{{ old('factor_driving_description', $RS_Meta['factor_driving_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('factor_driving_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="factor_driving_image" id="factor_driving_image" value="{{ old('factor_driving_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="factor_driving_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['factor_driving_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['factor_driving_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="factor_driving_item_1_title" id="factor_driving_item_1_title" value="{{ old('factor_driving_item_1_title', $RS_Meta['factor_driving_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="factor_driving_item_1_description" id="factor_driving_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('factor_driving_item_1_description', $RS_Meta['factor_driving_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="factor_driving_item_2_title" id="factor_driving_item_2_title" value="{{ old('factor_driving_item_2_title', $RS_Meta['factor_driving_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="factor_driving_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="factor_driving_item_2_description" id="factor_driving_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('factor_driving_item_2_description', $RS_Meta['factor_driving_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Origin of Corporality Effect Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="origin_framework_title">{{ __('Title') }}</label>
							<input type="text" name="origin_framework_title" id="origin_framework_title" value="{{ old('origin_framework_title', $RS_Meta['origin_framework_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="origin_framework_description">{{ __('Description') }}</label>
							<textarea name="origin_framework_description" id="origin_framework_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('origin_framework_description', $RS_Meta['origin_framework_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="origin_framework_understand_title">{{ __('Understand Title') }}</label>
							<input type="text" name="origin_framework_understand_title" id="origin_framework_understand_title" value="{{ old('origin_framework_understand_title', $RS_Meta['origin_framework_understand_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="origin_framework_understand_description">{{ __('Understand Description') }}</label>
							<textarea name="origin_framework_understand_description" id="origin_framework_understand_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('origin_framework_understand_description', $RS_Meta['origin_framework_understand_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Why is this effective? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_effective_title">{{ __('Title') }}</label>
							<input type="text" name="why_effective_title" id="why_effective_title" value="{{ old('why_effective_title', $RS_Meta['why_effective_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="why_effective_description">{{ __('Description') }}</label>
							<textarea name="why_effective_description" id="why_effective_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('why_effective_description', $RS_Meta['why_effective_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Maximise your profitability? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="profitability_title_1">{{ __('Title 1') }}</label>
							<input type="text" name="profitability_title_1" id="profitability_title_1" value="{{ old('profitability_title_1', $RS_Meta['profitability_title_1'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="profitability_title_2">{{ __('Title 2') }}</label>
							<input type="text" name="profitability_title_2" id="profitability_title_2" value="{{ old('profitability_title_2', $RS_Meta['profitability_title_2'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="profitability_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="profitability_subtitle" id="profitability_subtitle" value="{{ old('profitability_subtitle', $RS_Meta['profitability_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="profitability_description">{{ __('Description') }}</label>
							<textarea name="profitability_description" id="profitability_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('profitability_description', $RS_Meta['profitability_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="profitability_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="profitability_btn_text" id="profitability_btn_text" value="{{ old('profitability_btn_text', $RS_Meta['profitability_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="profitability_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="profitability_btn_link" id="profitability_btn_link" value="{{ old('profitability_btn_link', $RS_Meta['profitability_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Key Elements of the Framework Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_title">{{ __('Title') }}</label>
							<input type="text" name="key_elements_title" id="key_elements_title" value="{{ old('key_elements_title', $RS_Meta['key_elements_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="key_elements_item_1_title" id="key_elements_item_1_title" value="{{ old('key_elements_item_1_title', $RS_Meta['key_elements_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('key_elements_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="key_elements_item_1_icon" id="key_elements_item_1_icon" value="{{ old('key_elements_item_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="key_elements_item_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['key_elements_item_1_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['key_elements_item_1_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="key_elements_item_2_title" id="key_elements_item_2_title" value="{{ old('key_elements_item_2_title', $RS_Meta['key_elements_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('key_elements_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="key_elements_item_2_icon" id="key_elements_item_2_icon" value="{{ old('key_elements_item_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="key_elements_item_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['key_elements_item_2_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['key_elements_item_2_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="key_elements_item_3_title" id="key_elements_item_3_title" value="{{ old('key_elements_item_3_title', $RS_Meta['key_elements_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('key_elements_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="key_elements_item_3_icon" id="key_elements_item_3_icon" value="{{ old('key_elements_item_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="key_elements_item_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['key_elements_item_3_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['key_elements_item_3_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="key_elements_item_4_title" id="key_elements_item_4_title" value="{{ old('key_elements_item_4_title', $RS_Meta['key_elements_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_4_icon">{{ __('Item 4 Icon') }}</label>
							<div class="input-group{{ $errors->has('key_elements_item_4_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="key_elements_item_4_icon" id="key_elements_item_4_icon" value="{{ old('key_elements_item_4_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="key_elements_item_4_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['key_elements_item_4_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['key_elements_item_4_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="key_elements_item_5_title" id="key_elements_item_5_title" value="{{ old('key_elements_item_5_title', $RS_Meta['key_elements_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_item_5_icon">{{ __('Item 5 Icon') }}</label>
							<div class="input-group{{ $errors->has('key_elements_item_5_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="key_elements_item_5_icon" id="key_elements_item_5_icon" value="{{ old('key_elements_item_5_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="key_elements_item_5_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['key_elements_item_5_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['key_elements_item_5_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
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
    $('#banner_description').summernote();
	$('#factor_driving_description').summernote();
	$('#origin_framework_understand_description').summernote();
	$('#origin_framework_description').summernote();
	$('#why_effective_description').summernote();
	$('#profitability_description').summernote();
});
</script>