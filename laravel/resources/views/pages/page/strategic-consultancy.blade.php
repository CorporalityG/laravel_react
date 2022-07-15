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
				<h4 class="card-title text-dark w-100">Subscribe YouTube Channel Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="subscribe_channel_title">{{ __('Title') }}</label>
							<input type="text" name="subscribe_channel_title" id="subscribe_channel_title" value="{{ old('subscribe_channel_title', $RS_Meta['subscribe_channel_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div> 

					<div class="col-md-12">
						<div class="form-group">
							<label for="subscribe_channel_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="subscribe_channel_btn_text" id="subscribe_channel_btn_text" value="{{ old('subscribe_channel_btn_text', $RS_Meta['subscribe_channel_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="subscribe_channel_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="subscribe_channel_btn_link" id="subscribe_channel_btn_link" value="{{ old('subscribe_channel_btn_link', $RS_Meta['subscribe_channel_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="subscribe_channel_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('subscribe_channel_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="subscribe_channel_image" id="subscribe_channel_image" value="{{ old('subscribe_channel_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="subscribe_channel_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['subscribe_channel_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['subscribe_channel_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Advice Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
                <div class="col-md-12">
						<div class="form-group">
							<label for="advice_title_image">{{ __('Title Image') }}</label>
							<div class="input-group{{ $errors->has('advice_title_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="advice_title_image" id="advice_title_image" value="{{ old('advice_title_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="advice_title_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['advice_title_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['advice_title_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
                    
					<div class="col-md-12">
						<div class="form-group">
							<label for="advice_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('advice_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="advice_image" id="advice_image" value="{{ old('advice_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="advice_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['advice_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['advice_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Business Experience Strategy Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_title">{{ __('Title') }}</label>
							<input type="text" name="business_experience_strategy_title" id="business_experience_strategy_title" value="{{ old('business_experience_strategy_title', $RS_Meta['business_experience_strategy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_description">{{ __('Description') }}</label>
							<textarea name="business_experience_strategy_description" id="business_experience_strategy_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('business_experience_strategy_description', $RS_Meta['business_experience_strategy_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_1_image">{{ __('Step 1 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_1_image" id="business_experience_strategy_step_1_image" value="{{ old('business_experience_strategy_step_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_2_image">{{ __('Step 2 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_2_image" id="business_experience_strategy_step_2_image" value="{{ old('business_experience_strategy_step_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_3_image">{{ __('Step 3 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_3_image" id="business_experience_strategy_step_3_image" value="{{ old('business_experience_strategy_step_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_4_image">{{ __('Step 4 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_4_image" id="business_experience_strategy_step_4_image" value="{{ old('business_experience_strategy_step_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-4">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_5_image">{{ __('Step 5 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_5_image" id="business_experience_strategy_step_5_image" value="{{ old('business_experience_strategy_step_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_5_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-5">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_6_image">{{ __('Step 6 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_6_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_6_image" id="business_experience_strategy_step_6_image" value="{{ old('business_experience_strategy_step_6_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_6_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_6_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_6_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_experience_strategy_step_7_image">{{ __('Step 7 Image') }}</label>
							<div class="input-group{{ $errors->has('business_experience_strategy_step_7_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="business_experience_strategy_step_7_image" id="business_experience_strategy_step_7_image" value="{{ old('business_experience_strategy_step_7_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="business_experience_strategy_step_7_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['business_experience_strategy_step_7_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['business_experience_strategy_step_7_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Business Model vs Value Design Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_title">{{ __('Title') }}</label>
							<input type="text" name="business_model_design_title" id="business_model_design_title" value="{{ old('business_model_design_title', $RS_Meta['business_model_design_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_description">{{ __('Description') }}</label>
							<textarea name="business_model_design_description" id="business_model_design_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('business_model_design_description', $RS_Meta['business_model_design_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="business_model_design_item_1_title" id="business_model_design_item_1_title" value="{{ old('business_model_design_item_1_title', $RS_Meta['business_model_design_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="business_model_design_item_2_title" id="business_model_design_item_2_title" value="{{ old('business_model_design_item_2_title', $RS_Meta['business_model_design_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="business_model_design_item_3_title" id="business_model_design_item_3_title" value="{{ old('business_model_design_item_3_title', $RS_Meta['business_model_design_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="business_model_design_item_4_title" id="business_model_design_item_4_title" value="{{ old('business_model_design_item_4_title', $RS_Meta['business_model_design_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="business_model_design_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="business_model_design_item_5_title" id="business_model_design_item_5_title" value="{{ old('business_model_design_item_5_title', $RS_Meta['business_model_design_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Strategy & Customer Experience Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="marketing_strategy_experience_1_title" id="marketing_strategy_experience_1_title" value="{{ old('marketing_strategy_experience_1_title', $RS_Meta['marketing_strategy_experience_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_1_description">{{ __('Description 1') }}</label>
							<textarea name="marketing_strategy_experience_1_description" id="marketing_strategy_experience_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_strategy_experience_1_description', $RS_Meta['marketing_strategy_experience_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_1_btn_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="marketing_strategy_experience_1_btn_text" id="marketing_strategy_experience_1_btn_text" value="{{ old('marketing_strategy_experience_1_btn_text', $RS_Meta['marketing_strategy_experience_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="marketing_strategy_experience_2_title" id="marketing_strategy_experience_2_title" value="{{ old('marketing_strategy_experience_2_title', $RS_Meta['marketing_strategy_experience_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_2_description">{{ __('Description 2') }}</label>
							<textarea name="marketing_strategy_experience_2_description" id="marketing_strategy_experience_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_strategy_experience_2_description', $RS_Meta['marketing_strategy_experience_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_2_btn_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="marketing_strategy_experience_2_btn_text" id="marketing_strategy_experience_2_btn_text" value="{{ old('marketing_strategy_experience_2_btn_text', $RS_Meta['marketing_strategy_experience_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_experience_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_experience_1_image" id="marketing_strategy_experience_1_image" value="{{ old('marketing_strategy_experience_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_experience_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_experience_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_experience_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_experience_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_experience_2_image" id="marketing_strategy_experience_2_image" value="{{ old('marketing_strategy_experience_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_experience_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_experience_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_experience_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_3_image">{{ __('Image 3') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_experience_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_experience_3_image" id="marketing_strategy_experience_3_image" value="{{ old('marketing_strategy_experience_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_experience_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_experience_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_experience_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_4_image">{{ __('Image 4') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_experience_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_experience_4_image" id="marketing_strategy_experience_4_image" value="{{ old('marketing_strategy_experience_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_experience_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_experience_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_experience_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-4">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_experience_5_image">{{ __('Image 5') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_experience_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_experience_5_image" id="marketing_strategy_experience_5_image" value="{{ old('marketing_strategy_experience_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_experience_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_experience_5_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_experience_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
							<label for="faq_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('faq_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="faq_image" id="faq_image" value="{{ old('faq_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="faq_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['faq_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['faq_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-5">
							@endif
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
							<textarea name="faq_item_1_description" id="faq_item_1_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_1_description', $RS_Meta['faq_item_1_description'] ?? '') }}</textarea>
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
							<textarea name="faq_item_2_description" id="faq_item_2_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_2_description', $RS_Meta['faq_item_2_description'] ?? '') }}</textarea>
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
							<textarea name="faq_item_3_description" id="faq_item_3_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_3_description', $RS_Meta['faq_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_title">{{ __('FAQ 4 Title') }}</label>
							<input type="text" name="faq_item_4_title" id="faq_item_4_title" value="{{ old('faq_item_4_title', $RS_Meta['faq_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_description">{{ __('FAQ 4 Description') }}</label>
							<textarea name="faq_item_4_description" id="faq_item_4_description" class="form-control faq_description" placeholder="{{ __('Description') }}">{{ old('faq_item_4_description', $RS_Meta['faq_item_4_description'] ?? '') }}</textarea>
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
    $('.faq_description').summernote();
});
</script>