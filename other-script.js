function expandContent() {
    const screen = document.querySelector(".screen");
    const fullContent = document.getElementById("full-content");
    const preview = document.getElementById("content-preview");

    preview.style.display = "none"; // Hide preview
    screen.classList.add("expanded"); // Expand the GameBoy screen
    setTimeout(() => {
        fullContent.classList.add("show-content"); // Show full content after a slight delay
    }, 300);
}

function shrinkContent() {
    const screen = document.querySelector(".screen");
    const fullContent = document.getElementById("full-content");
    const preview = document.getElementById("content-preview");

    fullContent.classList.remove("show-content"); // Hide content smoothly
    setTimeout(() => {
        fullContent.style.display = "none";
        preview.style.display = "block"; // Show preview again
        screen.classList.remove("expanded"); // Shrink screen back
    }, 300);
}
