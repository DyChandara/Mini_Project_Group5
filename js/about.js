// Team members data
const teamMembers = [{
        name: "Chef Marco Rodriguez",
        role: "Head Chef",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Lisa Chen",
        role: "Kitchen Manager",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba3a65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "David Thompson",
        role: "Operations Manager",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Sarah Johnson",
        role: "Customer Service Lead",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

// Function to render team members
function renderTeam() {
    const container = document.getElementById('team-container');
    if (!container) {
        console.warn("No element with ID 'team-container' found.");
        return;
    }

    container.innerHTML = teamMembers.map(member => `
        <div class="text-center">
            <div class="mb-4 overflow-hidden rounded-lg">
                <img src="${member.image}" 
                     alt="${member.name}" 
                     class="w-full h-64 object-cover hover-zoom">
            </div>
            <h3 class="text-xl font-semibold text-gray-900">${member.name}</h3>
            <p class="text-gray-600">${member.role}</p>
        </div>
    `).join('');
}

// Add new team member dynamically
function addTeamMember(name, role, image) {
    teamMembers.push({ name, role, image });
    renderTeam();
}

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    renderTeam(); // You forgot to call renderTeam() here originally

    if (typeof renderMenuItems === 'function') {
        renderMenuItems(); // Only call if this function exists
    }

    if (typeof rotateBanner === 'function') {
        setInterval(rotateBanner, 15000);
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

// Example usage:
// addTeamMember("John Doe", "Assistant Chef", "https://example.com/image.jpg");