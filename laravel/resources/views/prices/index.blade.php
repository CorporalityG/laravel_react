@extends('layouts.app')

@section('Title', 'Price List')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">@yield('Title')</h4>
                        </div>
                        <div class="col-md-6">
                            
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <table id="custom-table" class="table table-bordered dataTable yajra-datatable">
                        <thead>
                            <tr>
                                <th width="25%">Name</th>
                                <th width="25%">Email</th>
                                <th width="20%">Mobile Number</th>
                                <th width="20%">Company Name</th>
                                <th width="10%"><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    @include('prices.delete_modal')

<!-- Page specific script -->
<script>
jQuery(function () {
    var table = $('.yajra-datatable').DataTable({
      processing: true,
      serverSide: true,
      ajax: "{{ route('prices.index') }}",
      order: [],
      columns: [
        {data: 'full_name', name: 'full_name'},
        {data: 'work_email', name: 'work_email'},
        {data: 'mobile_number', name: 'mobile_number'},
        {data: 'company_name', name: 'company_name'},
        {
          data: 'action', 
          name: 'action', 
          orderable: false, 
          searchable: false
        },
      ]
    });

    // delete start
    jQuery(document).on('click', '.delete', function(e) {
        e.preventDefault();
        var id = jQuery(this).data('id');
        var url = jQuery(this).data('url');
        
        jQuery('.frmAjaxDelete').attr('action', url);
        jQuery('#ajaxModelDelete').modal('show');
    });
    // delete end
});
</script>
@endsection
