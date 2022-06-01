<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class IndustrialArticle extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'subtitle',
        'short_description',
        'description',
        'image',
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

    public function categories()
    {
        return $this->belongsToMany(IndustrialArticleCategory::class, 'category_industrial_article', 'industrial_article_id', 'category_id');
    }

    public function subcategories()
    {
        return $this->belongsToMany(IndustrialArticleCategory::class, 'subcategory_industrial_article', 'industrial_article_id', 'category_id');
    }
}
