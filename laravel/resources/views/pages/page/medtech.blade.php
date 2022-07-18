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
								<img src="{{ url('uploads/pages/'.$RS_Meta['banner_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">EBook Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="ebook_title">{{ __('Title') }}</label>
							<input type="text" name="ebook_title" id="ebook_title" value="{{ old('ebook_title', $RS_Meta['ebook_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="ebook_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="ebook_btn_text" id="ebook_btn_text" value="{{ old('ebook_btn_text', $RS_Meta['ebook_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
						
					<div class="col-md-12">
						<div class="form-group">
							<label for="ebook_iframe">{{ __('Iframe') }}</label>
							<textarea name="ebook_iframe" id="ebook_iframe" class="form-control" placeholder="{{ __('Iframe') }}">{{ old('ebook_iframe', $RS_Meta['ebook_iframe'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="ebook_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('ebook_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="ebook_image" id="ebook_image" value="{{ old('ebook_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="ebook_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['ebook_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['ebook_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Research Paper Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="research_paper_title">{{ __('Title') }}</label>
							<input type="text" name="research_paper_title" id="research_paper_title" value="{{ old('research_paper_title', $RS_Meta['research_paper_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="research_paper_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="research_paper_subtitle" id="research_paper_subtitle" value="{{ old('research_paper_subtitle', $RS_Meta['research_paper_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="research_paper_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="research_paper_btn_text" id="research_paper_btn_text" value="{{ old('research_paper_btn_text', $RS_Meta['research_paper_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="research_paper_iframe">{{ __('Iframe') }}</label>
							<textarea name="research_paper_iframe" id="research_paper_iframe" class="form-control" placeholder="{{ __('Iframe') }}">{{ old('research_paper_iframe', $RS_Meta['research_paper_iframe'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="research_paper_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('research_paper_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="research_paper_image" id="research_paper_image" value="{{ old('research_paper_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="research_paper_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['research_paper_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['research_paper_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Survey Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="survey_title">{{ __('Title') }}</label>
							<input type="text" name="survey_title" id="survey_title" value="{{ old('survey_title', $RS_Meta['survey_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="survey_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="survey_btn_text" id="survey_btn_text" value="{{ old('survey_btn_text', $RS_Meta['survey_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="survey_iframe">{{ __('Iframe') }}</label>
							<textarea name="survey_iframe" id="survey_iframe" class="form-control" placeholder="{{ __('Iframe') }}">{{ old('survey_iframe', $RS_Meta['survey_iframe'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="survey_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('survey_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="survey_image" id="survey_image" value="{{ old('survey_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="survey_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['survey_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['survey_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Health Care Research Paper Detail</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="health_care_research_paper_title">{{ __('Title') }}</label>
							<input type="text" name="health_care_research_paper_title" id="health_care_research_paper_title" value="{{ old('health_care_research_paper_title', $RS_Meta['health_care_research_paper_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="health_care_research_paper_subtitle">{{ __('SubTitle') }}</label>
							<input type="text" name="health_care_research_paper_subtitle" id="health_care_research_paper_subtitle" value="{{ old('health_care_research_paper_subtitle', $RS_Meta['health_care_research_paper_subtitle'] ?? '') }}" class="form-control" placeholder="{{ __('SubTitle') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="health_care_research_paper_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="health_care_research_paper_btn_text" id="health_care_research_paper_btn_text" value="{{ old('health_care_research_paper_btn_text', $RS_Meta['health_care_research_paper_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
						
					<div class="col-md-12">
						<div class="form-group">
							<label for="health_care_research_paper_iframe">{{ __('Iframe') }}</label>
							<textarea name="health_care_research_paper_iframe" id="health_care_research_paper_iframe" class="form-control" placeholder="{{ __('Iframe') }}">{{ old('health_care_research_paper_iframe', $RS_Meta['health_care_research_paper_iframe'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="health_care_research_paper_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('health_care_research_paper_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="health_care_research_paper_image" id="health_care_research_paper_image" value="{{ old('health_care_research_paper_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="health_care_research_paper_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['health_care_research_paper_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['health_care_research_paper_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
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
    $('#banner_description').summernote();
});
</script>