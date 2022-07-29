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
							<label for="banner_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="banner_1_title" id="banner_1_title" value="{{ old('banner_1_title', $RS_Meta['banner_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_subtitle">{{ __('SubTitle 1') }}</label>
							<input type="text" name="banner_1_subtitle" id="banner_1_subtitle" value="{{ old('banner_1_subtitle', $RS_Meta['banner_1_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_description">{{ __('Description 1') }}</label>
							<textarea name="banner_1_description" id="banner_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('banner_1_description', $RS_Meta['banner_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_btn_text">{{ __('Button Text 1') }}</label>
							<input type="text" name="banner_1_btn_text" id="banner_1_btn_text" value="{{ old('banner_1_btn_text', $RS_Meta['banner_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_btn_link">{{ __('Button Link 1') }}</label>
							<input type="text" name="banner_1_btn_link" id="banner_1_btn_link" value="{{ old('banner_1_btn_link', $RS_Meta['banner_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('banner_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_1_image" id="banner_1_image" value="{{ old('banner_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_bg_image">{{ __('Background Image 1') }}</label>
							<div class="input-group{{ $errors->has('banner_1_bg_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_1_bg_image" id="banner_1_bg_image" value="{{ old('banner_1_bg_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_1_bg_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_1_bg_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_1_bg_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_1_bg_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_youtube_iframe_1">{{ __('YouTube IFrame 1') }}</label>
							<textarea name="banner_1_youtube_iframe_1" id="banner_1_youtube_iframe_1" class="form-control" placeholder="{{ __('YouTube IFrame') }}">{{ old('banner_1_youtube_iframe_1', $RS_Meta['banner_1_youtube_iframe_1'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_video_thumbnail">{{ __('Video Thumbnail 1') }}</label>
							<div class="input-group{{ $errors->has('banner_1_video_thumbnail') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_1_video_thumbnail" id="banner_1_video_thumbnail" value="{{ old('banner_1_video_thumbnail') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_1_video_thumbnail">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_1_video_thumbnail']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_1_video_thumbnail']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_1_video_thumbnail" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_youtube_iframe_2">{{ __('Thumbnail YouTube IFrame 1') }}</label>
							<textarea name="banner_1_youtube_iframe_2" id="banner_1_youtube_iframe_2" class="form-control" placeholder="{{ __('Thumbnail YouTube IFrame') }}">{{ old('banner_1_youtube_iframe_2', $RS_Meta['banner_1_youtube_iframe_2'] ?? '') }}</textarea>
						</div>
					</div>

					<!-- <div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_video_url">{{ __('Video 1') }}</label>
							<div class="input-group{{ $errors->has('banner_1_video_url') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_1_video_url" id="banner_1_video_url" value="{{ old('banner_1_video_url') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="banner_1_video_url">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_1_video_url']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['banner_1_video_url']) }}" type="video/mp4">
									Your browser does not support the video tag.
								</video>
							@endif
						</div>
					</div> -->
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="banner_2_title" id="banner_2_title" value="{{ old('banner_2_title', $RS_Meta['banner_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_subtitle">{{ __('SubTitle 2') }}</label>
							<input type="text" name="banner_2_subtitle" id="banner_2_subtitle" value="{{ old('banner_2_subtitle', $RS_Meta['banner_2_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_description">{{ __('Description 2') }}</label>
							<textarea name="banner_2_description" id="banner_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('banner_2_description', $RS_Meta['banner_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_btn_text">{{ __('Button Text 2') }}</label>
							<input type="text" name="banner_2_btn_text" id="banner_2_btn_text" value="{{ old('banner_2_btn_text', $RS_Meta['banner_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_btn_link">{{ __('Button Link 2') }}</label>
							<input type="text" name="banner_2_btn_link" id="banner_2_btn_link" value="{{ old('banner_2_btn_link', $RS_Meta['banner_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('banner_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_2_image" id="banner_2_image" value="{{ old('banner_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_bg_image">{{ __('Background Image 2') }}</label>
							<div class="input-group{{ $errors->has('banner_2_bg_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_2_bg_image" id="banner_2_bg_image" value="{{ old('banner_2_bg_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_2_bg_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_2_bg_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_2_bg_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_2_bg_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_youtube_iframe_1">{{ __('YouTube IFrame 2') }}</label>
							<textarea name="banner_2_youtube_iframe_1" id="banner_2_youtube_iframe_1" class="form-control" placeholder="{{ __('YouTube IFrame') }}">{{ old('banner_2_youtube_iframe_1', $RS_Meta['banner_2_youtube_iframe_1'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_video_thumbnail">{{ __('Video Thumbnail 2') }}</label>
							<div class="input-group{{ $errors->has('banner_2_video_thumbnail') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_2_video_thumbnail" id="banner_2_video_thumbnail" value="{{ old('banner_2_video_thumbnail') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_2_video_thumbnail">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_2_video_thumbnail']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_2_video_thumbnail']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_2_video_thumbnail" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_youtube_iframe_2">{{ __('Thumbnail YouTube IFrame 2') }}</label>
							<textarea name="banner_2_youtube_iframe_2" id="banner_2_youtube_iframe_2" class="form-control" placeholder="{{ __('Thumbnail YouTube IFrame') }}">{{ old('banner_2_youtube_iframe_2', $RS_Meta['banner_2_youtube_iframe_2'] ?? '') }}</textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_title">{{ __('Title 3') }}</label>
							<input type="text" name="banner_3_title" id="banner_3_title" value="{{ old('banner_3_title', $RS_Meta['banner_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_subtitle">{{ __('SubTitle 3') }}</label>
							<input type="text" name="banner_3_subtitle" id="banner_3_subtitle" value="{{ old('banner_3_subtitle', $RS_Meta['banner_3_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_description">{{ __('Description 3') }}</label>
							<textarea name="banner_3_description" id="banner_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('banner_3_description', $RS_Meta['banner_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_btn_text">{{ __('Button Text 3') }}</label>
							<input type="text" name="banner_3_btn_text" id="banner_3_btn_text" value="{{ old('banner_3_btn_text', $RS_Meta['banner_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_btn_link">{{ __('Button Link 3') }}</label>
							<input type="text" name="banner_3_btn_link" id="banner_3_btn_link" value="{{ old('banner_3_btn_link', $RS_Meta['banner_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_image">{{ __('Image 3') }}</label>
							<div class="input-group{{ $errors->has('banner_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_3_image" id="banner_3_image" value="{{ old('banner_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_3_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_bg_image">{{ __('Background Image 3') }}</label>
							<div class="input-group{{ $errors->has('banner_3_bg_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_3_bg_image" id="banner_3_bg_image" value="{{ old('banner_3_bg_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_3_bg_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_3_bg_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_3_bg_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_3_bg_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_youtube_iframe_1">{{ __('YouTube IFrame 3') }}</label>
							<textarea name="banner_3_youtube_iframe_1" id="banner_3_youtube_iframe_1" class="form-control" placeholder="{{ __('YouTube IFrame') }}">{{ old('banner_3_youtube_iframe_1', $RS_Meta['banner_3_youtube_iframe_1'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_video_thumbnail">{{ __('Video Thumbnail 3') }}</label>
							<div class="input-group{{ $errors->has('banner_3_video_thumbnail') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="banner_3_video_thumbnail" id="banner_3_video_thumbnail" value="{{ old('banner_3_video_thumbnail') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="banner_3_video_thumbnail">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['banner_3_video_thumbnail']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['banner_3_video_thumbnail']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="banner_3_video_thumbnail" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_youtube_iframe_2">{{ __('Thumbnail YouTube IFrame 3') }}</label>
							<textarea name="banner_3_youtube_iframe_2" id="banner_3_youtube_iframe_2" class="form-control" placeholder="{{ __('Thumbnail YouTube IFrame') }}">{{ old('banner_3_youtube_iframe_2', $RS_Meta['banner_3_youtube_iframe_2'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Box Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="box_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="box_1_title" id="box_1_title" value="{{ old('box_1_title', $RS_Meta['box_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_1_description">{{ __('Description 1') }}</label>
							<textarea name="box_1_description" id="box_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('box_1_description', $RS_Meta['box_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_1_btn_text">{{ __('Button Text 1') }}</label>
							<input type="text" name="box_1_btn_text" id="box_1_btn_text" value="{{ old('box_1_btn_text', $RS_Meta['box_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_1_btn_link">{{ __('Button Link 1') }}</label>
							<input type="text" name="box_1_btn_link" id="box_1_btn_link" value="{{ old('box_1_btn_link', $RS_Meta['box_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_1_icon">{{ __('Icon 1') }}</label>
							<div class="input-group{{ $errors->has('box_1_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="box_1_icon" id="box_1_icon" value="{{ old('box_1_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="box_1_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['box_1_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['box_1_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="box_1_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="box_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="box_2_title" id="box_2_title" value="{{ old('box_2_title', $RS_Meta['box_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_2_description">{{ __('Description 2') }}</label>
							<textarea name="box_2_description" id="box_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('box_2_description', $RS_Meta['box_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_2_btn_text">{{ __('Button Text 2') }}</label>
							<input type="text" name="box_2_btn_text" id="box_2_btn_text" value="{{ old('box_2_btn_text', $RS_Meta['box_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_2_btn_link">{{ __('Button Link 2') }}</label>
							<input type="text" name="box_2_btn_link" id="box_2_btn_link" value="{{ old('box_2_btn_link', $RS_Meta['box_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_2_icon">{{ __('Icon 2') }}</label>
							<div class="input-group{{ $errors->has('box_2_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="box_2_icon" id="box_2_icon" value="{{ old('box_2_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="box_2_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['box_2_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['box_2_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="box_2_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr >

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="box_3_title">{{ __('Title 3') }}</label>
							<input type="text" name="box_3_title" id="box_3_title" value="{{ old('box_3_title', $RS_Meta['box_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_3_description">{{ __('Description 3') }}</label>
							<textarea name="box_3_description" id="box_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('box_3_description', $RS_Meta['box_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_3_btn_text">{{ __('Button Text 3') }}</label>
							<input type="text" name="box_3_btn_text" id="box_3_btn_text" value="{{ old('box_3_btn_text', $RS_Meta['box_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_3_btn_link">{{ __('Button Link 3') }}</label>
							<input type="text" name="box_3_btn_link" id="box_3_btn_link" value="{{ old('box_3_btn_link', $RS_Meta['box_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="box_3_icon">{{ __('Icon 3') }}</label>
							<div class="input-group{{ $errors->has('box_3_icon') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="box_3_icon" id="box_3_icon" value="{{ old('box_3_icon') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="box_3_icon">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['box_3_icon']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['box_3_icon']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="box_3_icon" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Services Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 1 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_1_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_1_tab_title" id="service_1_tab_title" value="{{ old('service_1_tab_title', $RS_Meta['service_1_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_1_title">{{ __('Title') }}</label>
							<input type="text" name="service_1_title" id="service_1_title" value="{{ old('service_1_title', $RS_Meta['service_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_1_description">{{ __('Description') }}</label>
							<textarea name="service_1_description" id="service_1_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_1_description', $RS_Meta['service_1_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_1_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_1_btn_text" id="service_1_btn_text" value="{{ old('service_1_btn_text', $RS_Meta['service_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_1_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_1_btn_link" id="service_1_btn_link" value="{{ old('service_1_btn_link', $RS_Meta['service_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_1_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_1_image" id="service_1_image" value="{{ old('service_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 2 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_2_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_2_tab_title" id="service_2_tab_title" value="{{ old('service_2_tab_title', $RS_Meta['service_2_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_2_title">{{ __('Title') }}</label>
							<input type="text" name="service_2_title" id="service_2_title" value="{{ old('service_2_title', $RS_Meta['service_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_2_description">{{ __('Description') }}</label>
							<textarea name="service_2_description" id="service_2_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_2_description', $RS_Meta['service_2_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_2_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_2_btn_text" id="service_2_btn_text" value="{{ old('service_2_btn_text', $RS_Meta['service_2_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_2_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_2_btn_link" id="service_2_btn_link" value="{{ old('service_2_btn_link', $RS_Meta['service_2_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_2_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_2_image" id="service_2_image" value="{{ old('service_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 3 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_3_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_3_tab_title" id="service_3_tab_title" value="{{ old('service_3_tab_title', $RS_Meta['service_3_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_3_title">{{ __('Title') }}</label>
							<input type="text" name="service_3_title" id="service_3_title" value="{{ old('service_3_title', $RS_Meta['service_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_3_description">{{ __('Description') }}</label>
							<textarea name="service_3_description" id="service_3_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_3_description', $RS_Meta['service_3_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_3_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_3_btn_text" id="service_3_btn_text" value="{{ old('service_3_btn_text', $RS_Meta['service_3_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_3_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_3_btn_link" id="service_3_btn_link" value="{{ old('service_3_btn_link', $RS_Meta['service_3_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_3_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_3_image" id="service_3_image" value="{{ old('service_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_3_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 4 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_4_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_4_tab_title" id="service_4_tab_title" value="{{ old('service_4_tab_title', $RS_Meta['service_4_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_4_title">{{ __('Title') }}</label>
							<input type="text" name="service_4_title" id="service_4_title" value="{{ old('service_4_title', $RS_Meta['service_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_4_description">{{ __('Description') }}</label>
							<textarea name="service_4_description" id="service_4_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_4_description', $RS_Meta['service_4_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_4_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_4_btn_text" id="service_4_btn_text" value="{{ old('service_4_btn_text', $RS_Meta['service_4_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_4_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_4_btn_link" id="service_4_btn_link" value="{{ old('service_4_btn_link', $RS_Meta['service_4_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_4_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_4_image" id="service_4_image" value="{{ old('service_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_4_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_4_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 5 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_5_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_5_tab_title" id="service_5_tab_title" value="{{ old('service_5_tab_title', $RS_Meta['service_5_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_5_title">{{ __('Title') }}</label>
							<input type="text" name="service_5_title" id="service_5_title" value="{{ old('service_5_title', $RS_Meta['service_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_5_description">{{ __('Description') }}</label>
							<textarea name="service_5_description" id="service_5_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_5_description', $RS_Meta['service_5_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_5_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_5_btn_text" id="service_5_btn_text" value="{{ old('service_5_btn_text', $RS_Meta['service_5_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_5_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_5_btn_link" id="service_5_btn_link" value="{{ old('service_5_btn_link', $RS_Meta['service_5_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_5_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_5_image" id="service_5_image" value="{{ old('service_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_5_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_5_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 6 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_6_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_6_tab_title" id="service_6_tab_title" value="{{ old('service_6_tab_title', $RS_Meta['service_6_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_6_title">{{ __('Title') }}</label>
							<input type="text" name="service_6_title" id="service_6_title" value="{{ old('service_6_title', $RS_Meta['service_6_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_6_description">{{ __('Description') }}</label>
							<textarea name="service_6_description" id="service_6_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_6_description', $RS_Meta['service_6_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_6_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_6_btn_text" id="service_6_btn_text" value="{{ old('service_6_btn_text', $RS_Meta['service_6_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_6_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_6_btn_link" id="service_6_btn_link" value="{{ old('service_6_btn_link', $RS_Meta['service_6_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_6_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_6_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_6_image" id="service_6_image" value="{{ old('service_6_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_6_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_6_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_6_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_6_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 7 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_7_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_7_tab_title" id="service_7_tab_title" value="{{ old('service_7_tab_title', $RS_Meta['service_7_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_7_title">{{ __('Title') }}</label>
							<input type="text" name="service_7_title" id="service_7_title" value="{{ old('service_7_title', $RS_Meta['service_7_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_7_description">{{ __('Description') }}</label>
							<textarea name="service_7_description" id="service_7_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_7_description', $RS_Meta['service_7_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_7_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_7_btn_text" id="service_7_btn_text" value="{{ old('service_7_btn_text', $RS_Meta['service_7_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_7_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_7_btn_link" id="service_7_btn_link" value="{{ old('service_7_btn_link', $RS_Meta['service_7_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_7_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_7_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_7_image" id="service_7_image" value="{{ old('service_7_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_7_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_7_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_7_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_7_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Service 8 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_8_tab_title">{{ __('Tab Title') }}</label>
							<input type="text" name="service_8_tab_title" id="service_8_tab_title" value="{{ old('service_8_tab_title', $RS_Meta['service_8_tab_title'] ?? '') }}" class="form-control" placeholder="{{ __('Tab Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_8_title">{{ __('Title') }}</label>
							<input type="text" name="service_8_title" id="service_8_title" value="{{ old('service_8_title', $RS_Meta['service_8_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_8_description">{{ __('Description') }}</label>
							<textarea name="service_8_description" id="service_8_description" class="form-control service_description" placeholder="{{ __('Description') }}">{{ old('service_8_description', $RS_Meta['service_8_description'] ?? '') }}</textarea>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_8_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_8_btn_text" id="service_8_btn_text" value="{{ old('service_8_btn_text', $RS_Meta['service_8_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="service_8_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_8_btn_link" id="service_8_btn_link" value="{{ old('service_8_btn_link', $RS_Meta['service_8_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_8_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('service_8_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_8_image" id="service_8_image" value="{{ old('service_8_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_8_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_8_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['service_8_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="service_8_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Emotional Quest Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="emotional_quest_title">{{ __('Title') }}</label>
							<input type="text" name="emotional_quest_title" id="emotional_quest_title" value="{{ old('emotional_quest_title', $RS_Meta['emotional_quest_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="emotional_quest_description">{{ __('Description') }}</label>
							<textarea name="emotional_quest_description" id="emotional_quest_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('emotional_quest_description', $RS_Meta['emotional_quest_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="emotional_quest_video_thumbnail">{{ __('Video Thumbnail') }}</label>
							<div class="input-group{{ $errors->has('emotional_quest_video_thumbnail') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="emotional_quest_video_thumbnail" id="emotional_quest_video_thumbnail" value="{{ old('emotional_quest_video_thumbnail') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="emotional_quest_video_thumbnail">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['emotional_quest_video_thumbnail']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['emotional_quest_video_thumbnail']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="emotional_quest_video_thumbnail" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="emotional_quest_video_url">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('emotional_quest_video_url') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="emotional_quest_video_url" id="emotional_quest_video_url" value="{{ old('emotional_quest_video_url') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="emotional_quest_video_url">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['emotional_quest_video_url']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['emotional_quest_video_url']) }}" type="video/mp4">
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
				<h4 class="card-title text-dark w-100">Our Latest Insights Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="latest_insights_heading">{{ __('Heading') }}</label>
							<input type="text" name="latest_insights_heading" id="latest_insights_heading" value="{{ old('latest_insights_heading', $RS_Meta['latest_insights_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>
				</div>

                <div class="col-md-12">
                    <div class="form-group">
                        <label for="latest_insights_spotify_iframe">{{ __('Spotify Iframe') }}</label>
                        <textarea name="latest_insights_spotify_iframe" id="latest_insights_spotify_iframe" class="form-control" placeholder="{{ __('Spotify Iframe') }}">{{ old('latest_insights_spotify_iframe', $RS_Meta['latest_insights_spotify_iframe'] ?? '') }}</textarea>
                    </div>
                </div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Our Initiatives Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_heading">{{ __('Heading') }}</label>
							<input type="text" name="initiatives_heading" id="initiatives_heading" value="{{ old('initiatives_heading', $RS_Meta['initiatives_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_1_title">{{ __('Title 1') }}</label>
							<input type="text" name="initiatives_1_title" id="initiatives_1_title" value="{{ old('initiatives_1_title', $RS_Meta['initiatives_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_1_description">{{ __('Description 1') }}</label>
							<textarea name="initiatives_1_description" id="initiatives_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('initiatives_1_description', $RS_Meta['initiatives_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_1_link">{{ __('Link 1') }}</label>
							<input type="text" name="initiatives_1_link" id="initiatives_1_link" value="{{ old('initiatives_1_link', $RS_Meta['initiatives_1_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_1_image">{{ __('Image 1') }}</label>
							<div class="input-group{{ $errors->has('initiatives_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="initiatives_1_image" id="initiatives_1_image" value="{{ old('initiatives_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="initiatives_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['initiatives_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="initiatives_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_2_title">{{ __('Title 2') }}</label>
							<input type="text" name="initiatives_2_title" id="initiatives_2_title" value="{{ old('initiatives_2_title', $RS_Meta['initiatives_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_2_description">{{ __('Description 2') }}</label>
							<textarea name="initiatives_2_description" id="initiatives_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('initiatives_2_description', $RS_Meta['initiatives_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_2_link">{{ __('Link 2') }}</label>
							<input type="text" name="initiatives_2_link" id="initiatives_2_link" value="{{ old('initiatives_2_link', $RS_Meta['initiatives_2_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_2_image">{{ __('Image 2') }}</label>
							<div class="input-group{{ $errors->has('initiatives_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="initiatives_2_image" id="initiatives_2_image" value="{{ old('initiatives_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="initiatives_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['initiatives_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="initiatives_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_3_title">{{ __('Title 3') }}</label>
							<input type="text" name="initiatives_3_title" id="initiatives_3_title" value="{{ old('initiatives_3_title', $RS_Meta['initiatives_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_3_description">{{ __('Description 3') }}</label>
							<textarea name="initiatives_3_description" id="initiatives_3_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('initiatives_3_description', $RS_Meta['initiatives_3_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_3_link">{{ __('Link 3') }}</label>
							<input type="text" name="initiatives_3_link" id="initiatives_3_link" value="{{ old('initiatives_3_link', $RS_Meta['initiatives_3_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_3_image">{{ __('Image 3') }}</label>
							<div class="input-group{{ $errors->has('initiatives_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="initiatives_3_image" id="initiatives_3_image" value="{{ old('initiatives_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="initiatives_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['initiatives_3_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="initiatives_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_4_title">{{ __('Title 4') }}</label>
							<input type="text" name="initiatives_4_title" id="initiatives_4_title" value="{{ old('initiatives_4_title', $RS_Meta['initiatives_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_4_description">{{ __('Description 4') }}</label>
							<textarea name="initiatives_4_description" id="initiatives_4_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('initiatives_4_description', $RS_Meta['initiatives_4_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_4_link">{{ __('Link 4') }}</label>
							<input type="text" name="initiatives_4_link" id="initiatives_4_link" value="{{ old('initiatives_4_link', $RS_Meta['initiatives_4_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_4_image">{{ __('Image 4') }}</label>
							<div class="input-group{{ $errors->has('initiatives_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="initiatives_4_image" id="initiatives_4_image" value="{{ old('initiatives_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="initiatives_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['initiatives_4_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="initiatives_4_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_5_title">{{ __('Title 5') }}</label>
							<input type="text" name="initiatives_5_title" id="initiatives_5_title" value="{{ old('initiatives_5_title', $RS_Meta['initiatives_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_5_description">{{ __('Description 5') }}</label>
							<textarea name="initiatives_5_description" id="initiatives_5_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('initiatives_5_description', $RS_Meta['initiatives_5_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_5_link">{{ __('Link 5') }}</label>
							<input type="text" name="initiatives_5_link" id="initiatives_5_link" value="{{ old('initiatives_5_link', $RS_Meta['initiatives_5_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="initiatives_5_image">{{ __('Image 5') }}</label>
							<div class="input-group{{ $errors->has('initiatives_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="initiatives_5_image" id="initiatives_5_image" value="{{ old('initiatives_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="initiatives_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['initiatives_5_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="initiatives_5_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Join Us Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_title">{{ __('Title') }}</label>
							<input type="text" name="join_us_title" id="join_us_title" value="{{ old('join_us_title', $RS_Meta['join_us_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_description">{{ __('Description') }}</label>
							<textarea name="join_us_description" id="join_us_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('join_us_description', $RS_Meta['join_us_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="join_us_btn_text" id="join_us_btn_text" value="{{ old('join_us_btn_text', $RS_Meta['join_us_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="join_us_btn_link" id="join_us_btn_link" value="{{ old('join_us_btn_link', $RS_Meta['join_us_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="join_us_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('join_us_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="join_us_image" id="join_us_image" value="{{ old('join_us_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="join_us_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['join_us_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['join_us_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="join_us_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Up Coming Event</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Event 1 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="event_1_title">{{ __('Event Title') }}</label>
							<input type="text" name="event_1_title" id="event_1_title" value="{{ old('event_1_title', $RS_Meta['event_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Event Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_1_heading">{{ __('Heading') }}</label>
							<input type="text" name="event_1_heading" id="event_1_heading" value="{{ old('event_1_heading', $RS_Meta['event_1_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_1_subheading">{{ __('Sub Heading') }}</label>
							<input type="text" name="event_1_subheading" id="event_1_subheading" value="{{ old('event_1_subheading', $RS_Meta['event_1_subheading'] ?? '') }}" class="form-control" placeholder="{{ __('Sub Heading') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="evemt_1_date">{{ __('Event Date') }}</label>
							<input type="text" name="evemt_1_date" id="evemt_1_date" value="{{ old('evemt_1_date', $RS_Meta['evemt_1_date'] ?? '') }}" class="form-control" placeholder="{{ __('Event Date') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="evemt_1_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="evemt_1_btn_text" id="evemt_1_btn_text" value="{{ old('evemt_1_btn_text', $RS_Meta['evemt_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="evemt_1_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="evemt_1_btn_link" id="evemt_1_btn_link" value="{{ old('evemt_1_btn_link', $RS_Meta['evemt_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Event 1 Speaker Detail</h5>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_1_speaker_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="event_1_speaker_btn_text" id="event_1_speaker_btn_text" value="{{ old('event_1_speaker_btn_text', $RS_Meta['event_1_speaker_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_1_speaker_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="event_1_speaker_btn_link" id="event_1_speaker_btn_link" value="{{ old('event_1_speaker_btn_link', $RS_Meta['event_1_speaker_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="col-md-12">
							<h6 class="text-bold">Speaker 1 Detail</h6>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_1_name">{{ __('Name') }}</label>
								<input type="text" name="event_1_speaker_1_name" id="event_1_speaker_1_name" value="{{ old('event_1_speaker_1_name', $RS_Meta['event_1_speaker_1_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_1_designation">{{ __('Designation') }}</label>
								<input type="text" name="event_1_speaker_1_designation" id="event_1_speaker_1_designation" value="{{ old('event_1_speaker_1_designation', $RS_Meta['event_1_speaker_1_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Designation') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_1_image">{{ __('Image') }}</label>
								<div class="input-group{{ $errors->has('event_1_speaker_1_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="event_1_speaker_1_image" id="event_1_speaker_1_image" value="{{ old('event_1_speaker_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
										<label class="custom-file-label" for="event_1_speaker_1_image">Choose image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['event_1_speaker_1_image']) )
									<div class="d-flex align-items-start mt-3">
										<img src="{{ url('uploads/pages/'.$RS_Meta['event_1_speaker_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

										<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="event_1_speaker_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
									</div>
								@endif
							</div>
						</div>
					</div>

					<div class="col-md-12">
						<hr>
					</div>

					<div class="col-md-12">
						<div class="col-md-12">
							<h6 class="text-bold">Speaker 2 Detail</h6>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_2_name">{{ __('Name') }}</label>
								<input type="text" name="event_1_speaker_2_name" id="event_1_speaker_2_name" value="{{ old('event_1_speaker_2_name', $RS_Meta['event_1_speaker_2_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_2_designation">{{ __('Designation') }}</label>
								<input type="text" name="event_1_speaker_2_designation" id="event_1_speaker_2_designation" value="{{ old('event_1_speaker_2_designation', $RS_Meta['event_1_speaker_2_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Designation') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_2_image">{{ __('Image') }}</label>
								<div class="input-group{{ $errors->has('event_1_speaker_2_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="event_1_speaker_2_image" id="event_1_speaker_2_image" value="{{ old('event_1_speaker_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
										<label class="custom-file-label" for="event_1_speaker_2_image">Choose image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['event_1_speaker_2_image']) )
									<div class="d-flex align-items-start mt-3">
										<img src="{{ url('uploads/pages/'.$RS_Meta['event_1_speaker_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

										<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="event_1_speaker_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
									</div>
								@endif
							</div>
						</div>
					</div>

					<div class="col-md-12">
						<hr>
					</div>

					<div class="col-md-12">
						<div class="col-md-12">
							<h6 class="text-bold">Speaker 3 Detail</h6>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_3_name">{{ __('Name') }}</label>
								<input type="text" name="event_1_speaker_3_name" id="event_1_speaker_3_name" value="{{ old('event_1_speaker_3_name', $RS_Meta['event_1_speaker_3_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_3_designation">{{ __('Designation') }}</label>
								<input type="text" name="event_1_speaker_3_designation" id="event_1_speaker_3_designation" value="{{ old('event_1_speaker_3_designation', $RS_Meta['event_1_speaker_3_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Designation') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_3_image">{{ __('Image') }}</label>
								<div class="input-group{{ $errors->has('event_1_speaker_3_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="event_1_speaker_3_image" id="event_1_speaker_3_image" value="{{ old('event_1_speaker_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
										<label class="custom-file-label" for="event_1_speaker_3_image">Choose image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['event_1_speaker_3_image']) )
									<div class="d-flex align-items-start mt-3">
										<img src="{{ url('uploads/pages/'.$RS_Meta['event_1_speaker_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

										<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="event_1_speaker_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
									</div>
								@endif
							</div>
						</div>
					</div>

					<div class="col-md-12">
						<hr>
					</div>

					<div class="col-md-12">
						<div class="col-md-12">
							<h6 class="text-bold">Speaker 4 Detail</h6>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_4_name">{{ __('Name') }}</label>
								<input type="text" name="event_1_speaker_4_name" id="event_1_speaker_4_name" value="{{ old('event_1_speaker_4_name', $RS_Meta['event_1_speaker_4_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_4_designation">{{ __('Designation') }}</label>
								<input type="text" name="event_1_speaker_4_designation" id="event_1_speaker_4_designation" value="{{ old('event_1_speaker_4_designation', $RS_Meta['event_1_speaker_4_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Designation') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_4_image">{{ __('Image') }}</label>
								<div class="input-group{{ $errors->has('event_1_speaker_4_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="event_1_speaker_4_image" id="event_1_speaker_4_image" value="{{ old('event_1_speaker_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
										<label class="custom-file-label" for="event_1_speaker_4_image">Choose image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['event_1_speaker_4_image']) )
									<div class="d-flex align-items-start mt-3">
										<img src="{{ url('uploads/pages/'.$RS_Meta['event_1_speaker_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

										<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="event_1_speaker_4_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
									</div>
								@endif
							</div>
						</div>
					</div>

					<div class="col-md-12">
						<hr>
					</div>

					<div class="col-md-12">
						<div class="col-md-12">
							<h6 class="text-bold">Speaker 5 Detail</h6>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_5_name">{{ __('Name') }}</label>
								<input type="text" name="event_1_speaker_5_name" id="event_1_speaker_5_name" value="{{ old('event_1_speaker_5_name', $RS_Meta['event_1_speaker_5_name'] ?? '') }}" class="form-control" placeholder="{{ __('Name') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_5_designation">{{ __('Designation') }}</label>
								<input type="text" name="event_1_speaker_5_designation" id="event_1_speaker_5_designation" value="{{ old('event_1_speaker_5_designation', $RS_Meta['event_1_speaker_5_designation'] ?? '') }}" class="form-control" placeholder="{{ __('Designation') }}">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label for="event_1_speaker_5_image">{{ __('Image') }}</label>
								<div class="input-group{{ $errors->has('event_1_speaker_5_image') ? ' is-invalid' : '' }}">
									<div class="custom-file">
										<input type="file" name="event_1_speaker_5_image" id="event_1_speaker_5_image" value="{{ old('event_1_speaker_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
										<label class="custom-file-label" for="event_1_speaker_5_image">Choose image</label>
									</div>
								</div>

								@if( !empty($RS_Meta['event_1_speaker_5_image']) )
									<div class="d-flex align-items-start mt-3">
										<img src="{{ url('uploads/pages/'.$RS_Meta['event_1_speaker_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

										<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="event_1_speaker_5_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
									</div>
								@endif
							</div>
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<h5>Event 2 Detail</h5>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="event_2_title">{{ __('Event Title') }}</label>
							<input type="text" name="event_2_title" id="event_2_title" value="{{ old('event_2_title', $RS_Meta['event_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Event Title') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_2_heading">{{ __('Heading') }}</label>
							<input type="text" name="event_2_heading" id="event_2_heading" value="{{ old('event_2_heading', $RS_Meta['event_2_heading'] ?? '') }}" class="form-control" placeholder="{{ __('Heading') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_2_subheading">{{ __('Sub Heading') }}</label>
							<input type="text" name="event_2_subheading" id="event_2_subheading" value="{{ old('event_2_subheading', $RS_Meta['event_2_subheading'] ?? '') }}" class="form-control" placeholder="{{ __('Sub Heading') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="evemt_1_date">{{ __('Event Date') }}</label>
							<input type="text" name="evemt_1_date" id="evemt_1_date" value="{{ old('evemt_1_date', $RS_Meta['evemt_1_date'] ?? '') }}" class="form-control" placeholder="{{ __('Event Date') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="evemt_1_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="evemt_1_btn_text" id="evemt_1_btn_text" value="{{ old('evemt_1_btn_text', $RS_Meta['evemt_1_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="evemt_1_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="evemt_1_btn_link" id="evemt_1_btn_link" value="{{ old('evemt_1_btn_link', $RS_Meta['evemt_1_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
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
    $('.service_description').summernote();
});
</script>