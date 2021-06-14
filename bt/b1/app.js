const button = document.querySelector(".button");
button.addEventListener("click", function() {
    const box = document.querySelector(".box");
    // const randomColor = color[Math.floor(Math.random() * color.length)];
    if (box.style.display == "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
});