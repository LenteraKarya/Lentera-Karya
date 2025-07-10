class GalleryEvents {
  static toggleDetails(item) {
    const details = item.querySelector('.gallery-detail-expanded');
    details.classList.toggle('active');
    
    // Animasi smooth scroll
    details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    Utilities.playSound('button');
  }

  static handleOrder(item) {
    const productId = item.dataset.id;
    const product = gallery.products.find(p => p.id === productId);
    
    // Redirect ke WhatsApp dengan template pesan
    const message = `Saya ingin memesan: ${product.name} (${product.code})`;
    window.open(`https://wa.me/${product.seller.wa}?text=${encodeURIComponent(message)}`, '_blank');
  }
}
