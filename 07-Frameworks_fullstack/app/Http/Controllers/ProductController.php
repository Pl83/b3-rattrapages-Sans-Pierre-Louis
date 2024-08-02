<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

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
        $user = auth()->user();
        $product->users()->attach($user->id);

        return redirect()->route('products.index');
    }
}
