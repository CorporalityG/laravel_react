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
							<label for="banner_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('banner_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_video" id="banner_video" value="{{ old('banner_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="banner_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['banner_video']) }}" type="video/mp4">
									Your browser does not support the video tag.
								</video>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Strategic Issues Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategic_issues_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('strategic_issues_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="strategic_issues_image" id="strategic_issues_image" value="{{ old('strategic_issues_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="strategic_issues_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['strategic_issues_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['strategic_issues_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategic_issues_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="strategic_issues_item_1_title" id="strategic_issues_item_1_title" value="{{ old('strategic_issues_item_1_title', $RS_Meta['strategic_issues_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="strategic_issues_item_1_description">{{ __('Item 1 Description') }}</label>
							<textarea name="strategic_issues_item_1_description" id="strategic_issues_item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('strategic_issues_item_1_description', $RS_Meta['strategic_issues_item_1_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategic_issues_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="strategic_issues_item_2_title" id="strategic_issues_item_2_title" value="{{ old('strategic_issues_item_2_title', $RS_Meta['strategic_issues_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="strategic_issues_item_2_description">{{ __('Item 2 Description') }}</label>
							<textarea name="strategic_issues_item_2_description" id="strategic_issues_item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('strategic_issues_item_2_description', $RS_Meta['strategic_issues_item_2_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Methodology and Process Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="methodology_process_title">{{ __('Title') }}</label>
							<input type="text" name="methodology_process_title" id="methodology_process_title" value="{{ old('methodology_process_title', $RS_Meta['methodology_process_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="methodology_process_description">{{ __('Description') }}</label>
							<textarea name="methodology_process_description" id="methodology_process_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('methodology_process_description', $RS_Meta['methodology_process_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<!-- Audit and Diagnostic phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Audit and Diagnostic</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_title">{{ __('Title') }}</label>
								<input type="text" name="methodology_process_audit_title" id="methodology_process_audit_title" value="{{ old('methodology_process_audit_title', $RS_Meta['methodology_process_audit_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="methodology_process_audit_item_1_title" id="methodology_process_audit_item_1_title" value="{{ old('methodology_process_audit_item_1_title', $RS_Meta['methodology_process_audit_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_audit_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_audit_item_1_image" id="methodology_process_audit_item_1_image" value="{{ old('methodology_process_audit_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_audit_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_audit_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_audit_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="methodology_process_audit_item_2_title" id="methodology_process_audit_item_2_title" value="{{ old('methodology_process_audit_item_2_title', $RS_Meta['methodology_process_audit_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_audit_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_audit_item_2_image" id="methodology_process_audit_item_2_image" value="{{ old('methodology_process_audit_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_audit_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_audit_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_audit_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="methodology_process_audit_item_3_title" id="methodology_process_audit_item_3_title" value="{{ old('methodology_process_audit_item_3_title', $RS_Meta['methodology_process_audit_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_audit_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_audit_item_3_image" id="methodology_process_audit_item_3_image" value="{{ old('methodology_process_audit_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_audit_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_audit_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_audit_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="methodology_process_audit_item_4_title" id="methodology_process_audit_item_4_title" value="{{ old('methodology_process_audit_item_4_title', $RS_Meta['methodology_process_audit_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_audit_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_audit_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_audit_item_4_image" id="methodology_process_audit_item_4_image" value="{{ old('methodology_process_audit_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_audit_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_audit_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_audit_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
				<!-- Audit and Diagnostic end -->

				<!-- Vision Remapping phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Vision Remapping</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_title">{{ __('Title') }}</label>
								<input type="text" name="methodology_process_vision_title" id="methodology_process_vision_title" value="{{ old('methodology_process_vision_title', $RS_Meta['methodology_process_vision_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="methodology_process_vision_item_1_title" id="methodology_process_vision_item_1_title" value="{{ old('methodology_process_vision_item_1_title', $RS_Meta['methodology_process_vision_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_vision_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_vision_item_1_image" id="methodology_process_vision_item_1_image" value="{{ old('methodology_process_vision_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_vision_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_vision_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_vision_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="methodology_process_vision_item_2_title" id="methodology_process_vision_item_2_title" value="{{ old('methodology_process_vision_item_2_title', $RS_Meta['methodology_process_vision_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_vision_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_vision_item_2_image" id="methodology_process_vision_item_2_image" value="{{ old('methodology_process_vision_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_vision_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_vision_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_vision_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="methodology_process_vision_item_3_title" id="methodology_process_vision_item_3_title" value="{{ old('methodology_process_vision_item_3_title', $RS_Meta['methodology_process_vision_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_vision_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_vision_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_vision_item_3_image" id="methodology_process_vision_item_3_image" value="{{ old('methodology_process_vision_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_vision_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_vision_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_vision_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Vision Remapping end -->

				<!-- Strategizing and Planning phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Strategizing and Planning</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_title">{{ __('Title') }}</label>
								<input type="text" name="methodology_process_strategizing_title" id="methodology_process_strategizing_title" value="{{ old('methodology_process_strategizing_title', $RS_Meta['methodology_process_strategizing_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="methodology_process_strategizing_item_1_title" id="methodology_process_strategizing_item_1_title" value="{{ old('methodology_process_strategizing_item_1_title', $RS_Meta['methodology_process_strategizing_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_strategizing_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_strategizing_item_1_image" id="methodology_process_strategizing_item_1_image" value="{{ old('methodology_process_strategizing_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_strategizing_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_strategizing_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_strategizing_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="methodology_process_strategizing_item_2_title" id="methodology_process_strategizing_item_2_title" value="{{ old('methodology_process_strategizing_item_2_title', $RS_Meta['methodology_process_strategizing_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_strategizing_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_strategizing_item_2_image" id="methodology_process_strategizing_item_2_image" value="{{ old('methodology_process_strategizing_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_strategizing_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_strategizing_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_strategizing_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="methodology_process_strategizing_item_3_title" id="methodology_process_strategizing_item_3_title" value="{{ old('methodology_process_strategizing_item_3_title', $RS_Meta['methodology_process_strategizing_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_strategizing_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_strategizing_item_3_image" id="methodology_process_strategizing_item_3_image" value="{{ old('methodology_process_strategizing_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_strategizing_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_strategizing_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_strategizing_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="methodology_process_strategizing_item_4_title" id="methodology_process_strategizing_item_4_title" value="{{ old('methodology_process_strategizing_item_4_title', $RS_Meta['methodology_process_strategizing_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_strategizing_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_strategizing_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_strategizing_item_4_image" id="methodology_process_strategizing_item_4_image" value="{{ old('methodology_process_strategizing_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_strategizing_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_strategizing_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_strategizing_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Strategizing and Planning end -->

				<!-- Task Force and Execution phase -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Task Force and Execution</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_title">{{ __('Title') }}</label>
								<input type="text" name="methodology_process_task_force_title" id="methodology_process_task_force_title" value="{{ old('methodology_process_task_force_title', $RS_Meta['methodology_process_task_force_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="methodology_process_task_force_item_1_title" id="methodology_process_task_force_item_1_title" value="{{ old('methodology_process_task_force_item_1_title', $RS_Meta['methodology_process_task_force_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_task_force_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_task_force_item_1_image" id="methodology_process_task_force_item_1_image" value="{{ old('methodology_process_task_force_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_task_force_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_task_force_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_task_force_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="methodology_process_task_force_item_2_title" id="methodology_process_task_force_item_2_title" value="{{ old('methodology_process_task_force_item_2_title', $RS_Meta['methodology_process_task_force_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_task_force_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_task_force_item_2_image" id="methodology_process_task_force_item_2_image" value="{{ old('methodology_process_task_force_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_task_force_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_task_force_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_task_force_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_3_title">{{ __('Item 3 Title') }}</label>
								<input type="text" name="methodology_process_task_force_item_3_title" id="methodology_process_task_force_item_3_title" value="{{ old('methodology_process_task_force_item_3_title', $RS_Meta['methodology_process_task_force_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_3_image">{{ __('Item 3 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_task_force_item_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_task_force_item_3_image" id="methodology_process_task_force_item_3_image" value="{{ old('methodology_process_task_force_item_3_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_task_force_item_3_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_task_force_item_3_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_task_force_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_4_title">{{ __('Item 4 Title') }}</label>
								<input type="text" name="methodology_process_task_force_item_4_title" id="methodology_process_task_force_item_4_title" value="{{ old('methodology_process_task_force_item_4_title', $RS_Meta['methodology_process_task_force_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_task_force_item_4_image">{{ __('Item 4 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_task_force_item_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_task_force_item_4_image" id="methodology_process_task_force_item_4_image" value="{{ old('methodology_process_task_force_item_4_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_task_force_item_4_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_task_force_item_4_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_task_force_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Task Force and Execution end -->

				<!-- Asset Building start -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Asset Building</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_asset_building_title">{{ __('Title') }}</label>
								<input type="text" name="methodology_process_asset_building_title" id="methodology_process_asset_building_title" value="{{ old('methodology_process_asset_building_title', $RS_Meta['methodology_process_asset_building_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_asset_building_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="methodology_process_asset_building_item_1_title" id="methodology_process_asset_building_item_1_title" value="{{ old('methodology_process_asset_building_item_1_title', $RS_Meta['methodology_process_asset_building_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_asset_building_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_asset_building_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_asset_building_item_1_image" id="methodology_process_asset_building_item_1_image" value="{{ old('methodology_process_asset_building_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_asset_building_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_asset_building_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_asset_building_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_asset_building_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="methodology_process_asset_building_item_2_title" id="methodology_process_asset_building_item_2_title" value="{{ old('methodology_process_asset_building_item_2_title', $RS_Meta['methodology_process_asset_building_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_asset_building_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_asset_building_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_asset_building_item_2_image" id="methodology_process_asset_building_item_2_image" value="{{ old('methodology_process_asset_building_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_asset_building_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_asset_building_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_asset_building_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Asset Building end -->

				<!-- Plan Ahead start -->
				<div>
					<hr>
					<h5 class="text-dark text-bold w-100">Plan Ahead</h5>
					<hr>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_plan_title">{{ __('Title') }}</label>
								<input type="text" name="methodology_process_plan_title" id="methodology_process_plan_title" value="{{ old('methodology_process_plan_title', $RS_Meta['methodology_process_plan_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_plan_item_1_title">{{ __('Item 1 Title') }}</label>
								<input type="text" name="methodology_process_plan_item_1_title" id="methodology_process_plan_item_1_title" value="{{ old('methodology_process_plan_item_1_title', $RS_Meta['methodology_process_plan_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_plan_item_1_image">{{ __('Item 1 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_plan_item_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_plan_item_1_image" id="methodology_process_plan_item_1_image" value="{{ old('methodology_process_plan_item_1_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_plan_item_1_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_plan_item_1_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_plan_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>

					<hr >

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_plan_item_2_title">{{ __('Item 2 Title') }}</label>
								<input type="text" name="methodology_process_plan_item_2_title" id="methodology_process_plan_item_2_title" value="{{ old('methodology_process_plan_item_2_title', $RS_Meta['methodology_process_plan_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="methodology_process_plan_item_2_image">{{ __('Item 2 Image') }}</label>
								<div class="input-group{{ $errors->has('methodology_process_plan_item_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="methodology_process_plan_item_2_image" id="methodology_process_plan_item_2_image" value="{{ old('methodology_process_plan_item_2_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
										<label class="custom-file-label" for="methodology_process_plan_item_2_image">Choose Image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['methodology_process_plan_item_2_image']) )
									<img src="{{ url('uploads/pages/'.$RS_Meta['methodology_process_plan_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
								@endif
							</div>
						</div>
					</div>
				</div>
                <!-- Plan Ahead end -->

			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">What to expect? Section</h4>
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
				</div>

				<hr >
				<h5 class="text-dark text-bold w-100">Strategy Solutions</h5>
				
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_strategy_title">{{ __('Title') }}</label>
							<input type="text" name="what_expect_strategy_title" id="what_expect_strategy_title" value="{{ old('what_expect_strategy_title', $RS_Meta['what_expect_strategy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
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
							<label for="what_expect_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_1_image" id="what_expect_item_1_image" value="{{ old('what_expect_item_1_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_1_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="what_expect_item_2_title" id="what_expect_item_2_title" value="{{ old('what_expect_item_2_title', $RS_Meta['what_expect_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_2_image" id="what_expect_item_2_image" value="{{ old('what_expect_item_2_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_2_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
							<label for="what_expect_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_3_image" id="what_expect_item_3_image" value="{{ old('what_expect_item_3_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_3_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="what_expect_item_4_title" id="what_expect_item_4_title" value="{{ old('what_expect_item_4_title', $RS_Meta['what_expect_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="what_expect_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('what_expect_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="what_expect_item_4_image" id="what_expect_item_4_image" value="{{ old('what_expect_item_4_image') }}" class="custom-file-input" placeholder="Choose Image" accept="image/*">
									<label class="custom-file-label" for="what_expect_item_4_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['what_expect_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['what_expect_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Why hire? Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_title">{{ __('Title') }}</label>
							<input type="text" name="why_hire_title" id="why_hire_title" value="{{ old('why_hire_title', $RS_Meta['why_hire_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_description">{{ __('Description') }}</label>
							<textarea name="why_hire_description" id="why_hire_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('why_hire_description', $RS_Meta['why_hire_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_1_title">{{ __('Item 1 Title') }}</label>
							<input type="text" name="why_hire_item_1_title" id="why_hire_item_1_title" value="{{ old('why_hire_item_1_title', $RS_Meta['why_hire_item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_1_image">{{ __('Item 1 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_1_image" id="why_hire_item_1_image" value="{{ old('why_hire_item_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_2_title">{{ __('Item 2 Title') }}</label>
							<input type="text" name="why_hire_item_2_title" id="why_hire_item_2_title" value="{{ old('why_hire_item_2_title', $RS_Meta['why_hire_item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_2_image">{{ __('Item 2 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_2_image" id="why_hire_item_2_image" value="{{ old('why_hire_item_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_3_title">{{ __('Item 3 Title') }}</label>
							<input type="text" name="why_hire_item_3_title" id="why_hire_item_3_title" value="{{ old('why_hire_item_3_title', $RS_Meta['why_hire_item_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_3_image">{{ __('Item 3 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_3_image" id="why_hire_item_3_image" value="{{ old('why_hire_item_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_4_title">{{ __('Item 4 Title') }}</label>
							<input type="text" name="why_hire_item_4_title" id="why_hire_item_4_title" value="{{ old('why_hire_item_4_title', $RS_Meta['why_hire_item_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="why_hire_item_4_image">{{ __('Item 4 Image') }}</label>
							<div class="input-group{{ $errors->has('why_hire_item_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="why_hire_item_4_image" id="why_hire_item_4_image" value="{{ old('why_hire_item_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="why_hire_item_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['why_hire_item_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['why_hire_item_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Corporate Success Strategy Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="success_strategy_title">{{ __('Title') }}</label>
							<input type="text" name="success_strategy_title" id="success_strategy_title" value="{{ old('success_strategy_title', $RS_Meta['success_strategy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="success_strategy_description">{{ __('Description') }}</label>
							<textarea name="success_strategy_description" id="success_strategy_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('success_strategy_description', $RS_Meta['success_strategy_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="success_strategy_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('success_strategy_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="success_strategy_image" id="success_strategy_image" value="{{ old('success_strategy_image') }}" class="custom-file-input" placeholder="Choose Icon" accept="image/*">
									<label class="custom-file-label" for="success_strategy_image">Choose Image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['success_strategy_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['success_strategy_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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