const button = document.querySelector(".button");
button.addEventListener("click", function() {
    
    const box1 = document.querySelector(".box-1");
    const box2 = document.querySelector(".box-2");
    if (box1.innerHTML === "box 1") {
        box1.innerHTML = "box 2 dao vi tri len";
        box2.innerHTML = "box 1";
    }
    else {
        box1.innerHTML = "box 1";
        box2.innerHTML = "box 2 dao vi tri len";
    }
});