<div class="row">
	<div class="col-12">
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Contact Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="contact_title">{{ __('Title') }}</label>
							<input type="text" name="contact_title" id="contact_title" value="{{ old('contact_title', $RS_Meta['contact_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="contact_description">{{ __('Description') }}</label>
							<textarea name="contact_description" id="contact_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('contact_description', $RS_Meta['contact_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Office 1 Detail</h5>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="office_1_title">{{ __('Title') }}</label>
							<input type="text" name="office_1_title" id="office_1_title" value="{{ old('office_1_title', $RS_Meta['office_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="office_1_phone_no">{{ __('Phone No') }}</label>
							<input type="text" name="office_1_phone_no" id="office_1_phone_no" value="{{ old('office_1_phone_no', $RS_Meta['office_1_phone_no'] ?? '') }}" class="form-control" placeholder="{{ __('Phone No') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="office_1_address">{{ __('Address') }}</label>
							<input type="text" name="office_1_address" id="office_1_address" value="{{ old('office_1_address', $RS_Meta['office_1_address'] ?? '') }}" class="form-control" placeholder="{{ __('Address') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="office_1_map">{{ __('Map') }}</label>
							<textarea name="office_1_map" id="office_1_map" class="form-control" placeholder="{{ __('Map') }}">{{ old('office_1_map', $RS_Meta['office_1_map'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Office 2 Detail</h5>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="office_2_title">{{ __('Title') }}</label>
							<input type="text" name="office_2_title" id="office_2_title" value="{{ old('office_2_title', $RS_Meta['office_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="office_2_phone_no">{{ __('Phone No') }}</label>
							<input type="text" name="office_2_phone_no" id="office_2_phone_no" value="{{ old('office_2_phone_no', $RS_Meta['office_2_phone_no'] ?? '') }}" class="form-control" placeholder="{{ __('Phone No') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="office_2_address">{{ __('Address') }}</label>
							<input type="text" name="office_2_address" id="office_2_address" value="{{ old('office_2_address', $RS_Meta['office_2_address'] ?? '') }}" class="form-control" placeholder="{{ __('Address') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="office_2_map">{{ __('Map') }}</label>
							<textarea name="office_2_map" id="office_2_map" class="form-control" placeholder="{{ __('Map') }}">{{ old('office_2_map', $RS_Meta['office_2_map'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Book Our Calendar Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_calendar_title">{{ __('Title') }}</label>
							<input type="text" name="book_calendar_title" id="book_calendar_title" value="{{ old('book_calendar_title', $RS_Meta['book_calendar_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_calendar_description">{{ __('Description') }}</label>
							<textarea name="book_calendar_description" id="book_calendar_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('book_calendar_description', $RS_Meta['book_calendar_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_calendar_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="book_calendar_btn_text" id="book_calendar_btn_text" value="{{ old('book_calendar_btn_text', $RS_Meta['book_calendar_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_calendar_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="book_calendar_btn_link" id="book_calendar_btn_link" value="{{ old('book_calendar_btn_link', $RS_Meta['book_calendar_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_calendar_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('book_calendar_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_calendar_image" id="book_calendar_image" value="{{ old('book_calendar_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="book_calendar_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_calendar_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['book_calendar_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="book_calendar_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Partner With Us Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_with_us_title">{{ __('Title') }}</label>
							<input type="text" name="partner_with_us_title" id="partner_with_us_title" value="{{ old('partner_with_us_title', $RS_Meta['partner_with_us_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_with_us_description">{{ __('Description') }}</label>
							<textarea name="partner_with_us_description" id="partner_with_us_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('partner_with_us_description', $RS_Meta['partner_with_us_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_with_us_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="partner_with_us_btn_1_text" id="partner_with_us_btn_1_text" value="{{ old('partner_with_us_btn_1_text', $RS_Meta['partner_with_us_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_with_us_btn_1_link">{{ __('Button 1 Link') }}</label>
							<input type="text" name="partner_with_us_btn_1_link" id="partner_with_us_btn_1_link" value="{{ old('partner_with_us_btn_1_link', $RS_Meta['partner_with_us_btn_1_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_with_us_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="partner_with_us_btn_2_text" id="partner_with_us_btn_2_text" value="{{ old('partner_with_us_btn_2_text', $RS_Meta['partner_with_us_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partner_with_us_btn_2_link">{{ __('Button 2 Link') }}</label>
							<input type="text" name="partner_with_us_btn_2_link" id="partner_with_us_btn_2_link" value="{{ old('partner_with_us_btn_2_link', $RS_Meta['partner_with_us_btn_2_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>