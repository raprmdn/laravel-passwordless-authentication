<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;

class AuthenticatedController extends Controller
{
    public function __invoke(Request $request, string $email)
    {
        if (!$request->hasValidSignature()) {
            return redirect()->route('login')->with([
                'type' => 'error',
                'message' => 'The sign in link is invalid or has expired.'
            ]);
        }

        $user = \App\Models\User::where('email', $email)->firstOrFail();

        auth()->login($user);
        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }
}
