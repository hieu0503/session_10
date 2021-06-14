const button = document.querySelector(".button");
const color = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "brown",
    "aqua",
    "gray",
];
button.addEventListener("click", function() {
    const box = document.querySelector(".box");
    const randomColor = color[Math.floor(Math.random() * color.length)];
    box.style.backgroundColor = randomColor;
});