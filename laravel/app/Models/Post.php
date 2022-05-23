<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'post_title',
        'post_slug',
        'post_short_description',
        'post_description',
        'post_image',
        'post_status',
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

    /*protected static function boot() {
        parent::boot();

        static::created( function ($post) {
            $post->post_slug = $post->generatePostSlug($post->post_title);
            $post->save();
        });
    }

    private function generatePostSlug($name) {
        if( static::wherePostSlug($post_slug = Str::slug($name))->exists() ) {
            $max = static::wherePostTitle($name)->latest('id')->skip(1)->value('post_slug');

            if( isset($max[-1]) && is_numeric($max[-1]) ) {
                return preg_replace_callback('/(\d+)$/', function($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }
            return "{$post_slug}-2";
        }
        
        return $post_slug;
    }*/

    public function getCreatedAt($value) {
        return \Carbon\Carbon::parse($value)->format('Y/m/d h:i A');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function subcategories()
    {
        return $this->belongsToMany(Category::class, 'subcategory_post', 'post_id', 'category_id');
    }
}
