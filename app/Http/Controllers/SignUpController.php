<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignUpRequest;
use App\Models\User;

class SignUpController extends Controller
{
    public function __invoke(SignUpRequest $request)
    {
        $attributes = $request->validated();
        $user = User::create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
        ]);

        $user->requestMagicLink($user->email);

        return back()->with([
            'type' => 'success',
            'message' => "Sign up successful! We've sent you a sign in link."
        ]);
    }
}
