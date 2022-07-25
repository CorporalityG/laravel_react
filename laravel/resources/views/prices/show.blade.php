@extends('layouts.app')

@section('Title', 'Single Price Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">Detail</h6></h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('prices.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <table class="table table-bordered dataTable">
                        <tbody>
                            <tr>
                                <th width="15%">First Name</th>
                                <td width="75%">{{ $RS_Row->first_name }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Last Name</th>
                                <td width="75%">{{ $RS_Row->last_name }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Company Name</th>
                                <td width="75%">{{ $RS_Row->company_name }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Email</th>
                                <td width="75%">{{ $RS_Row->work_email }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Mobile Number</th>
                                <td width="75%">{{ $RS_Row->mobile_number }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Service</th>
                                <td width="75%">{{ $RS_Row->service_name }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Duration</th>
                                <td width="75%">{{ $RS_Row->project_duration }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Currency</th>
                                <td width="75%">{{ $RS_Row->project_currency }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Price</th>
                                <td width="75%">{{ preg_replace("/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/i", "$1,", str_replace(',', '', $RS_Row->project_price)) }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Total Price</th>
                                <td width="75%">{{ $RS_Row->project_total_price!='' && is_numeric($RS_Row->project_total_price) ? preg_replace("/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/i", "$1,", str_replace(',', '', $RS_Row->project_total_price)) : 0 }}</td>
                            </tr>

                            <tr>
                                <th width="15%">Grade Type</th>
                                <td width="75%">{{ $RS_Row->project_grade_type }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection
