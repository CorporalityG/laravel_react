<div class="row">
	<div class="col-12">
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Terms and Conditions</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="terms_conditions_title">{{ __('Title') }}</label>
							<input type="text" name="terms_conditions_title" id="terms_conditions_title" value="{{ old('terms_conditions_title', $RS_Meta['terms_conditions_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="terms_conditions_modified_date">{{ __('Last Modified') }}</label>
							<input type="text" name="terms_conditions_modified_date" id="terms_conditions_modified_date" value="{{ old('terms_conditions_modified_date', $RS_Meta['terms_conditions_modified_date'] ?? '') }}" class="form-control" placeholder="{{ __('Last Modified') }}" autofocus>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Terms of Use Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="terms_use_title">{{ __('Title') }}</label>
							<input type="text" name="terms_use_title" id="terms_use_title" value="{{ old('terms_use_title', $RS_Meta['terms_use_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="terms_use_description">{{ __('Description') }}</label>
							<textarea name="terms_use_description" id="terms_use_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('terms_use_description', $RS_Meta['terms_use_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Site Access and Usage Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="site_access_title">{{ __('Title') }}</label>
							<input type="text" name="site_access_title" id="site_access_title" value="{{ old('site_access_title', $RS_Meta['site_access_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="site_access_description">{{ __('Description') }}</label>
							<textarea name="site_access_description" id="site_access_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('site_access_description', $RS_Meta['site_access_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Hyperlink Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="hyperlink_title">{{ __('Title') }}</label>
							<input type="text" name="hyperlink_title" id="hyperlink_title" value="{{ old('hyperlink_title', $RS_Meta['hyperlink_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="hyperlink_description">{{ __('Description') }}</label>
							<textarea name="hyperlink_description" id="hyperlink_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('hyperlink_description', $RS_Meta['hyperlink_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Copyrights and Use of Site Content Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="copyrights_title">{{ __('Title') }}</label>
							<input type="text" name="copyrights_title" id="copyrights_title" value="{{ old('copyrights_title', $RS_Meta['copyrights_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="copyrights_description">{{ __('Description') }}</label>
							<textarea name="copyrights_description" id="copyrights_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('copyrights_description', $RS_Meta['copyrights_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Trademarks Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="trademarks_title">{{ __('Title') }}</label>
							<input type="text" name="trademarks_title" id="trademarks_title" value="{{ old('trademarks_title', $RS_Meta['trademarks_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="trademarks_description">{{ __('Description') }}</label>
							<textarea name="trademarks_description" id="trademarks_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('trademarks_description', $RS_Meta['trademarks_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">No Services, Endorsement or Professional Consultation Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="no_services_title">{{ __('Title') }}</label>
							<input type="text" name="no_services_title" id="no_services_title" value="{{ old('no_services_title', $RS_Meta['no_services_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="no_services_description">{{ __('Description') }}</label>
							<textarea name="no_services_description" id="no_services_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('no_services_description', $RS_Meta['no_services_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Limitation of Liability Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="limitation_title">{{ __('Title') }}</label>
							<input type="text" name="limitation_title" id="limitation_title" value="{{ old('limitation_title', $RS_Meta['limitation_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="limitation_description">{{ __('Description') }}</label>
							<textarea name="limitation_description" id="limitation_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('limitation_description', $RS_Meta['limitation_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Indemnification Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="indemnification_title">{{ __('Title') }}</label>
							<input type="text" name="indemnification_title" id="indemnification_title" value="{{ old('indemnification_title', $RS_Meta['indemnification_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="indemnification_description">{{ __('Description') }}</label>
							<textarea name="indemnification_description" id="indemnification_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('indemnification_description', $RS_Meta['indemnification_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Enforcement of Terms and Conditions Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="enforcement_title">{{ __('Title') }}</label>
							<input type="text" name="enforcement_title" id="enforcement_title" value="{{ old('enforcement_title', $RS_Meta['enforcement_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="enforcement_description">{{ __('Description') }}</label>
							<textarea name="enforcement_description" id="enforcement_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('enforcement_description', $RS_Meta['enforcement_description'] ?? '') }}</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Entire Agreement Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="entire_agreement_title">{{ __('Title') }}</label>
							<input type="text" name="entire_agreement_title" id="entire_agreement_title" value="{{ old('entire_agreement_title', $RS_Meta['entire_agreement_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="entire_agreement_description">{{ __('Description') }}</label>
							<textarea name="entire_agreement_description" id="entire_agreement_description" class="form-control terms_conditions_description" placeholder="{{ __('Description') }}">{{ old('entire_agreement_description', $RS_Meta['entire_agreement_description'] ?? '') }}</textarea>
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
    $('.terms_conditions_description').summernote();
});
</script>