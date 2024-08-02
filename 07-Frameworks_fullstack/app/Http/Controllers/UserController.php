<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Product;
use App\Models\product_user;

class UserController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return Inertia::render('Profile/MyProfile', [
            'user' => $user
        ]);
    }
}
