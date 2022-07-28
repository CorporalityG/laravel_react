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
							<label for="commitment_title_image">{{ __('Title Image') }}</label>
							<div class="input-group{{ $errors->has('commitment_title_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="commitment_title_image" id="commitment_title_image" value="{{ old('commitment_title_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="commitment_title_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['commitment_title_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['commitment_title_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="commitment_title_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="commitment_item_1_title" id="commitment_item_1_title" value="{{ old('commitment_item_1_title', $RS_Meta['commitment_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="commitment_item_1_description" id="commitment_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('commitment_item_1_description', $RS_Meta['commitment_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="commitment_item_2_title" id="commitment_item_2_title" value="{{ old('commitment_item_2_title', $RS_Meta['commitment_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="commitment_item_2_description" id="commitment_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('commitment_item_2_description', $RS_Meta['commitment_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="commitment_item_3_title" id="commitment_item_3_title" value="{{ old('commitment_item_3_title', $RS_Meta['commitment_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="commitment_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="commitment_item_3_description" id="commitment_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('commitment_item_3_description', $RS_Meta['commitment_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Does my business need? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_need_title">{{ __('Title') }}</label>
							<input type="text" name="business_need_title" id="business_need_title" value="{{ old('business_need_title', $RS_Meta['business_need_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_need_description">{{ __('Description') }}</label>
							<textarea name="business_need_description" id="business_need_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('business_need_description', $RS_Meta['business_need_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Is this right for you? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_title">{{ __('Title') }}</label>
							<input type="text" name="right_for_you_title" id="right_for_you_title" value="{{ old('right_for_you_title', $RS_Meta['right_for_you_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="right_for_you_subtitle" id="right_for_you_subtitle" value="{{ old('right_for_you_subtitle', $RS_Meta['right_for_you_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="right_for_you_item_1_title" id="right_for_you_item_1_title" value="{{ old('right_for_you_item_1_title', $RS_Meta['right_for_you_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="right_for_you_item_1_description" id="right_for_you_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('right_for_you_item_1_description', $RS_Meta['right_for_you_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('right_for_you_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="right_for_you_item_1_icon" id="right_for_you_item_1_icon" value="{{ old('right_for_you_item_1_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="right_for_you_item_1_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['right_for_you_item_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['right_for_you_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="right_for_you_item_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="right_for_you_item_2_title" id="right_for_you_item_2_title" value="{{ old('right_for_you_item_2_title', $RS_Meta['right_for_you_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="right_for_you_item_2_description" id="right_for_you_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('right_for_you_item_2_description', $RS_Meta['right_for_you_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('right_for_you_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="right_for_you_item_2_icon" id="right_for_you_item_2_icon" value="{{ old('right_for_you_item_2_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="right_for_you_item_2_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['right_for_you_item_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['right_for_you_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="right_for_you_item_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="right_for_you_item_3_title" id="right_for_you_item_3_title" value="{{ old('right_for_you_item_3_title', $RS_Meta['right_for_you_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="right_for_you_item_3_description" id="right_for_you_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('right_for_you_item_3_description', $RS_Meta['right_for_you_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="right_for_you_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('right_for_you_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="right_for_you_item_3_icon" id="right_for_you_item_3_icon" value="{{ old('right_for_you_item_3_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="right_for_you_item_3_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['right_for_you_item_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['right_for_you_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="right_for_you_item_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
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
							<label for="work_description">{{ __('Description') }}</label>
							<textarea name="work_description" id="work_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_description', $RS_Meta['work_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="work_btn_text" id="work_btn_text" value="{{ old('work_btn_text', $RS_Meta['work_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="work_btn_link" id="work_btn_link" value="{{ old('work_btn_link', $RS_Meta['work_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
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
									<input type="file" name="work_item_1_icon" id="work_item_1_icon" value="{{ old('work_item_1_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="work_item_1_icon">Choose Icon</label>
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
									<input type="file" name="work_item_2_icon" id="work_item_2_icon" value="{{ old('work_item_2_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="work_item_2_icon">Choose Icon</label>
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
									<input type="file" name="work_item_3_icon" id="work_item_3_icon" value="{{ old('work_item_3_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="work_item_3_icon">Choose Icon</label>
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
									<input type="file" name="work_item_4_icon" id="work_item_4_icon" value="{{ old('work_item_4_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="work_item_4_icon">Choose Icon</label>
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

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="work_item_5_title" id="work_item_5_title" value="{{ old('work_item_5_title', $RS_Meta['work_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="work_item_5_description" id="work_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_item_5_description', $RS_Meta['work_item_5_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_5_icon">{{ __('Item 5 Icon') }}</label>
							<div class="input-group{{ $errors->has('work_item_5_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_item_5_icon" id="work_item_5_icon" value="{{ old('work_item_5_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="work_item_5_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_5_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_5_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="work_item_5_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_6_title">{{ __('Item 6 Title') }}</label>
							<input type="text" name="work_item_6_title" id="work_item_6_title" value="{{ old('work_item_6_title', $RS_Meta['work_item_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_6_description">{{ __('Item 6 Description') }}</label>
							<textarea name="work_item_6_description" id="work_item_6_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_item_6_description', $RS_Meta['work_item_6_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_item_6_icon">{{ __('Item 6 Icon') }}</label>
							<div class="input-group{{ $errors->has('work_item_6_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_item_6_icon" id="work_item_6_icon" value="{{ old('work_item_6_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="work_item_6_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_6_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_6_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="work_item_6_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
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
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_elements_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="key_elements_subtitle" id="key_elements_subtitle" value="{{ old('key_elements_subtitle', $RS_Meta['key_elements_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
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
							<label for="key_elements_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="key_elements_item_1_description" id="key_elements_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('key_elements_item_1_description', $RS_Meta['key_elements_item_1_description'] ?? '') }}</textarea>
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
							<label for="key_elements_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="key_elements_item_2_description" id="key_elements_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('key_elements_item_2_description', $RS_Meta['key_elements_item_2_description'] ?? '') }}</textarea>
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
							<label for="key_elements_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="key_elements_item_3_description" id="key_elements_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('key_elements_item_3_description', $RS_Meta['key_elements_item_3_description'] ?? '') }}</textarea>
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
							<label for="key_elements_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="key_elements_item_4_description" id="key_elements_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('key_elements_item_4_description', $RS_Meta['key_elements_item_4_description'] ?? '') }}</textarea>
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
							<label for="key_elements_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="key_elements_item_5_description" id="key_elements_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('key_elements_item_5_description', $RS_Meta['key_elements_item_5_description'] ?? '') }}</textarea>
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
	$('#business_need_description').summernote();
});
</script>