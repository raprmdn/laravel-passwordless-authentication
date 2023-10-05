<x-mail::message>
# Sign In Link

Use the button below to sign in into your account.

<x-mail::button :url="$url">
Sign In
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}

<br>

<small>
If you’re having trouble clicking the "Sign In" button, copy and paste the URL below into your web browser: <br />
<a href="{{ $url }}">{{ $url }}</a>
</small>

</x-mail::message>
