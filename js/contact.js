// contact.js

document.addEventListener('DOMContentLoaded', function() {
    // Render dynamic menu items if needed
    if (typeof renderMenuItems === 'function') {
        renderMenuItems();
    }

    // Start banner rotation if the function exists
    if (typeof rotateBanner === 'function') {
        setInterval(rotateBanner, 15000); // every 15 seconds
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