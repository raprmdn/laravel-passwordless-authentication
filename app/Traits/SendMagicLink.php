<?php

namespace App\Traits;

trait SendMagicLink
{
    public function requestMagicLink(string $email): void
    {
        $url = \URL::temporarySignedRoute('passwordless.authentication', now()->addMinutes(15), [
            'email' => $email,
        ]);

        \Mail::to($email)->send(new \App\Mail\SignInLink($url));
    }
}
