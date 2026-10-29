# Book Collection

A small app to keep track of books, their authors and reviews.

Built to practise a full Laravel API with a Vue and TypeScript frontend, organised per domain (books, authors, reviews).

## Tech stack

PHP 8.4 / Laravel 13, Laravel Sanctum, Vue 3, TypeScript, Vue Router, Tailwind CSS 4, Vite, SQLite

## Getting started

Requires PHP 8.4+ (use the latest 8.4 or 8.5 patch release, which includes security fixes), Composer and Node.js.

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
composer dev
```

The seeder adds sample authors, books and reviews, and a user `test@example.com`.
