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

// Toggle description visibility
document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const expandedContent = document.getElementById(targetId);
        expandedContent.classList.toggle('active');
        
        // Update button text and icon
        if (expandedContent.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-chevron-up"></i> Sembunyikan Detail';
            this.classList.add('active');
        } else {
            this.innerHTML = '<i class="fas fa-chevron-down"></i> Detail Produk';
            this.classList.remove('active');
        }
        
        // Scroll to expanded content if opened
        if (expandedContent.classList.contains('active')) {
            expandedContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        // Play button sound
        playButtonSound();
    });
});

// Change main image in gallery carousel
function changeMainImage(mainImageId, thumbnail) {
    const mainImage = document.getElementById(mainImageId);
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
    // Update active thumbnail
    const thumbnails = thumbnail.parentElement.querySelectorAll('.thumbnail');
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
    
    playButtonSound();
}

// Zoom image functionality for gallery images
document.querySelectorAll('.gallery-main-image, .thumbnail').forEach(img => {
    img.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering parent click events
        
        const zoomedImage = document.getElementById('zoomedImage');
        zoomedImage.src = this.src;
        zoomedImage.alt = this.alt;
        
        const imageModal = document.getElementById('imageModal');
        imageModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        playButtonSound();
    });
});

// Close image modal
document.querySelector('.close-image-modal').addEventListener('click', function() {
    document.getElementById('imageModal').classList.remove('show');
    document.body.style.overflow = '';
});

// Close modal when clicking outside the content
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('imageModal')) {
        document.getElementById('imageModal').classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Price variation selection
document.querySelectorAll('.price-variation').forEach(variation => {
    variation.addEventListener('click', function() {
        // Remove active class from all variations
        const variations = this.parentElement.querySelectorAll('.price-variation');
        variations.forEach(v => v.classList.remove('active'));
        
        // Add active class to clicked variation
        this.classList.add('active');
        
        // Update total price
        updateTotalPrice(this.closest('.gallery-details'));
        
        playButtonSound();
    });
});

// Quantity controls
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value);
        
        if (this.classList.contains('plus')) {
            value++;
        } else if (this.classList.contains('minus') && value > 1) {
            value--;
        }
        
        input.value = value;
        
        // Update total price
        updateTotalPrice(this.closest('.gallery-details'));
        
        playButtonSound();
    });
});

// Quantity input change
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
        
        // Update total price
        updateTotalPrice(this.closest('.gallery-details'));
    });
});

// Unit selector change
document.querySelectorAll('.unit-select').forEach(select => {
    select.addEventListener('change', function() {
        // Update price based on selected unit
        const detailsContainer = this.closest('.gallery-details');
        const variations = detailsContainer.querySelectorAll('.price-variation');
        
        // Find the variation that matches the selected unit
        let selectedVariation = null;
        variations.forEach(variation => {
            const variationName = variation.querySelector('.price-variation-name').textContent.toLowerCase();
            const selectedUnit = this.value.toLowerCase();
            
            if (variationName.includes(selectedUnit)) {
                selectedVariation = variation;
            }
        });
        
        // If matching variation found, select it
        if (selectedVariation) {
            variations.forEach(v => v.classList.remove('active'));
            selectedVariation.classList.add('active');
        }
        
        // Update total price
        updateTotalPrice(detailsContainer);
        
        playButtonSound();
    });
});

// Function to update total price
function updateTotalPrice(detailsContainer) {
    const activeVariation = detailsContainer.querySelector('.price-variation.active');
    const quantityInput = detailsContainer.querySelector('.quantity-input');
    
    if (activeVariation && quantityInput) {
        const price = parseFloat(activeVariation.getAttribute('data-price'));
        const quantity = parseInt(quantityInput.value);
        const totalPrice = price * quantity;
        
        // Format price with thousand separators
        const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(totalPrice).replace('IDR', 'Rp');
        
        // Update total price display
        const totalPriceElement = detailsContainer.querySelector('.total-price-value');
        if (totalPriceElement) {
            totalPriceElement.textContent = formattedPrice;
        }
    }
}

