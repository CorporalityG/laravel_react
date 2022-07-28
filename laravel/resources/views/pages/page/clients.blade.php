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
							<label for="banner_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('banner_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_image" id="banner_image" value="{{ old('banner_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>