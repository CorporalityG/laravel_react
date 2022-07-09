<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class IndustrialArticleValidateRequest extends FormRequest
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
            'title' => ['required', 'string', Rule::unique('industrial_articles')->ignore($this->segment(2), 'id')],
            'slug' => ['required', 'string', Rule::unique('industrial_articles')->ignore($this->segment(2), 'id')],
            'image' => ['nullable', 'sometimes', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:100000'],
            'short_description' => ['required', 'string'],
        ];
    }
}
