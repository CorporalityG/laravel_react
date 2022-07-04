<div class="row">
	<div class="col-12">

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Client 1 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_name">{{ __('Name') }}</label>
							<input type="text" name="client_1_name" id="client_1_name" value="{{ old('client_1_name', $RS_Meta['client_1_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_title">{{ __('Title') }}</label>
							<input type="text" name="client_1_title" id="client_1_title" value="{{ old('client_1_title', $RS_Meta['client_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_1_subtitle" id="client_1_subtitle" value="{{ old('client_1_subtitle', $RS_Meta['client_1_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_1_image" id="client_1_image" value="{{ old('client_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Cause Studies</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_1_studies_title">{{ __('Title') }}</label>
							<input type="text" name="client_1_studies_title" id="client_1_studies_title" value="{{ old('client_1_studies_title', $RS_Meta['client_1_studies_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_studies_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_1_studies_subtitle" id="client_1_studies_subtitle" value="{{ old('client_1_studies_subtitle', $RS_Meta['client_1_studies_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_1_studies_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_1_studies_btn_text" id="client_1_studies_btn_text" value="{{ old('client_1_studies_btn_text', $RS_Meta['client_1_studies_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_1_studies_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_1_studies_btn_link" id="client_1_studies_btn_link" value="{{ old('client_1_studies_btn_link', $RS_Meta['client_1_studies_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_studies_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_1_studies_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_1_studies_image" id="client_1_studies_image" value="{{ old('client_1_studies_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_1_studies_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_1_studies_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_1_studies_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
				
				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>View Offering</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_1_offering_title">{{ __('Title') }}</label>
							<input type="text" name="client_1_offering_title" id="client_1_offering_title" value="{{ old('client_1_offering_title', $RS_Meta['client_1_offering_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_1_offering_description">{{ __('Description') }}</label>
							<textarea name="client_1_offering_description" id="client_1_offering_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('client_1_offering_description', $RS_Meta['client_1_offering_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_1_offering_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_1_offering_btn_text" id="client_1_offering_btn_text" value="{{ old('client_1_offering_btn_text', $RS_Meta['client_1_offering_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_1_offering_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_1_offering_btn_link" id="client_1_offering_btn_link" value="{{ old('client_1_offering_btn_link', $RS_Meta['client_1_offering_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Client 2 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_name">{{ __('Name') }}</label>
							<input type="text" name="client_2_name" id="client_2_name" value="{{ old('client_2_name', $RS_Meta['client_2_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_title">{{ __('Title') }}</label>
							<input type="text" name="client_2_title" id="client_2_title" value="{{ old('client_2_title', $RS_Meta['client_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_2_subtitle" id="client_2_subtitle" value="{{ old('client_2_subtitle', $RS_Meta['client_2_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_2_image" id="client_2_image" value="{{ old('client_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Cause Studies</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_2_studies_title">{{ __('Title') }}</label>
							<input type="text" name="client_2_studies_title" id="client_2_studies_title" value="{{ old('client_2_studies_title', $RS_Meta['client_2_studies_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_studies_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_2_studies_subtitle" id="client_2_studies_subtitle" value="{{ old('client_2_studies_subtitle', $RS_Meta['client_2_studies_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_2_studies_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_2_studies_btn_text" id="client_2_studies_btn_text" value="{{ old('client_2_studies_btn_text', $RS_Meta['client_2_studies_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_2_studies_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_2_studies_btn_link" id="client_2_studies_btn_link" value="{{ old('client_2_studies_btn_link', $RS_Meta['client_2_studies_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_studies_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_2_studies_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_2_studies_image" id="client_2_studies_image" value="{{ old('client_2_studies_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_2_studies_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_2_studies_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_2_studies_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
				
				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>View Offering</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_2_offering_title">{{ __('Title') }}</label>
							<input type="text" name="client_2_offering_title" id="client_2_offering_title" value="{{ old('client_2_offering_title', $RS_Meta['client_2_offering_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_2_offering_description">{{ __('Description') }}</label>
							<textarea name="client_2_offering_description" id="client_2_offering_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('client_2_offering_description', $RS_Meta['client_2_offering_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_2_offering_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_2_offering_btn_text" id="client_2_offering_btn_text" value="{{ old('client_2_offering_btn_text', $RS_Meta['client_2_offering_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_2_offering_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_2_offering_btn_link" id="client_2_offering_btn_link" value="{{ old('client_2_offering_btn_link', $RS_Meta['client_2_offering_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Client 3 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_name">{{ __('Name') }}</label>
							<input type="text" name="client_3_name" id="client_3_name" value="{{ old('client_3_name', $RS_Meta['client_3_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_title">{{ __('Title') }}</label>
							<input type="text" name="client_3_title" id="client_3_title" value="{{ old('client_3_title', $RS_Meta['client_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_3_subtitle" id="client_3_subtitle" value="{{ old('client_3_subtitle', $RS_Meta['client_3_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_3_image" id="client_3_image" value="{{ old('client_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Cause Studies</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_3_studies_title">{{ __('Title') }}</label>
							<input type="text" name="client_3_studies_title" id="client_3_studies_title" value="{{ old('client_3_studies_title', $RS_Meta['client_3_studies_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_studies_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_3_studies_subtitle" id="client_3_studies_subtitle" value="{{ old('client_3_studies_subtitle', $RS_Meta['client_3_studies_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_3_studies_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_3_studies_btn_text" id="client_3_studies_btn_text" value="{{ old('client_3_studies_btn_text', $RS_Meta['client_3_studies_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_3_studies_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_3_studies_btn_link" id="client_3_studies_btn_link" value="{{ old('client_3_studies_btn_link', $RS_Meta['client_3_studies_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_studies_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_3_studies_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_3_studies_image" id="client_3_studies_image" value="{{ old('client_3_studies_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_3_studies_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_3_studies_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_3_studies_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
				
				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>View Offering</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_3_offering_title">{{ __('Title') }}</label>
							<input type="text" name="client_3_offering_title" id="client_3_offering_title" value="{{ old('client_3_offering_title', $RS_Meta['client_3_offering_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_3_offering_description">{{ __('Description') }}</label>
							<textarea name="client_3_offering_description" id="client_3_offering_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('client_3_offering_description', $RS_Meta['client_3_offering_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_3_offering_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_3_offering_btn_text" id="client_3_offering_btn_text" value="{{ old('client_3_offering_btn_text', $RS_Meta['client_3_offering_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_3_offering_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_3_offering_btn_link" id="client_3_offering_btn_link" value="{{ old('client_3_offering_btn_link', $RS_Meta['client_3_offering_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Client 4 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_name">{{ __('Name') }}</label>
							<input type="text" name="client_4_name" id="client_4_name" value="{{ old('client_4_name', $RS_Meta['client_4_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_title">{{ __('Title') }}</label>
							<input type="text" name="client_4_title" id="client_4_title" value="{{ old('client_4_title', $RS_Meta['client_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_4_subtitle" id="client_4_subtitle" value="{{ old('client_4_subtitle', $RS_Meta['client_4_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_4_image" id="client_4_image" value="{{ old('client_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Cause Studies</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_4_studies_title">{{ __('Title') }}</label>
							<input type="text" name="client_4_studies_title" id="client_4_studies_title" value="{{ old('client_4_studies_title', $RS_Meta['client_4_studies_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_studies_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="client_4_studies_subtitle" id="client_4_studies_subtitle" value="{{ old('client_4_studies_subtitle', $RS_Meta['client_4_studies_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_4_studies_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_4_studies_btn_text" id="client_4_studies_btn_text" value="{{ old('client_4_studies_btn_text', $RS_Meta['client_4_studies_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_4_studies_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_4_studies_btn_link" id="client_4_studies_btn_link" value="{{ old('client_4_studies_btn_link', $RS_Meta['client_4_studies_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_studies_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('client_4_studies_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="client_4_studies_image" id="client_4_studies_image" value="{{ old('client_4_studies_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="client_4_studies_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['client_4_studies_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['client_4_studies_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
				
				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>View Offering</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_4_offering_title">{{ __('Title') }}</label>
							<input type="text" name="client_4_offering_title" id="client_4_offering_title" value="{{ old('client_4_offering_title', $RS_Meta['client_4_offering_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="client_4_offering_description">{{ __('Description') }}</label>
							<textarea name="client_4_offering_description" id="client_4_offering_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('client_4_offering_description', $RS_Meta['client_4_offering_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_4_offering_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="client_4_offering_btn_text" id="client_4_offering_btn_text" value="{{ old('client_4_offering_btn_text', $RS_Meta['client_4_offering_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="client_4_offering_btn_link">{{ __('Button Text') }}</label>
							<input type="text" name="client_4_offering_btn_link" id="client_4_offering_btn_link" value="{{ old('client_4_offering_btn_link', $RS_Meta['client_4_offering_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>