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
