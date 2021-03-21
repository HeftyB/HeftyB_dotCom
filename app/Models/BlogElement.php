<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogElement extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
        'order',
        'element_id',
        'blog_post_id'
    ];

    public function blogPost()
    {
        return $this->belongsTo(BlogPost::class);
    }

    public function element()
    {
        return $this->hasOne(Element::class);
    }
}
