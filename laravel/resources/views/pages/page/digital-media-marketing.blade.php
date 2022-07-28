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
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Strategy Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_title">{{ __('Title') }}</label>
							<input type="text" name="marketing_strategy_title" id="marketing_strategy_title" value="{{ old('marketing_strategy_title', $RS_Meta['marketing_strategy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_subtitle">{{ __('SubTitle') }}</label>
							<textarea name="marketing_strategy_subtitle" id="marketing_strategy_subtitle" class="form-control" placeholder="{{ __('SubTitle') }}">{{ old('marketing_strategy_subtitle', $RS_Meta['marketing_strategy_subtitle'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_1_title">{{ __('Step 1 Title') }}</label>
							<input type="text" name="marketing_strategy_step_1_title" id="marketing_strategy_step_1_title" value="{{ old('marketing_strategy_step_1_title', $RS_Meta['marketing_strategy_step_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_1_image">{{ __('Step 1 Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_step_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_step_1_image" id="marketing_strategy_step_1_image" value="{{ old('marketing_strategy_step_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_step_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_step_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_step_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="marketing_strategy_step_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_2_title">{{ __('Step 2 Title') }}</label>
							<input type="text" name="marketing_strategy_step_2_title" id="marketing_strategy_step_2_title" value="{{ old('marketing_strategy_step_2_title', $RS_Meta['marketing_strategy_step_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_2_image">{{ __('Step 2 Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_step_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_step_2_image" id="marketing_strategy_step_2_image" value="{{ old('marketing_strategy_step_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_step_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_step_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_step_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="marketing_strategy_step_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_3_title">{{ __('Step 3 Title') }}</label>
							<input type="text" name="marketing_strategy_step_3_title" id="marketing_strategy_step_3_title" value="{{ old('marketing_strategy_step_3_title', $RS_Meta['marketing_strategy_step_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_3_image">{{ __('Step 3 Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_step_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_step_3_image" id="marketing_strategy_step_3_image" value="{{ old('marketing_strategy_step_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_step_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_step_3_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_step_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="marketing_strategy_step_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_4_title">{{ __('Step 4 Title') }}</label>
							<input type="text" name="marketing_strategy_step_4_title" id="marketing_strategy_step_4_title" value="{{ old('marketing_strategy_step_4_title', $RS_Meta['marketing_strategy_step_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_step_4_image">{{ __('Step 4 Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_strategy_step_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_strategy_step_4_image" id="marketing_strategy_step_4_image" value="{{ old('marketing_strategy_step_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_strategy_step_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_strategy_step_4_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_strategy_step_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="marketing_strategy_step_4_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Key Objectives Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_title">{{ __('Title') }}</label>
							<input type="text" name="key_objectives_title" id="key_objectives_title" value="{{ old('key_objectives_title', $RS_Meta['key_objectives_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="key_objectives_subtitle" id="key_objectives_subtitle" value="{{ old('key_objectives_subtitle', $RS_Meta['key_objectives_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_description">{{ __('Description') }}</label>
							<textarea name="key_objectives_description" id="key_objectives_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('key_objectives_description', $RS_Meta['key_objectives_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('key_objectives_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="key_objectives_image" id="key_objectives_image" value="{{ old('key_objectives_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="key_objectives_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['key_objectives_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['key_objectives_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="key_objectives_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="key_objectives_item_1_title" id="key_objectives_item_1_title" value="{{ old('key_objectives_item_1_title', $RS_Meta['key_objectives_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="key_objectives_item_2_title" id="key_objectives_item_2_title" value="{{ old('key_objectives_item_2_title', $RS_Meta['key_objectives_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="key_objectives_item_3_title" id="key_objectives_item_3_title" value="{{ old('key_objectives_item_3_title', $RS_Meta['key_objectives_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="key_objectives_item_4_title" id="key_objectives_item_4_title" value="{{ old('key_objectives_item_4_title', $RS_Meta['key_objectives_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="key_objectives_item_5_title" id="key_objectives_item_5_title" value="{{ old('key_objectives_item_5_title', $RS_Meta['key_objectives_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="key_objectives_item_6_title">{{ __('Item 6 Title') }}</label>
							<input type="text" name="key_objectives_item_6_title" id="key_objectives_item_6_title" value="{{ old('key_objectives_item_6_title', $RS_Meta['key_objectives_item_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Goals Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_goals_title">{{ __('Title') }}</label>
							<input type="text" name="marketing_goals_title" id="marketing_goals_title" value="{{ old('marketing_goals_title', $RS_Meta['marketing_goals_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_goals_item_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('marketing_goals_item_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="marketing_goals_item_image" id="marketing_goals_item_image" value="{{ old('marketing_goals_item_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="marketing_goals_item_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['marketing_goals_item_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['marketing_goals_item_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="marketing_goals_item_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_goals_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="marketing_goals_item_1_title" id="marketing_goals_item_1_title" value="{{ old('marketing_goals_item_1_title', $RS_Meta['marketing_goals_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_goals_item_1_subtitle">{{ __('Item 1 SubTitle') }}</label>
							<input type="text" name="marketing_goals_item_1_subtitle" id="marketing_goals_item_1_subtitle" value="{{ old('marketing_goals_item_1_subtitle', $RS_Meta['marketing_goals_item_1_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_goals_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="marketing_goals_item_2_title" id="marketing_goals_item_2_title" value="{{ old('marketing_goals_item_2_title', $RS_Meta['marketing_goals_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_goals_item_2_subtitle">{{ __('Item 2 SubTitle') }}</label>
							<input type="text" name="marketing_goals_item_2_subtitle" id="marketing_goals_item_2_subtitle" value="{{ old('marketing_goals_item_2_subtitle', $RS_Meta['marketing_goals_item_2_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
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
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">What to Expect Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_title">{{ __('Title') }}</label>
							<input type="text" name="what_expect_title" id="what_expect_title" value="{{ old('what_expect_title', $RS_Meta['what_expect_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="what_expect_subtitle" id="what_expect_subtitle" value="{{ old('what_expect_subtitle', $RS_Meta['what_expect_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_description">{{ __('Description') }}</label>
							<textarea name="what_expect_description" id="what_expect_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_description', $RS_Meta['what_expect_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('what_expect_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_image" id="what_expect_image" value="{{ old('what_expect_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="what_expect_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="what_expect_item_1_title" id="what_expect_item_1_title" value="{{ old('what_expect_item_1_title', $RS_Meta['what_expect_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="what_expect_item_1_description" id="what_expect_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_item_1_description', $RS_Meta['what_expect_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_1_icon" id="what_expect_item_1_icon" value="{{ old('what_expect_item_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="what_expect_item_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="what_expect_item_2_title" id="what_expect_item_2_title" value="{{ old('what_expect_item_2_title', $RS_Meta['what_expect_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="what_expect_item_2_description" id="what_expect_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_item_2_description', $RS_Meta['what_expect_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_2_icon" id="what_expect_item_2_icon" value="{{ old('what_expect_item_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="what_expect_item_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="what_expect_item_3_title" id="what_expect_item_3_title" value="{{ old('what_expect_item_3_title', $RS_Meta['what_expect_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="what_expect_item_3_description" id="what_expect_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_item_3_description', $RS_Meta['what_expect_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_3_icon">{{ __('Item 3 Icon') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_3_icon" id="what_expect_item_3_icon" value="{{ old('what_expect_item_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="what_expect_item_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="what_expect_item_4_title" id="what_expect_item_4_title" value="{{ old('what_expect_item_4_title', $RS_Meta['what_expect_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="what_expect_item_4_description" id="what_expect_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_item_4_description', $RS_Meta['what_expect_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_4_icon">{{ __('Item 4 Icon') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_4_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_4_icon" id="what_expect_item_4_icon" value="{{ old('what_expect_item_4_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_4_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_4_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_4_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="what_expect_item_4_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="what_expect_item_5_title" id="what_expect_item_5_title" value="{{ old('what_expect_item_5_title', $RS_Meta['what_expect_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="what_expect_item_5_description" id="what_expect_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('what_expect_item_5_description', $RS_Meta['what_expect_item_5_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_5_icon">{{ __('Item 5 Icon') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_5_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_5_icon" id="what_expect_item_5_icon" value="{{ old('what_expect_item_5_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_5_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_5_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_5_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="what_expect_item_5_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">From pitch to picture perfect scenario Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="pitch_title">{{ __('Title') }}</label>
							<input type="text" name="pitch_title" id="pitch_title" value="{{ old('pitch_title', $RS_Meta['pitch_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="pitch_description">{{ __('Description') }}</label>
							<textarea name="pitch_description" id="pitch_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('pitch_description', $RS_Meta['pitch_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="pitch_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('pitch_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="pitch_image" id="pitch_image" value="{{ old('pitch_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="pitch_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['pitch_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['pitch_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="pitch_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
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
    $('.faq_description').summernote();
});
</script>