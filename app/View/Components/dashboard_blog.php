<?php

namespace App\View\Components;

use Illuminate\View\Component;

class dashboard_blog extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($blogPost, $files)
    {
        $this->blogPost = $blogPost;
        $this->files = $files;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.dashboard_blog');
    }
}
