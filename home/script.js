const movableImages = document.querySelectorAll('.dragImage');
let container = document.getElementById('foregroundContainer');
let activeImage = null;
let offsetX, offsetY;

movableImages.forEach(image => {
    image.addEventListener('mousedown', startDragging);
    image.addEventListener('mouseup', stopDragging);
});

function startDragging(e) {
    activeImage = this;
    offsetX = e.clientX - activeImage.getBoundingClientRect().left;
    offsetY = e.clientY - activeImage.getBoundingClientRect().top;

    activeImage.style.zIndex = 2;
    activeImage.style.cursor = 'grabbing';

    document.addEventListener('mousemove', dragImage);
    document.addEventListener('mouseup', stopDragging);
}

function dragImage(e) {
    if (!activeImage) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    activeImage.style.left = x + 'px';
    activeImage.style.top = y + 'px';
}

function stopDragging() {
    if (!activeImage) return;

    activeImage.style.zIndex = 1;
    activeImage.style.cursor = 'grab';
    activeImage = null;

    document.removeEventListener('mousemove', dragImage);
    document.removeEventListener('mouseup', stopDragging);
}

document.getElementById('rectangle').addEventListener('click', function() {
    const imageGrid = document.getElementById('imageGrid');
    const utensilsContainer = document.querySelector('.utensils-container');
    
    if (imageGrid.style.opacity === '0') {
        imageGrid.style.opacity = '1';
        setTimeout(() => {
            imageGrid.style.display = 'grid';
            utensilsContainer.style.display = 'none';
        }, 200); 
    } else {
        imageGrid.style.opacity = '0';
        setTimeout(() => {
            imageGrid.style.display = 'none';
            utensilsContainer.style.display = 'flex';
        }, 200); 
    }
});

function toggleDropdown() {
const dropdown = document.querySelector('.dropdown-menu');
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

