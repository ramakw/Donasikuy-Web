<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}

class HomeController extends Controller
{
    public function index()
    {
        // Data dummy (bisa nanti kamu ambil dari database)
        $stats = [
            'donasi_terkumpul' => 11289569,
            'total_donatur' => 45,
            'total_program' => 16,
        ];

        // kirim data ke view home.blade.php
        return view('home', compact('stats'));
    }
}

