<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AuthController extends Controller
{
    // Register API
    public function Register(Request $request) {
        Admin::create($request->all());

        return response()->json([
            'message' => 'Đăng ký thành công',
        ], 201);
    }
}
