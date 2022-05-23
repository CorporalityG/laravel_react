<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
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


    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

    public function subcategoriesPosts()
    {
        return $this->belongsToMany(Post::class, 'subcategory_post', 'category_id', 'post_id');
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
