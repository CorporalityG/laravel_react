@extends('layouts.app')

@php
    $type = '';
    $typeName = 'Page';
@endphp

@if( Request::get('type')=='section' )
    @php
        $type = '?type=section';
        $typeName = 'Page Section';
    @endphp
@endif

@section('Title', $typeName.' List')

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
                            <a href="{{ route('pages.create').$type }}" class="btn btn-sm btn-info float-right">Add {{ $typeName }}</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <table id="custom-table" class="table table-bordered dataTable yajra-datatable">
                        <thead>
                            <tr>
                                <th width="85%">Title</th>
                                <th width="15%"><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    @include('pages.delete_modal')

<!-- Page specific script -->
<script>
jQuery(function () {
    var table = $('.yajra-datatable').DataTable({
      processing: true,
      serverSide: true,
      ajax: "{{ route('pages.index').$type }}",
      order: [],
      columns: [
        {data: 'title', name: 'title'},
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
