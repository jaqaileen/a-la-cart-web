const gridItems = document.querySelectorAll('.image-container');
const foodImages = document.querySelectorAll('.food-img');
let zIndexCounter = 20;

function showFoodImage(index) {
    if (foodImages[index]) {
        foodImages[index].classList.add('show');
        foodImages[index].style.opacity = "1";
        foodImages[index].style.zIndex = zIndexCounter;
        zIndexCounter++;
        console.log(`Showing image ${index + 1}`);
    } else {
        console.log(`No image found for index ${index + 1}`);
    }
}

gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(`Grid item ${index + 1} clicked`);
        showFoodImage(index);
    });
});

document.getElementById('rectangle').addEventListener('click', function() {
    const imageGrid = document.getElementById('imageGrid');
    const utensilsContainer = document.querySelector('.utensils-container');
    const rectangleText = document.getElementById('rectangleText'); // Get the rectangle text element

    // Check if the grid is currently visible
    if (imageGrid.style.opacity === '1') {
        // Hide the grid
        imageGrid.style.opacity = '0';
        setTimeout(() => {
            utensilsContainer.style.display = 'flex';
            rectangleText.textContent = "Add More Food"; // Change text when hiding the grid
        }, 200); // Delay to allow opacity transition
    } else {
        // Show the grid
        imageGrid.style.display = 'grid'; // Set display first
        setTimeout(() => {
            imageGrid.style.opacity = '1'; // Now make it visible
            utensilsContainer.style.display = 'none';
            rectangleText.textContent = "Bon Appetit!"; // Reset text when showing the grid
        }, 0); // Delay opacity change to allow for display change
    }
});

// Set up the image grid to be visible on start
const imageGrid = document.getElementById('imageGrid');
imageGrid.style.display = 'grid'; // Start visible
imageGrid.style.opacity = '1'; // Start with opacity 1

const rectangleText = document.getElementById('rectangleText'); // Get the rectangle text element
rectangleText.textContent = "Bon Appetit!"; // Set initial text

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }