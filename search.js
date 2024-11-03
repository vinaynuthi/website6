document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-box-container');
    const searchInput = document.getElementById('search-box');

    searchForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Trim whitespace from the input value
        const searchTerm = searchInput.value.trim();

        // Validation: Check if the input is empty
        if (searchTerm === '') {
            alert('Please enter a search term.');
            searchInput.focus(); // Focus back on the search box
            return;
        }

        // If valid, you can proceed with the search
        // For example, redirect to a search results page
        // window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
        
        // For demonstration, just log the search term to the console
        console.log('Searching for:', searchTerm);
    });
});