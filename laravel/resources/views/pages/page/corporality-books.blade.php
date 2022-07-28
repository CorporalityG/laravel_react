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
				<h4 class="card-title text-dark w-100">Book 1 Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_1_title">{{ __('Title') }}</label>
							<input type="text" name="book_1_title" id="book_1_title" value="{{ old('book_1_title', $RS_Meta['book_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_1_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="book_1_subtitle" id="book_1_subtitle" value="{{ old('book_1_subtitle', $RS_Meta['book_1_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_1_date">{{ __('Date') }}</label>
							<input type="text" name="book_1_date" id="book_1_date" value="{{ old('book_1_date', $RS_Meta['book_1_date'] ?? '') }}" class="form-control" placeholder="{{ __('Date') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_1_pages">{{ __('Pages') }}</label>
							<input type="text" name="book_1_pages" id="book_1_pages" value="{{ old('book_1_pages', $RS_Meta['book_1_pages'] ?? '') }}" class="form-control" placeholder="{{ __('Pages') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_1_size">{{ __('Size') }}</label>
							<input type="text" name="book_1_size" id="book_1_size" value="{{ old('book_1_size', $RS_Meta['book_1_size'] ?? '') }}" class="form-control" placeholder="{{ __('Size') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_1_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="book_1_btn_1_text" id="book_1_btn_1_text" value="{{ old('book_1_btn_1_text', $RS_Meta['book_1_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_1_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="book_1_btn_2_text" id="book_1_btn_2_text" value="{{ old('book_1_btn_2_text', $RS_Meta['book_1_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_1_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('book_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_1_image" id="book_1_image" value="{{ old('book_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="book_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_1_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['book_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="book_1_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_1_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('book_1_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_1_video" id="book_1_video" value="{{ old('book_1_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="book_1_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_1_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['book_1_video']) }}" type="video/mp4">
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
				<h4 class="card-title text-dark w-100">Book 2 Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_2_title">{{ __('Title') }}</label>
							<input type="text" name="book_2_title" id="book_2_title" value="{{ old('book_2_title', $RS_Meta['book_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_2_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="book_2_subtitle" id="book_2_subtitle" value="{{ old('book_2_subtitle', $RS_Meta['book_2_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_2_date">{{ __('Date') }}</label>
							<input type="text" name="book_2_date" id="book_2_date" value="{{ old('book_2_date', $RS_Meta['book_2_date'] ?? '') }}" class="form-control" placeholder="{{ __('Date') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_2_pages">{{ __('Pages') }}</label>
							<input type="text" name="book_2_pages" id="book_2_pages" value="{{ old('book_2_pages', $RS_Meta['book_2_pages'] ?? '') }}" class="form-control" placeholder="{{ __('Pages') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_2_size">{{ __('Size') }}</label>
							<input type="text" name="book_2_size" id="book_2_size" value="{{ old('book_2_size', $RS_Meta['book_2_size'] ?? '') }}" class="form-control" placeholder="{{ __('Size') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_2_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="book_2_btn_1_text" id="book_2_btn_1_text" value="{{ old('book_2_btn_1_text', $RS_Meta['book_2_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_2_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="book_2_btn_2_text" id="book_2_btn_2_text" value="{{ old('book_2_btn_2_text', $RS_Meta['book_2_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_2_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('book_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_2_image" id="book_2_image" value="{{ old('book_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="book_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_2_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['book_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="book_2_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_2_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('book_2_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_2_video" id="book_2_video" value="{{ old('book_2_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="book_2_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_2_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['book_2_video']) }}" type="video/mp4">
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
				<h4 class="card-title text-dark w-100">Book 3 Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_3_title">{{ __('Title') }}</label>
							<input type="text" name="book_3_title" id="book_3_title" value="{{ old('book_3_title', $RS_Meta['book_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_3_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="book_3_subtitle" id="book_3_subtitle" value="{{ old('book_3_subtitle', $RS_Meta['book_3_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_3_date">{{ __('Date') }}</label>
							<input type="text" name="book_3_date" id="book_3_date" value="{{ old('book_3_date', $RS_Meta['book_3_date'] ?? '') }}" class="form-control" placeholder="{{ __('Date') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_3_pages">{{ __('Pages') }}</label>
							<input type="text" name="book_3_pages" id="book_3_pages" value="{{ old('book_3_pages', $RS_Meta['book_3_pages'] ?? '') }}" class="form-control" placeholder="{{ __('Pages') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_3_size">{{ __('Size') }}</label>
							<input type="text" name="book_3_size" id="book_3_size" value="{{ old('book_3_size', $RS_Meta['book_3_size'] ?? '') }}" class="form-control" placeholder="{{ __('Size') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_3_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="book_3_btn_1_text" id="book_3_btn_1_text" value="{{ old('book_3_btn_1_text', $RS_Meta['book_3_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_3_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="book_3_btn_2_text" id="book_3_btn_2_text" value="{{ old('book_3_btn_2_text', $RS_Meta['book_3_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_3_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('book_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_3_image" id="book_3_image" value="{{ old('book_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="book_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_3_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['book_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="book_3_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_3_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('book_3_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_3_video" id="book_3_video" value="{{ old('book_3_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="book_3_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_3_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['book_3_video']) }}" type="video/mp4">
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
				<h4 class="card-title text-dark w-100">Book 4 Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_4_title">{{ __('Title') }}</label>
							<input type="text" name="book_4_title" id="book_4_title" value="{{ old('book_4_title', $RS_Meta['book_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_4_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="book_4_subtitle" id="book_4_subtitle" value="{{ old('book_4_subtitle', $RS_Meta['book_4_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_4_date">{{ __('Date') }}</label>
							<input type="text" name="book_4_date" id="book_4_date" value="{{ old('book_4_date', $RS_Meta['book_4_date'] ?? '') }}" class="form-control" placeholder="{{ __('Date') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_4_pages">{{ __('Pages') }}</label>
							<input type="text" name="book_4_pages" id="book_4_pages" value="{{ old('book_4_pages', $RS_Meta['book_4_pages'] ?? '') }}" class="form-control" placeholder="{{ __('Pages') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_4_size">{{ __('Size') }}</label>
							<input type="text" name="book_4_size" id="book_4_size" value="{{ old('book_4_size', $RS_Meta['book_4_size'] ?? '') }}" class="form-control" placeholder="{{ __('Size') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_4_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="book_4_btn_1_text" id="book_4_btn_1_text" value="{{ old('book_4_btn_1_text', $RS_Meta['book_4_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_4_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="book_4_btn_2_text" id="book_4_btn_2_text" value="{{ old('book_4_btn_2_text', $RS_Meta['book_4_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_4_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('book_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_4_image" id="book_4_image" value="{{ old('book_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="book_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_4_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['book_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="book_4_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_4_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('book_4_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_4_video" id="book_4_video" value="{{ old('book_4_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="book_4_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_4_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['book_4_video']) }}" type="video/mp4">
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
				<h4 class="card-title text-dark w-100">Book 5 Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_5_title">{{ __('Title') }}</label>
							<input type="text" name="book_5_title" id="book_5_title" value="{{ old('book_5_title', $RS_Meta['book_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="book_5_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="book_5_subtitle" id="book_5_subtitle" value="{{ old('book_5_subtitle', $RS_Meta['book_5_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_5_date">{{ __('Date') }}</label>
							<input type="text" name="book_5_date" id="book_5_date" value="{{ old('book_5_date', $RS_Meta['book_5_date'] ?? '') }}" class="form-control" placeholder="{{ __('Date') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_5_pages">{{ __('Pages') }}</label>
							<input type="text" name="book_5_pages" id="book_5_pages" value="{{ old('book_5_pages', $RS_Meta['book_5_pages'] ?? '') }}" class="form-control" placeholder="{{ __('Pages') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_5_size">{{ __('Size') }}</label>
							<input type="text" name="book_5_size" id="book_5_size" value="{{ old('book_5_size', $RS_Meta['book_5_size'] ?? '') }}" class="form-control" placeholder="{{ __('Size') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_5_btn_1_text">{{ __('Button 1 Text') }}</label>
							<input type="text" name="book_5_btn_1_text" id="book_5_btn_1_text" value="{{ old('book_5_btn_1_text', $RS_Meta['book_5_btn_1_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="book_5_btn_2_text">{{ __('Button 2 Text') }}</label>
							<input type="text" name="book_5_btn_2_text" id="book_5_btn_2_text" value="{{ old('book_5_btn_2_text', $RS_Meta['book_5_btn_2_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_5_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('book_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_5_image" id="book_5_image" value="{{ old('book_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="book_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_5_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['book_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="book_5_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="book_5_video">{{ __('Video') }}</label>
							<div class="input-group{{ $errors->has('book_5_video') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="book_5_video" id="book_5_video" value="{{ old('book_5_video') }}" class="custom-file-input" placeholder="Choose image" accept="video/*">
									<label class="custom-file-label" for="book_5_video">Choose video</label>
								</div>
							</div>

							@if( !empty($RS_Meta['book_5_video']) )
								<video width="320" height="240" controls class="mt-3">
									<source src="{{ url('uploads/pages/'.$RS_Meta['book_5_video']) }}" type="video/mp4">
									Your browser does not support the video tag.
								</video>
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
    $('#privacy_policy_description').summernote();
	$('#privacy_policy_content').summernote();
});
</script>