<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use App\Models\product_user;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }

    public function buy(Product $product)
    {

        // Get user id from auth()->user()
        $userId = auth()->user()->id;

        // Get the product id
        $productId = $product->id;

        // Create a new product_user record
        $productUser = new product_user();
        $productUser->user_id = $userId;
        $productUser->product_id = $productId;
        $productUser->save();

        // Send response to the front end status 200
        return response()->json(['message' => 'Product bought'], 200);
    }
}
