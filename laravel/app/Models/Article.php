<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'article_title',
        'article_slug',
        'article_subtitle',
        'article_short_description',
        'article_description',
        'article_image',
        'article_status',
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
        return $this->belongsToMany(ArticleCategory::class, 'category_article', 'article_id', 'category_id');
    }

    public function tags()
    {
        return $this->belongsToMany(ArticleTag::class, 'tag_article', 'article_id', 'tag_id');
    }
}
