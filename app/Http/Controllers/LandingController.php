<?php

namespace App\Http\Controllers;

class LandingController extends Controller
{
    public function index()
    {
        // Stats untuk stat cards
        $stats = [
            'total_donasi'  => 11289569,
            'total_donatur' => 45,
            'total_program' => 6,
        ];

        // List program untuk section "Program Pilihan Kami"
        $programs = [
            ['category' => 'Sedekah',     'title' => 'Sedekah Beras', 'image' => asset('images/bencana.jpg'),  'raised' => 0,         'target' => 50000000,  'days_left' => 64],
            ['category' => 'Kemanusiaan', 'title' => 'Bantu Bencana Gempa dengan Kebutuhan Pokok', 'image' => asset('images/bencana1.jpg'), 'raised' => 500000124, 'target' => 700000000, 'days_left' => 2],
            ['category' => 'Bencana',  'title' => 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa', 'image' => asset('images/bencana.jpg'),  'raised' => 235366942, 'target' => 300000000, 'days_left' => 25],
            ['category' => 'Yatim Piatu',  'title' => 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa', 'image' => asset('images/bencana.jpg'),  'raised' => 235366942, 'target' => 300000000, 'days_left' => 25],
            ['category' => 'Bencana',  'title' => 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa', 'image' => asset('images/bencana1.jpg'), 'raised' => 235366942, 'target' => 300000000, 'days_left' => 25],
            ['category' => 'Pendidikan',  'title' => 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa', 'image' => asset('images/bencana.jpg'),  'raised' => 235366942, 'target' => 300000000, 'days_left' => 25],
        ];

        // Banner/hero slider
        $banners = [
            [
                'image' => asset('images/bencana.jpg'),
                'title' => 'Bantuan Sosial untuk Masyarakat Menengah di masa PPKM',
                'cta'   => route('landing') . '#program',
            ],
        ];

        // Inspirasi (posts) — PASTIKAN didefinisikan SEBELUM return
        $posts = [
            ['title' => 'The More Important the Work, the More Important the Rest', 'image' => asset('images/bencana.jpg'), 'date' => '28 Juli 2021', 'url' => '#'],
            ['title' => 'Maecenas dapibus augue eu magna placerat, eget volutpat urna aliquam.', 'image' => asset('images/bencana1.jpg'), 'date' => '5 Juli 2021', 'url' => '#'],
            ['title' => 'How To Build Your Personal Resilience', 'image' => asset('images/bencana.jpg'), 'date' => '17 Juni 2021', 'url' => '#'],
            ['title' => 'Tips Menggalang Donasi Online dengan Efektif', 'image' => asset('images/bencana1.jpg'), 'date' => '10 Agustus 2021', 'url' => '#'],
            ['title' => 'Kisah Relawan di Tengah Bencana Alam', 'image' => asset('images/bencana1.jpg'), 'date' => '25 September 2021', 'url' => '#'],
            ['title' => 'Kisah Relawan di Tengah Bencana Alam', 'image' => asset('images/bencana.jpg'), 'date' => '25 September 2021', 'url' => '#'],
        ];

        // KIRIM SEMUA ke view
        return view('landing', compact('stats', 'programs', 'banners', 'posts'));
    }
}
