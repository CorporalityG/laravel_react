<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleTag extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                            'tag_name',
                            'tag_slug',
                            'description'
                        ];

    
    public function articles()
    {
        return $this->belongsToMany(Article::class, 'tag_article', 'tag_id', 'article_id');
    }
}
