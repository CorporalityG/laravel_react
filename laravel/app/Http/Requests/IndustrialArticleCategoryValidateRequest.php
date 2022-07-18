<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class IndustrialArticleCategoryValidateRequest extends FormRequest
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
            'category_name' => ['required', 'string', Rule::unique('industrial_article_categories')->ignore($this->segment(2), 'id')],
            'category_slug' => ['required', 'string', Rule::unique('industrial_article_categories')->ignore($this->segment(2), 'id')],
        ];
    }
}
