<div class="row">
	<div class="col-12">
		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Event Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="event_title">{{ __('Title') }}</label>
							<input type="text" name="event_title" id="event_title" value="{{ old('event_title', $RS_Meta['event_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}" autofocus>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="event_organised_by">{{ __('Organised by') }}</label>
							<input type="text" name="event_organised_by" id="event_organised_by" value="{{ old('event_organised_by', $RS_Meta['event_organised_by'] ?? '') }}" class="form-control" placeholder="{{ __('Organised by') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="event_date_location">{{ __('Date & Location') }}</label>
							<input type="text" name="event_date_location" id="event_date_location" value="{{ old('event_date_location', $RS_Meta['event_date_location'] ?? '') }}" class="form-control" placeholder="{{ __('Date & Location') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="event_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="event_btn_text" id="event_btn_text" value="{{ old('event_btn_text', $RS_Meta['event_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

                    <div class="col-md-12">
						<div class="form-group">
							<label for="event_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="event_btn_link" id="event_btn_link" value="{{ old('event_btn_link', $RS_Meta['event_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="event_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('event_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="event_image" id="event_image" value="{{ old('event_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="event_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['event_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['event_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Marketing Strategy Guide Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_guide_title">{{ __('Title') }}</label>
							<input type="text" name="strategy_guide_title" id="strategy_guide_title" value="{{ old('strategy_guide_title', $RS_Meta['strategy_guide_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_guide_description">{{ __('Description') }}</label>
							<textarea name="strategy_guide_description" id="strategy_guide_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('strategy_guide_description', $RS_Meta['strategy_guide_description'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_guide_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="strategy_guide_btn_text" id="strategy_guide_btn_text" value="{{ old('strategy_guide_btn_text', $RS_Meta['strategy_guide_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_guide_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="strategy_guide_btn_link" id="strategy_guide_btn_link" value="{{ old('strategy_guide_btn_link', $RS_Meta['strategy_guide_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_guide_video_iframe">{{ __('Video IFrame') }}</label>
							<textarea name="strategy_guide_video_iframe" id="strategy_guide_video_iframe" class="form-control" placeholder="{{ __('Video IFrame') }}">{{ old('strategy_guide_video_iframe', $RS_Meta['strategy_guide_video_iframe'] ?? '') }}</textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="strategy_guide_video_caption">{{ __('Video Caption') }}</label>
							<input type="text" name="strategy_guide_video_caption" id="strategy_guide_video_caption" value="{{ old('strategy_guide_video_caption', $RS_Meta['strategy_guide_video_caption'] ?? '') }}" class="form-control" placeholder="{{ __('Video Caption') }}">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">Reach out to us Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="reach_out_title">{{ __('Title') }}</label>
							<input type="text" name="reach_out_title" id="reach_out_title" value="{{ old('reach_out_title', $RS_Meta['reach_out_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="reach_out_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="reach_out_btn_text" id="reach_out_btn_text" value="{{ old('reach_out_btn_text', $RS_Meta['reach_out_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="reach_out_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="reach_out_btn_link" id="reach_out_btn_link" value="{{ old('reach_out_btn_link', $RS_Meta['reach_out_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="reach_out_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('reach_out_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="reach_out_image" id="reach_out_image" value="{{ old('reach_out_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="reach_out_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['reach_out_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['reach_out_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-secondary card-outline">
			<div class="card-header d-flex">
				<h4 class="card-title text-dark w-100">How Can We Organize Section</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="we_organize_title">{{ __('Title') }}</label>
							<input type="text" name="we_organize_title" id="we_organize_title" value="{{ old('we_organize_title', $RS_Meta['we_organize_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label for="we_organize_description">{{ __('Description') }}</label>
							<textarea name="we_organize_description" id="we_organize_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('we_organize_description', $RS_Meta['we_organize_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="we_organize_btn_text">{{ __('Button Text') }}</label>
							<input type="text" name="we_organize_btn_text" id="we_organize_btn_text" value="{{ old('we_organize_btn_text', $RS_Meta['we_organize_btn_text'] ?? '') }}" class="form-control" placeholder="{{ __('Button Text') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="we_organize_btn_link">{{ __('Button Link') }}</label>
							<input type="text" name="we_organize_btn_link" id="we_organize_btn_link" value="{{ old('we_organize_btn_link', $RS_Meta['we_organize_btn_link'] ?? '') }}" class="form-control" placeholder="{{ __('Button Link') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="we_organize_image">{{ __('Image') }}</label>
							<div class="input-group{{ $errors->has('we_organize_image') ? ' is-invalid' : '' }}">
								<div class="custom-file">
									<input type="file" name="we_organize_image" id="we_organize_image" value="{{ old('we_organize_image') }}" class="custom-file-input" placeholder="Choose image" accept="image/*">
									<label class="custom-file-label" for="we_organize_image">Choose image</label>
								</div>
							</div>

							@if( !empty($RS_Meta['we_organize_image']) )
								<img src="{{ url('uploads/pages/'.$RS_Meta['we_organize_image']) }}" alt="{{ 'Image' }}" class="max-height-150 mt-3">
							@endif
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Item 1 Detail</h5>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="item_1_title">{{ __('Title') }}</label>
							<input type="text" name="item_1_title" id="item_1_title" value="{{ old('item_1_title', $RS_Meta['item_1_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="item_1_description">{{ __('Description') }}</label>
							<textarea name="item_1_description" id="item_1_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('item_1_description', $RS_Meta['item_1_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="item_1_link">{{ __('Link') }}</label>
							<input type="text" name="item_1_link" id="item_1_link" value="{{ old('item_1_link', $RS_Meta['item_1_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
						</div>
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-md-12">
						<h5>Item 2 Detail</h5>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="item_2_title">{{ __('Title') }}</label>
							<input type="text" name="item_2_title" id="item_2_title" value="{{ old('item_2_title', $RS_Meta['item_2_title'] ?? '') }}" class="form-control" placeholder="{{ __('Title') }}">
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="item_2_description">{{ __('Description') }}</label>
							<textarea name="item_2_description" id="item_2_description" class="form-control" placeholder="{{ __('Description') }}">{{ old('item_2_description', $RS_Meta['item_2_description'] ?? '') }}</textarea>
						</div>
					</div>

					<div class="col-md-12">
						<div class="form-group">
							<label for="item_2_link">{{ __('Link') }}</label>
							<input type="text" name="item_2_link" id="item_2_link" value="{{ old('item_2_link', $RS_Meta['item_2_link'] ?? '') }}" class="form-control" placeholder="{{ __('Link') }}">
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
    $('#strategy_guide_description').summernote();
});
</script>