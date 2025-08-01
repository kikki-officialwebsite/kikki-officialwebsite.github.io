document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの開閉機能
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    const navItems = document.querySelectorAll('.nav-item');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // ナビゲーションメニューのリンクをクリックしたらメニューを閉じる
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });

    // スクロール時のアニメーション
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // アニメーションが完了したら監視を停止
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});