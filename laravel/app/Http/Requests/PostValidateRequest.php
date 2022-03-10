<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PostValidateRequest extends FormRequest
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
            'post_title' => ['required', 'string', Rule::unique('posts')->ignore($this->segment(2), 'id')],
            'post_slug' => ['required', 'string', Rule::unique('posts')->ignore($this->segment(2), 'id')],
            'post_image' => ['nullable', 'sometimes', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:100000'],
        ];
    }
}
