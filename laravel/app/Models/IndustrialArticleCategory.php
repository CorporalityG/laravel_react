<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IndustrialArticleCategory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id',
        'category_name',
        'category_slug',
        'description'
    ];

    // One level child
    public function child() {
        return $this->hasMany(self::class, 'parent_id');
    }

    // One level parent
    public function parent() {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function industrialArticles()
    {
        return $this->belongsToMany(IndustrialArticle::class, 'category_industrial_article', 'category_id', 'industrial_article_id');
    }

    public function subcategoriesIndustrialArticles()
    {
        return $this->belongsToMany(IndustrialArticle::class, 'subcategory_industrial_article', 'category_id', 'industrial_article_id');
    }
}
