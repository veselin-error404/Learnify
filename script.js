document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown toggle links
    var dropdownToggleLinks = document.querySelectorAll('.dropdown > a');

    // Add event listener to each dropdown toggle link
    dropdownToggleLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var submenu = this.nextElementSibling;
            event.preventDefault();
            submenu.classList.toggle('show');
        });
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown > a')) {
            var dropdowns = document.querySelectorAll('.dropdown > ul');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});