// Toggle pre-order form
document.querySelectorAll('.btn-preorder-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const preorderForm = this.closest('.gallery-details').querySelector('.preorder-form');
        preorderForm.classList.toggle('active');
        
        // Update button text
        if (preorderForm.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i> Batal Pre-Order';
            this.classList.add('active');
        } else {
            this.innerHTML = '<i class="fas fa-calendar-check"></i> Pre-Order';
            this.classList.remove('active');
        }
        
        playButtonSound();
    });
});

// Submit pre-order
document.querySelectorAll('.btn-preorder').forEach(button => {
    button.addEventListener('click', function() {
        const preorderForm = this.closest('.preorder-form');
        const dpInput = preorderForm.querySelector('.preorder-input');
        const dpValue = parseFloat(dpInput.value);
        
        // Validate DP input
        if (isNaN(dpValue) || dpValue <= 0) {
            alert('Mohon masukkan nominal DP yang valid');
            return;
        }
        
        const detailsContainer = preorderForm.closest('.gallery-details');
        const productTitle = detailsContainer.querySelector('.gallery-title').textContent;
        const productCode = detailsContainer.querySelector('.gallery-code').textContent;
        const totalPriceText = detailsContainer.querySelector('.total-price-value').textContent;
        const totalPrice = parseFloat(totalPriceText.replace(/[^\d]/g, ''));
        
        // Calculate DP percentage
        const dpPercentage = Math.round((dpValue / totalPrice) * 100);
        
        // Validate minimum DP (30%)
        if (dpPercentage < 30) {
            alert(`Uang muka minimal 30% dari total harga (Rp ${Math.round(totalPrice * 0.3)})`);
            return;
        }
        
        // Get WhatsApp number from seller link
        let whatsappNumber = '6287865614222'; // Default
        const sellerLink = detailsContainer.closest('.gallery-item').querySelector('.gallery-badge.seller');
        if (sellerLink) {
            const href = sellerLink.getAttribute('href');
            const match = href.match(/wa\.me\/(\d+)/);
            if (match) {
                whatsappNumber = match[1];
            }
        }
        
        // Prepare WhatsApp message
        const message = `Halo, saya ingin melakukan pre-order produk:\n\n*${productTitle}* (${productCode})\n\nTotal Harga: ${totalPriceText}\nUang Muka: Rp ${dpValue.toLocaleString('id-ID')} (${dpPercentage}%)\n\nMohon info lebih lanjut mengenai cara pembayaran dan pengiriman. Terima kasih.`;
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
        // Reset form
        dpInput.value = '';
        preorderForm.classList.remove('active');
        this.closest('.gallery-details').querySelector('.btn-preorder-toggle').innerHTML = '<i class="fas fa-calendar-check"></i> Pre-Order';
        this.closest('.gallery-details').querySelector('.btn-preorder-toggle').classList.remove('active');
        
        playButtonSound();
    });
});

// Order button functionality
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const detailsContainer = this.closest('.gallery-details');
        const productTitle = detailsContainer.querySelector('.gallery-title').textContent;
        const productCode = detailsContainer.querySelector('.gallery-code').textContent;
        const totalPrice = detailsContainer.querySelector('.total-price-value').textContent;
        const quantity = detailsContainer.querySelector('.quantity-input').value;
        const unit = detailsContainer.querySelector('.unit-select').value;
        
        // Get WhatsApp number from seller link
        let whatsappNumber = '6287865614222'; // Default
        const sellerLink = detailsContainer.closest('.gallery-item').querySelector('.gallery-badge.seller');
        if (sellerLink) {
            const href = sellerLink.getAttribute('href');
            const match = href.match(/wa\.me\/(\d+)/);
            if (match) {
                whatsappNumber = match[1];
            }
        }
        
        // Prepare WhatsApp message
        const message = `Halo, saya ingin memesan produk:\n\n*${productTitle}* (${productCode})\n\nJumlah: ${quantity} ${unit}\nTotal Harga: ${totalPrice}\n\nMohon info lebih lanjut mengenai cara pembayaran dan pengiriman. Terima kasih.`;
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
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
});

