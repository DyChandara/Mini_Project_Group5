// Menu Items Data
const menuItems = [{
        id: 1,
        name: "Double Cheese Burger",
        description: "Juicy beef patty with double cheese, lettuce, tomato, and special sauce",
        price: 12.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        badge: "Best Seller",
        category: "burgers"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil leaves on thin crust",
        price: 14.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
        badge: "Chef's Choice",
        category: "pizza"
    },
    {
        id: 3,
        name: "Crispy Chicken Wings",
        description: "Crispy wings with your choice of sauce",
        price: 9.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
        badge: "Hot Deal",
        category: "chicken"
    },
    {
        id: 4,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce, parmesan cheese, croutons, caesar dressing",
        price: 8.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop",
        badge: "Healthy",
        category: "salads"
    },
    {
        id: 5,
        name: "BBQ Bacon Burger",
        description: "Grilled beef patty with BBQ sauce, crispy bacon, onions, and cheddar",
        price: 13.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
        badge: "New",
        category: "burgers"
    },
    {
        id: 6,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni pizza with mozzarella cheese and tomato sauce",
        price: 16.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        badge: "Popular",
        category: "pizza"
    },
    {
        id: 7,
        name: "Grilled Chicken Breast",
        description: "Seasoned grilled chicken breast with herbs and spices",
        price: 11.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop",
        badge: "Protein",
        category: "chicken"
    },
    {
        id: 8,
        name: "Greek Salad",
        description: "Mixed greens, feta cheese, olives, tomatoes, cucumber, red onions",
        price: 10.99,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        badge: "Fresh",
        category: "salads"
    },
    {
        id: 9,
        name: "Mushroom Swiss Burger",
        description: "Beef patty with sautéed mushrooms and swiss cheese",
        price: 12.49,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
        badge: "Gourmet",
        category: "burgers"
    }
];

// Cart functionality
let cart = [];
let currentFilter = 'all';

// Banner configuration
const bannerSlides = [{
        title: "Our Menu",
        subtitle: "Delicious food options with fresh local ingredients",
        backgroundImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop"
    },
    {
        title: "Fresh & Fast",
        subtitle: "Quality ingredients, lightning-fast service",
        backgroundImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=600&fit=crop"
    },
    {
        title: "Tasty Burgers",
        subtitle: "Handcrafted burgers made with love",
        backgroundImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=600&fit=crop"
    },
    {
        title: "Fresh Salads",
        subtitle: "Healthy choices for a better you",
        backgroundImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=600&fit=crop"
    },
    {
        title: "Pizza Perfect",
        subtitle: "Authentic Italian flavors delivered hot",
        backgroundImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=600&fit=crop"
    }
];

// Banner functionality
let currentBannerIndex = 0;
let bannerInterval;

