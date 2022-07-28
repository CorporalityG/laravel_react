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
				<h4 class="card-title text-dark w-100">Our Approach Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_title">{{ __('Title') }}</label>
							<input type="text" name="our_approach_title" id="our_approach_title" value="{{ old('our_approach_title', $RS_Meta['our_approach_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('our_approach_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="our_approach_image" id="our_approach_image" value="{{ old('our_approach_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="our_approach_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['our_approach_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['our_approach_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="our_approach_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_1_title">{{ __('Step 1 Title') }}</label>
							<input type="text" name="our_approach_step_1_title" id="our_approach_step_1_title" value="{{ old('our_approach_step_1_title', $RS_Meta['our_approach_step_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_1_description">{{ __('Step 1 Description') }}</label>
							<textarea name="our_approach_step_1_description" id="our_approach_step_1_description" class="form-control our_approach_step_description" placeholder="{{ __('Description') }}">{{ old('our_approach_step_1_description', $RS_Meta['our_approach_step_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_2_title">{{ __('Step 2 Title') }}</label>
							<input type="text" name="our_approach_step_2_title" id="our_approach_step_2_title" value="{{ old('our_approach_step_2_title', $RS_Meta['our_approach_step_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_2_description">{{ __('Step 1 Description') }}</label>
							<textarea name="our_approach_step_2_description" id="our_approach_step_2_description" class="form-control our_approach_step_description" placeholder="{{ __('Description') }}">{{ old('our_approach_step_2_description', $RS_Meta['our_approach_step_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_3_title">{{ __('Step 3 Title') }}</label>
							<input type="text" name="our_approach_step_3_title" id="our_approach_step_3_title" value="{{ old('our_approach_step_3_title', $RS_Meta['our_approach_step_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_3_description">{{ __('Step 1 Description') }}</label>
							<textarea name="our_approach_step_3_description" id="our_approach_step_3_description" class="form-control our_approach_step_description" placeholder="{{ __('Description') }}">{{ old('our_approach_step_3_description', $RS_Meta['our_approach_step_3_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_4_title">{{ __('Step 4 Title') }}</label>
							<input type="text" name="our_approach_step_4_title" id="our_approach_step_4_title" value="{{ old('our_approach_step_4_title', $RS_Meta['our_approach_step_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="our_approach_step_4_description">{{ __('Step 1 Description') }}</label>
							<textarea name="our_approach_step_4_description" id="our_approach_step_4_description" class="form-control our_approach_step_description" placeholder="{{ __('Description') }}">{{ old('our_approach_step_4_description', $RS_Meta['our_approach_step_4_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Bringing Products And Services Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="products_services_title">{{ __('Title') }}</label>
							<input type="text" name="products_services_title" id="products_services_title" value="{{ old('products_services_title', $RS_Meta['products_services_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="products_services_description">{{ __('Description') }}</label>
							<textarea name="products_services_description" id="products_services_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('products_services_description', $RS_Meta['products_services_description'] ?? '') }}</textarea>
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

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_3_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="faq_item_3_btn_text" id="faq_item_3_btn_text" value="{{ old('faq_item_3_btn_text', $RS_Meta['faq_item_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_3_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="faq_item_3_btn_link" id="faq_item_3_btn_link" value="{{ old('faq_item_3_btn_link', $RS_Meta['faq_item_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
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

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="faq_item_4_btn_text" id="faq_item_4_btn_text" value="{{ old('faq_item_4_btn_text', $RS_Meta['faq_item_4_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="faq_item_4_btn_link" id="faq_item_4_btn_link" value="{{ old('faq_item_4_btn_link', $RS_Meta['faq_item_4_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
				
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_box_1_title">{{ __('Box 1 Title') }}</label>
							<input type="text" name="faq_item_4_box_1_title" id="faq_item_4_box_1_title" value="{{ old('faq_item_4_box_1_title', $RS_Meta['faq_item_4_box_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_box_1_item_image">{{ __('Box 1 Image') }}</label>
							<div class="input-group{{ $errors->has('faq_item_4_box_1_item_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="faq_item_4_box_1_item_image" id="faq_item_4_box_1_item_image" value="{{ old('faq_item_4_box_1_item_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="faq_item_4_box_1_item_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['faq_item_4_box_1_item_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['faq_item_4_box_1_item_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="faq_item_4_box_1_item_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_box_2_title">{{ __('Box 2 Title') }}</label>
							<input type="text" name="faq_item_4_box_2_title" id="faq_item_4_box_2_title" value="{{ old('faq_item_4_box_2_title', $RS_Meta['faq_item_4_box_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_box_2_item_image">{{ __('Box 2 Image') }}</label>
							<div class="input-group{{ $errors->has('faq_item_4_box_2_item_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="faq_item_4_box_2_item_image" id="faq_item_4_box_2_item_image" value="{{ old('faq_item_4_box_2_item_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="faq_item_4_box_2_item_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['faq_item_4_box_2_item_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['faq_item_4_box_2_item_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="faq_item_4_box_2_item_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="faq_item_4_box_subtitle">{{ __('Box SubTitle') }}</label>
							<input type="text" name="faq_item_4_box_subtitle" id="faq_item_4_box_subtitle" value="{{ old('faq_item_4_box_subtitle', $RS_Meta['faq_item_4_box_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">New market to expand Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_title">{{ __('Title') }}</label>
							<input type="text" name="market_expand_title" id="market_expand_title" value="{{ old('market_expand_title', $RS_Meta['market_expand_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="market_expand_subtitle" id="market_expand_subtitle" value="{{ old('market_expand_subtitle', $RS_Meta['market_expand_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_description">{{ __('Description') }}</label>
							<textarea name="market_expand_description" id="market_expand_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('market_expand_description', $RS_Meta['market_expand_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('market_expand_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="market_expand_image" id="market_expand_image" value="{{ old('market_expand_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="market_expand_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['market_expand_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['market_expand_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="market_expand_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_box_title_1">{{ __('Box Title 1') }}</label>
							<input type="text" name="market_expand_box_title_1" id="market_expand_box_title_1" value="{{ old('market_expand_box_title_1', $RS_Meta['market_expand_box_title_1'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_box_title_2">{{ __('Box Title 2') }}</label>
							<input type="text" name="market_expand_box_title_2" id="market_expand_box_title_2" value="{{ old('market_expand_box_title_2', $RS_Meta['market_expand_box_title_2'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="market_expand_box_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="market_expand_box_btn_text" id="market_expand_box_btn_text" value="{{ old('market_expand_box_btn_text', $RS_Meta['market_expand_box_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Product Strategy Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="product_strategy_title">{{ __('Title') }}</label>
							<input type="text" name="product_strategy_title" id="product_strategy_title" value="{{ old('product_strategy_title', $RS_Meta['product_strategy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="product_strategy_description">{{ __('Description') }}</label>
							<textarea name="product_strategy_description" id="product_strategy_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('product_strategy_description', $RS_Meta['product_strategy_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="product_strategy_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('product_strategy_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="product_strategy_image" id="product_strategy_image" value="{{ old('product_strategy_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="product_strategy_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['product_strategy_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['product_strategy_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="product_strategy_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
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
    $('.our_approach_step_description').summernote();
	$('.faq_description').summernote();
	$('#market_expand_description').summernote();
});
</script>