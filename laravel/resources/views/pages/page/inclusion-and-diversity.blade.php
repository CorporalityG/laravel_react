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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Our Faith Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_faith_title">{{ __('Title') }}</label>
							<input type="text" name="our_faith_title" id="our_faith_title" value="{{ old('our_faith_title', $RS_Meta['our_faith_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_faith_description">{{ __('Description') }}</label>
							<textarea name="our_faith_description" id="our_faith_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('our_faith_description', $RS_Meta['our_faith_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="our_faith_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('our_faith_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="our_faith_image" id="our_faith_image" value="{{ old('our_faith_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="our_faith_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['our_faith_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['our_faith_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['author_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">A duty without boundaries Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_title">{{ __('Title') }}</label>
							<input type="text" name="boundaries_title" id="boundaries_title" value="{{ old('boundaries_title', $RS_Meta['boundaries_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_description">{{ __('Description') }}</label>
							<textarea name="boundaries_description" id="boundaries_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('boundaries_description', $RS_Meta['boundaries_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="boundaries_item_1_title" id="boundaries_item_1_title" value="{{ old('boundaries_item_1_title', $RS_Meta['boundaries_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 1 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="boundaries_item_1_description" id="boundaries_item_1_description" class="form-control" placeholder="{{ __('Item 1 Description') }}">{{ old('boundaries_item_1_description', $RS_Meta['boundaries_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('boundaries_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="boundaries_item_1_image" id="boundaries_item_1_image" value="{{ old('boundaries_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="boundaries_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['boundaries_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['boundaries_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="boundaries_item_2_title" id="boundaries_item_2_title" value="{{ old('boundaries_item_2_title', $RS_Meta['boundaries_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 2 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="boundaries_item_2_description" id="boundaries_item_2_description" class="form-control" placeholder="{{ __('Item 2 Description') }}">{{ old('boundaries_item_2_description', $RS_Meta['boundaries_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('boundaries_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="boundaries_item_2_image" id="boundaries_item_2_image" value="{{ old('boundaries_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="boundaries_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['boundaries_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['boundaries_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="boundaries_item_3_title" id="boundaries_item_3_title" value="{{ old('boundaries_item_3_title', $RS_Meta['boundaries_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 3 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="boundaries_item_3_description" id="boundaries_item_3_description" class="form-control" placeholder="{{ __('Item 3 Description') }}">{{ old('boundaries_item_3_description', $RS_Meta['boundaries_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('boundaries_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="boundaries_item_3_image" id="boundaries_item_3_image" value="{{ old('boundaries_item_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="boundaries_item_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['boundaries_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['boundaries_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="boundaries_item_4_title" id="boundaries_item_4_title" value="{{ old('boundaries_item_4_title', $RS_Meta['boundaries_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Item 3 Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="boundaries_item_4_description" id="boundaries_item_4_description" class="form-control" placeholder="{{ __('Item 3 Description') }}">{{ old('boundaries_item_4_description', $RS_Meta['boundaries_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="boundaries_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('boundaries_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="boundaries_item_4_image" id="boundaries_item_4_image" value="{{ old('boundaries_item_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="boundaries_item_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['boundaries_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['boundaries_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Partnerships Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="partnerships_item_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="partnerships_item_1_title" id="partnerships_item_1_title" value="{{ old('partnerships_item_1_title', $RS_Meta['partnerships_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="partnerships_item_1_description">{{ __('Description 1') }}</label>
							<textarea name="partnerships_item_1_description" id="partnerships_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('partnerships_item_1_description', $RS_Meta['partnerships_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partnerships_item_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('partnerships_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partnerships_item_1_image" id="partnerships_item_1_image" value="{{ old('partnerships_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partnerships_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partnerships_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partnerships_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="partnerships_item_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="partnerships_item_2_title" id="partnerships_item_2_title" value="{{ old('partnerships_item_2_title', $RS_Meta['partnerships_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="partnerships_item_2_description">{{ __('Description 2') }}</label>
							<textarea name="partnerships_item_2_description" id="partnerships_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('partnerships_item_2_description', $RS_Meta['partnerships_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="partnerships_item_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('partnerships_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="partnerships_item_2_image" id="partnerships_item_2_image" value="{{ old('partnerships_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="partnerships_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['partnerships_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['partnerships_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Careers Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="careers_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('careers_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="careers_image" id="careers_image" value="{{ old('careers_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="careers_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['careers_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['careers_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="careers_image_bg">{{ __('Image Background') }}</label>
							<div class="input-group{{ $errors->has('careers_image_bg') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="careers_image_bg" id="careers_image_bg" value="{{ old('careers_image_bg') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="careers_image_bg">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['careers_image_bg']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['careers_image_bg']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Newsletter Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="newsletter_title">{{ __('Newsletter Title') }}</label>
							<input type="text" name="newsletter_title" id="newsletter_title" value="{{ old('newsletter_title', $RS_Meta['newsletter_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="newsletter_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('newsletter_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="newsletter_image" id="newsletter_image" value="{{ old('newsletter_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="newsletter_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['newsletter_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['newsletter_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>