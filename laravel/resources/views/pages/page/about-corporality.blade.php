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
				<h4 class="card-title text-dark w-100">Author Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="author_name">{{ __('Name') }}</label>
							<input type="text" name="author_name" id="author_name" value="{{ old('author_name', $RS_Meta['author_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="author_designation">{{ __('Designation') }}</label>
							<input type="text" name="author_designation" id="author_designation" value="{{ old('author_designation', $RS_Meta['author_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Designation') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="author_bio">{{ __('Bio') }}</label>
							<textarea name="author_bio" id="author_bio" class="form-control" placeholder="{{ __('Bio') }}">{{ old('author_bio', $RS_Meta['author_bio'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="author_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('author_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="author_image" id="author_image" value="{{ old('author_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="author_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['author_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['author_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="author_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Counter Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_1_number">{{ __('Counter 1 Number') }}</label>
							<input type="text" name="counter_1_number" id="counter_1_number" value="{{ old('counter_1_number', $RS_Meta['counter_1_number'] ?? '') }}" class="form-control" placeholder="{{ __('Counter 1 Number') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_1_title">{{ __('Counter 1 Title') }}</label>
							<input type="text" name="counter_1_title" id="counter_1_title" value="{{ old('counter_1_title', $RS_Meta['counter_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Counter 1 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_1_icon">{{ __('Counter 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('counter_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="counter_1_icon" id="counter_1_icon" value="{{ old('counter_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="counter_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['counter_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['counter_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="counter_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_2_number">{{ __('Counter 2 Number') }}</label>
							<input type="text" name="counter_2_number" id="counter_2_number" value="{{ old('counter_2_number', $RS_Meta['counter_2_number'] ?? '') }}" class="form-control" placeholder="{{ __('Counter 2 Number') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_2_title">{{ __('Counter 2 Title') }}</label>
							<input type="text" name="counter_2_title" id="counter_2_title" value="{{ old('counter_2_title', $RS_Meta['counter_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Counter 2 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_2_icon">{{ __('Counter 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('counter_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="counter_2_icon" id="counter_2_icon" value="{{ old('counter_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="counter_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['counter_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['counter_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="counter_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_3_number">{{ __('Counter 3 Number') }}</label>
							<input type="text" name="counter_3_number" id="counter_3_number" value="{{ old('counter_3_number', $RS_Meta['counter_3_number'] ?? '') }}" class="form-control" placeholder="{{ __('Counter 3 Number') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_3_title">{{ __('Counter 3 Title') }}</label>
							<input type="text" name="counter_3_title" id="counter_3_title" value="{{ old('counter_3_title', $RS_Meta['counter_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Counter 3 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="counter_3_icon">{{ __('Counter 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('counter_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="counter_3_icon" id="counter_3_icon" value="{{ old('counter_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="counter_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['counter_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['counter_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="counter_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Ideation with fearless creativity Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_title">{{ __('Title') }}</label>
							<input type="text" name="fearless_title" id="fearless_title" value="{{ old('fearless_title', $RS_Meta['fearless_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('fearless_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_image" id="fearless_image" value="{{ old('fearless_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="fearless_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="fearless_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="fearless_item_1_title" id="fearless_item_1_title" value="{{ old('fearless_item_1_title', $RS_Meta['fearless_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 1 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="fearless_item_1_description" id="fearless_item_1_description" class="form-control" placeholder="{{ __('Item 1 Description') }}">{{ old('fearless_item_1_description', $RS_Meta['fearless_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('fearless_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_item_1_icon" id="fearless_item_1_icon" value="{{ old('fearless_item_1_icon') }}" class="custom-file-input" placeholder="Choose icon" accept="image/*">
									<label class="custom-file-label" for="fearless_item_1_icon">Choose icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_item_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="fearless_item_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="fearless_item_2_title" id="fearless_item_2_title" value="{{ old('fearless_item_2_title', $RS_Meta['fearless_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 2 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="fearless_item_2_description" id="fearless_item_2_description" class="form-control" placeholder="{{ __('Item 2 Description') }}">{{ old('fearless_item_2_description', $RS_Meta['fearless_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('fearless_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_item_2_icon" id="fearless_item_2_icon" value="{{ old('fearless_item_2_icon') }}" class="custom-file-input" placeholder="Choose icon" accept="image/*">
									<label class="custom-file-label" for="fearless_item_2_icon">Choose icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_item_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="fearless_item_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="fearless_item_3_title" id="fearless_item_3_title" value="{{ old('fearless_item_3_title', $RS_Meta['fearless_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 3 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="fearless_item_3_description" id="fearless_item_3_description" class="form-control" placeholder="{{ __('Item 3 Description') }}">{{ old('fearless_item_3_description', $RS_Meta['fearless_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('fearless_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_item_3_icon" id="fearless_item_3_icon" value="{{ old('fearless_item_3_icon') }}" class="custom-file-input" placeholder="Choose icon" accept="image/*">
									<label class="custom-file-label" for="fearless_item_3_icon">Choose icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_item_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="fearless_item_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">How we work Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="how_we_work_title">{{ __('Title') }}</label>
							<input type="text" name="how_we_work_title" id="how_we_work_title" value="{{ old('how_we_work_title', $RS_Meta['how_we_work_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="how_we_work_description">{{ __('Description') }}</label>
							<textarea name="how_we_work_description" id="how_we_work_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('how_we_work_description', $RS_Meta['how_we_work_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="how_we_work_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="how_we_work_btn_text" id="how_we_work_btn_text" value="{{ old('how_we_work_btn_text', $RS_Meta['how_we_work_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="how_we_work_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="how_we_work_btn_link" id="how_we_work_btn_link" value="{{ old('how_we_work_btn_link', $RS_Meta['how_we_work_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">World Map Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="world_map_image_1">{{ __('Left Image') }}</label>
							<div class="input-group{{ $errors->has('world_map_image_1') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="world_map_image_1" id="world_map_image_1" value="{{ old('world_map_image_1') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="world_map_image_1">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['world_map_image_1']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['world_map_image_1']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="world_map_image_1" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="world_map_image_2">{{ __('Right Image') }}</label>
							<div class="input-group{{ $errors->has('world_map_image_2') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="world_map_image_2" id="world_map_image_2" value="{{ old('world_map_image_2') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="world_map_image_2">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['world_map_image_2']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['world_map_image_2']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="world_map_image_2" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Community Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="community_item_1_title" id="community_item_1_title" value="{{ old('community_item_1_title', $RS_Meta['community_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_1_description">{{ __('Description 1') }}</label>
							<textarea name="community_item_1_description" id="community_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('community_item_1_description', $RS_Meta['community_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('community_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="community_item_1_image" id="community_item_1_image" value="{{ old('community_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="community_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['community_item_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['community_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="community_item_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="community_item_2_title" id="community_item_2_title" value="{{ old('community_item_2_title', $RS_Meta['community_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_2_description">{{ __('Description 2') }}</label>
							<textarea name="community_item_2_description" id="community_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('community_item_2_description', $RS_Meta['community_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('community_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="community_item_2_image" id="community_item_2_image" value="{{ old('community_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="community_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['community_item_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['community_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="community_item_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Team Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="team_title">{{ __('Title') }}</label>
							<input type="text" name="team_title" id="team_title" value="{{ old('team_title', $RS_Meta['team_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="team_description">{{ __('Description') }}</label>
							<textarea name="team_description" id="team_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('team_description', $RS_Meta['team_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="team_btn_text" id="team_btn_text" value="{{ old('team_btn_text', $RS_Meta['team_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="team_btn_link" id="team_btn_link" value="{{ old('team_btn_link', $RS_Meta['team_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr>
				
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_1_name">{{ __('Member 1 Name') }}</label>
							<input type="text" name="team_member_1_name" id="team_member_1_name" value="{{ old('team_member_1_name', $RS_Meta['team_member_1_name'] ?? '') }}" class="form-control" placeholder="{{ __('Member 1 Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_1_designation">{{ __('Member 1 Designation') }}</label>
							<input type="text" name="team_member_1_designation" id="team_member_1_designation" value="{{ old('team_member_1_designation', $RS_Meta['team_member_1_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Member 1 Designation') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_1_bio">{{ __('Member 1 Bio') }}</label>
							<textarea name="team_member_1_bio" id="team_member_1_bio" class="form-control" placeholder="{{ __('Member 1 Bio') }}">{{ old('team_member_1_bio', $RS_Meta['team_member_1_bio'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_1_image">{{ __('Member 1 Image') }}</label>
							<div class="input-group{{ $errors->has('team_member_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="team_member_1_image" id="team_member_1_image" value="{{ old('team_member_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="team_member_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['team_member_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['team_member_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="team_member_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_2_name">{{ __('Member 2 Name') }}</label>
							<input type="text" name="team_member_2_name" id="team_member_2_name" value="{{ old('team_member_2_name', $RS_Meta['team_member_2_name'] ?? '') }}" class="form-control" placeholder="{{ __('Member 2 Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_2_designation">{{ __('Member 2 Designation') }}</label>
							<input type="text" name="team_member_2_designation" id="team_member_2_designation" value="{{ old('team_member_2_designation', $RS_Meta['team_member_2_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Member 2 Designation') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_2_bio">{{ __('Member 2 Bio') }}</label>
							<textarea name="team_member_2_bio" id="team_member_2_bio" class="form-control" placeholder="{{ __('Member 2 Bio') }}">{{ old('team_member_2_bio', $RS_Meta['team_member_2_bio'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_2_image">{{ __('Member 2 Image') }}</label>
							<div class="input-group{{ $errors->has('team_member_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="team_member_2_image" id="team_member_2_image" value="{{ old('team_member_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="team_member_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['team_member_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['team_member_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="team_member_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Join Us Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_title">{{ __('Title') }}</label>
							<input type="text" name="join_us_title" id="join_us_title" value="{{ old('join_us_title', $RS_Meta['join_us_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_description">{{ __('Description') }}</label>
							<textarea name="join_us_description" id="join_us_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('join_us_description', $RS_Meta['join_us_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="join_us_btn_text" id="join_us_btn_text" value="{{ old('join_us_btn_text', $RS_Meta['join_us_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="join_us_btn_link" id="join_us_btn_link" value="{{ old('join_us_btn_link', $RS_Meta['join_us_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('join_us_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="join_us_image" id="join_us_image" value="{{ old('join_us_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="join_us_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['join_us_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['join_us_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="join_us_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>