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
                            'category_name',
                            'category_slug',
                            'description'
                        ];


    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
