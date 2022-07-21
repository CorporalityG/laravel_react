@extends('layouts.app')

@section('Title', 'Single Project Budget Detail')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('layouts.messages')

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <h4 class="card-title">{{ $RS_Row->service_name }}</h4>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="{{ route('project-budget.edit', $RS_Row->id) }}" class="btn btn-sm btn-secondary">Edit Project Budget</a>
                            <a href="{{ route('project-budget.index') }}" class="btn btn-sm btn-default ml-2">Back</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12 mb-2">
                            <b>{{ __('Service') }}:~</b> {{ $RS_Row->service_name }}
                        </div>

                        <div class="col-12 mb-2">
                            <b>{{ __('Duration') }}:~</b> {{ $RS_Row->duration }}
                        </div>
                    </div>
                    <table class="table table-bordered dataTable">
                        <thead>
                            <tr>
                                <th width="50%">AUD</th>
                                <th width="50%">USD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ $RS_Row->price_grade_1["AUD"] }}</td>
                                <td>{{ $RS_Row->price_grade_1["USD"] }}</td>
                            </tr>

                            <tr>
                                <td>{{ $RS_Row->price_grade_2["AUD"] }}</td>
                                <td>{{ $RS_Row->price_grade_2["USD"] }}</td>
                            </tr>

                            <tr>
                                <td>{{ $RS_Row->price_grade_3["AUD"] }}</td>
                                <td>{{ $RS_Row->price_grade_3["USD"] }}</td>
                            </tr>

                            <tr>
                                <td>{{ $RS_Row->price_grade_4["AUD"] }}</td>
                                <td>{{ $RS_Row->price_grade_4["USD"] }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection
