        // Menu items data - easily add more items here
        const menuItems = [{
            id: 1,
            name: "Classic Burger",
            description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
            price: "$12.99",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
            category: "Burgers"
        }, {
            id: 2,
            name: "Chicken Deluxe",
            description: "Grilled chicken breast with avocado, bacon, and ranch dressing",
            price: "$14.99",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop",
            category: "Chicken"
        }, {
            id: 3,
            name: "Margherita Pizza",
            description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
            price: "$16.99",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
            category: "Pizza"
        }, {
            id: 4,
            name: "BBQ Bacon Burger",
            description: "Beef patty with crispy bacon, BBQ sauce, and onion rings",
            price: "$15.99",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
            category: "Burgers"
        }, {
            id: 5,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing",
            price: "$10.99",
            rating: 4.3,
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
            category: "Salads"
        }, {
            id: 6,
            name: "Pepperoni Pizza",
            description: "Classic pepperoni with mozzarella cheese and tomato sauce",
            price: "$18.99",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
            category: "Pizza"
        }];

        // Function to create menu item HTML
        function createMenuItemHTML(item) {
            return `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative h-48">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                        <div class="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-medium">
                            ⭐ ${item.rating}
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">${item.name}</h3>
                        <p class="text-gray-600 text-sm mb-3">${item.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xl font-bold text-red-600">${item.price}</span>
                            <button class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Function to render menu items
        function renderMenuItems() {
            const menuGrid = document.getElementById('menu-grid');
            menuGrid.innerHTML = menuItems.map(item => createMenuItemHTML(item)).join('');
        }

        // Banner rotation functionality
        let currentBannerIndex = 0;
        const banners = document.querySelectorAll('.banner-image');

        function rotateBanner() {
            // Fade out current banner
            banners[currentBannerIndex].classList.add('fade-out');

            setTimeout(() => {
                banners[currentBannerIndex].style.opacity = '0';

                // Move to next banner
                currentBannerIndex = (currentBannerIndex + 1) % banners.length;

                // Fade in next banner
                banners[currentBannerIndex].style.opacity = '1';
                banners[currentBannerIndex].classList.remove('fade-out');
            }, 250);
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderMenuItems();

            // Start banner rotation
            setInterval(rotateBanner, 15000); // Change every 15 seconds

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

        // Add to cart functionality (you can expand this)
        document.addEventListener('click', function(e) {
            if (e.target.textContent === 'Add to Cart') {
                alert('Item added to cart!');
            }
        });