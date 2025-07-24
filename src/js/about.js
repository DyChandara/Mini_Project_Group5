// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // // Load navbar
    // // fetch('../header_footer/navbar.html')
    // //     .then(response => response.text())
    // //     .then(data => {
    // //         document.getElementById('navbar').innerHTML = data;
    // //     });

    // document.getElementById('navbar').innerHTML = navbarValue;

    // // Load footer
    // // fetch('../header_footer/footer.html')
    // //     .then(response => response.text())
    // //     .then(data => {
    // //         document.getElementById('footer').innerHTML = data;
    // //     });

    // document.getElementById('footer').innerHTML = footerValue;

    // Animate progress bars on scroll
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.style.width = bar.getAttribute('style').split('width: ')[1];
            }
        });
    }

    window.addEventListener('scroll', animateProgressBars);
    window.addEventListener('load', animateProgressBars);
});