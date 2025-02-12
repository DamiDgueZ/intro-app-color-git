document.addEventListener("DOMContentLoaded", function() {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const colorPicker = document.getElementById("colorPicker");
    const colorDisplay = document.querySelector(".color-box");
    const colorValue = document.getElementById("color-value");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        let hexColor = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`.toUpperCase();

        colorDisplay.style.backgroundColor = rgbColor;
        colorValue.textContent = `RGB: ${rgbColor} | HEX: ${hexColor}`;
        colorPicker.value = hexColor;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        let r = redInput.value;
        let g = greenInput.value;
        let b = blueInput.value;

        r = Math.min(255, Math.max(0, r));
        g = Math.min(255, Math.max(0, g));
        b = Math.min(255, Math.max(0, b));

        red.value = r;
        green.value = g;
        blue.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        red.value = r;
        green.value = g;
        blue.value = b;
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    [red, green, blue].forEach(slider => slider.addEventListener("input", updateColor));
    [redInput, greenInput, blueInput].forEach(input => input.addEventListener("input", updateSliders));
    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
