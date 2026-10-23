// 1. Logika Sticky Navbar (Memberi efek batas/shadow saat di-scroll)
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Logika Mobile Menu (Membuka dan menutup menu di HP)
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Mengubah ikon dari hamburger (list) menjadi X (close)
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('ph-list');
        menuIcon.classList.add('ph-x');
    } else {
        menuIcon.classList.remove('ph-x');
        menuIcon.classList.add('ph-list');
    }
});

// 3. Menutup menu otomatis saat tautan diklik (Untuk versi HP)
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('ph-x');
        menuIcon.classList.add('ph-list');
    });
});