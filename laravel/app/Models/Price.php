<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'company_name',
        'work_email',
        'mobile_number',
        'service_name',
        'project_duration',
        'project_currency',
        'project_price',
        'project_grade_type',
    ];

    public function getCreatedAt($value) {
        return \Carbon\Carbon::parse($value)->format('Y/m/d h:i A');
    }
}
