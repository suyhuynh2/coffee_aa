<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AuthController extends Controller
{
    // Register API
    public function Register(Request $request) {

        $data =  $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'unique:admin_accounts,email|email',
            'phone' => 'max:11',
            'password' => 'required|min:8',
        ]);

        $data['password'] = bcrypt($data['password']);

        Admin::create($data);

        return response()->json([
            'message' => 'Đăng ký thành công',
        ], 201);
    }
}
