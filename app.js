// captura el elemento del DOM

const paletteSizeSelect = document.getElementById('palette-size');
const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.getElementById('palette-container');
const toastContainer = document.getElementById('toast-container');

// función para generar un color hexadecimal aleatorio

function generateColorHEX() {
    const colorAleatorio = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return `#${colorAleatorio}`;
}

function generarColorHSL() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}