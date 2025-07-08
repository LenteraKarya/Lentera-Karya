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

function tryPlayMusic() {
    bgMusic.volume = 0.3;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            isMusicPlaying = true;
        })
        .catch(error => {
            isMusicPlaying = false;
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

// Improved Dropdown menu functionality for mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const dropdown = this.parentElement;
            
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                    const icon = d.querySelector('.dropdown-toggle i');
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
            
            dropdown.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (dropdown.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 992) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                const icon = dropdown.querySelector('.dropdown-toggle i');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            });
        }
    }
});

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
    animateOnScroll();
    lazyLoadImages();
    
    setTimeout(() => {
        document.querySelector('.tagline').style.animation = 'fadeInUp 1s ease-out 0.3s forwards';
        document.querySelector('.header-search').style.animation = 'fadeInUp 1s ease-out 0.5s forwards';
        document.querySelector('.header-buttons').style.animation = 'fadeInUp 1s ease-out 0.6s forwards';
    }, 300);
});

// Jalankan saat scroll
window.addEventListener('scroll', animateOnScroll);

// Toggle description visibility
document.querySelectorAll('.toggle-description').forEach(button => {
    button.addEventListener('click', function() {
        const expandedContent = this.closest('.gallery-details').querySelector('.gallery-detail-expanded');
        expandedContent.classList.toggle('active');
        
        this.textContent = expandedContent.classList.contains('active') ? 'Sembunyikan' : 'Detail';
        
        if (expandedContent.classList.contains('active')) {
            expandedContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        playButtonSound();
    });
});

// Order button functionality
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const itemTitle = this.closest('.gallery-details').querySelector('.gallery-title').textContent;
        const itemCode = this.closest('.gallery-details').querySelector('.gallery-code').textContent;
        const message = `Halo, saya tertarik dengan produk: ${itemTitle} (${itemCode}). Mohon info lebih lanjut.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6287865614222?text=${encodedMessage}`, '_blank');
        playButtonSound();
    });
});

// Quick order modal
const quickOrderBtn = document.getElementById('quick-order');
const orderModal = document.getElementById('orderModal');
const closeModal = document.querySelector('.close-modal');

quickOrderBtn.addEventListener('click', function() {
    orderModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    playButtonSound();
});

closeModal.addEventListener('click', function() {
    orderModal.classList.remove('show');
    document.body.style.overflow = '';
});

