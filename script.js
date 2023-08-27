// Get the key elements
const keyElements = document.querySelectorAll('.top-bar > .key');

// Add click event listeners to key elements
keyElements.forEach((keyElement, index) => {
    keyElement.addEventListener('click', () => {
        // Update the content of master and details panes based on the clicked key
        const masterPane = document.querySelector('.master-pane');
        const detailsPane = document.querySelector('.details-pane');
        
        // You can update the content of master and details panes here
        // For example:
        masterPane.textContent = `Master Content for Key ${index + 1}`;
        detailsPane.textContent = `Details Content for Key ${index + 1}`;
    });
});
