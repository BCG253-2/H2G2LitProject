document.addEventListener('DOMContentLoaded', function () {
    const entries = {
        vogonPoetry: "Here's some Vogon Poetry. It's horrible, so be warned!",
        holomail: "You've got a message in a HoloMail! It's not important, really.",
        philosophy: "The meaning of life is 42. But what does it mean?",
        news: "Breaking News: A Vogon fleet is heading towards Earth. It's a bit dramatic.",
    };

    const entryContent = document.getElementById('entryContent');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            entryContent.innerHTML = `<p>${entries[button.id] || 'Random entry coming right up!'}</p>`;
        });
    });

    document.getElementById('randomEntry').addEventListener('click', function () {
        const randomKey = Object.keys(entries)[Math.floor(Math.random() * Object.keys(entries).length)];
        entryContent.innerHTML = `<p>${entries[randomKey]}</p>`;
    });
});
