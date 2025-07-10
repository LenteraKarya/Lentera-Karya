class ProductGallery {
  constructor() {
    this.products = [];
    this.currentCategory = 'all';
  }

  init(productsData) {
    this.products = productsData;
    this.renderAll();
    this.setupEventListeners();
  }

  renderAll() {
    const filteredProducts = this.currentCategory === 'all' 
      ? this.products 
      : this.products.filter(p => p.category === this.currentCategory);
    
    document.querySelector('.gallery-grid').innerHTML = 
      filteredProducts.map(product => ProductRenderer.render(product)).join('');
  }

  setupEventListeners() {
    // Delegasi event untuk efisiensi
    document.querySelector('.gallery-grid').addEventListener('click', e => {
      if (e.target.closest('.btn-detail')) {
        GalleryEvents.toggleDetails(e.target.closest('.gallery-item'));
      }
      if (e.target.closest('.btn-order')) {
        GalleryEvents.handleOrder(e.target.closest('.gallery-item'));
      }
    });
  }
}

const gallery = new ProductGallery();
