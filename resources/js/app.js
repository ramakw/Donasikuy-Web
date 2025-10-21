import "../css/app.css";
console.log("VITE OK"); // penanda

document.addEventListener("DOMContentLoaded", () => {
    // ambil elemen yang ada
    const bannerImg = document.querySelector(".banner-main");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".btn-prev");
    const nextBtn = document.querySelector(".btn-next");

    // index dummy biar tombol dan dots gak error
    let current = 0;

    function updateBanner(index) {
        current = index;
        // sementara: cuma update dot aktif
        dots.forEach((dot, i) => {
            dot.classList.toggle("bg-emerald-600", i === current);
            dot.classList.toggle("bg-slate-300", i !== current);
        });
    }

    // tombol panah kiri & kanan
    if (prevBtn) prevBtn.addEventListener("click", () => updateBanner(0));
    if (nextBtn) nextBtn.addEventListener("click", () => updateBanner(0));

    // klik dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => updateBanner(i));
    });

    // set default dot aktif
    updateBanner(0);
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("progTrack");
    if (!track) return;

    const cards = Array.from(track.children);
    const dots = Array.from(document.querySelectorAll("#progDots span"));
    const prev = document.getElementById("progPrev");
    const next = document.getElementById("progNext");

    const gap = () =>
        parseFloat(
            getComputedStyle(track).columnGap ||
                getComputedStyle(track).gap ||
                24
        );
    const step = () => (cards[0]?.getBoundingClientRect().width || 320) + gap();

    const updateDots = () => {
        // cari kartu yang paling ke tengah container
        const center = track.scrollLeft + track.clientWidth / 2;
        let idx = 0,
            best = Infinity;
        cards.forEach((el, i) => {
            const mid = el.offsetLeft + el.offsetWidth / 2;
            const d = Math.abs(mid - center);
            if (d < best) {
                best = d;
                idx = i;
            }
        });
        dots.forEach((d, i) => {
            const active = i === idx;
            d.classList.toggle("w-6", active);
            d.classList.toggle("w-2", !active);
            d.classList.toggle("bg-emerald-500", active);
            d.classList.toggle("bg-emerald-200", !active);
        });
    };

    prev?.addEventListener("click", () => {
        track.scrollBy({ left: -step(), behavior: "smooth" });
        setTimeout(updateDots, 350);
    });
    next?.addEventListener("click", () => {
        track.scrollBy({ left: step(), behavior: "smooth" });
        setTimeout(updateDots, 350);
    });

    track.addEventListener("scroll", () => {
        clearTimeout(track._t);
        track._t = setTimeout(updateDots, 120);
    });

    // init
    updateDots();
});

// CARD FILTERASI
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".cat-btn");
    const cards = document.querySelectorAll(".program-card");

    function setActive(cat) {
        // ubah tombol aktif
        buttons.forEach((b) => {
            const active = b.dataset.cat === cat;
            b.dataset.active = active ? "true" : "false";
        });

        // tampilkan / sembunyikan kartu
        cards.forEach((c) => {
            const match = cat === "semua" || c.dataset.cat === cat;
            c.classList.toggle("hidden", !match);
        });
    }

    // default tampilin semua
    setActive("semua");

    // event klik kategori
    buttons.forEach((b) => {
        b.addEventListener("click", () => setActive(b.dataset.cat));
    });
});

// Login Form
document.addEventListener("DOMContentLoaded", () => {
    const els = document.querySelectorAll(".odometer");

    const fmtID = new Intl.NumberFormat("id-ID");

    function animate(el) {
        const target = Number(el.dataset.target || "0");
        const duration = Number(el.dataset.duration || "1200");
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";

        const start = 0;
        const startTime = performance.now();

        function tick(now) {
            const p = Math.min(1, (now - startTime) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            const val = Math.round(start + (target - start) * ease);
            el.textContent = `${prefix}${fmtID.format(val)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    const once = new WeakSet();
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !once.has(entry.target)) {
                    once.add(entry.target);
                    animate(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    els.forEach((el) => io.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openLogin");
    const modal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("closeLogin");

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
            }
        });
    }
});
