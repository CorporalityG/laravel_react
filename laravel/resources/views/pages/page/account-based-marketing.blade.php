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
				<h4 class="card-title text-dark w-100">Did you know? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="you_know_heading">{{ __('Heading') }}</label>
							<input type="text" name="you_know_heading" id="you_know_heading" value="{{ old('you_know_heading', $RS_Meta['you_know_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="you_know_title">{{ __('Title') }}</label>
							<input type="text" name="you_know_title" id="you_know_title" value="{{ old('you_know_title', $RS_Meta['you_know_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="you_know_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="you_know_item_1_title" id="you_know_item_1_title" value="{{ old('you_know_item_1_title', $RS_Meta['you_know_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="you_know_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('you_know_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="you_know_item_1_image" id="you_know_item_1_image" value="{{ old('you_know_item_1_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="you_know_item_1_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['you_know_item_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['you_know_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="you_know_item_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="you_know_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="you_know_item_2_title" id="you_know_item_2_title" value="{{ old('you_know_item_2_title', $RS_Meta['you_know_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="you_know_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('you_know_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="you_know_item_2_image" id="you_know_item_2_image" value="{{ old('you_know_item_2_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="you_know_item_2_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['you_know_item_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['you_know_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="you_know_item_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Client Logo Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_1_image">{{ __('Logo 1 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_1_image" id="client_logo_1_image" value="{{ old('client_logo_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_2_image">{{ __('Logo 2 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_2_image" id="client_logo_2_image" value="{{ old('client_logo_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_3_image">{{ __('Logo 3 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_3_image" id="client_logo_3_image" value="{{ old('client_logo_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_3_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_4_image">{{ __('Logo 4 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_4_image" id="client_logo_4_image" value="{{ old('client_logo_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_4_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_4_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_5_image">{{ __('Logo 5 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_5_image" id="client_logo_5_image" value="{{ old('client_logo_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_5_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_5_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_6_image">{{ __('Logo 6 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_6_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_6_image" id="client_logo_6_image" value="{{ old('client_logo_6_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_6_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_6_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_6_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_6_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_7_image">{{ __('Logo 7 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_7_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_7_image" id="client_logo_7_image" value="{{ old('client_logo_7_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_7_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_7_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_7_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_7_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_8_image">{{ __('Logo 8 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_8_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_8_image" id="client_logo_8_image" value="{{ old('client_logo_8_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_8_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_8_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_8_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_8_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_9_image">{{ __('Logo 9 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_9_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_9_image" id="client_logo_9_image" value="{{ old('client_logo_9_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_9_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_9_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_9_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_9_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_logo_10_image">{{ __('Logo 10 Image') }}</label>
							<div class="input-group{{ $errors->has('client_logo_10_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_logo_10_image" id="client_logo_10_image" value="{{ old('client_logo_10_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_logo_10_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_logo_10_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['client_logo_10_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="client_logo_10_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
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
							<label for="author_title">{{ __('Title') }}</label>
							<input type="text" name="author_title" id="author_title" value="{{ old('author_title', $RS_Meta['author_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

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
				<h4 class="card-title text-dark w-100">High-Value Clients Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="high_value_title">{{ __('Title') }}</label>
							<input type="text" name="high_value_title" id="high_value_title" value="{{ old('high_value_title', $RS_Meta['high_value_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="high_value_description">{{ __('Description') }}</label>
							<textarea name="high_value_description" id="high_value_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('high_value_description', $RS_Meta['high_value_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Define to solve Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_title">{{ __('Title') }}</label>
							<input type="text" name="define_solve_title" id="define_solve_title" value="{{ old('define_solve_title', $RS_Meta['define_solve_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="define_solve_subtitle" id="define_solve_subtitle" value="{{ old('define_solve_subtitle', $RS_Meta['define_solve_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_description">{{ __('Description') }}</label>
							<textarea name="define_solve_description" id="define_solve_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('define_solve_description', $RS_Meta['define_solve_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('define_solve_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="define_solve_image" id="define_solve_image" value="{{ old('define_solve_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="define_solve_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['define_solve_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['define_solve_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="define_solve_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="define_solve_item_1_title" id="define_solve_item_1_title" value="{{ old('define_solve_item_1_title', $RS_Meta['define_solve_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_1_subtitle">{{ __('Item 1 SubTitle') }}</label>
							<input type="text" name="define_solve_item_1_subtitle" id="define_solve_item_1_subtitle" value="{{ old('define_solve_item_1_subtitle', $RS_Meta['define_solve_item_1_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="define_solve_item_2_title" id="define_solve_item_2_title" value="{{ old('define_solve_item_2_title', $RS_Meta['define_solve_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_2_subtitle">{{ __('Item 2 SubTitle') }}</label>
							<input type="text" name="define_solve_item_2_subtitle" id="define_solve_item_2_subtitle" value="{{ old('define_solve_item_2_subtitle', $RS_Meta['define_solve_item_2_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="define_solve_item_3_title" id="define_solve_item_3_title" value="{{ old('define_solve_item_3_title', $RS_Meta['define_solve_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_3_subtitle">{{ __('Item 3 SubTitle') }}</label>
							<input type="text" name="define_solve_item_3_subtitle" id="define_solve_item_3_subtitle" value="{{ old('define_solve_item_3_subtitle', $RS_Meta['define_solve_item_3_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="define_solve_item_4_title" id="define_solve_item_4_title" value="{{ old('define_solve_item_4_title', $RS_Meta['define_solve_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_4_subtitle">{{ __('Item 4 SubTitle') }}</label>
							<input type="text" name="define_solve_item_4_subtitle" id="define_solve_item_4_subtitle" value="{{ old('define_solve_item_4_subtitle', $RS_Meta['define_solve_item_4_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="define_solve_item_5_title" id="define_solve_item_5_title" value="{{ old('define_solve_item_5_title', $RS_Meta['define_solve_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_5_subtitle">{{ __('Item 5 SubTitle') }}</label>
							<input type="text" name="define_solve_item_5_subtitle" id="define_solve_item_5_subtitle" value="{{ old('define_solve_item_5_subtitle', $RS_Meta['define_solve_item_5_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_6_title">{{ __('Item 6 Title') }}</label>
							<input type="text" name="define_solve_item_6_title" id="define_solve_item_6_title" value="{{ old('define_solve_item_6_title', $RS_Meta['define_solve_item_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_6_subtitle">{{ __('Item 6 SubTitle') }}</label>
							<input type="text" name="define_solve_item_6_subtitle" id="define_solve_item_6_subtitle" value="{{ old('define_solve_item_6_subtitle', $RS_Meta['define_solve_item_6_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_7_title">{{ __('Item 7 Title') }}</label>
							<input type="text" name="define_solve_item_7_title" id="define_solve_item_7_title" value="{{ old('define_solve_item_7_title', $RS_Meta['define_solve_item_7_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_7_subtitle">{{ __('Item 7 SubTitle') }}</label>
							<input type="text" name="define_solve_item_7_subtitle" id="define_solve_item_7_subtitle" value="{{ old('define_solve_item_7_subtitle', $RS_Meta['define_solve_item_7_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_8_title">{{ __('Item 8 Title') }}</label>
							<input type="text" name="define_solve_item_8_title" id="define_solve_item_8_title" value="{{ old('define_solve_item_8_title', $RS_Meta['define_solve_item_8_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="define_solve_item_8_subtitle">{{ __('Item 8 SubTitle') }}</label>
							<input type="text" name="define_solve_item_8_subtitle" id="define_solve_item_8_subtitle" value="{{ old('define_solve_item_8_subtitle', $RS_Meta['define_solve_item_8_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Connect & Convert Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="connect_convert_title">{{ __('Title') }}</label>
							<input type="text" name="connect_convert_title" id="connect_convert_title" value="{{ old('connect_convert_title', $RS_Meta['connect_convert_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="connect_convert_description">{{ __('Description') }}</label>
							<textarea name="connect_convert_description" id="connect_convert_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('connect_convert_description', $RS_Meta['connect_convert_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="connect_convert_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('connect_convert_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="connect_convert_image" id="connect_convert_image" value="{{ old('connect_convert_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="connect_convert_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['connect_convert_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['connect_convert_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="connect_convert_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Design and define Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="design_define_title">{{ __('Title') }}</label>
							<input type="text" name="design_define_title" id="design_define_title" value="{{ old('design_define_title', $RS_Meta['design_define_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="design_define_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="design_define_subtitle" id="design_define_subtitle" value="{{ old('design_define_subtitle', $RS_Meta['design_define_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
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
    $('#define_solve_description').summernote();
});
</script>