<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use phpDocumentor\Reflection\Types\String_;

class ContactMe extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $phone;
    public $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $name, string $email, string $phone, string $mes)
    {
        $this->$name = $name;
        $this->$email = $email;
        $this->$phone = $phone;
        $this->$mes = $mes;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('contact_message')
            ->subject('New Message from HeftyB.com!')
            ->replyTo('noreply@heftyb.com');
    }
}
