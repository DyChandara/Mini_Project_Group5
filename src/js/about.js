// Team members data
const teamMembers = [{
        name: "Teacher name",
        role: "role",
        image: "../../../image/nahm_to.jpg"
    },
    {
        name: "Dy",
        role: "Group Leader",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23e5e7eb'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3EBradley H.%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Grey Jackson",
        role: "Head Chef",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23d1d5db'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3EGrey J.%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Antony Joseph",
        role: "Owner",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f9fafb'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3EAntony J.%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Maria Santos",
        role: "Bread Specialist",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23fef3c7'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3EMaria S.%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Tom Wilson",
        role: "Assistant Baker",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23fed7aa'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3ETom W.%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Emma Davis",
        role: "Decorator",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23fde68a'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3EEmma D.%3C/text%3E%3C/svg%3E"
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

// Add new team member dynamically (function available but not used in UI)
function addTeamMember(name, role, image) {
    teamMembers.push({ name, role, image });
    renderTeam();
}

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    renderTeam();

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

// Example usage (for programmatic adding):
// addTeamMember("John Doe", "Assistant Chef", "https://example.com/image.jpg");