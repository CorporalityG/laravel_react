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
				<h4 class="card-title text-dark w-100">Leadership Team Section</h4>
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
							<label for="team_member_1_facebook_url">{{ __('Member 1 Facebook URL') }}</label>
							<input type="text" name="team_member_1_facebook_url" id="team_member_1_facebook_url" value="{{ old('team_member_1_facebook_url', $RS_Meta['team_member_1_facebook_url'] ?? '') }}" class="form-control" placeholder="{{ __('Facebook URL') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_1_linkedin_url">{{ __('Member 1 LinkedIn URL') }}</label>
							<input type="text" name="team_member_1_linkedin_url" id="team_member_1_linkedin_url" value="{{ old('team_member_1_linkedin_url', $RS_Meta['team_member_1_linkedin_url'] ?? '') }}" class="form-control" placeholder="{{ __('LinkedIn URL') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_1_website_url">{{ __('Member 1 Website URL') }}</label>
							<input type="text" name="team_member_1_website_url" id="team_member_1_website_url" value="{{ old('team_member_1_website_url', $RS_Meta['team_member_1_website_url'] ?? '') }}" class="form-control" placeholder="{{ __('Website URL') }}">
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
							<label for="team_member_2_facebook_url">{{ __('Member 2 Facebook URL') }}</label>
							<input type="text" name="team_member_2_facebook_url" id="team_member_2_facebook_url" value="{{ old('team_member_2_facebook_url', $RS_Meta['team_member_2_facebook_url'] ?? '') }}" class="form-control" placeholder="{{ __('Facebook URL') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_2_linkedin_url">{{ __('Member 2 LinkedIn URL') }}</label>
							<input type="text" name="team_member_2_linkedin_url" id="team_member_2_linkedin_url" value="{{ old('team_member_2_linkedin_url', $RS_Meta['team_member_2_linkedin_url'] ?? '') }}" class="form-control" placeholder="{{ __('LinkedIn URL') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="team_member_2_website_url">{{ __('Member 2 Website URL') }}</label>
							<input type="text" name="team_member_2_website_url" id="team_member_2_website_url" value="{{ old('team_member_2_website_url', $RS_Meta['team_member_2_website_url'] ?? '') }}" class="form-control" placeholder="{{ __('Website URL') }}">
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
				<h4 class="card-title text-dark w-100">Piya Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="priya_title_image">{{ __('Title Image') }}</label>
							<div class="input-group{{ $errors->has('priya_title_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="priya_title_image" id="priya_title_image" value="{{ old('priya_title_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="priya_title_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['priya_title_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['priya_title_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="priya_title_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="priya_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('priya_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="priya_image" id="priya_image" value="{{ old('priya_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="priya_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['priya_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['priya_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="priya_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>