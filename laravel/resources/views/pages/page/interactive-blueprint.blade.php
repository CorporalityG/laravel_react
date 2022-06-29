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
							<label for="banner_heading">{{ __('Heading') }}</label>
							<input type="text" name="banner_heading" id="banner_heading" value="{{ old('banner_heading', $RS_Meta['banner_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_title">{{ __('Title') }}</label>
							<input type="text" name="banner_title" id="banner_title" value="{{ old('banner_title', $RS_Meta['banner_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">You Know Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="know_heading">{{ __('Heading') }}</label>
							<input type="text" name="know_heading" id="know_heading" value="{{ old('know_heading', $RS_Meta['know_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="know_item_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="know_item_1_title" id="know_item_1_title" value="{{ old('know_item_1_title', $RS_Meta['know_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="know_item_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('know_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="know_item_1_image" id="know_item_1_image" value="{{ old('know_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="know_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['know_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['know_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="know_item_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="know_item_2_title" id="know_item_2_title" value="{{ old('know_item_2_title', $RS_Meta['know_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="know_item_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('know_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="know_item_2_image" id="know_item_2_image" value="{{ old('know_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="know_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['know_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['know_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="know_title">{{ __('Title') }}</label>
							<input type="text" name="know_title" id="know_title" value="{{ old('know_title', $RS_Meta['know_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Working with Innovators Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_heading">{{ __('Heading') }}</label>
							<input type="text" name="innovators_heading" id="innovators_heading" value="{{ old('innovators_heading', $RS_Meta['innovators_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_subheading">{{ __('SubHeading') }}</label>
							<input type="text" name="innovators_subheading" id="innovators_subheading" value="{{ old('innovators_subheading', $RS_Meta['innovators_subheading'] ?? '') }}" class="form-control" placeholder="{{ __('SubHeading') }}">
						</div>
					</div>
				
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_title">{{ __('Title') }}</label>
							<input type="text" name="innovators_title" id="innovators_title" value="{{ old('innovators_title', $RS_Meta['innovators_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="innovators_subtitle" id="innovators_subtitle" value="{{ old('innovators_subtitle', $RS_Meta['innovators_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('innovators_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="innovators_image" id="innovators_image" value="{{ old('innovators_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="innovators_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['innovators_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['innovators_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="innovators_item_1_title" id="innovators_item_1_title" value="{{ old('innovators_item_1_title', $RS_Meta['innovators_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="innovators_item_2_title" id="innovators_item_2_title" value="{{ old('innovators_item_2_title', $RS_Meta['innovators_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="innovators_item_3_title" id="innovators_item_3_title" value="{{ old('innovators_item_3_title', $RS_Meta['innovators_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="innovators_item_4_title" id="innovators_item_4_title" value="{{ old('innovators_item_4_title', $RS_Meta['innovators_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="innovators_item_5_title" id="innovators_item_5_title" value="{{ old('innovators_item_5_title', $RS_Meta['innovators_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_box_title_1">{{ __('Box Title 1') }}</label>
							<input type="text" name="innovators_box_title_1" id="innovators_box_title_1" value="{{ old('innovators_box_title_1', $RS_Meta['innovators_box_title_1'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_box_title_2">{{ __('Box Title 2') }}</label>
							<input type="text" name="innovators_box_title_2" id="innovators_box_title_2" value="{{ old('innovators_box_title_2', $RS_Meta['innovators_box_title_2'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovators_box_btn_text">{{ __('Box Button Text') }}</label>
							<input type="text" name="innovators_box_btn_text" id="innovators_box_btn_text" value="{{ old('innovators_box_btn_text', $RS_Meta['innovators_box_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Innovate & Educate Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovate_educate_title">{{ __('Title') }}</label>
							<input type="text" name="innovate_educate_title" id="innovate_educate_title" value="{{ old('innovate_educate_title', $RS_Meta['innovate_educate_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="innovate_educate_description">{{ __('Description') }}</label>
							<textarea name="innovate_educate_description" id="innovate_educate_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('innovate_educate_description', $RS_Meta['innovate_educate_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="innovate_educate_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('innovate_educate_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="innovate_educate_image" id="innovate_educate_image" value="{{ old('innovate_educate_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="innovate_educate_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['innovate_educate_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['innovate_educate_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">The Strategy Solutions Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_solutions_title">{{ __('Title') }}</label>
							<input type="text" name="strategy_solutions_title" id="strategy_solutions_title" value="{{ old('strategy_solutions_title', $RS_Meta['strategy_solutions_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_solutions_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="strategy_solutions_subtitle" id="strategy_solutions_subtitle" value="{{ old('strategy_solutions_subtitle', $RS_Meta['strategy_solutions_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>