window.addEventListener('click', function(e) {
    if (e.target === orderModal) {
        orderModal.classList.remove('show');
        document.body.style.overflow = '';
    }
    if (e.target === document.getElementById('imageModal')) {
        document.getElementById('imageModal').classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Quick order form submission
document.getElementById('quickOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            const name = form.querySelector('#quick-name').value;
            const phone = form.querySelector('#quick-phone').value;
            const product = form.querySelector('#quick-item').value;
            const message = form.querySelector('#quick-message').value || 'Tidak ada pesan tambahan';
            
            const whatsappMessage = `Pesan Cepat dari Website:\n\nNama: ${name}\nTelepon: ${phone}\nProduk: ${product}\nPesan: ${message}`;
            const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
            
            form.reset();
            orderModal.classList.remove('show');
            document.body.style.overflow = '';
            
            const formStatus = document.getElementById('formStatus');
            formStatus.textContent = 'Permintaan Anda telah terkirim. Kami akan segera menghubungi Anda.';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error('Gagal mengirim pesan');
        }
    })
    .catch(error => {
        const name = form.querySelector('#quick-name').value;
        const phone = form.querySelector('#quick-phone').value;
        const product = form.querySelector('#quick-item').value;
        const message = form.querySelector('#quick-message').value || 'Tidak ada pesan tambahan';
        
        const whatsappMessage = `Pesan Cepat dari Website:\n\nNama: ${name}\nTelepon: ${phone}\nProduk: ${product}\nPesan: ${message}`;
        const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
        
        window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
        
        form.reset();
        orderModal.classList.remove('show');
        document.body.style.overflow = '';
        
        const formStatus = document.getElementById('formStatus');
        formStatus.textContent = 'Permintaan Anda telah dikirim melalui WhatsApp. Kami akan segera menghubungi Anda.';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
    
    playButtonSound();
});

// Category filtering
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        const category = this.dataset.category;
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s forwards';
            } else {
                item.style.display = 'none';
            }
        });
        
        playButtonSound();
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const originalBtnText = submitBtn.innerHTML;
    
    formStatus.style.display = 'none';
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !phone || !subject || !message) {
        formStatus.textContent = 'Mohon lengkapi semua field yang wajib diisi';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        return;
    }
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            const whatsappMessage = `*Pesan dari Website Jualan Kita*:\n\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nSubjek: ${document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text}\nPesan: ${message}`;
            const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
            
            formStatus.textContent = 'Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            form.reset();
        } else {
            throw new Error('Gagal mengirim ke email');
        }
    })
    .catch(error => {
        const whatsappMessage = `*Pesan dari Website Jualan Kita*:\n\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nSubjek: ${document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text}\nPesan: ${message}`;
        const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
        
        window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
        
        formStatus.textContent = 'Pesan Anda telah dikirim melalui WhatsApp. Kami akan segera menghubungi Anda.';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        
        form.reset();
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
    
    playButtonSound();
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    fetch('https://formsubmit.co/ajax/lenterakaryasitubondo@gmail.com', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            _subject: 'Berlangganan Newsletter'
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(`Terima kasih telah berlangganan dengan ${email}!`);
        this.reset();
    })
    .catch(error => {
        alert('Terjadi kesalahan. Silakan coba lagi nanti.');
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
    
    playButtonSound();
});

// Search functionality
const searchModal = document.getElementById('searchModal');
const searchModalInput = document.getElementById('searchModalInput');
const searchResults = document.getElementById('searchResults');
const closeSearchModal = document.querySelector('.close-search-modal');

// Open search modal from header search
document.getElementById('headerSearchBtn').addEventListener('click', function() {
    const query = document.getElementById('headerSearchInput').value.trim();
    if (query) {
        searchModalInput.value = query;
        performSearch(query);
    }
    searchModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    playButtonSound();
});

// Open search modal from nav search
document.querySelector('.nav-search button').addEventListener('click', function() {
    const query = document.querySelector('.nav-search input').value.trim();
    if (query) {
        searchModalInput.value = query;
        performSearch(query);
    }
    searchModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    playButtonSound();
});

// Close search modal
closeSearchModal.addEventListener('click', function() {
    searchModal.classList.remove('show');
    document.body.style.overflow = '';
});

// Search when pressing enter in search modal
searchModalInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch(this.value.trim());
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === searchModal) {
        searchModal.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Perform search function
function performSearch(query) {
    if (!query) {
        searchResults.innerHTML = '<div class="no-results">Masukkan kata kunci pencarian</div>';
        return;
    }
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const services = document.querySelectorAll('.service-card');
    let resultsFound = false;
    
    searchResults.innerHTML = '';
    
    galleryItems.forEach(item => {
        const title = item.querySelector('.gallery-title').textContent.toLowerCase();
        const description = item.querySelector('.gallery-description') ? item.querySelector('.gallery-description').textContent.toLowerCase() : '';
        const category = item.dataset.category;
        const code = item.querySelector('.gallery-code').textContent.toLowerCase();
        const seller = item.querySelector('.gallery-seller').textContent.toLowerCase();
        
        if (title.includes(query.toLowerCase()) || 
            description.includes(query.toLowerCase()) || 
            code.includes(query.toLowerCase()) ||
            seller.includes(query.toLowerCase())) {
            resultsFound = true;
            const price = item.querySelector('.gallery-price').textContent;
            
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <h3>${item.querySelector('.gallery-title').textContent}</h3>
                <p>${description.substring(0, 150)}...</p>
                <span class="price">${price}</span>
                <span class="category">${category === 'ojek' ? 'Ojek Online' : 
                                   category === 'rental' ? 'Sewa' : 
                                   category === 'promo' ? 'Promosi' : 
                                   category === 'livestock' ? 'Peternakan' : ''}</span>
            `;
            
            resultItem.addEventListener('click', function() {
                item.scrollIntoView({ behavior: 'smooth' });
                searchModal.classList.remove('show');
                document.body.style.overflow = '';
                const toggleBtn = item.querySelector('.toggle-description');
                if (toggleBtn && toggleBtn.textContent === 'Detail') {
                    toggleBtn.click();
                }
            });
            
            searchResults.appendChild(resultItem);
        }
    });
    
    services.forEach(service => {
        const title = service.querySelector('.service-title').textContent.toLowerCase();
        const description = service.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
            resultsFound = true;
            
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <h3>${service.querySelector('.service-title').textContent}</h3>
                <p>${description.substring(0, 150)}...</p>
                <span class="category">Layanan</span>
            `;
            
            resultItem.addEventListener('click', function() {
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                searchModal.classList.remove('show');
                document.body.style.overflow = '';
            });
            
            searchResults.appendChild(resultItem);
        }
    });
    
    if (!resultsFound) {
        searchResults.innerHTML = '<div class="no-results">Tidak ditemukan hasil untuk "' + query + '"</div>';
    }
}

// Play button sound function
function playButtonSound() {
    const sound = document.getElementById('buttonSound');
    sound.currentTime = 0;
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
