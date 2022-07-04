<div class="row">
	<div class="col-12">

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Global Conference Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="global_conference_title">{{ __('Title') }}</label>
							<input type="text" name="global_conference_title" id="global_conference_title" value="{{ old('global_conference_title', $RS_Meta['global_conference_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="global_conference_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="global_conference_subtitle" id="global_conference_subtitle" value="{{ old('global_conference_subtitle', $RS_Meta['global_conference_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="global_conference_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="global_conference_btn_text" id="global_conference_btn_text" value="{{ old('global_conference_btn_text', $RS_Meta['global_conference_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="global_conference_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="global_conference_btn_link" id="global_conference_btn_link" value="{{ old('global_conference_btn_link', $RS_Meta['global_conference_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="global_conference_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('global_conference_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="global_conference_image" id="global_conference_image" value="{{ old('global_conference_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="global_conference_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['global_conference_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['global_conference_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="global_conference_bg_image">{{ __('Background Image') }}</label>
							<div class="input-group{{ $errors->has('global_conference_bg_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="global_conference_bg_image" id="global_conference_bg_image" value="{{ old('global_conference_bg_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="global_conference_bg_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['global_conference_bg_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['global_conference_bg_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>