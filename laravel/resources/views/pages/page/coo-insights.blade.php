<div class="row">
	<div class="col-12">
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Ideation + Creativity Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="ideation_creativity_title">{{ __('Title') }}</label>
							<input type="text" name="ideation_creativity_title" id="ideation_creativity_title" value="{{ old('ideation_creativity_title', $RS_Meta['ideation_creativity_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="ideation_creativity_description">{{ __('Description') }}</label>
							<textarea name="ideation_creativity_description" id="ideation_creativity_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('ideation_creativity_description', $RS_Meta['ideation_creativity_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="ideation_creativity_video_iframe">{{ __('Video IFrame') }}</label>
							<textarea name="ideation_creativity_video_iframe" id="ideation_creativity_video_iframe" class="form-control" placeholder="{{ __('Video IFrame') }}">{{ old('ideation_creativity_video_iframe', $RS_Meta['ideation_creativity_video_iframe'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="ideation_creativity_subscribe_title">{{ __('Subscribe Title') }}</label>
							<input type="text" name="ideation_creativity_subscribe_title" id="ideation_creativity_subscribe_title" value="{{ old('ideation_creativity_subscribe_title', $RS_Meta['ideation_creativity_title'] ?? '') }}" class="form-control" placeholder="{{ __('Subscribe Title') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="apple_podcasts_image">{{ __('Apple Podcasts Image') }}</label>
							<div class="input-group{{ $errors->has('apple_podcasts_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="apple_podcasts_image" id="apple_podcasts_image" value="{{ old('apple_podcasts_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="apple_podcasts_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['apple_podcasts_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['apple_podcasts_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="apple_podcasts_link">{{ __('Apple Podcasts Link') }}</label>
							<input type="text" name="apple_podcasts_link" id="apple_podcasts_link" value="{{ old('apple_podcasts_link', $RS_Meta['apple_podcasts_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="spotify_image">{{ __('Spotify Image') }}</label>
							<div class="input-group{{ $errors->has('spotify_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="spotify_image" id="spotify_image" value="{{ old('spotify_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="spotify_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['spotify_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['spotify_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="spotify_link">{{ __('Spotify Link') }}</label>
							<input type="text" name="spotify_link" id="spotify_link" value="{{ old('spotify_link', $RS_Meta['spotify_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="google_podcasts_image">{{ __('Google Podcasts Image') }}</label>
							<div class="input-group{{ $errors->has('google_podcasts_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="google_podcasts_image" id="google_podcasts_image" value="{{ old('google_podcasts_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="google_podcasts_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['google_podcasts_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['google_podcasts_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="google_podcasts_link">{{ __('Google Podcasts Link') }}</label>
							<input type="text" name="google_podcasts_link" id="google_podcasts_link" value="{{ old('google_podcasts_link', $RS_Meta['google_podcasts_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="youtube_image">{{ __('YouTube Image') }}</label>
							<div class="input-group{{ $errors->has('youtube_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="youtube_image" id="youtube_image" value="{{ old('youtube_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="youtube_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['youtube_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['youtube_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="youtube_link">{{ __('YouTube Link') }}</label>
							<input type="text" name="youtube_link" id="youtube_link" value="{{ old('youtube_link', $RS_Meta['youtube_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Service Insights Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_insights_title">{{ __('Title') }}</label>
							<input type="text" name="service_insights_title" id="service_insights_title" value="{{ old('service_insights_title', $RS_Meta['service_insights_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="service_insights_description">{{ __('Description') }}</label>
							<textarea name="service_insights_description" id="service_insights_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('service_insights_description', $RS_Meta['service_insights_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_insights_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="service_insights_btn_text" id="service_insights_btn_text" value="{{ old('service_insights_btn_text', $RS_Meta['service_insights_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_insights_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="service_insights_btn_link" id="service_insights_btn_link" value="{{ old('service_insights_btn_link', $RS_Meta['service_insights_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_insights_event_image">{{ __('Event Image') }}</label>
							<div class="input-group{{ $errors->has('service_insights_event_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="service_insights_event_image" id="service_insights_event_image" value="{{ old('service_insights_event_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="service_insights_event_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['service_insights_event_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['service_insights_event_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="service_insights_event_link">{{ __('Event Link') }}</label>
							<input type="text" name="service_insights_event_link" id="service_insights_event_link" value="{{ old('service_insights_event_link', $RS_Meta['service_insights_event_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
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
    $('#ideation_creativity_description').summernote();
});
</script>