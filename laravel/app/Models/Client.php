<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'client_name',
        'slug',
        'title',
        'short_description',
        'glance_1_title',
        'glance_1_image',
        'glance_2_title',
        'glance_2_image',
        'glance_3_title',
        'glance_3_image',
        'description',
        'logo',
        'logo_icon',
        'image',
        'video_thumnail',
        'video_url_iframe',
        'quote',
        'business_level_title',
        'business_level_description',
        'status',
        'meta_title',
        'meta_keywords',
        'meta_description',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function getCreatedAt($value) {
        return \Carbon\Carbon::parse($value)->format('Y/m/d h:i A');
    }
}
