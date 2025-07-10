// PromoKita Products
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    
    const promokitaProduct = `
    <div class="gallery-item" data-category="promo">
        <a href="https://lenterakarya.github.io/umkm-online/" target="_blank" class="gallery-badge seller">Gerai: PromoKita</a>
        <span class="gallery-badge promo">Promo</span>
        <div class="gallery-image-container">
            <img src="https://i.imgur.com/ACIsEuy.jpg" alt="Banner Stand" class="gallery-image lazy" loading="lazy">
        </div>
        <div class="gallery-details">
            <h3 class="gallery-title">Paket Banner Stand</h3>
            <div class="gallery-meta">
                <span class="gallery-code">Kode: BNR-2025-006</span>
                <span class="gallery-seller"><i class="fas fa-store"></i> PromoKita</span>
            </div>
            <p class="gallery-price">
                Rp 350.000
                <span class="original-price">Rp 450.000</span>
                <span class="discount">22%</span>
            </p>
            
            <div class="price-variations">
                <div class="price-variation active" data-price="350000">
                    <span class="price-variation-name">Standar (80x200cm)</span>
                    <span class="price-variation-value">Rp 350.000</span>
                </div>
                <div class="price-variation" data-price="500000">
                    <span class="price-variation-name">Besar (100x200cm)</span>
                    <span class="price-variation-value">Rp 500.000</span>
                </div>
                <div class="price-variation" data-price="750000">
                    <span class="price-variation-name">Premium (120x200cm)</span>
                    <span class="price-variation-value">Rp 750.000</span>
                </div>
            </div>
            
            <div class="quantity-selector">
                <span class="quantity-label">Jumlah:</span>
                <div class="quantity-controls">
                    <button class="quantity-btn minus">-</button>
                    <input type="number" class="quantity-input" value="1" min="1">
                    <button class="quantity-btn plus">+</button>
                </div>
                <div class="unit-selector">
                    <select class="unit-select">
                        <option value="buah">buah</option>
                        <option value="set">set</option>
                        <option value="pack">pack</option>
                    </select>
                </div>
            </div>
            
            <div class="total-price">
                <span class="total-price-label">Total Harga:</span>
                <span class="total-price-value">Rp 350.000</span>
            </div>
            
            <div class="gallery-actions">
                <button class="btn-detail" data-target="details-BNR-2025-006">
                    <i class="fas fa-chevron-down"></i> Detail Produk
                </button>
                <button class="btn-order">
                    <i class="fas fa-shopping-cart"></i> Pesan Sekarang
                </button>
                <button class="btn-preorder-toggle">
                    <i class="fas fa-calendar-check"></i> Pre-Order
                </button>
            </div>
            
            <div class="preorder-form">
                <div class="preorder-title">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Form Uang Muka (DP)</span>
                </div>
                <input type="number" class="preorder-input" placeholder="Masukkan nominal DP (minimal 40%)">
                <p class="preorder-note">
                    * Untuk pre-order, harap masukkan nominal uang muka minimal 40% dari total harga. 
                    Kami akan menghubungi Anda untuk konfirmasi lebih lanjut.
                </p>
                <button class="btn-preorder">
                    <i class="fas fa-paper-plane"></i> Kirim Pre-Order
                </button>
            </div>
            
            <div id="details-BNR-2025-006" class="gallery-detail-expanded">
                <div class="gallery-carousel">
                    <img src="https://i.imgur.com/ACIsEuy.jpg" alt="Banner Stand - Tampilan Utama" class="gallery-main-image lazy" loading="lazy" id="main-image-6">
                    <div class="gallery-thumbnails">
                        <img src="https://i.imgur.com/ACIsEuy.jpg" alt="Banner Stand - Tampilan Utama" class="thumbnail active lazy" loading="lazy" onclick="changeMainImage('main-image-6', this)">
                        <img src="https://i.imgur.com/ACIsEuy.jpg" alt="Banner Stand - Detail Cetakan" class="thumbnail lazy" loading="lazy" onclick="changeMainImage('main-image-6', this)">
                        <img src="https://i.imgur.com/ACIsEuy.jpg" alt="Banner Stand - Sistem Lipat" class="thumbnail lazy" loading="lazy" onclick="changeMainImage('main-image-6', this)">
                    </div>
                </div>
                
                <p class="gallery-description">
                    Paket lengkap banner stand termasuk desain, cetak, dan stand. 
                    Ukuran: 80cm x 200cm. Cetakan vinyl berkualitas tinggi. Sempurna untuk pameran, 
                    acara, atau promosi di toko. Panduan pemasangan termasuk.
                </p>
                
                <div class="gallery-specs">
                    <div class="spec-item">
                        <span class="spec-label">Kode Produk:</span>
                        <span class="spec-value">BNR-2025-006</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Gerai:</span>
                        <span class="spec-value">PromoKita</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Ukuran:</span>
                        <span class="spec-value">80cm x 200cm</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Material:</span>
                        <span class="spec-value">Vinyl Premium</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Waktu Produksi:</span>
                        <span class="spec-value">3-5 hari kerja</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Garansi:</span>
                        <span class="spec-value">1 tahun</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Termasuk:</span>
                        <span class="spec-value">Stand portable, tas pembawa</span>
                    </div>
                </div>
                
                <div class="gallery-actions-expanded">
                    <a href="https://wa.me/6287865614222?text=Halo%20PromoKita,%20saya%20tertarik%20dengan%20Paket%20Banner%20Stand%20(BNR-2025-006)%20dan%20ingin%20bertanya%20lebih%20lanjut." class="btn-whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i> Chat via WhatsApp
                    </a>
                    <a href="tel:+6287865614222" class="btn-call">
                        <i class="fas fa-phone-alt"></i> Telepon Sekarang
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    
    productContainer.insertAdjacentHTML('beforeend', promokitaProduct);
});
