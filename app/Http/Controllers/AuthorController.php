<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;
use App\Models\Book;
use App\Http\Resources\AuthorResource;
use App\Http\Requests\StoreAuthorRequest;
use Exception;

class AuthorController extends Controller
{
    public function index()
    {
        return AuthorResource::collection(Author::all());
    }

    public function store(StoreAuthorRequest $request)
    {
        $author = Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function update(StoreAuthorRequest $request, Author $author)
    {
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function destroy(Author $author)
    {
        // validate author does not have books

        try {
            $author_books = Book::where('author_id', '=', $author->id)->get();
            error_log($author);
            error_log($author_books);
            error_log($author_books->isEmpty());
            if (!$author_books->isEmpty()) {
                error_log('Error: Auteur heeft boeken');
                return response()->json(["message" => 'Error: Auteur heeft boeken']);
            }
            error_log('Auteur succesvol verwijderd');
            $author->delete();
            return response()->json(["message" => 'Auteur succesvol verwijderd']);
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }
}
