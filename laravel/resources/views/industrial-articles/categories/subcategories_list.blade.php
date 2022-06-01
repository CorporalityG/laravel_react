<div class="form-group">
    <label for="subcategories_id">{{ __('SubCategory') }}</label>
    <div class="select2-purple">
        <select name="subcategories_id[]" id="subcategories_id" multiple="multiple" class="select2 form-control{{ $errors->has('category_id') ? ' is-invalid' : '' }}" data-placeholder="{{ __('-- Select Category --') }}" data-dropdown-css-class="select2-purple">
            @forelse( $subcategories as $subcategory )
                <option value="{{ $subcategory->id }}" @if( !empty($subcategories_id) && in_array($subcategory->id, $subcategories_id) ) selected @endif>{{ $subcategory->category_name }}</option>
            @empty
            @endforelse
        </select>
    </div>

    @if ($errors->has('subcategories_id'))
        <span class="invalid-feedback" role="alert">
            <strong>{{ $errors->first('subcategories_id') }}</strong>
        </span>
    @endif
</div>

<!-- Page specific script -->
<script>
$(function () {
    //Initialize Select2 Elements
    $('.select2').select2();
});
</script>