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
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Digital and Technological Sustainability Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="sustainability_title">{{ __('Title') }}</label>
							<input type="text" name="sustainability_title" id="sustainability_title" value="{{ old('sustainability_title', $RS_Meta['sustainability_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="sustainability_description">{{ __('Description') }}</label>
							<textarea name="sustainability_description" id="sustainability_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('sustainability_description', $RS_Meta['sustainability_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="sustainability_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('sustainability_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="sustainability_image" id="sustainability_image" value="{{ old('sustainability_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="sustainability_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['sustainability_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['sustainability_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="sustainability_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Approach Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('approach_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="approach_image" id="approach_image" value="{{ old('approach_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="approach_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['approach_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['approach_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="approach_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="approach_item_1_title" id="approach_item_1_title" value="{{ old('approach_item_1_title', $RS_Meta['approach_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="approach_item_1_description" id="approach_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('approach_item_1_description', $RS_Meta['approach_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_1_btn_text">{{ __('Item 1 Button Text') }}</label>
							<input type="text" name="approach_item_1_btn_text" id="approach_item_1_btn_text" value="{{ old('approach_item_1_btn_text', $RS_Meta['approach_item_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_1_btn_link">{{ __('Item 1 Button Link') }}</label>
							<input type="text" name="approach_item_1_btn_link" id="approach_item_1_btn_link" value="{{ old('approach_item_1_btn_link', $RS_Meta['approach_item_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('approach_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="approach_item_1_icon" id="approach_item_1_icon" value="{{ old('approach_item_1_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="approach_item_1_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['approach_item_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['approach_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="approach_item_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="approach_item_2_title" id="approach_item_2_title" value="{{ old('approach_item_2_title', $RS_Meta['approach_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="approach_item_2_description" id="approach_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('approach_item_2_description', $RS_Meta['approach_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_2_btn_text">{{ __('Item 2 Button Text') }}</label>
							<input type="text" name="approach_item_2_btn_text" id="approach_item_2_btn_text" value="{{ old('approach_item_2_btn_text', $RS_Meta['approach_item_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_2_btn_link">{{ __('Item 2 Button Link') }}</label>
							<input type="text" name="approach_item_2_btn_link" id="approach_item_2_btn_link" value="{{ old('approach_item_2_btn_link', $RS_Meta['approach_item_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('approach_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="approach_item_2_icon" id="approach_item_2_icon" value="{{ old('approach_item_2_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="approach_item_2_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['approach_item_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['approach_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="approach_item_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="approach_item_3_title" id="approach_item_3_title" value="{{ old('approach_item_3_title', $RS_Meta['approach_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="approach_item_3_description" id="approach_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('approach_item_3_description', $RS_Meta['approach_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_3_btn_text">{{ __('Item 3 Button Text') }}</label>
							<input type="text" name="approach_item_3_btn_text" id="approach_item_3_btn_text" value="{{ old('approach_item_3_btn_text', $RS_Meta['approach_item_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_3_btn_link">{{ __('Item 3 Button Link') }}</label>
							<input type="text" name="approach_item_3_btn_link" id="approach_item_3_btn_link" value="{{ old('approach_item_3_btn_link', $RS_Meta['approach_item_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('approach_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="approach_item_3_icon" id="approach_item_3_icon" value="{{ old('approach_item_3_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="approach_item_3_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['approach_item_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['approach_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="approach_item_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="approach_item_4_title" id="approach_item_4_title" value="{{ old('approach_item_4_title', $RS_Meta['approach_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="approach_item_4_description" id="approach_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('approach_item_4_description', $RS_Meta['approach_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_4_btn_text">{{ __('Item 4 Button Text') }}</label>
							<input type="text" name="approach_item_4_btn_text" id="approach_item_4_btn_text" value="{{ old('approach_item_4_btn_text', $RS_Meta['approach_item_4_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_4_btn_link">{{ __('Item 4 Button Link') }}</label>
							<input type="text" name="approach_item_4_btn_link" id="approach_item_4_btn_link" value="{{ old('approach_item_4_btn_link', $RS_Meta['approach_item_4_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="approach_item_4_icon">{{ __('Item 4 Icon') }}</label>
							<div class="input-group{{ $errors->has('approach_item_4_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="approach_item_4_icon" id="approach_item_4_icon" value="{{ old('approach_item_4_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="approach_item_4_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['approach_item_4_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['approach_item_4_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="approach_item_4_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
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
							<label for="author_twitter_link">{{ __('Twitter Link') }}</label>
							<input type="text" name="author_twitter_link" id="author_twitter_link" value="{{ old('author_twitter_link', $RS_Meta['author_twitter_link'] ?? '') }}" class="form-control" placeholder="{{ __('Twitter Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="author_linkedin_link">{{ __('Linkedin Link') }}</label>
							<input type="text" name="author_linkedin_link" id="author_linkedin_link" value="{{ old('author_linkedin_link', $RS_Meta['author_linkedin_link'] ?? '') }}" class="form-control" placeholder="{{ __('Linkedin Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Case Studies Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="case_studies_title">{{ __('Title') }}</label>
							<input type="text" name="case_studies_title" id="case_studies_title" value="{{ old('case_studies_title', $RS_Meta['case_studies_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="case_studies_description">{{ __('Description') }}</label>
							<textarea name="case_studies_description" id="case_studies_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('case_studies_description', $RS_Meta['case_studies_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="case_studies_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="case_studies_btn_text" id="case_studies_btn_text" value="{{ old('case_studies_btn_text', $RS_Meta['case_studies_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="case_studies_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="case_studies_btn_link" id="case_studies_btn_link" value="{{ old('case_studies_btn_link', $RS_Meta['case_studies_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="case_studies_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('case_studies_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="case_studies_image" id="case_studies_image" value="{{ old('case_studies_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="case_studies_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['case_studies_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['case_studies_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="case_studies_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>