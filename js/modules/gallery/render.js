class ProductRenderer {
  static render(product) {
    return `
      <div class="gallery-item" data-category="${product.category}" data-id="${product.id}">
        <a href="${product.seller.link}" class="gallery-badge seller">${product.seller.name}</a>
        <span class="gallery-badge ${product.category}">${product.categoryLabel}</span>
        
        <div class="gallery-image-container">
          <img src="${product.images[0]}" class="gallery-image lazy">
        </div>
        
        <div class="gallery-details">
          <h3>${product.name}</h3>
          <div class="gallery-meta">
            <span class="gallery-code">${product.code}</span>
            <span class="gallery-seller"><i class="fas fa-store"></i> ${product.seller.name}</span>
          </div>
          ${this.renderPrice(product)}
          ${this.renderActions()}
        </div>
      </div>
    `;
  }

  static renderPrice(product) {
    return `
      <p class="gallery-price">
        Rp ${product.price.toLocaleString('id-ID')}
        ${product.originalPrice ? `
          <span class="original-price">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>
          <span class="discount">${Math.round((1 - product.price/product.originalPrice)*100)}%</span>
        ` : ''}
      </p>
    `;
  }
}
