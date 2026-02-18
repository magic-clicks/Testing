// settings panel
const color = document.getElementById("color-selector");
const fontSize = document.getElementById("range-slider");

const savedColor = localStorage.getItem("savedColor");
const savedFont = localStorage.getItem("fontSize");

if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    color.value = savedColor;
}

if (savedFont) {
    document.body.style.fontSize = savedFont + "px";
    fontSize.value = savedFont;
}


color.addEventListener("input", function (e) {
    document.body.style.backgroundColor = e.target.value;
    localStorage.setItem("savedColor", e.target.value);
});

fontSize.addEventListener("input", function () {
    document.body.style.fontSize = this.value + "px";
    localStorage.setItem("fontSize", this.value);
});
