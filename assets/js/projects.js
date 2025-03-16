// Project Filter and Animation Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Initialize filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });
    });
});

// Initialize with all projects visible
filterButtons[0].click();

// Add card interactions
projectCards.forEach(card => {
    // Click handler for flip effect
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; /* Reduced shadow intensity */
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '1px 6px 8px 2px var(--first-shadow-color)'; /* Reduced shadow intensity */
    });
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.classList.add('fade-in');
});
