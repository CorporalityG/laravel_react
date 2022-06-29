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
				<h4 class="card-title text-dark w-100">Work as One Mind Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_mind_title">{{ __('Title') }}</label>
							<input type="text" name="work_mind_title" id="work_mind_title" value="{{ old('work_mind_title', $RS_Meta['work_mind_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_mind_description">{{ __('Description') }}</label>
							<textarea name="work_mind_description" id="work_mind_description" class="form-control" placeholder="{{ __('Description') }}" rows="10">{{ old('work_mind_description', $RS_Meta['work_mind_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="work_mind_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('work_mind_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_mind_image" id="work_mind_image" value="{{ old('work_mind_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_mind_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_mind_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_mind_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Conditioned framework address Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="conditioned_framework_title">{{ __('Title') }}</label>
							<input type="text" name="conditioned_framework_title" id="conditioned_framework_title" value="{{ old('conditioned_framework_title', $RS_Meta['conditioned_framework_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="conditioned_framework_description">{{ __('Description') }}</label>
							<textarea name="conditioned_framework_description" id="conditioned_framework_description" class="form-control" placeholder="{{ __('Description') }}" rows="10">{{ old('conditioned_framework_description', $RS_Meta['conditioned_framework_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Top Elements of the framework Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_title">{{ __('Title 1') }}</label>
							<input type="text" name="elements_framework_title" id="elements_framework_title" value="{{ old('elements_framework_title', $RS_Meta['elements_framework_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_title_2">{{ __('Title 2') }}</label>
							<input type="text" name="elements_framework_title_2" id="elements_framework_title_2" value="{{ old('elements_framework_title_2', $RS_Meta['elements_framework_title_2'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_description">{{ __('Description') }}</label>
							<textarea name="elements_framework_description" id="elements_framework_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('elements_framework_description', $RS_Meta['elements_framework_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="elements_framework_btn_text" id="elements_framework_btn_text" value="{{ old('elements_framework_btn_text', $RS_Meta['elements_framework_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="elements_framework_btn_link" id="elements_framework_btn_link" value="{{ old('elements_framework_btn_link', $RS_Meta['elements_framework_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="elements_framework_item_1_title" id="elements_framework_item_1_title" value="{{ old('elements_framework_item_1_title', $RS_Meta['elements_framework_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_1_description">{{ __('Item 1  Description') }}</label>
							<textarea name="elements_framework_item_1_description" id="elements_framework_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('elements_framework_item_1_description', $RS_Meta['elements_framework_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="elements_framework_item_2_title" id="elements_framework_item_2_title" value="{{ old('elements_framework_item_2_title', $RS_Meta['elements_framework_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_2_description">{{ __('Item 2  Description') }}</label>
							<textarea name="elements_framework_item_2_description" id="elements_framework_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('elements_framework_item_2_description', $RS_Meta['elements_framework_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="elements_framework_item_3_title" id="elements_framework_item_3_title" value="{{ old('elements_framework_item_3_title', $RS_Meta['elements_framework_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="elements_framework_item_3_description" id="elements_framework_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('elements_framework_item_3_description', $RS_Meta['elements_framework_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="elements_framework_item_4_title" id="elements_framework_item_4_title" value="{{ old('elements_framework_item_4_title', $RS_Meta['elements_framework_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="elements_framework_item_4_description" id="elements_framework_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('elements_framework_item_4_description', $RS_Meta['elements_framework_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="elements_framework_item_5_title" id="elements_framework_item_5_title" value="{{ old('elements_framework_item_5_title', $RS_Meta['elements_framework_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="elements_framework_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="elements_framework_item_5_description" id="elements_framework_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('elements_framework_item_5_description', $RS_Meta['elements_framework_item_5_description'] ?? '') }}</textarea>
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
									<input type="file" name="work_item_1_icon" id="work_item_1_icon" value="{{ old('work_item_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_1_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_1_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
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
									<input type="file" name="work_item_2_icon" id="work_item_2_icon" value="{{ old('work_item_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_2_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_2_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
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
									<input type="file" name="work_item_3_icon" id="work_item_3_icon" value="{{ old('work_item_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_3_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_3_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
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
									<input type="file" name="work_item_4_icon" id="work_item_4_icon" value="{{ old('work_item_4_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_4_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_4_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_4_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
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
									<input type="file" name="work_item_5_icon" id="work_item_5_icon" value="{{ old('work_item_5_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_item_5_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_item_5_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_item_5_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('work_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="work_image" id="work_image" value="{{ old('work_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="work_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['work_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['work_image']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

                <div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_content_item_1_title">{{ __('Item 1 Content Title') }}</label>
							<input type="text" name="work_content_item_1_title" id="work_content_item_1_title" value="{{ old('work_content_item_1_title', $RS_Meta['work_content_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="work_content_item_1_description">{{ __('Item 1 Content Description') }}</label>
							<textarea name="work_content_item_1_description" id="work_content_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_content_item_1_description', $RS_Meta['work_content_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

                <div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="work_content_item_2_title">{{ __('Item 2 Content Title') }}</label>
							<input type="text" name="work_content_item_2_title" id="work_content_item_2_title" value="{{ old('work_content_item_2_title', $RS_Meta['work_content_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="work_content_item_2_description">{{ __('Item 2 Content Description') }}</label>
							<textarea name="work_content_item_2_description" id="work_content_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('work_content_item_2_description', $RS_Meta['work_content_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">What's the Process? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_title">{{ __('Title') }}</label>
							<input type="text" name="process_title" id="process_title" value="{{ old('process_title', $RS_Meta['process_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="process_item_1_title" id="process_item_1_title" value="{{ old('process_item_1_title', $RS_Meta['process_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="process_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="process_item_1_description" id="process_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('process_item_1_description', $RS_Meta['process_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('process_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="process_item_1_icon" id="process_item_1_icon" value="{{ old('process_item_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="process_item_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['process_item_1_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['process_item_1_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="process_item_2_title" id="process_item_2_title" value="{{ old('process_item_2_title', $RS_Meta['process_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="process_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="process_item_2_description" id="process_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('process_item_2_description', $RS_Meta['process_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('process_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="process_item_2_icon" id="process_item_2_icon" value="{{ old('process_item_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="process_item_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['process_item_2_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['process_item_2_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="process_item_3_title" id="process_item_3_title" value="{{ old('process_item_3_title', $RS_Meta['process_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="process_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="process_item_3_description" id="process_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('process_item_3_description', $RS_Meta['process_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('process_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="process_item_3_icon" id="process_item_3_icon" value="{{ old('process_item_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="process_item_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['process_item_3_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['process_item_3_icon']) }}" alt="{{ 'Icon' }}" class="max-height-150 mt-3">
							@endif
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
    $('#work_mind_description').summernote();
	$('#conditioned_framework_description').summernote();
});
</script>