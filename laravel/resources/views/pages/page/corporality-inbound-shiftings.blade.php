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
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Commitment Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_title">{{ __('Title') }}</label>
							<input type="text" name="commitment_title" id="commitment_title" value="{{ old('commitment_title', $RS_Meta['commitment_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_description">{{ __('Description') }}</label>
							<textarea name="commitment_description" id="commitment_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('commitment_description', $RS_Meta['commitment_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">What is Inbound Shifting? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="shifting_title">{{ __('Title') }}</label>
							<input type="text" name="shifting_title" id="shifting_title" value="{{ old('shifting_title', $RS_Meta['shifting_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="shifting_description">{{ __('Description') }}</label>
							<textarea name="shifting_description" id="shifting_description" class="form-control" placeholder="{{ __('Description') }}" rows="10">{{ old('shifting_description', $RS_Meta['shifting_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="shifting_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('shifting_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="shifting_image" id="shifting_image" value="{{ old('shifting_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="shifting_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['shifting_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['shifting_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Curious How We Do It? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_title">{{ __('Title') }}</label>
							<input type="text" name="curious_title" id="curious_title" value="{{ old('curious_title', $RS_Meta['curious_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_description">{{ __('Description') }}</label>
							<textarea name="curious_description" id="curious_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('curious_description', $RS_Meta['curious_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="curious_item_1_title" id="curious_item_1_title" value="{{ old('curious_item_1_title', $RS_Meta['curious_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_item_1_description">{{ __('Item 1  Description') }}</label>
							<textarea name="curious_item_1_description" id="curious_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('curious_item_1_description', $RS_Meta['curious_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="curious_item_2_title" id="curious_item_2_title" value="{{ old('curious_item_2_title', $RS_Meta['curious_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_item_2_description">{{ __('Item 2  Description') }}</label>
							<textarea name="curious_item_2_description" id="curious_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('curious_item_2_description', $RS_Meta['curious_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="curious_item_3_title" id="curious_item_3_title" value="{{ old('curious_item_3_title', $RS_Meta['curious_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="curious_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="curious_item_3_description" id="curious_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('curious_item_3_description', $RS_Meta['curious_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">What Problems Do We Tackle? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="problems_tackle_title">{{ __('Title') }}</label>
							<input type="text" name="problems_tackle_title" id="problems_tackle_title" value="{{ old('problems_tackle_title', $RS_Meta['problems_tackle_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="problems_tackle_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="problems_tackle_subtitle" id="problems_tackle_subtitle" value="{{ old('problems_tackle_subtitle', $RS_Meta['problems_tackle_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="problems_tackle_description">{{ __('Description') }}</label>
							<textarea name="problems_tackle_description" id="problems_tackle_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('problems_tackle_description', $RS_Meta['problems_tackle_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="problems_tackle_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('problems_tackle_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="problems_tackle_image" id="problems_tackle_image" value="{{ old('problems_tackle_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="problems_tackle_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['problems_tackle_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['problems_tackle_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="problems_tackle_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">How Does It Work? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_title">{{ __('Title') }}</label>
							<input type="text" name="work_title" id="work_title" value="{{ old('work_title', $RS_Meta['work_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="work_subtitle" id="work_subtitle" value="{{ old('work_subtitle', $RS_Meta['work_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="work_item_1_title" id="work_item_1_title" value="{{ old('work_item_1_title', $RS_Meta['work_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="work_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="work_item_1_description" id="work_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_item_1_description', $RS_Meta['work_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('work_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_item_1_icon" id="work_item_1_icon" value="{{ old('work_item_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="work_item_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="work_item_2_title" id="work_item_2_title" value="{{ old('work_item_2_title', $RS_Meta['work_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="work_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="work_item_2_description" id="work_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_item_2_description', $RS_Meta['work_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('work_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_item_2_icon" id="work_item_2_icon" value="{{ old('work_item_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="work_item_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="work_item_3_title" id="work_item_3_title" value="{{ old('work_item_3_title', $RS_Meta['work_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="work_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="work_item_3_description" id="work_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_item_3_description', $RS_Meta['work_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('work_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_item_3_icon" id="work_item_3_icon" value="{{ old('work_item_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="work_item_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="work_item_4_title" id="work_item_4_title" value="{{ old('work_item_4_title', $RS_Meta['work_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="work_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="work_item_4_description" id="work_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_item_4_description', $RS_Meta['work_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_4_icon">{{ __('Item 4 Icon') }}</label>
							<div class="input-group{{ $errors->has('work_item_4_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_item_4_icon" id="work_item_4_icon" value="{{ old('work_item_4_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_4_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_4_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_4_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="work_item_4_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Model Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_model_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_model_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_model_image" id="marketing_model_image" value="{{ old('marketing_model_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_model_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_model_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_model_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="marketing_model_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
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
	$('#shifting_description').summernote();
	$('#problems_tackle_description').summernote();
});
</script>