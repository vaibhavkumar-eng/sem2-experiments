

let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");

// Change heading text
document.getElementById("changeText").addEventListener("click", function () {
    heading.innerHTML = input.value;
});

// Change background color
document.getElementById("bgColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

// Increase font size
document.getElementById("fontSize").addEventListener("click", function () {
    heading.style.fontSize = "40px";
});

// Show/Hide paragraph
document.getElementById("togglePara").addEventListener("click", function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});