<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagArticle extends Model
{
    use HasFactory;

    protected $table = 'tag_article';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'tag_id',
        'article_id',
        'description',
    ];

    public function articleTag()
    {
        return $this->belongsTo(ArticleTag::class, 'tag_id', 'id');
    }
}
