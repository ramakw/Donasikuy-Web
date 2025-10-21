<?php

namespace App\Http\Controllers;

class ProgramController extends Controller
{
    public function index()
    {
        // Contoh data (ganti dengan data DB kalau sudah ada)
        $programs = [
            [
                'category'  => 'Sedekah',
                'title'     => 'Sedekah Beras',
                'image'     => asset('images/p1.jpg'),
                'raised'    => 0,
                'target'    => 50000000,
                'days_left' => 64,
            ],
            [
                'category'  => 'Kemanusiaan',
                'title'     => 'Bantu Bencana Gempa dengan Kebutuhan Pokok',
                'image'     => asset('images/p2.jpg'),
                'raised'    => 500000124,
                'target'    => 700000000,
                'days_left' => 2,
            ],
            [
                'category'  => 'Pendidikan',
                'title'     => 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa',
                'image'     => asset('images/p3.jpg'),
                'raised'    => 235366942,
                'target'    => 300000000,
                'days_left' => 25,
            ],
            // … tambah item lain
        ];

        return view('programs.index', compact('programs'));
    }
}
