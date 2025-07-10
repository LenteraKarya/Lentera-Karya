// Ardiwillis Farm Products
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    
    const ardiwillisProduct = `
    <div class="gallery-item" data-category="livestock">
        <a href="https://lenterakarya.github.io/umkm-online/" target="_blank" class="gallery-badge seller">Gerai: Ardiwillis Farm</a>
        <span class="gallery-badge promo">Peternakan</span>
        <div class="gallery-image-container">
            <img src="https://raw.githubusercontent.com/LenteraKarya/jualan-kita/refs/heads/main/assets/produk/ayam2%20-%20Ardiwilis%20Farm.jpeg" alt="Produk Unggulan Ardiwillis Farm" class="gallery-image lazy" loading="lazy">
        </div>
        <div class="gallery-details">
            <h3 class="gallery-title">Paket Lengkap Ternak Ayam</h3>
            <div class="gallery-meta">
                <span class="gallery-code">Kode: AWF-2025-001</span>
                <span class="gallery-seller"><i class="fas fa-store"></i> Ardiwillis Farm</span>
            </div>
            <p class="gallery-price">
                Rp 8.000
                <span class="original-price">Rp 10.000</span>
                <span class="discount">20%</span>
            </p>
            
            <div class="price-variations">
                <div class="price-variation active" data-price="8000">
                    <span class="price-variation-name">Ecer (per ekor)</span>
                    <span class="price-variation-value">Rp 8.000</span>
                </div>
                <div class="price-variation" data-price="75000">
                    <span class="price-variation-name">1 Dus (10 ekor)</span>
                    <span class="price-variation-value">Rp 75.000</span>
                </div>
                <div class="price-variation" data-price="700000">
                    <span class="price-variation-name">1 Karung (100 ekor)</span>
                    <span class="price-variation-value">Rp 700.000</span>
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
                        <option value="ekor">ekor</option>
                        <option value="dus">dus</option>
                        <option value="karung">karung</option>
                    </select>
                </div>
            </div>
            
            <div class="total-price">
                <span class="total-price-label">Total Harga:</span>
                <span class="total-price-value">Rp 8.000</span>
            </div>
            
            <div class="gallery-actions">
                <button class="btn-detail" data-target="details-AWF-2025-001">
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
            
            <div id="details-AWF-2025-001" class="gallery-detail-expanded">
                <div class="gallery-carousel">
                    <img src="https://raw.githubusercontent.com/LenteraKarya/jualan-kita/refs/heads/main/assets/produk/ayam2%20-%20Ardiwilis%20Farm.jpeg" alt="Produk Unggulan Ardiwillis Farm" class="gallery-main-image lazy" loading="lazy" id="main-image-livestock">
                    <div class="gallery-thumbnails">
                        <img src="https://raw.githubusercontent.com/LenteraKarya/jualan-kita/refs/heads/main/assets/produk/telur2%20-%20Ardiwilis%20Farm.jpeg" class="thumbnail active lazy" loading="lazy" data-main-image="main-image-livestock">
                        <img src="https://raw.githubusercontent.com/LenteraKarya/jualan-kita/refs/heads/main/assets/produk/ayam1%20-%20Ardiwilis%20Farm.jpeg" alt="DOC Ayam" class="thumbnail lazy" loading="lazy" data-main-image="main-image-livestock">
                        <img src="https://raw.githubusercontent.com/LenteraKarya/jualan-kita/refs/heads/main/assets/produk/ayam4%20-%20Ardiwilis%20Farm.jpeg" alt="Ayam Karkas" class="thumbnail lazy" loading="lazy" data-main-image="main-image-livestock">
                        <img src="https://raw.githubusercontent.com/LenteraKarya/jualan-kita/refs/heads/main/assets/produk/ayam3%20-%20Ardiwilis%20Farm.jpeg" alt="Ayam Bakar" class="thumbnail lazy" loading="lazy" data-main-image="main-image-livestock">
                    </div>
                </div>
                
                <div class="gallery-content">
                    <p class="gallery-description">
                        Ardiwillis Farm menyediakan produk unggulan peternakan ayam berkualitas tinggi. 
                        Kami menyediakan telur tetas fertil dengan daya tetas tinggi, DOC (Day Old Chicken) 
                        berbagai strain unggul, ayam karkas segar, dan ayam bakar siap saji dengan bumbu khas. 
                        Semua produk dihasilkan dari peternakan yang dikelola secara profesional dengan standar 
                        kesehatan dan kebersihan tinggi. (Note: Harga tersebut bukan harga tetap, & bisa berubah)
                    </p>
                    
                    <div class="gallery-specs">
                        <div class="spec-item">
                            <span class="spec-label">Kode Produk:</span>
                            <span class="spec-value">AWF-2025-001</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Gerai:</span>
                            <span class="spec-value">Ardiwillis Farm</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Jenis:</span>
                            <span class="spec-value">Ayam Pedaging</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Usia:</span>
                            <span class="spec-value">DOC (1 hari)</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Strain:</span>
                            <span class="spec-value">Cobb 500</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Garansi:</span>
                            <span class="spec-value">Hidup sampai diterima</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Minimal Order:</span>
                            <span class="spec-value">10 ekor</span>
                        </div>
                    </div>
                </div>
                
                <div class="gallery-actions-expanded">
                    <a href="https://wa.me/6285258544543?text=Halo%20Ardiwillis%20Farm,%20saya%20tertarik%20dengan%20Paket%20Lengkap%20Ternak%20Ayam%20(AWF-2025-001)%20dan%20ingin%20bertanya%20lebih%20lanjut." class="btn-whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i> Chat via WhatsApp
                    </a>
                    <a href="tel:+6285258544543" class="btn-call">
                        <i class="fas fa-phone-alt"></i> Telepon Sekarang
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    
    productContainer.insertAdjacentHTML('beforeend', ardiwillisProduct);
});
