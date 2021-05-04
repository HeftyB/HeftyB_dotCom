<?php

namespace App\View\Components;

use Illuminate\View\Component;

class edit_blog extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($blogPost, $data)
    {
        $this->blogPost = $blogPost;
        $this->data = $data;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.edit_blog');
    }
}
