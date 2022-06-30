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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Striker Item Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="striker_item_1_title" id="striker_item_1_title" value="{{ old('striker_item_1_title', $RS_Meta['striker_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="striker_item_1_description" id="striker_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('striker_item_1_description', $RS_Meta['striker_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_1_btn_text">{{ __('Item 1 Button Text') }}</label>
							<input type="text" name="striker_item_1_btn_text" id="striker_item_1_btn_text" value="{{ old('striker_item_1_btn_text', $RS_Meta['striker_item_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_1_btn_link">{{ __('Item 1 Button Link') }}</label>
							<input type="text" name="striker_item_1_btn_link" id="striker_item_1_btn_link" value="{{ old('striker_item_1_btn_link', $RS_Meta['striker_item_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('striker_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="striker_item_1_image" id="striker_item_1_image" value="{{ old('striker_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="striker_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['striker_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['striker_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="striker_item_2_title" id="striker_item_2_title" value="{{ old('striker_item_2_title', $RS_Meta['striker_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="striker_item_2_description" id="striker_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('striker_item_2_description', $RS_Meta['striker_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_2_btn_text">{{ __('Item 2 Button Text') }}</label>
							<input type="text" name="striker_item_2_btn_text" id="striker_item_2_btn_text" value="{{ old('striker_item_2_btn_text', $RS_Meta['striker_item_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_2_btn_link">{{ __('Item 2 Button Link') }}</label>
							<input type="text" name="striker_item_2_btn_link" id="striker_item_2_btn_link" value="{{ old('striker_item_2_btn_link', $RS_Meta['striker_item_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('striker_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="striker_item_2_image" id="striker_item_2_image" value="{{ old('striker_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="striker_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['striker_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['striker_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="striker_item_3_title" id="striker_item_3_title" value="{{ old('striker_item_3_title', $RS_Meta['striker_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="striker_item_3_description" id="striker_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('striker_item_3_description', $RS_Meta['striker_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_3_btn_text">{{ __('Item 3 Button Text') }}</label>
							<input type="text" name="striker_item_3_btn_text" id="striker_item_3_btn_text" value="{{ old('striker_item_3_btn_text', $RS_Meta['striker_item_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_3_btn_link">{{ __('Item 3 Button Link') }}</label>
							<input type="text" name="striker_item_3_btn_link" id="striker_item_3_btn_link" value="{{ old('striker_item_3_btn_link', $RS_Meta['striker_item_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('striker_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="striker_item_3_image" id="striker_item_3_image" value="{{ old('striker_item_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="striker_item_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['striker_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['striker_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="striker_item_4_title" id="striker_item_4_title" value="{{ old('striker_item_4_title', $RS_Meta['striker_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="striker_item_4_description" id="striker_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('striker_item_4_description', $RS_Meta['striker_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_4_btn_text">{{ __('Item 4 Button Text') }}</label>
							<input type="text" name="striker_item_4_btn_text" id="striker_item_4_btn_text" value="{{ old('striker_item_4_btn_text', $RS_Meta['striker_item_4_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_4_btn_link">{{ __('Item 4 Button Link') }}</label>
							<input type="text" name="striker_item_4_btn_link" id="striker_item_4_btn_link" value="{{ old('striker_item_4_btn_link', $RS_Meta['striker_item_4_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('striker_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="striker_item_4_image" id="striker_item_4_image" value="{{ old('striker_item_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="striker_item_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['striker_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['striker_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="striker_item_5_title" id="striker_item_5_title" value="{{ old('striker_item_5_title', $RS_Meta['striker_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="striker_item_5_description" id="striker_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('striker_item_5_description', $RS_Meta['striker_item_5_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_5_btn_text">{{ __('Item 5 Button Text') }}</label>
							<input type="text" name="striker_item_5_btn_text" id="striker_item_5_btn_text" value="{{ old('striker_item_5_btn_text', $RS_Meta['striker_item_5_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_5_btn_link">{{ __('Item 5 Button Link') }}</label>
							<input type="text" name="striker_item_5_btn_link" id="striker_item_5_btn_link" value="{{ old('striker_item_5_btn_link', $RS_Meta['striker_item_5_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_5_image">{{ __('Item 5 Image') }}</label>
							<div class="input-group{{ $errors->has('striker_item_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="striker_item_5_image" id="striker_item_5_image" value="{{ old('striker_item_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="striker_item_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['striker_item_5_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['striker_item_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_6_title">{{ __('Item 6 Title') }}</label>
							<input type="text" name="striker_item_6_title" id="striker_item_6_title" value="{{ old('striker_item_6_title', $RS_Meta['striker_item_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_6_description">{{ __('Item 6 Description') }}</label>
							<textarea name="striker_item_6_description" id="striker_item_6_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('striker_item_6_description', $RS_Meta['striker_item_6_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_6_btn_text">{{ __('Item 6 Button Text') }}</label>
							<input type="text" name="striker_item_6_btn_text" id="striker_item_6_btn_text" value="{{ old('striker_item_6_btn_text', $RS_Meta['striker_item_6_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_6_btn_link">{{ __('Item 6 Button Link') }}</label>
							<input type="text" name="striker_item_6_btn_link" id="striker_item_6_btn_link" value="{{ old('striker_item_6_btn_link', $RS_Meta['striker_item_6_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="striker_item_6_image">{{ __('Item 6 Image') }}</label>
							<div class="input-group{{ $errors->has('striker_item_6_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="striker_item_6_image" id="striker_item_6_image" value="{{ old('striker_item_6_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="striker_item_6_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['striker_item_6_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['striker_item_6_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>