// Quick order form submission
document.getElementById('quickOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    // Kirim ke FormSubmit.co (email)
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Kirim ke WhatsApp juga
            const name = form.querySelector('#quick-name').value;
            const phone = form.querySelector('#quick-phone').value;
            const product = form.querySelector('#quick-item').value;
            const message = form.querySelector('#quick-message').value || 'Tidak ada pesan tambahan';
            
            const whatsappMessage = `Pesan Cepat dari Website:\n\nNama: ${name}\nTelepon: ${phone}\nProduk: ${product}\nPesan: ${message}`;
            const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
            
            // Reset form
            form.reset();
            orderModal.classList.remove('show');
            document.body.style.overflow = '';
            
            // Tampilkan notifikasi sukses
            const formStatus = document.getElementById('formStatus');
            formStatus.textContent = 'Permintaan Anda telah terkirim. Kami akan segera menghubungi Anda.';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            // Scroll ke form status
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error('Gagal mengirim pesan');
        }
    })
    .catch(error => {
        // Jika gagal ke email, coba hanya ke WhatsApp
        const name = form.querySelector('#quick-name').value;
        const phone = form.querySelector('#quick-phone').value;
        const product = form.querySelector('#quick-item').value;
        const message = form.querySelector('#quick-message').value || 'Tidak ada pesan tambahan';
        
        const whatsappMessage = `Pesan Cepat dari Website:\n\nNama: ${name}\nTelepon: ${phone}\nProduk: ${product}\nPesan: ${message}`;
        const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
        
        window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
        
        // Reset form
        form.reset();
        orderModal.classList.remove('show');
        document.body.style.overflow = '';
        
        // Tampilkan notifikasi sukses
        const formStatus = document.getElementById('formStatus');
        formStatus.textContent = 'Permintaan Anda telah dikirim melalui WhatsApp. Kami akan segera menghubungi Anda.';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        
        // Scroll ke form status
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
    .finally(() => {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
    
    playButtonSound();
});

// Category filtering
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
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
    
    // Reset status
    formStatus.style.display = 'none';
    
    // Validasi form
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
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    // Kirim ke FormSubmit.co (email)
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Kirim ke WhatsApp juga
            const whatsappMessage = `*Pesan dari Website Jualan Kita*:\n\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nSubjek: ${document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text}\nPesan: ${message}`;
            const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
            
            // Tampilkan pesan sukses
            formStatus.textContent = 'Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            // Reset form
            form.reset();
        } else {
            throw new Error('Gagal mengirim ke email');
        }
    })
    .catch(error => {
        // Jika gagal ke email, coba hanya ke WhatsApp
        const whatsappMessage = `*Pesan dari Website Jualan Kita*:\n\nNama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nSubjek: ${document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text}\nPesan: ${message}`;
        const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
        
        window.open(`https://wa.me/6287865614222?text=${encodedWhatsappMessage}`, '_blank');
        
        // Tampilkan pesan sukses
        formStatus.textContent = 'Pesan Anda telah dikirim melalui WhatsApp. Kami akan segera menghubungi Anda.';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        
        // Reset form
        form.reset();
    })
    .finally(() => {
        // Reset button state
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
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    // Kirim ke FormSubmit.co (email)
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

// Perform search function
function performSearch(query) {
    if (!query) {
        searchResults.innerHTML = '<div class="no-results">Masukkan kata kunci pencarian</div>';
        return;
    }
    
    // Simulate search results (in a real app, this would be an API call)
    const galleryItems = document.querySelectorAll('.gallery-item');
    const services = document.querySelectorAll('.service-card');
    let resultsFound = false;
    
    searchResults.innerHTML = '';
    
    // Search in gallery items
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
                                   category === 'promo' ? 'Promosi' : ''}</span>
            `;
            
            resultItem.addEventListener('click', function() {
                // Scroll to the item
                item.scrollIntoView({ behavior: 'smooth' });
                // Close search modal
                searchModal.classList.remove('show');
                document.body.style.overflow = '';
                // Expand the item details if collapsed
                const toggleBtn = item.querySelector('.btn-detail');
                if (toggleBtn && !toggleBtn.classList.contains('active')) {
                    toggleBtn.click();
                }
            });
            
            searchResults.appendChild(resultItem);
        }
    });
    
    // Search in services
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
                // Scroll to services section
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                // Close search modal
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
