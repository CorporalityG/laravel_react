<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleCategory extends Model
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

    
    public function articles()
    {
        return $this->belongsToMany(Article::class, 'category_article', 'category_id', 'article_id');
    }

    public function subcategoriesArticles()
    {
        return $this->belongsToMany(Article::class, 'subcategory_article', 'category_id', 'article_id');
    }

    // One level child
    public function child() {
        return $this->hasMany(self::class, 'parent_id');
    }

    // One level parent
    public function parent() {
        return $this->belongsTo(self::class, 'parent_id');
    }
}
