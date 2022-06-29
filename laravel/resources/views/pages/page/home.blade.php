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
							<input type="text" name="banner_1_title" id="banner_1_title" value="{{ old('banner_1_title', $RS_Meta['banner_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_1_image']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_1_video_thumbnail']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_1_video_url">{{ __('Vidoe URL 1') }}</label>
							<input type="text" name="banner_1_video_url" id="banner_1_video_url" value="{{ old('banner_1_video_url', $RS_Meta['banner_1_video_url'] ?? '') }}" class="form-control" placeholder="{{ __('Vidoe URL') }}">
						</div>
					</div>
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_2_image']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_2_video_thumbnail']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_2_video_url">{{ __('Vidoe URL 2') }}</label>
							<input type="text" name="banner_2_video_url" id="banner_2_video_url" value="{{ old('banner_2_video_url', $RS_Meta['banner_2_video_url'] ?? '') }}" class="form-control" placeholder="{{ __('Vidoe URL') }}">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_3_image']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_3_video_thumbnail']) }}" alt="{{ $RS_Meta['banner_subtitle'] ?? 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="banner_3_video_url">{{ __('Vidoe URL 3') }}</label>
							<input type="text" name="banner_3_video_url" id="banner_3_video_url" value="{{ old('banner_3_video_url', $RS_Meta['banner_3_video_url'] ?? '') }}" class="form-control" placeholder="{{ __('Vidoe URL') }}">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['box_1_icon']) }}" alt="{{ $RS_Meta['box_1_title'] ?? 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['box_2_icon']) }}" alt="{{ $RS_Meta['box_2_title'] ?? 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['box_3_icon']) }}" alt="{{ $RS_Meta['box_3_title'] ?? 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['emotional_quest_video_thumbnail']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="emotional_quest_video_url">{{ __('Video URL') }}</label>
							<input type="text" name="emotional_quest_video_url" id="emotional_quest_video_url" value="{{ old('emotional_quest_video_url', $RS_Meta['emotional_quest_video_url'] ?? '') }}" class="form-control" placeholder="{{ __('Video URL') }}">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['initiatives_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
								<img src="{{ url('uploads/pages/'.$RS_Meta['join_us_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>