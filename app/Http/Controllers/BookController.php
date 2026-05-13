<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Models\Book;
use App\Http\Resources\BookResource;
use Illuminate\Support\Facades\Log;


class BookController extends Controller
{
    public function index()
    {
        return BookResource::collection(Book::all());
    }

    public function store(StoreBookRequest $request)
    {
        $book = Book::create($request->validated());
        info('Hellow world info');
        Log::info('This is an info log');


        $books = Book::all();
        return BookResource::collection($books);
    }

    public function update(StoreBookRequest $request, Book $book)
    {
        $book->update($request->validated());

        $books = Book::all();
        return BookResource::collection($books);
    }

    public function destroy(Book $book)
    {
        if ($book->reviews()->exists()) {
            throw new HttpResponseException(response()->json([
                'message' => 'Dit boek kan niet worden verwijderd omdat er nog reviews aan gekoppeld zijn.'
            ], 422));
        }
        $book->delete();
        return response()->json(['message' => 'Boek succesvol verwijderd']);
    }
}
