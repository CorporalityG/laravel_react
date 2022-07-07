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
							<input type="text" name="banner_subtitle" id="banner_subtitle" value="{{ old('banner_subtitle', $RS_Meta['banner_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
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
							<label for="improved_company_image">{{ __('Improved Company Image') }}</label>
							<div class="input-group{{ $errors->has('improved_company_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="improved_company_image" id="improved_company_image" value="{{ old('improved_company_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="improved_company_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['improved_company_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['improved_company_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="customer_loyalty_image">{{ __('Customer Loyalty Image') }}</label>
							<div class="input-group{{ $errors->has('customer_loyalty_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="customer_loyalty_image" id="customer_loyalty_image" value="{{ old('customer_loyalty_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="customer_loyalty_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['customer_loyalty_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['customer_loyalty_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="relatable_identity_image">{{ __('Relatable Identity Image') }}</label>
							<div class="input-group{{ $errors->has('relatable_identity_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="relatable_identity_image" id="relatable_identity_image" value="{{ old('relatable_identity_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="relatable_identity_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['relatable_identity_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['relatable_identity_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="omni_effect_image">{{ __('Omni effect vs experiance Image') }}</label>
							<div class="input-group{{ $errors->has('omni_effect_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="omni_effect_image" id="omni_effect_image" value="{{ old('omni_effect_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="omni_effect_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['omni_effect_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['omni_effect_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="successfull_branding_strategy_image">{{ __('Successfull Branding Strategy Image') }}</label>
							<div class="input-group{{ $errors->has('successfull_branding_strategy_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="successfull_branding_strategy_image" id="successfull_branding_strategy_image" value="{{ old('successfull_branding_strategy_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="successfull_branding_strategy_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['successfull_branding_strategy_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['successfull_branding_strategy_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">The Process Section</h4>
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

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_1_title">{{ __('Step 1 Title') }}</label>
							<input type="text" name="process_step_1_title" id="process_step_1_title" value="{{ old('process_step_1_title', $RS_Meta['process_step_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_1_subtitle">{{ __('Step 1 SubTitle') }}</label>
							<input type="text" name="process_step_1_subtitle" id="process_step_1_subtitle" value="{{ old('process_step_1_subtitle', $RS_Meta['process_step_1_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_2_title">{{ __('Step 2 Title') }}</label>
							<input type="text" name="process_step_2_title" id="process_step_2_title" value="{{ old('process_step_2_title', $RS_Meta['process_step_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_2_subtitle">{{ __('Step 2 SubTitle') }}</label>
							<input type="text" name="process_step_2_subtitle" id="process_step_2_subtitle" value="{{ old('process_step_2_subtitle', $RS_Meta['process_step_2_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_3_title">{{ __('Step 3 Title') }}</label>
							<input type="text" name="process_step_3_title" id="process_step_3_title" value="{{ old('process_step_3_title', $RS_Meta['process_step_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_3_subtitle">{{ __('Step 3 SubTitle') }}</label>
							<input type="text" name="process_step_3_subtitle" id="process_step_3_subtitle" value="{{ old('process_step_3_subtitle', $RS_Meta['process_step_3_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_4_title">{{ __('Step 4 Title') }}</label>
							<input type="text" name="process_step_4_title" id="process_step_4_title" value="{{ old('process_step_4_title', $RS_Meta['process_step_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_4_subtitle">{{ __('Step 4 SubTitle') }}</label>
							<input type="text" name="process_step_4_subtitle" id="process_step_4_subtitle" value="{{ old('process_step_4_subtitle', $RS_Meta['process_step_4_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_5_title">{{ __('Step 5 Title') }}</label>
							<input type="text" name="process_step_5_title" id="process_step_5_title" value="{{ old('process_step_5_title', $RS_Meta['process_step_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_5_subtitle">{{ __('Step 5 SubTitle') }}</label>
							<input type="text" name="process_step_5_subtitle" id="process_step_5_subtitle" value="{{ old('process_step_5_subtitle', $RS_Meta['process_step_5_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_6_title">{{ __('Step 6 Title') }}</label>
							<input type="text" name="process_step_6_title" id="process_step_6_title" value="{{ old('process_step_6_title', $RS_Meta['process_step_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="process_step_6_subtitle">{{ __('Step 6 SubTitle') }}</label>
							<input type="text" name="process_step_6_subtitle" id="process_step_6_subtitle" value="{{ old('process_step_6_subtitle', $RS_Meta['process_step_6_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Framework and Methodology Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_title">{{ __('Title') }}</label>
							<input type="text" name="framework_methodology_title" id="framework_methodology_title" value="{{ old('framework_methodology_title', $RS_Meta['framework_methodology_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="framework_methodology_subtitle" id="framework_methodology_subtitle" value="{{ old('framework_methodology_subtitle', $RS_Meta['framework_methodology_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('framework_methodology_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="framework_methodology_image" id="framework_methodology_image" value="{{ old('framework_methodology_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="framework_methodology_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['framework_methodology_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['framework_methodology_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="framework_methodology_item_1_title" id="framework_methodology_item_1_title" value="{{ old('framework_methodology_item_1_title', $RS_Meta['framework_methodology_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('framework_methodology_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="framework_methodology_item_1_image" id="framework_methodology_item_1_image" value="{{ old('framework_methodology_item_1_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="framework_methodology_item_1_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['framework_methodology_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['framework_methodology_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="framework_methodology_item_2_title" id="framework_methodology_item_2_title" value="{{ old('framework_methodology_item_2_title', $RS_Meta['framework_methodology_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="framework_methodology_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('framework_methodology_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="framework_methodology_item_2_image" id="framework_methodology_item_2_image" value="{{ old('framework_methodology_item_2_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="framework_methodology_item_2_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['framework_methodology_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['framework_methodology_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Frequently asked Questions Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_title">{{ __('Title') }}</label>
							<input type="text" name="faq_title" id="faq_title" value="{{ old('faq_title', $RS_Meta['faq_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="faq_subtitle" id="faq_subtitle" value="{{ old('faq_subtitle', $RS_Meta['faq_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_1_title">{{ __('FAQ 1 Title') }}</label>
							<input type="text" name="faq_item_1_title" id="faq_item_1_title" value="{{ old('faq_item_1_title', $RS_Meta['faq_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_1_description">{{ __('FAQ 1 Description') }}</label>
							<textarea name="faq_item_1_description" id="faq_item_1_description" class="form-control faq_item_description" placeholder="{{ __('Description') }}">{{ old('faq_item_1_description', $RS_Meta['faq_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_2_title">{{ __('FAQ 2 Title') }}</label>
							<input type="text" name="faq_item_2_title" id="faq_item_2_title" value="{{ old('faq_item_2_title', $RS_Meta['faq_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_2_description">{{ __('FAQ 2 Description') }}</label>
							<textarea name="faq_item_2_description" id="faq_item_2_description" class="form-control faq_item_description" placeholder="{{ __('Description') }}">{{ old('faq_item_2_description', $RS_Meta['faq_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_3_title">{{ __('FAQ 3 Title') }}</label>
							<input type="text" name="faq_item_3_title" id="faq_item_3_title" value="{{ old('faq_item_3_title', $RS_Meta['faq_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_3_description">{{ __('FAQ 3 Description') }}</label>
							<textarea name="faq_item_3_description" id="faq_item_3_description" class="form-control faq_item_description" placeholder="{{ __('Description') }}">{{ old('faq_item_3_description', $RS_Meta['faq_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Indomitable brand positioning strategies Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_title">{{ __('Title') }}</label>
							<input type="text" name="indomitable_title" id="indomitable_title" value="{{ old('indomitable_title', $RS_Meta['indomitable_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="indomitable_item_1_title" id="indomitable_item_1_title" value="{{ old('indomitable_item_1_title', $RS_Meta['indomitable_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="indomitable_item_1_description" id="indomitable_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('indomitable_item_1_description', $RS_Meta['indomitable_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_1_icon" id="indomitable_item_1_icon" value="{{ old('indomitable_item_1_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_1_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_1_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_1_image" id="indomitable_item_1_image" value="{{ old('indomitable_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_1_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="indomitable_item_2_title" id="indomitable_item_2_title" value="{{ old('indomitable_item_2_title', $RS_Meta['indomitable_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="indomitable_item_2_description" id="indomitable_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('indomitable_item_2_description', $RS_Meta['indomitable_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_2_icon" id="indomitable_item_2_icon" value="{{ old('indomitable_item_2_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_2_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_2_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_2_image" id="indomitable_item_2_image" value="{{ old('indomitable_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_2_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="indomitable_item_3_title" id="indomitable_item_3_title" value="{{ old('indomitable_item_3_title', $RS_Meta['indomitable_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="indomitable_item_3_description" id="indomitable_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('indomitable_item_3_description', $RS_Meta['indomitable_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_3_icon" id="indomitable_item_3_icon" value="{{ old('indomitable_item_3_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_3_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_3_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_3_image" id="indomitable_item_3_image" value="{{ old('indomitable_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_3_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="indomitable_item_4_title" id="indomitable_item_4_title" value="{{ old('indomitable_item_4_title', $RS_Meta['indomitable_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="indomitable_item_4_description" id="indomitable_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('indomitable_item_4_description', $RS_Meta['indomitable_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_4_icon">{{ __('Item 4 Icon') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_4_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_4_icon" id="indomitable_item_4_icon" value="{{ old('indomitable_item_4_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_4_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_4_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_4_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_4_image" id="indomitable_item_4_image" value="{{ old('indomitable_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_4_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="indomitable_item_5_title" id="indomitable_item_5_title" value="{{ old('indomitable_item_5_title', $RS_Meta['indomitable_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="indomitable_item_5_description" id="indomitable_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('indomitable_item_5_description', $RS_Meta['indomitable_item_5_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_5_icon">{{ __('Item 5 Icon') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_5_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_5_icon" id="indomitable_item_5_icon" value="{{ old('indomitable_item_5_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_5_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_5_icon']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_5_icon']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indomitable_item_5_image">{{ __('Item 5 Image') }}</label>
							<div class="input-group{{ $errors->has('indomitable_item_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="indomitable_item_5_image" id="indomitable_item_5_image" value="{{ old('indomitable_item_5_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="indomitable_item_5_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['indomitable_item_5_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['indomitable_item_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Articulating Yourself Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="articulating_title">{{ __('Title') }}</label>
							<input type="text" name="articulating_title" id="articulating_title" value="{{ old('articulating_title', $RS_Meta['articulating_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="articulating_description">{{ __('Description') }}</label>
							<textarea name="articulating_description" id="articulating_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('articulating_description', $RS_Meta['articulating_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<!-- Planning Phase phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Planning Phase</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_title">{{ __('Title') }}</label>
								<input type="text" name="articulating_planning_phase_title" id="articulating_planning_phase_title" value="{{ old('articulating_planning_phase_title', $RS_Meta['articulating_planning_phase_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="articulating_planning_phase_item_1_title" id="articulating_planning_phase_item_1_title" value="{{ old('articulating_planning_phase_item_1_title', $RS_Meta['articulating_planning_phase_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_planning_phase_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_planning_phase_item_1_image" id="articulating_planning_phase_item_1_image" value="{{ old('articulating_planning_phase_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_planning_phase_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_planning_phase_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_planning_phase_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="articulating_planning_phase_item_2_title" id="articulating_planning_phase_item_2_title" value="{{ old('articulating_planning_phase_item_2_title', $RS_Meta['articulating_planning_phase_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_planning_phase_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_planning_phase_item_2_image" id="articulating_planning_phase_item_2_image" value="{{ old('articulating_planning_phase_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_planning_phase_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_planning_phase_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_planning_phase_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="articulating_planning_phase_item_3_title" id="articulating_planning_phase_item_3_title" value="{{ old('articulating_planning_phase_item_3_title', $RS_Meta['articulating_planning_phase_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_planning_phase_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_planning_phase_item_3_image" id="articulating_planning_phase_item_3_image" value="{{ old('articulating_planning_phase_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_planning_phase_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_planning_phase_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_planning_phase_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="articulating_planning_phase_item_4_title" id="articulating_planning_phase_item_4_title" value="{{ old('articulating_planning_phase_item_4_title', $RS_Meta['articulating_planning_phase_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_planning_phase_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_planning_phase_item_4_image" id="articulating_planning_phase_item_4_image" value="{{ old('articulating_planning_phase_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_planning_phase_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_planning_phase_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_planning_phase_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_5_title">{{ __('Item 5 Title') }}</label>
								<input type="text" name="articulating_planning_phase_item_5_title" id="articulating_planning_phase_item_5_title" value="{{ old('articulating_planning_phase_item_5_title', $RS_Meta['articulating_planning_phase_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_planning_phase_item_5_image">{{ __('Item 5 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_planning_phase_item_5_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_planning_phase_item_5_image" id="articulating_planning_phase_item_5_image" value="{{ old('articulating_planning_phase_item_5_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_planning_phase_item_5_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_planning_phase_item_5_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_planning_phase_item_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
				<!-- Planning Phase end -->

				<!-- Prep Phase phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Prep Phase</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_title">{{ __('Title') }}</label>
								<input type="text" name="articulating_prep_phase_title" id="articulating_prep_phase_title" value="{{ old('articulating_prep_phase_title', $RS_Meta['articulating_prep_phase_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="articulating_prep_phase_item_1_title" id="articulating_prep_phase_item_1_title" value="{{ old('articulating_prep_phase_item_1_title', $RS_Meta['articulating_prep_phase_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_prep_phase_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_prep_phase_item_1_image" id="articulating_prep_phase_item_1_image" value="{{ old('articulating_prep_phase_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_prep_phase_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_prep_phase_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_prep_phase_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="articulating_prep_phase_item_2_title" id="articulating_prep_phase_item_2_title" value="{{ old('articulating_prep_phase_item_2_title', $RS_Meta['articulating_prep_phase_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_prep_phase_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_prep_phase_item_2_image" id="articulating_prep_phase_item_2_image" value="{{ old('articulating_prep_phase_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_prep_phase_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_prep_phase_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_prep_phase_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="articulating_prep_phase_item_3_title" id="articulating_prep_phase_item_3_title" value="{{ old('articulating_prep_phase_item_3_title', $RS_Meta['articulating_prep_phase_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_prep_phase_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_prep_phase_item_3_image" id="articulating_prep_phase_item_3_image" value="{{ old('articulating_prep_phase_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_prep_phase_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_prep_phase_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_prep_phase_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="articulating_prep_phase_item_4_title" id="articulating_prep_phase_item_4_title" value="{{ old('articulating_prep_phase_item_4_title', $RS_Meta['articulating_prep_phase_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_prep_phase_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_prep_phase_item_4_image" id="articulating_prep_phase_item_4_image" value="{{ old('articulating_prep_phase_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_prep_phase_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_prep_phase_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_prep_phase_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_5_title">{{ __('Item 5 Title') }}</label>
								<input type="text" name="articulating_prep_phase_item_5_title" id="articulating_prep_phase_item_5_title" value="{{ old('articulating_prep_phase_item_5_title', $RS_Meta['articulating_prep_phase_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_prep_phase_item_5_image">{{ __('Item 5 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_prep_phase_item_5_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_prep_phase_item_5_image" id="articulating_prep_phase_item_5_image" value="{{ old('articulating_prep_phase_item_5_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_prep_phase_item_5_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_prep_phase_item_5_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_prep_phase_item_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Prep Phase end -->

				<!-- Execution Phase phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Execution Phase</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_title">{{ __('Title') }}</label>
								<input type="text" name="articulating_execution_phase_title" id="articulating_execution_phase_title" value="{{ old('articulating_execution_phase_title', $RS_Meta['articulating_execution_phase_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="articulating_execution_phase_item_1_title" id="articulating_execution_phase_item_1_title" value="{{ old('articulating_execution_phase_item_1_title', $RS_Meta['articulating_execution_phase_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_execution_phase_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_execution_phase_item_1_image" id="articulating_execution_phase_item_1_image" value="{{ old('articulating_execution_phase_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_execution_phase_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_execution_phase_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_execution_phase_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="articulating_execution_phase_item_2_title" id="articulating_execution_phase_item_2_title" value="{{ old('articulating_execution_phase_item_2_title', $RS_Meta['articulating_execution_phase_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_execution_phase_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_execution_phase_item_2_image" id="articulating_execution_phase_item_2_image" value="{{ old('articulating_execution_phase_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_execution_phase_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_execution_phase_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_execution_phase_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="articulating_execution_phase_item_3_title" id="articulating_execution_phase_item_3_title" value="{{ old('articulating_execution_phase_item_3_title', $RS_Meta['articulating_execution_phase_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_execution_phase_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_execution_phase_item_3_image" id="articulating_execution_phase_item_3_image" value="{{ old('articulating_execution_phase_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_execution_phase_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_execution_phase_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_execution_phase_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="articulating_execution_phase_item_4_title" id="articulating_execution_phase_item_4_title" value="{{ old('articulating_execution_phase_item_4_title', $RS_Meta['articulating_execution_phase_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_execution_phase_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_execution_phase_item_4_image" id="articulating_execution_phase_item_4_image" value="{{ old('articulating_execution_phase_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_execution_phase_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_execution_phase_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_execution_phase_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_5_title">{{ __('Item 5 Title') }}</label>
								<input type="text" name="articulating_execution_phase_item_5_title" id="articulating_execution_phase_item_5_title" value="{{ old('articulating_execution_phase_item_5_title', $RS_Meta['articulating_execution_phase_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_execution_phase_item_5_image">{{ __('Item 5 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_execution_phase_item_5_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_execution_phase_item_5_image" id="articulating_execution_phase_item_5_image" value="{{ old('articulating_execution_phase_item_5_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_execution_phase_item_5_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_execution_phase_item_5_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_execution_phase_item_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Execution Phase end -->

				<!-- Monitoring Phase phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Monitoring Phase</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_title">{{ __('Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_title" id="articulating_monitoring_phase_title" value="{{ old('articulating_monitoring_phase_title', $RS_Meta['articulating_monitoring_phase_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_1_title" id="articulating_monitoring_phase_item_1_title" value="{{ old('articulating_monitoring_phase_item_1_title', $RS_Meta['articulating_monitoring_phase_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_1_image" id="articulating_monitoring_phase_item_1_image" value="{{ old('articulating_monitoring_phase_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_2_title" id="articulating_monitoring_phase_item_2_title" value="{{ old('articulating_monitoring_phase_item_2_title', $RS_Meta['articulating_monitoring_phase_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_2_image" id="articulating_monitoring_phase_item_2_image" value="{{ old('articulating_monitoring_phase_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_3_title" id="articulating_monitoring_phase_item_3_title" value="{{ old('articulating_monitoring_phase_item_3_title', $RS_Meta['articulating_monitoring_phase_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_3_image" id="articulating_monitoring_phase_item_3_image" value="{{ old('articulating_monitoring_phase_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_4_title" id="articulating_monitoring_phase_item_4_title" value="{{ old('articulating_monitoring_phase_item_4_title', $RS_Meta['articulating_monitoring_phase_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_4_image" id="articulating_monitoring_phase_item_4_image" value="{{ old('articulating_monitoring_phase_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_5_title">{{ __('Item 5 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_5_title" id="articulating_monitoring_phase_item_5_title" value="{{ old('articulating_monitoring_phase_item_5_title', $RS_Meta['articulating_monitoring_phase_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_5_image">{{ __('Item 5 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_5_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_5_image" id="articulating_monitoring_phase_item_5_image" value="{{ old('articulating_monitoring_phase_item_5_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_5_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_5_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_6_title">{{ __('Item 6 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_6_title" id="articulating_monitoring_phase_item_6_title" value="{{ old('articulating_monitoring_phase_item_6_title', $RS_Meta['articulating_monitoring_phase_item_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_6_image">{{ __('Item 6 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_6_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_6_image" id="articulating_monitoring_phase_item_6_image" value="{{ old('articulating_monitoring_phase_item_6_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_6_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_6_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_6_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_7_title">{{ __('Item 7 Title') }}</label>
								<input type="text" name="articulating_monitoring_phase_item_7_title" id="articulating_monitoring_phase_item_7_title" value="{{ old('articulating_monitoring_phase_item_7_title', $RS_Meta['articulating_monitoring_phase_item_7_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="articulating_monitoring_phase_item_7_image">{{ __('Item 7 Image') }}</label>
								<div class="input-group{{ $errors->has('articulating_monitoring_phase_item_7_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="articulating_monitoring_phase_item_7_image" id="articulating_monitoring_phase_item_7_image" value="{{ old('articulating_monitoring_phase_item_7_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="articulating_monitoring_phase_item_7_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['articulating_monitoring_phase_item_7_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['articulating_monitoring_phase_item_7_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Monitoring Phase end -->

			</div>
		</div>

	</div>
</div>

<!-- Page specific script -->
<script>
$(function () {
    // Summernote
    $('.faq_item_description').summernote();
});
</script>