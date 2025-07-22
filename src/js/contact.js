// contact.js
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
});

// Add hover effects to contact cards
document.querySelectorAll('.hover\\:shadow-md').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('transform', 'scale-105', 'transition-transform', 'duration-200');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('scale-105');
    });
});

// Social media button interactions
document.querySelectorAll('.fab').forEach(icon => {
    icon.parentElement.addEventListener('click', function() {
        const iconClass = icon.className;
        let platform = '';
        if (iconClass.includes('facebook')) platform = 'Facebook';
        else if (iconClass.includes('whatsapp')) platform = 'WhatsApp';

        alert(`Redirecting to ${platform}...`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Render dynamic menu items if needed
    if (typeof renderMenuItems === 'function') {
        renderMenuItems();
    }

    // Load navbar
    fetch('../header_footer/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });

    // Load footer
    fetch('../header_footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});