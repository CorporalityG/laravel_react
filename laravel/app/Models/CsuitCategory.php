<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CsuitCategory extends Model
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

    public function csuits()
    {
        return $this->belongsToMany(Csuit::class, 'category_csuit', 'category_id', 'csuit_id');
    }

    public function subcategoriesCsuits()
    {
        return $this->belongsToMany(Csuit::class, 'subcategory_csuit', 'category_id', 'csuit_id');
    }
}