// Function to create banner slides
function createBannerSlides() {
    const bannerContainer = document.getElementById('banner-container');
    const dotsContainer = document.getElementById('banner-dots');

    if (!bannerContainer || !dotsContainer) return;

    // Create slides
    bannerContainer.innerHTML = bannerSlides.map((slide, index) => `
        <div class="banner-slide absolute inset-0 ${index === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out"
             style="background-image: url('${slide.backgroundImage}'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <div class="relative z-10 flex items-center justify-center h-full">
                <div class="text-center text-white">
                    <h1 class="text-5xl font-bold mb-4">${slide.title}</h1>
                    <p class="text-xl">${slide.subtitle}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Create dots
    dotsContainer.innerHTML = bannerSlides.map((_, index) => `
        <button class="banner-dot w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-white bg-opacity-50'} transition-all duration-300 hover:bg-opacity-75"
                data-slide="${index}"></button>
    `).join('');

    // Add dot click events
    document.querySelectorAll('.banner-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideIndex = parseInt(e.target.dataset.slide);
            goToSlide(slideIndex);
        });
    });
}

// Function to go to specific slide
function goToSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');

    // Hide current slide
    slides[currentBannerIndex].classList.add('opacity-0');
    slides[currentBannerIndex].classList.remove('opacity-100');
    dots[currentBannerIndex].classList.add('bg-opacity-50');
    dots[currentBannerIndex].classList.remove('bg-white');

    // Show new slide
    currentBannerIndex = index;
    slides[currentBannerIndex].classList.remove('opacity-0');
    slides[currentBannerIndex].classList.add('opacity-100');
    dots[currentBannerIndex].classList.remove('bg-opacity-50');
    dots[currentBannerIndex].classList.add('bg-white');

    // Reset interval
    clearInterval(bannerInterval);
    startBannerRotation();
}

// Function to go to next slide
function nextSlide() {
    const nextIndex = (currentBannerIndex + 1) % bannerSlides.length;
    goToSlide(nextIndex);
}

// Function to go to previous slide
function prevSlide() {
    const prevIndex = currentBannerIndex === 0 ? bannerSlides.length - 1 : currentBannerIndex - 1;
    goToSlide(prevIndex);
}

// Function to start banner rotation
function startBannerRotation() {
    bannerInterval = setInterval(nextSlide, 10000); // 10 seconds
}

// Function to generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-yellow-400' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

// Function to add item to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...item, quantity: 1 });
        }
        updateCartDisplay();
        updateCartOverlay();

        // Show a brief animation on the cart icon
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            cartIcon.classList.add('animate-pulse');
            setTimeout(() => cartIcon.classList.remove('animate-pulse'), 500);
        }
    }
}

// Function to remove item from cart
function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCartDisplay();
        updateCartOverlay();
    }
}

// Function to update cart display in navbar
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Hide the count badge if cart is empty
        if (totalItems === 0) {
            cartCount.style.display = 'none';
        } else {
            cartCount.style.display = 'flex';
        }
    }
}

// Function to update cart overlay content
function updateCartOverlay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    const cartFooter = document.getElementById('cart-footer');

    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="text-center text-gray-500 py-8">
                <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
        if (cartFooter) cartFooter.classList.add('hidden');
        return;
    }

    cartItemsList.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
            <div class="flex items-center">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded-lg mr-3">
                <div>
                    <h4 class="font-semibold text-sm text-gray-800">${item.name}</h4>
                    <p class="text-orange-500 font-bold">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="removeFromCart(${item.id})" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <span class="text-sm">-</span>
                </button>
                <span class="w-8 text-center font-semibold">${item.quantity}</span>
                <button onclick="addToCart(${item.id})" class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600">
                    <span class="text-sm">+</span>
                </button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = total.toFixed(2);
    if (cartFooter) cartFooter.classList.remove('hidden');
}

// Function to open cart overlay
function openCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartBackdrop = document.getElementById('cart-backdrop');

    if (cartOverlay && cartBackdrop) {
        cartOverlay.classList.add('open');
        cartBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when cart is open
    }
}

// Function to close cart overlay
function closeCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    const cartBackdrop = document.getElementById('cart-backdrop');

    if (cartOverlay && cartBackdrop) {
        cartOverlay.classList.remove('open');
        cartBackdrop.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Function to show success modal
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Function to hide success modal
function hideSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Clear the cart
    cart = [];
    updateCartDisplay();
    updateCartOverlay();
    closeCart();
    showSuccessModal();
}

// Function to render menu items
function renderMenuItems(items) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    menuGrid.innerHTML = items.map(item => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="relative">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                ${item.badge ? `<span class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">${item.badge}</span>` : ''}
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                    <span class="text-xl font-bold text-orange-500">$${item.price.toFixed(2)}</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">${item.description}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex text-sm mr-2">
                            ${generateStars(item.rating)}
                        </div>
                        <span class="text-gray-500 text-sm">(${item.rating})</span>
                    </div>
                    <button onclick="addToCart(${item.id})" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to filter menu items
function filterMenuItems(category) {
    currentFilter = category;
    
    // Update filter button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.className = 'filter-btn px-4 py-2 bg-red-600 text-white rounded-lg text-sm';
        } else {
            btn.className = 'filter-btn px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300';
        }
    });

    // Filter and render items
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    renderMenuItems(filteredItems);
}

// Function to search menu items
function searchMenuItems(searchTerm) {
    const filteredByCategory = currentFilter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentFilter);
    
    const searchResults = filteredByCategory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    renderMenuItems(searchResults);
}


// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  
    // Initialize banner
    createBannerSlides();
    startBannerRotation();

    // Initialize menu display
    renderMenuItems(menuItems);

    // Set up event listeners
    setupEventListeners();

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

// Function to setup all event listeners
function setupEventListeners() {
    // Banner navigation
    const prevButton = document.getElementById('banner-prev');
    const nextButton = document.getElementById('banner-next');
    
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);

    // Cart functionality
    const closeCartButton = document.getElementById('close-cart');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const checkoutButton = document.getElementById('checkout-btn');
    
    if (closeCartButton) closeCartButton.addEventListener('click', closeCart);
    if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
    if (checkoutButton) checkoutButton.addEventListener('click', checkout);

    // Success modal
    const closeSuccessModal = document.getElementById('close-success-modal');
    if (closeSuccessModal) closeSuccessModal.addEventListener('click', hideSuccessModal);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchMenuItems(e.target.value);
        });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterMenuItems(e.target.dataset.category);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (mobileMenu && mobileMenuBtn && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Keyboard navigation for banner
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'Escape') {
            const cartOverlay = document.getElementById('cart-overlay');
            const successModal = document.getElementById('success-modal');
            
            if (cartOverlay && cartOverlay.classList.contains('open')) {
                closeCart();
            }
            if (successModal && successModal.classList.contains('show')) {
                hideSuccessModal();
            }
        }
    });

    // Pause banner rotation on hover
    const bannerContainer = document.getElementById('banner-container');
    if (bannerContainer) {
        bannerContainer.addEventListener('mouseenter', () => {
            clearInterval(bannerInterval);
        });
        
        bannerContainer.addEventListener('mouseleave', () => {
            startBannerRotation();
        });
    }
}