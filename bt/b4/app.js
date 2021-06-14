const button = document.querySelector(".button");
let fontSize = 25;
button.addEventListener("click", function() {
    const box = document.querySelector(".box");
    fontSize = fontSize + 1;
    // document.getElementsByClassName(".box").style.fontSize = size+"px";
    box.style.fontSize = `${fontSize}px`;
});