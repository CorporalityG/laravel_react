<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'full_name',
        'designation',
        'description',
        'avtar',
        'status',
    ];

    public function getCreatedAt($value) {
        return \Carbon\Carbon::parse($value)->format('Y/m/d h:i A');
    }
}
