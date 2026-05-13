<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\HttpResponseException;
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
        if ($author->books()->exists()) {
            throw new HttpResponseException(response()->json([
                'message' => 'Deze auteur kan niet worden verwijderd omdat er nog boeken aan gekoppeld zijn.'
            ], 422));
        }

        $author->delete();
    }
}
