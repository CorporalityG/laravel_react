<div class="row">
	<div class="col-12">

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Get Involved Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="involved_title">{{ __('Title') }}</label>
							<input type="text" name="involved_title" id="involved_title" value="{{ old('involved_title', $RS_Meta['involved_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="involved_description">{{ __('Description') }}</label>
							<textarea name="involved_description" id="involved_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('involved_description', $RS_Meta['involved_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Partner</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="involved_partner_title">{{ __('Title') }}</label>
							<input type="text" name="involved_partner_title" id="involved_partner_title" value="{{ old('involved_partner_title', $RS_Meta['involved_partner_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="involved_partner_description">{{ __('Description') }}</label>
							<textarea name="involved_partner_description" id="involved_partner_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('involved_partner_description', $RS_Meta['involved_partner_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="involved_partner_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="involved_partner_btn_text" id="involved_partner_btn_text" value="{{ old('involved_partner_btn_text', $RS_Meta['involved_partner_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="involved_partner_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="involved_partner_btn_link" id="involved_partner_btn_link" value="{{ old('involved_partner_btn_link', $RS_Meta['involved_partner_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="involved_partner_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('involved_partner_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="involved_partner_image" id="involved_partner_image" value="{{ old('involved_partner_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="involved_partner_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['involved_partner_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['involved_partner_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
				
				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Community</h5>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="involved_community_title">{{ __('Title') }}</label>
							<input type="text" name="involved_community_title" id="involved_community_title" value="{{ old('involved_community_title', $RS_Meta['involved_community_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="involved_community_description">{{ __('Description') }}</label>
							<textarea name="involved_community_description" id="involved_community_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('involved_community_description', $RS_Meta['involved_community_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="involved_community_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="involved_community_btn_text" id="involved_community_btn_text" value="{{ old('involved_community_btn_text', $RS_Meta['involved_community_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="involved_community_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="involved_community_btn_link" id="involved_community_btn_link" value="{{ old('involved_community_btn_link', $RS_Meta['involved_community_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="involved_community_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('involved_community_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="involved_community_image" id="involved_community_image" value="{{ old('involved_community_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="involved_community_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['involved_community_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['involved_community_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>