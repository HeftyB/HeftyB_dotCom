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

    public $fnames;
    public $emadd;
    public $phone;
    public $mes;

    /**
     * Create a new message instance.
     *
     * @param $from
     * @param $emadd
     * @param $phone
     * @param $mes
     */
    public function __construct($fnames, $emadd, $phone, $mes)
    {
        $this->fnames = $fnames;
        $this->emadd = $emadd;
        $this->phone = $phone;
        $this->mes = $mes;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('contact_message')
//            ->with([
//                'from' => $this->from,
//                'emadd' => $this->emadd,
//                'phone' => $this->phone,
//                'mes' => $this->mes
//            ])
            ->subject('New Message from HeftyB.com!')
            ->replyTo('noreply@heftyb.com');
    }
}
