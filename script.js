document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".button");

    const messages = [
        "DON'T PANIC!",
        "42",
        "Mostly Harmless",
        "Life, the Universe, and Everything",
        "So long, and thanks for all the fish!"
    ];

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            screen.textContent = messages[index % messages.length];
            screen.style.color = ["red", "green", "blue", "yellow", "purple"][index % 5];
        });
    });
});
