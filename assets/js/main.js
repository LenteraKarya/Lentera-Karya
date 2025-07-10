// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 1200);
    
    // Try to play background music automatically
    tryPlayMusic();
});

// Background Music Control
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

// Try to play music (will be muted until user interacts)
function tryPlayMusic() {
    bgMusic.volume = 0.3;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            isMusicPlaying = true;
        })
        .catch(error => {
            isMusicPlaying = false;
            // Music will play after user interaction
            document.addEventListener('click', function() {
                if (!isMusicPlaying) {
                    bgMusic.play().then(_ => {
                        isMusicPlaying = true;
                    });
                }
            }, { once: true });
        });
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    playButtonSound();
});

// Search Toggle for Mobile
const searchToggle = document.getElementById('searchToggle');
const navSearch = document.getElementById('navSearch');

searchToggle.addEventListener('click', function() {
    navSearch.classList.toggle('active');
    playButtonSound();
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Inisialisasi Partikel
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 8px
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 15s and 30s
        const duration = Math.random() * 15 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
}

// Efek Scroll Navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animasi Scroll untuk Gallery Items
function animateOnScroll() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight;
    
    galleryItems.forEach((item, index) => {
        const itemPosition = item.offsetTop;
        
        if (scrollPosition > itemPosition + 100) {
            item.style.animationDelay = `${index * 0.1}s`;
            item.style.animationName = 'fadeInUp';
        }
    });
}

// Lazy Load Images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Jalankan saat halaman dimuat
window.addEventListener('load', function() {
    initParticles();
    animateOnScroll();
    lazyLoadImages();
    
    // Animasi header elements
    setTimeout(() => {
        document.querySelector('.tagline').style.animation = 'fadeInUp 1s ease-out 0.3s forwards';
        document.querySelector('.header-search').style.animation = 'fadeInUp 1s ease-out 0.5s forwards';
        document.querySelector('.header-buttons').style.animation = 'fadeInUp 1s ease-out 0.6s forwards';
    }, 300);
});

// Jalankan saat scroll
window.addEventListener('scroll', animateOnScroll);

// Play button sound function
function playButtonSound() {
    const sound = document.getElementById('buttonSound');
    sound.currentTime = 0; // Putar ulang dari awal
    sound.play().catch(e => console.log("Audio tidak dapat diputar:", e));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});
