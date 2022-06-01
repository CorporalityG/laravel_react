<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubcategoryIndustrialArticle extends Model
{
    use HasFactory;

    protected $table = 'subcategory_industrial_article';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'category_id',
        'industrial_article_id',
    ];
}
