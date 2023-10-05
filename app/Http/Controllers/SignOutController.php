<?php

namespace App\Http\Controllers;

class SignOutController extends Controller
{
    public function __invoke()
    {
        auth()->logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();

        return redirect()->route('login')->with([
            'type' => 'success',
            'message' => 'You have been signed out.'
        ]);
    }
}
