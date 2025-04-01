document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleAll');
    let isExpanded = false; // Track the state of the accordion

    toggleButton.addEventListener('click', function() {
        const items = document.querySelectorAll('.accordion-collapse');
        items.forEach(item => {
            const collapseInstance = bootstrap.Collapse.getInstance(item);
            if (!collapseInstance) {
                new bootstrap.Collapse(item, { toggle: true });
            } else {
                if (isExpanded) {
                    collapseInstance.hide();
                } else {
                    collapseInstance.show();
                }
            }
        });

        // Toggle the button text and state
        isExpanded = !isExpanded;
        toggleButton.textContent = isExpanded ? 'Collapse All' : 'Expand All';

        // Change button color
        if (isExpanded) {
            toggleButton.classList.remove('btn-expand');
            toggleButton.classList.add('btn-collapse');
        } else {
            toggleButton.classList.remove('btn-collapse');
            toggleButton.classList.add('btn-expand');
        }
    });

    // Initialize button with expand class
    toggleButton.classList.add('btn-expand');
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Show button when user scrolls down
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});