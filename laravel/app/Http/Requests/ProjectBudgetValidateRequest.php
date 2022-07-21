<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectBudgetValidateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'service_name' => ['required', 'string'],
            'duration' => ['required', 'string'],
            /* 'price_grade_1[AUD]' => ['required'],
            'price_grade_2[AUD]' => ['required'],
            'price_grade_3[AUD]' => ['required'],
            'price_grade_4[AUD]' => ['required'],
            'price_grade_1[USD]' => ['required'],
            'price_grade_2[USD]' => ['required'],
            'price_grade_3[USD]' => ['required'],
            'price_grade_4[USD]' => ['required'], */
        ];
    }

    /**
     * @return array|string[]
     */
    /* public function messages()
    {
        return [
            'price_grade_1[AUD].required' => 'The grade 1 price field is required.',
            'price_grade_2[AUD].required' => 'The grade 2 price field is required.',
            'price_grade_3[AUD].required' => 'The grade 3 price field is required.',
            'price_grade_4[AUD].required' => 'The grade 4 price field is required.',
            'price_grade_1[USD].required' => 'The grade 1 price field is required.',
            'price_grade_2[USD].required' => 'The grade 2 price field is required.',
            'price_grade_3[USD].required' => 'The grade 3 price field is required.',
            'price_grade_4[USD].required' => 'The grade 4 price field is required.',
        ];
    } */
}
