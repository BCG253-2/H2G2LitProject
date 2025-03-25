// Function to navigate to different pages when a button is clicked
function navigateTo(page) {
    window.location.href = page + ".html";
}

// Adding animation effects to buttons on click
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add an animation class or effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150); // Reset animation after 150ms
    });
});

// Example of dynamic updates to the screen
function updateScreenText(text) {
    const screenText = document.getElementById('screen-text');
    screenText.textContent = text;
}

// You could call this to update the screen text when certain conditions are met
// Example usage: updateScreenText("Loading next page...");
