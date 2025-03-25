function expandGif() {
    const preview = document.getElementById("gif-preview");
    const fullGif = document.getElementById("full-gif");
    const screen = document.querySelector(".screen");

    preview.style.display = "none"; // Hide the small preview
    screen.classList.add("expanded"); // Expand the screen
    setTimeout(() => {
        fullGif.style.display = "block";
        fullGif.classList.add("show-content"); // Show full GIF smoothly
    }, 300);
}

function shrinkGif() {
    const preview = document.getElementById("gif-preview");
    const fullGif = document.getElementById("full-gif");
    const screen = document.querySelector(".screen");

    fullGif.classList.remove("show-content"); // Hide GIF smoothly
    setTimeout(() => {
        fullGif.style.display = "none";
        preview.style.display = "block"; // Show preview again
        screen.classList.remove("expanded"); // Shrink screen back
    }, 300);
}
