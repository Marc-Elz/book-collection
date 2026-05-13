<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\ReviewRecource;
use App\Models\Review;

class ReviewController extends Controller
{
    public function index()
    {
        return ReviewRecource::collection(Review::all());
    }

    public function store(StoreReviewRequest $request)
    {
        $review = Review::create($request->validated());

        $reviews = Review::all();
        return ReviewRecource::collection($reviews);
    }

    public function update(StoreReviewRequest $request, Review $review)
    {
        $review->update($request->validated());

        $reviews = Review::all();
        return ReviewRecource::collection($reviews);
    }

    public function destroy(Review $review)
    {
        $review->delete();
        return response()->json(['message' => 'Review succesvol verwijderd']);
    }
}
