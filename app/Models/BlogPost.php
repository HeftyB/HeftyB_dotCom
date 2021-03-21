<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'user_id',
        'img',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function blogElements()
    {
        return $this->hasMany(BlogElement::class);
    }
}
