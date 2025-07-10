const livestockProducts = {
  category: 'livestock',
  seller: {
    name: 'Ardiwillis Farm',
    wa: '6285258544543',
    link: 'https://lenterakarya.github.io/umkm-online/'
  },
  products: [
    {
      id: 'awf-001',
      code: 'AWF-2025-001',
      name: 'Paket Lengkap Ternak Ayam',
      price: 8000,
      originalPrice: 10000,
      images: [
        'https://raw.githubusercontent.com/LenteraKarya/jualan-kita/main/assets/produk/ayam2-Ardiwilis-Farm.jpeg',
        'https://raw.githubusercontent.com/LenteraKarya/jualan-kita/main/assets/produk/telur2-Ardiwilis-Farm.jpeg'
      ],
      variants: [
        { name: 'Ecer (per ekor)', price: 8000 },
        { name: '1 Dus (10 ekor)', price: 75000 }
      ]
    }
  ]
};

// Register ke galeri utama
document.addEventListener('DOMContentLoaded', () => {
  gallery.init([...livestockProducts.products]);
});
