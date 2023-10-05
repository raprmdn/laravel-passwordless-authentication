<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignInRequest;
use App\Models\User;

class SignInController extends Controller
{

    public function index()
    {
        return inertia('SignIn');
    }

    public function store(SignInRequest $request)
    {
        $user = User::where('email', $request->email)->firstOrFail();

        $user->requestMagicLink($user->email);

        return back()->with([
            'type' => 'success',
            'message' => "Check your email. We've sent you a sign in link."
        ]);
    }
}
