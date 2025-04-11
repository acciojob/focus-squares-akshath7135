//your JS code here. If required.
// Function to change the colors of the squares
function changeColors(activeSquare) {
    // Get all squares
    const squares = document.querySelectorAll('.square');

    // Loop through each square
    squares.forEach(square => {
        // If the square is not the active one, change its color
        if (square !== activeSquare) {
            square.style.backgroundColor = '#6F4E37'; // Coffee color
        } else {
            square.style.backgroundColor = '#E6E6FA'; // Lavender color
        }
    });
}

// Function to reset colors back to lavender
function resetColors() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Lavender color
    });
}

// Add event listeners to each square
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', () => changeColors(square));
    square.addEventListener('mouseout', resetColors);
});