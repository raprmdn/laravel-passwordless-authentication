## Laravel Passwordless Authentication

Example of Laravel Passwordless Authentication using Inertia JS and React JS.

Source code : [GitHub](https://github.com/raprmdn/laravel-passwordless-authentication)

## Installation and Usage

Clone the repository

```bash
git clone https://github.com/raprmdn/laravel-passwordless-authentication.git
```

Go to the project directory

```bash
cd laravel-passwordless-authentication
```

Install dependencies

```bash
# composer
composer install

# npm
npm install
```

Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

Generate an application key

```bash
php artisan key:generate
```

Run migration

```bash
php artisan migrate
```

Run the application

```bash
php artisan serve

npm run dev

php artisan queue:work
```
