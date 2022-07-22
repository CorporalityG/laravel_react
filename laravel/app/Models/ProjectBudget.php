<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectBudget extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'service_name',
        'duration',
        'currency',
        'grade_type_1',
        'grade_type_2',
        'grade_type_3',
        'grade_type_4',
        'price_grade_1',
        'price_grade_2',
        'price_grade_3',
        'price_grade_4',
        'total_price_grade_1',
        'total_price_grade_2',
        'total_price_grade_3',
        'total_price_grade_4',
    ];

    // ...
    protected $casts = [
        'price_grade_1' => 'array',
        'price_grade_2' => 'array',
        'price_grade_3' => 'array',
        'price_grade_4' => 'array',
        'total_price_grade_1' => 'array',
        'total_price_grade_2' => 'array',
        'total_price_grade_3' => 'array',
        'total_price_grade_4' => 'array',
    ];

    public function getCreatedAt($value) {
        return \Carbon\Carbon::parse($value)->format('Y/m/d h:i A');
    }
}
