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
							<label for="banner_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('banner_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_image" id="banner_image" value="{{ old('banner_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ $RS_Meta['banner_title'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Combating Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="combating_title">{{ __('Title') }}</label>
							<input type="text" name="combating_title" id="combating_title" value="{{ old('combating_title', $RS_Meta['combating_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="combating_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="combating_subtitle" id="combating_subtitle" value="{{ old('combating_subtitle', $RS_Meta['combating_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="combating_description">{{ __('Description') }}</label>
							<textarea name="combating_description" id="combating_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('combating_description', $RS_Meta['combating_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="combating_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('combating_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="combating_image" id="combating_image" value="{{ old('combating_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="combating_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['combating_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['combating_image']) }}" alt="{{ $RS_Meta['combating_title'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="combating_box_title">{{ __('Box Title') }}</label>
							<input type="text" name="combating_box_title" id="combating_box_title" value="{{ old('combating_box_title', $RS_Meta['combating_box_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="combating_box_subtitle">{{ __('Box SubTitle') }}</label>
							<input type="text" name="combating_box_subtitle" id="combating_box_subtitle" value="{{ old('combating_box_subtitle', $RS_Meta['combating_box_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('Box SubTitle') }}">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_image']) }}" alt="{{ $RS_Meta['counter_1_title'] ?? 'Image' }}" class="max-height-150 mt-3">
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
							<label for="fearless_item_1_btn_text">{{ __('Item 1 Button Text') }}</label>
							<input type="text" name="fearless_item_1_btn_text" id="fearless_item_1_btn_text" value="{{ old('fearless_item_1_btn_text', $RS_Meta['fearless_item_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_1_btn_link">{{ __('Item 1 Button Link') }}</label>
							<input type="text" name="fearless_item_1_btn_link" id="fearless_item_1_btn_link" value="{{ old('fearless_item_1_btn_link', $RS_Meta['fearless_item_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('fearless_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_item_1_icon" id="fearless_item_1_icon" value="{{ old('fearless_item_1_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="fearless_item_1_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_item_1_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
							<label for="fearless_item_2_btn_text">{{ __('Item 2 Button Text') }}</label>
							<input type="text" name="fearless_item_2_btn_text" id="fearless_item_2_btn_text" value="{{ old('fearless_item_2_btn_text', $RS_Meta['fearless_item_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_2_btn_link">{{ __('Item 2 Button Link') }}</label>
							<input type="text" name="fearless_item_2_btn_link" id="fearless_item_2_btn_link" value="{{ old('fearless_item_2_btn_link', $RS_Meta['fearless_item_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('fearless_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_item_2_icon" id="fearless_item_2_icon" value="{{ old('fearless_item_2_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="fearless_item_2_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_item_2_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
							<label for="fearless_item_3_btn_text">{{ __('Item 3 Button Text') }}</label>
							<input type="text" name="fearless_item_3_btn_text" id="fearless_item_3_btn_text" value="{{ old('fearless_item_3_btn_text', $RS_Meta['fearless_item_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_3_btn_link">{{ __('Item 3 Button Link') }}</label>
							<input type="text" name="fearless_item_3_btn_link" id="fearless_item_3_btn_link" value="{{ old('fearless_item_3_btn_link', $RS_Meta['fearless_item_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="fearless_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('fearless_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="fearless_item_3_icon" id="fearless_item_3_icon" value="{{ old('fearless_item_3_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="fearless_item_3_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['fearless_item_3_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['fearless_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['author_image']) }}" alt="{{ $RS_Meta['author_name'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Our Innovation Architecture Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovation_title">{{ __('Title') }}</label>
							<input type="text" name="innovation_title" id="innovation_title" value="{{ old('innovation_title', $RS_Meta['innovation_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovation_description">{{ __('Description') }}</label>
							<textarea name="innovation_description" id="innovation_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('innovation_description', $RS_Meta['innovation_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovation_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="innovation_btn_text" id="innovation_btn_text" value="{{ old('innovation_btn_text', $RS_Meta['innovation_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovation_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="innovation_btn_link" id="innovation_btn_link" value="{{ old('innovation_btn_link', $RS_Meta['innovation_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Partner Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_title">{{ __('Title') }}</label>
							<input type="text" name="partner_title" id="partner_title" value="{{ old('partner_title', $RS_Meta['partner_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_description">{{ __('Description') }}</label>
							<textarea name="partner_description" id="partner_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('partner_description', $RS_Meta['partner_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_1">{{ __('Logo 1') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_1') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_1" id="partner_logo_1" value="{{ old('partner_logo_1') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_1">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_1']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_1']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_2">{{ __('Logo 2') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_2') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_2" id="partner_logo_2" value="{{ old('partner_logo_2') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_2">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_2']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_2']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_3">{{ __('Logo 3') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_3') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_3" id="partner_logo_3" value="{{ old('partner_logo_3') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_3">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_3']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_3']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_4">{{ __('Logo 4') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_4') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_4" id="partner_logo_4" value="{{ old('partner_logo_4') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_4">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_4']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_4']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_5">{{ __('Logo 5') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_5') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_5" id="partner_logo_5" value="{{ old('partner_logo_5') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_5">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_5']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_5']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_6">{{ __('Logo 6') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_6') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_6" id="partner_logo_6" value="{{ old('partner_logo_6') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_6">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_6']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_6']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_logo_7">{{ __('Logo 7') }}</label>
							<div class="input-group{{ $errors->has('partner_logo_7') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partner_logo_7" id="partner_logo_7" value="{{ old('partner_logo_7') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partner_logo_7">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partner_logo_7']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partner_logo_7']) }}" alt="{{ 'Logo' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Spirit Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="spirit_item_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="spirit_item_1_title" id="spirit_item_1_title" value="{{ old('spirit_item_1_title', $RS_Meta['spirit_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="spirit_item_1_description">{{ __('Description 1') }}</label>
							<textarea name="spirit_item_1_description" id="spirit_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('spirit_item_1_description', $RS_Meta['spirit_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="spirit_item_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('spirit_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="spirit_item_1_image" id="spirit_item_1_image" value="{{ old('spirit_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="spirit_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['spirit_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['spirit_item_1_image']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="spirit_item_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="spirit_item_2_title" id="spirit_item_2_title" value="{{ old('spirit_item_2_title', $RS_Meta['spirit_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="spirit_item_2_description">{{ __('Description 2') }}</label>
							<textarea name="spirit_item_2_description" id="spirit_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('spirit_item_2_description', $RS_Meta['spirit_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="spirit_item_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('spirit_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="spirit_item_2_image" id="spirit_item_2_image" value="{{ old('spirit_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="spirit_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['spirit_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['spirit_item_2_image']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Work with us Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_us_title">{{ __('Title') }}</label>
							<input type="text" name="work_us_title" id="work_us_title" value="{{ old('work_us_title', $RS_Meta['work_us_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_us_description">{{ __('Description') }}</label>
							<textarea name="work_us_description" id="work_us_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_us_description', $RS_Meta['work_us_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_us_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="work_us_btn_text" id="work_us_btn_text" value="{{ old('work_us_btn_text', $RS_Meta['work_us_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_us_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="work_us_btn_link" id="work_us_btn_link" value="{{ old('work_us_btn_link', $RS_Meta['work_us_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_us_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('work_us_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_us_image" id="work_us_image" value="{{ old('work_us_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_us_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_us_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_us_image']) }}" alt="{{ $RS_Meta['work_us_title'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="newsletter_title">{{ __('Newsletter Title') }}</label>
							<input type="text" name="newsletter_title" id="newsletter_title" value="{{ old('newsletter_title', $RS_Meta['newsletter_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</div>