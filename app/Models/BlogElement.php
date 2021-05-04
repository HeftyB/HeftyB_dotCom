<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogElement extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
        'class',
        'order',
        'img_caption',
        'img_flag',
        'blog_post_id'
    ];

    public function blogPost()
    {
        return $this->belongsTo(BlogPost::class);
    }

}
