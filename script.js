// Function to switch between bus company tabs
function switchTab(event, tabName) {
    // Prevent default action for anchor links
    event.preventDefault();
    
    // Hide all the tabs first
    const tabsContent = document.querySelectorAll('.tab-content');
    tabsContent.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the content of the selected tab
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }

    // Highlight the active tab
    const allTabs = document.querySelectorAll('.tab a');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Smooth scroll to section on tab click
function smoothScrollToSection(event) {
    event.preventDefault();
    
    // Get the target section from the link's href
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Smooth scroll to the section
    window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjusting offset for better visibility
        behavior: 'smooth'
    });
}

// Add event listeners for each tab link
document.querySelectorAll('.tab a').forEach(tab => {
    tab.addEventListener('click', (event) => {
        switchTab(event, tab.getAttribute('href').substring(1));
    });
});

// Add event listeners for smooth scroll on safety and document sections
document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', smoothScrollToSection);
});

// Ensure all sections are hidden by default except the first one
document.addEventListener('DOMContentLoaded', function () {
    const firstTab = document.querySelector('.tab a');
    if (firstTab) {
        switchTab({ target: firstTab }, firstTab.getAttribute('href').substring(1));
    }
});

// Scroll back to top function (optional feature)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Adding a scroll to top button when user scrolls down
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = 'Back to Top';
scrollTopButton.classList.add('scroll-top-btn');
scrollTopButton.addEventListener('click', scrollToTop);
document.body.appendChild(scrollTopButton);

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});
