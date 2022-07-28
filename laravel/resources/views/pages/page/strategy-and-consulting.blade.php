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
				<h4 class="card-title text-dark w-100">Organic growth strategies Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="organic_growth_title">{{ __('Title') }}</label>
							<input type="text" name="organic_growth_title" id="organic_growth_title" value="{{ old('organic_growth_title', $RS_Meta['organic_growth_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="organic_growth_description">{{ __('Description') }}</label>
							<textarea name="organic_growth_description" id="organic_growth_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('organic_growth_description', $RS_Meta['organic_growth_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="organic_growth_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="organic_growth_subtitle" id="organic_growth_subtitle" value="{{ old('organic_growth_subtitle', $RS_Meta['organic_growth_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="organic_growth_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('organic_growth_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="organic_growth_image" id="organic_growth_image" value="{{ old('organic_growth_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="organic_growth_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['organic_growth_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['organic_growth_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="organic_growth_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
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
							<input type="text" name="marketing_strategy_title" id="marketing_strategy_title" value="{{ old('marketing_strategy_title', $RS_Meta['marketing_strategy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="marketing_strategy_subtitle" id="marketing_strategy_subtitle" value="{{ old('marketing_strategy_subtitle', $RS_Meta['marketing_strategy_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_description">{{ __('Description') }}</label>
							<textarea name="marketing_strategy_description" id="marketing_strategy_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_strategy_description', $RS_Meta['marketing_strategy_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="marketing_strategy_btn_text" id="marketing_strategy_btn_text" value="{{ old('marketing_strategy_btn_text', $RS_Meta['marketing_strategy_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_strategy_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="marketing_strategy_btn_link" id="marketing_strategy_btn_link" value="{{ old('marketing_strategy_btn_link', $RS_Meta['marketing_strategy_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Innovation Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_title">{{ __('Title') }}</label>
							<input type="text" name="marketing_innovation_title" id="marketing_innovation_title" value="{{ old('marketing_innovation_title', $RS_Meta['marketing_innovation_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_description">{{ __('Description') }}</label>
							<textarea name="marketing_innovation_description" id="marketing_innovation_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_description', $RS_Meta['marketing_innovation_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="marketing_innovation_item_1_title" id="marketing_innovation_item_1_title" value="{{ old('marketing_innovation_item_1_title', $RS_Meta['marketing_innovation_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="marketing_innovation_item_1_description" id="marketing_innovation_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_1_description', $RS_Meta['marketing_innovation_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_1_btn_text">{{ __('Item 1 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_1_btn_text" id="marketing_innovation_item_1_btn_text" value="{{ old('marketing_innovation_item_1_btn_text', $RS_Meta['marketing_innovation_item_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_1_btn_link">{{ __('Item 1 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_1_btn_link" id="marketing_innovation_item_1_btn_link" value="{{ old('marketing_innovation_item_1_btn_link', $RS_Meta['marketing_innovation_item_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="marketing_innovation_item_2_title" id="marketing_innovation_item_2_title" value="{{ old('marketing_innovation_item_2_title', $RS_Meta['marketing_innovation_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="marketing_innovation_item_2_description" id="marketing_innovation_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_2_description', $RS_Meta['marketing_innovation_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_2_btn_text">{{ __('Item 2 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_2_btn_text" id="marketing_innovation_item_2_btn_text" value="{{ old('marketing_innovation_item_2_btn_text', $RS_Meta['marketing_innovation_item_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_2_btn_link">{{ __('Item 2 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_2_btn_link" id="marketing_innovation_item_2_btn_link" value="{{ old('marketing_innovation_item_2_btn_link', $RS_Meta['marketing_innovation_item_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="marketing_innovation_item_3_title" id="marketing_innovation_item_3_title" value="{{ old('marketing_innovation_item_3_title', $RS_Meta['marketing_innovation_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_3_description">{{ __('Item 3 Description') }}</label>
							<textarea name="marketing_innovation_item_3_description" id="marketing_innovation_item_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_3_description', $RS_Meta['marketing_innovation_item_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_3_btn_text">{{ __('Item 3 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_3_btn_text" id="marketing_innovation_item_3_btn_text" value="{{ old('marketing_innovation_item_3_btn_text', $RS_Meta['marketing_innovation_item_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_3_btn_link">{{ __('Item 3 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_3_btn_link" id="marketing_innovation_item_3_btn_link" value="{{ old('marketing_innovation_item_3_btn_link', $RS_Meta['marketing_innovation_item_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="marketing_innovation_item_4_title" id="marketing_innovation_item_4_title" value="{{ old('marketing_innovation_item_4_title', $RS_Meta['marketing_innovation_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_4_description">{{ __('Item 4 Description') }}</label>
							<textarea name="marketing_innovation_item_4_description" id="marketing_innovation_item_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_4_description', $RS_Meta['marketing_innovation_item_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_4_btn_text">{{ __('Item 4 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_4_btn_text" id="marketing_innovation_item_4_btn_text" value="{{ old('marketing_innovation_item_4_btn_text', $RS_Meta['marketing_innovation_item_4_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_4_btn_link">{{ __('Item 4 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_4_btn_link" id="marketing_innovation_item_4_btn_link" value="{{ old('marketing_innovation_item_4_btn_link', $RS_Meta['marketing_innovation_item_4_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_5_title">{{ __('Item 5 Title') }}</label>
							<input type="text" name="marketing_innovation_item_5_title" id="marketing_innovation_item_5_title" value="{{ old('marketing_innovation_item_5_title', $RS_Meta['marketing_innovation_item_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_5_description">{{ __('Item 5 Description') }}</label>
							<textarea name="marketing_innovation_item_5_description" id="marketing_innovation_item_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_5_description', $RS_Meta['marketing_innovation_item_5_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_5_btn_text">{{ __('Item 5 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_5_btn_text" id="marketing_innovation_item_5_btn_text" value="{{ old('marketing_innovation_item_5_btn_text', $RS_Meta['marketing_innovation_item_5_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_5_btn_link">{{ __('Item 5 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_5_btn_link" id="marketing_innovation_item_5_btn_link" value="{{ old('marketing_innovation_item_5_btn_link', $RS_Meta['marketing_innovation_item_5_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_6_title">{{ __('Item 6 Title') }}</label>
							<input type="text" name="marketing_innovation_item_6_title" id="marketing_innovation_item_6_title" value="{{ old('marketing_innovation_item_6_title', $RS_Meta['marketing_innovation_item_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_6_description">{{ __('Item 6 Description') }}</label>
							<textarea name="marketing_innovation_item_6_description" id="marketing_innovation_item_6_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_6_description', $RS_Meta['marketing_innovation_item_6_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_6_btn_text">{{ __('Item 6 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_6_btn_text" id="marketing_innovation_item_6_btn_text" value="{{ old('marketing_innovation_item_6_btn_text', $RS_Meta['marketing_innovation_item_6_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_6_btn_link">{{ __('Item 6 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_6_btn_link" id="marketing_innovation_item_6_btn_link" value="{{ old('marketing_innovation_item_6_btn_link', $RS_Meta['marketing_innovation_item_6_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_7_title">{{ __('Item 7 Title') }}</label>
							<input type="text" name="marketing_innovation_item_7_title" id="marketing_innovation_item_7_title" value="{{ old('marketing_innovation_item_7_title', $RS_Meta['marketing_innovation_item_7_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_7_description">{{ __('Item 7 Description') }}</label>
							<textarea name="marketing_innovation_item_7_description" id="marketing_innovation_item_7_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('marketing_innovation_item_7_description', $RS_Meta['marketing_innovation_item_7_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_7_btn_text">{{ __('Item 7 Button Text') }}</label>
							<input type="text" name="marketing_innovation_item_7_btn_text" id="marketing_innovation_item_7_btn_text" value="{{ old('marketing_innovation_item_7_btn_text', $RS_Meta['marketing_innovation_item_7_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="marketing_innovation_item_7_btn_link">{{ __('Item 7 Button Link') }}</label>
							<input type="text" name="marketing_innovation_item_7_btn_link" id="marketing_innovation_item_7_btn_link" value="{{ old('marketing_innovation_item_7_btn_link', $RS_Meta['marketing_innovation_item_7_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Internal Implementation for External sustenance Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_title">{{ __('Title') }}</label>
							<input type="text" name="implementation_title" id="implementation_title" value="{{ old('implementation_title', $RS_Meta['implementation_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('implementation_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="implementation_image" id="implementation_image" value="{{ old('implementation_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="implementation_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['implementation_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['implementation_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="implementation_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="implementation_item_1_title" id="implementation_item_1_title" value="{{ old('implementation_item_1_title', $RS_Meta['implementation_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="implementation_item_1_description" id="implementation_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('implementation_item_1_description', $RS_Meta['implementation_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_1_btn_text">{{ __('Item 1 Button Text') }}</label>
							<input type="text" name="implementation_item_1_btn_text" id="implementation_item_1_btn_text" value="{{ old('implementation_item_1_btn_text', $RS_Meta['implementation_item_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_1_btn_link">{{ __('Item 1 Button Link') }}</label>
							<input type="text" name="implementation_item_1_btn_link" id="implementation_item_1_btn_link" value="{{ old('implementation_item_1_btn_link', $RS_Meta['implementation_item_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_1_icon">{{ __('Item 1 Icon') }}</label>
							<div class="input-group{{ $errors->has('implementation_item_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="implementation_item_1_icon" id="implementation_item_1_icon" value="{{ old('implementation_item_1_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="implementation_item_1_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['implementation_item_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['implementation_item_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="implementation_item_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="implementation_item_2_title" id="implementation_item_2_title" value="{{ old('implementation_item_2_title', $RS_Meta['implementation_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="implementation_item_2_description" id="implementation_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('implementation_item_2_description', $RS_Meta['implementation_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_2_btn_text">{{ __('Item 2 Button Text') }}</label>
							<input type="text" name="implementation_item_2_btn_text" id="implementation_item_2_btn_text" value="{{ old('implementation_item_2_btn_text', $RS_Meta['implementation_item_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_2_btn_link">{{ __('Item 2 Button Link') }}</label>
							<input type="text" name="implementation_item_2_btn_link" id="implementation_item_2_btn_link" value="{{ old('implementation_item_2_btn_link', $RS_Meta['implementation_item_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="implementation_item_2_icon">{{ __('Item 2 Icon') }}</label>
							<div class="input-group{{ $errors->has('implementation_item_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="implementation_item_2_icon" id="implementation_item_2_icon" value="{{ old('implementation_item_2_icon') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="implementation_item_2_icon">Choose Icon</label>
								</div>
							</div>

							@if( !empty($RS_Meta['implementation_item_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['implementation_item_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="implementation_item_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Community Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="community_item_1_title" id="community_item_1_title" value="{{ old('community_item_1_title', $RS_Meta['community_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_1_description">{{ __('Description 1') }}</label>
							<textarea name="community_item_1_description" id="community_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('community_item_1_description', $RS_Meta['community_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('community_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="community_item_1_image" id="community_item_1_image" value="{{ old('community_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="community_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['community_item_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['community_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="community_item_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="community_item_2_title" id="community_item_2_title" value="{{ old('community_item_2_title', $RS_Meta['community_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_2_description">{{ __('Description 2') }}</label>
							<textarea name="community_item_2_description" id="community_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('community_item_2_description', $RS_Meta['community_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="community_item_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('community_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="community_item_2_image" id="community_item_2_image" value="{{ old('community_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="community_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['community_item_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['community_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="community_item_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</div>