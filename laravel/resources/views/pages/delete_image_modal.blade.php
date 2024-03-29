<div class="modal fade" id="ajaxModelDeleteImg" aria-hidden="true" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
			<div class="modal-header">
			    <h4 class="modal-title text-danger" id="modelHeading">Delete Image</h4>
			    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			</div>

			<div class="modal-body" >
				<p>Are you sure delete this Image?</p>
				<p id="deleteMsg"></p>
			</div>

			<div class="modal-footer justify-content-between">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<form action="{{ route('pages.delete-meta-img') }}" method="POST" class="frmAjaxDeleteImg">
	                {{ csrf_field() }}
	                {{ method_field('DELETE') }}
					<input type="hidden" name="page_id" class="page_id">
					<input type="hidden" name="delete_meta_key" class="delete_meta_key">
	                <button type="submit" class="btn btn-danger">Delete</button>
	            </form>
			</div>
		</div>
	</div>
</div>