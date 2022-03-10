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
                            'category_name',
                            'category_slug',
                            'description'
                        ];

    
    public function articles()
    {
        return $this->belongsToMany(Article::class, 'category_article', 'category_id', 'article_id');
    }
}
