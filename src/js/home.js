// Popular Items Data
const popularItems = [{
        id: 1,
        name: "Double Cheese Burger",
        description: "Juicy beef patty with double cheese, lettuce, tomato, and special sauce",
        price: 12.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil leaves on thin crust",
        price: 14.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
        badge: "Chef's Choice"
    },
    {
        id: 3,
        name: "Crispy Chicken Wings",
        description: "Crispy wings with your choice of sauce",
        price: 9.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
        badge: "Hot Deal"
    }
];

// Combo Deals Data
const comboDeals = [{
        id: 1,
        name: "Big Meal Deal",
        description: "Double burger + Large fries + Drink",
        originalPrice: 18.99,
        discountPrice: 15.99,
        savings: 3.00,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
        badge: "SAVE $3.00",
        items: ["Double Burger", "Large Fries", "Drink"]
    },
    {
        id: 2,
        name: "Pizza Party",
        description: "Large Pizza + 2 Sides + 2 Drinks",
        originalPrice: 32.99,
        discountPrice: 28.99,
        savings: 4.00,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
        badge: "SAVE $4.00",
        items: ["Large Pizza", "2 Sides", "2 Drinks"]
    }
];

// Customer Reviews Data
const customerReviews = [{
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        review: "Amazing food quality and super fast delivery! The burgers are absolutely delicious.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b6d6b48c?w=50&h=50&fit=crop&crop=face",
        date: "2 days ago"
    },
    {
        id: 2,
        name: "Mike Chen",
        rating: 5,
        review: "Best pizza in town! Fresh ingredients and perfect crust every time.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        date: "1 week ago"
    },
    {
        id: 3,
        name: "Lisa Wang",
        rating: 4,
        review: "Great service and tasty food. The combo deals are really worth it!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        date: "3 days ago"
    }
];

// Function to generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="${i <= rating ? 'text-yellow-400' : 'text-gray-300'}">★</span>`;
    }
    return stars;
}

// Function to render popular items
function renderPopularItems() {
    const container = document.getElementById('popular-items');
    if (!container) return;
    container.innerHTML = popularItems.map(item => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="relative">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                <div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${item.badge}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${item.description}</p>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <div class="mr-2">${generateStars(item.rating)}</div>
                        <span class="text-gray-600 text-sm">${item.rating}</span>
                    </div>
                    <span class="text-2xl font-bold text-orange-500">$${item.price.toFixed(2)}</span>
                </div>
                <button class="w-full gradient-bg text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Function to render combo deals
function renderComboDeals() {
    const container = document.getElementById('combo-deals');
    if (!container) return;
    container.innerHTML = comboDeals.map(combo => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="relative">
                <img src="${combo.image}" alt="${combo.name}" class="w-full h-64 object-cover">
                <div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${combo.badge}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${combo.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${combo.description}</p>
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                    <ul class="text-sm text-gray-600">
                        ${combo.items.map(item => `<li>• ${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <span class="text-2xl font-bold text-orange-500">$${combo.discountPrice.toFixed(2)}</span>
                        <span class="text-gray-500 line-through ml-2">$${combo.originalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button class="w-full gradient-bg text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Order Now
                </button>
            </div>
        </div>
    `).join('');
}

// Function to render customer reviews
function renderCustomerReviews() {
    const container = document.getElementById('customer-reviews');
    if (!container) return;
    container.innerHTML = customerReviews.map(review => `
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center mb-4">
                <img src="${review.avatar}" alt="${review.name}" class="w-12 h-12 rounded-full mr-4">
                <div>
                    <h4 class="font-semibold text-gray-800">${review.name}</h4>
                    <div class="flex items-center">
                        <div class="mr-2">${generateStars(review.rating)}</div>
                        <span class="text-gray-500 text-sm">${review.date}</span>
                    </div>
                </div>
            </div>
            <p class="text-gray-600 leading-relaxed">${review.review}</p>
        </div>
    `).join('');
}

// Add new items/reviews dynamically
function addPopularItem(item) {
    popularItems.push(item);
    renderPopularItems();
}

function addComboDeals(combo) {
    comboDeals.push(combo);
    renderComboDeals();
}

function addCustomerReview(review) {
    customerReviews.push(review);
    renderCustomerReviews();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    renderPopularItems();
    renderComboDeals();
    renderCustomerReviews();

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