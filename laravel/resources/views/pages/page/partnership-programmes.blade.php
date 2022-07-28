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
							<input type="text" name="banner_title" id="banner_title" value="{{ old('banner_title', $RS_Meta['banner_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
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
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Conversations Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="conversation_title">{{ __('Title') }}</label>
							<input type="text" name="conversation_title" id="conversation_title" value="{{ old('conversation_title', $RS_Meta['conversation_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="conversation_description">{{ __('Description') }}</label>
							<textarea name="conversation_description" id="conversation_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('conversation_description', $RS_Meta['conversation_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="conversation_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="conversation_btn_text" id="conversation_btn_text" value="{{ old('conversation_btn_text', $RS_Meta['conversation_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="conversation_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="conversation_btn_link" id="conversation_btn_link" value="{{ old('conversation_btn_link', $RS_Meta['conversation_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="conversation_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('conversation_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="conversation_image" id="conversation_image" value="{{ old('conversation_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="conversation_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['conversation_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['conversation_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="conversation_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Discovery Calls Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="discovery_calls_title">{{ __('Title') }}</label>
							<input type="text" name="discovery_calls_title" id="discovery_calls_title" value="{{ old('discovery_calls_title', $RS_Meta['discovery_calls_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="discovery_calls_description">{{ __('Description') }}</label>
							<textarea name="discovery_calls_description" id="discovery_calls_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('discovery_calls_description', $RS_Meta['discovery_calls_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="discovery_calls_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="discovery_calls_btn_text" id="discovery_calls_btn_text" value="{{ old('discovery_calls_btn_text', $RS_Meta['discovery_calls_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="discovery_calls_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="discovery_calls_btn_link" id="discovery_calls_btn_link" value="{{ old('discovery_calls_btn_link', $RS_Meta['discovery_calls_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Partnership Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="partnership_title">{{ __('Title') }}</label>
							<input type="text" name="partnership_title" id="partnership_title" value="{{ old('partnership_title', $RS_Meta['partnership_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="partnership_description">{{ __('Description') }}</label>
							<textarea name="partnership_description" id="partnership_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('partnership_description', $RS_Meta['partnership_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partnership_logo_1">{{ __('Logo 1') }}</label>
							<div class="input-group{{ $errors->has('partnership_logo_1') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partnership_logo_1" id="partnership_logo_1" value="{{ old('partnership_logo_1') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partnership_logo_1">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partnership_logo_1']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['partnership_logo_1']) }}" alt="{{ 'Logo' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="partnership_logo_1" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partnership_logo_2">{{ __('Logo 2') }}</label>
							<div class="input-group{{ $errors->has('partnership_logo_2') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partnership_logo_2" id="partnership_logo_2" value="{{ old('partnership_logo_2') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partnership_logo_2">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partnership_logo_2']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['partnership_logo_2']) }}" alt="{{ 'Logo' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="partnership_logo_2" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partnership_logo_3">{{ __('Logo 3') }}</label>
							<div class="input-group{{ $errors->has('partnership_logo_3') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partnership_logo_3" id="partnership_logo_3" value="{{ old('partnership_logo_3') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partnership_logo_3">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partnership_logo_3']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['partnership_logo_3']) }}" alt="{{ 'Logo' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="partnership_logo_3" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partnership_logo_4">{{ __('Logo 4') }}</label>
							<div class="input-group{{ $errors->has('partnership_logo_4') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partnership_logo_4" id="partnership_logo_4" value="{{ old('partnership_logo_4') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partnership_logo_4">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partnership_logo_4']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['partnership_logo_4']) }}" alt="{{ 'Logo' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="partnership_logo_4" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>