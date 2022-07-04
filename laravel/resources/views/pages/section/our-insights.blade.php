<div class="row">
	<div class="col-12">

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Insights 1 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_1_title">{{ __('Title') }}</label>
							<input type="text" name="insight_1_title" id="insight_1_title" value="{{ old('insight_1_title', $RS_Meta['insight_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_1_link">{{ __('Link') }}</label>
							<input type="text" name="insight_1_link" id="insight_1_link" value="{{ old('insight_1_link', $RS_Meta['insight_1_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_1_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('insight_1_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="insight_1_image" id="insight_1_image" value="{{ old('insight_1_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="insight_1_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['insight_1_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['insight_1_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Insights 2 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_2_title">{{ __('Title') }}</label>
							<input type="text" name="insight_2_title" id="insight_2_title" value="{{ old('insight_2_title', $RS_Meta['insight_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_2_link">{{ __('Link') }}</label>
							<input type="text" name="insight_2_link" id="insight_2_link" value="{{ old('insight_2_link', $RS_Meta['insight_2_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_2_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('insight_2_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="insight_2_image" id="insight_2_image" value="{{ old('insight_2_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="insight_2_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['insight_2_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['insight_2_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Insights 3 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_3_title">{{ __('Title') }}</label>
							<input type="text" name="insight_3_title" id="insight_3_title" value="{{ old('insight_3_title', $RS_Meta['insight_3_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_3_link">{{ __('Link') }}</label>
							<input type="text" name="insight_3_link" id="insight_3_link" value="{{ old('insight_3_link', $RS_Meta['insight_3_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_3_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('insight_3_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="insight_3_image" id="insight_3_image" value="{{ old('insight_3_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="insight_3_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['insight_3_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['insight_3_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Insights 4 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_4_title">{{ __('Title') }}</label>
							<input type="text" name="insight_4_title" id="insight_4_title" value="{{ old('insight_4_title', $RS_Meta['insight_4_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_4_link">{{ __('Link') }}</label>
							<input type="text" name="insight_4_link" id="insight_4_link" value="{{ old('insight_4_link', $RS_Meta['insight_4_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_4_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('insight_4_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="insight_4_image" id="insight_4_image" value="{{ old('insight_4_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="insight_4_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['insight_4_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['insight_4_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Insights 5 Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_5_title">{{ __('Title') }}</label>
							<input type="text" name="insight_5_title" id="insight_5_title" value="{{ old('insight_5_title', $RS_Meta['insight_5_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_5_link">{{ __('Link') }}</label>
							<input type="text" name="insight_5_link" id="insight_5_link" value="{{ old('insight_5_link', $RS_Meta['insight_5_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="insight_5_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('insight_5_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="insight_5_image" id="insight_5_image" value="{{ old('insight_5_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="insight_5_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['insight_5_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['insight_5_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>