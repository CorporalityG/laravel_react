<div class="row">
	<div class="col-12">
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Privacy Policy</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="privacy_policy_title">{{ __('Title') }}</label>
							<input type="text" name="privacy_policy_title" id="privacy_policy_title" value="{{ old('privacy_policy_title', $RS_Meta['privacy_policy_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="privacy_policy_description">{{ __('Description') }}</label>
							<textarea name="privacy_policy_description" id="privacy_policy_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('privacy_policy_description', $RS_Meta['privacy_policy_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="privacy_policy_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('privacy_policy_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="privacy_policy_image" id="privacy_policy_image" value="{{ old('privacy_policy_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="privacy_policy_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['privacy_policy_image']) )
								<div class="d-flex align-items-start mt-3">
									<img src="{{ url('uploads/pages/'.$RS_Meta['privacy_policy_image']) }}" alt="{{ 'Image' }}" class="max-height-150">

									<a href="javascript:;" data-id="{{ $RS_Row->id }}" data-key="privacy_policy_image" class="btn btn-sm btn-danger mx-2 deleteImg"><i class="fas fa-trash"></i></a>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Content Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="privacy_policy_content">{{ __('Content') }}</label>
							<textarea name="privacy_policy_content" id="privacy_policy_content" class="form-control" placeholder="{{ __('Content') }}">{{ old('privacy_policy_content', $RS_Meta['privacy_policy_content'] ?? '') }}</textarea>
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