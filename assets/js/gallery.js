// Change main image in gallery carousel
function changeMainImage(mainImageId, thumbnail) {
    const mainImage = document.getElementById(mainImageId);
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
    const thumbnails = thumbnail.parentElement.querySelectorAll('.thumbnail');
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
    
    playButtonSound();
}

// Zoom image functionality
document.querySelectorAll('.gallery-main-image').forEach(img => {
    img.addEventListener('click', function() {
        const zoomedImage = document.getElementById('zoomedImage');
        zoomedImage.src = this.src;
        zoomedImage.alt = this.alt;
        
        const imageModal = document.getElementById('imageModal');
        imageModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        playButtonSound();
    });
});

// Gallery detail toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi toggle detail produk
    document.querySelectorAll('.btn-detail').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const details = document.getElementById(targetId);
            const icon = this.querySelector('i');
            
            details.classList.toggle('active');
            
            if (details.classList.contains('active')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                this.classList.add('active');
                details.style.maxHeight = details.scrollHeight + 'px';
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                this.classList.remove('active');
                details.style.maxHeight = null;
            }
        });
    });
    
    // Fungsi galeri thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const mainImageId = this.getAttribute('data-main-image');
            const mainImage = document.getElementById(mainImageId);
            const thumbnails = this.parentElement.querySelectorAll('.thumbnail');
            
            mainImage.src = this.src;
            mainImage.alt = this.alt || '';
            
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function playButtonSound() {
    const sound = document.getElementById('buttonSound');
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Audio tidak dapat diputar:", e));
}
