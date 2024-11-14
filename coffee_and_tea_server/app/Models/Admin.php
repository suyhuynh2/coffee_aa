<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $table = 'admin_accounts';

    protected $fillable = [
        'name',
        'email',
        'password',
        'birth_date',
        'phone',
        'image'
    ];

    protected $hidden = [
        'password',
    ];

}
