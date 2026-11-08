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

// función para generar la paleta de colores

function generarPaleta() {
    // limpiar la paleta existente
    paletteContainer.innerHTML = '';
    // obtener el tamaño de la paleta seleccionado
    const paletteSize = parseInt(paletteSizeSelect.value, 10);
    // generar las tarjetas de colores mediante un bucle
    for (let i = 0; i < size; i++) {
        const colorHex = generarColorHEX();
        const colorHsl = generarColorHSL();
        
        // Crear el elemento contenedor de la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('color-card');
        tarjeta.style.backgroundColor = colorHex;
        
        // Inyectar los códigos de color
        tarjeta.innerHTML = `
            <span class="hex-code" title="Copiar HEX">${colorHex}</span>
            <span class="hsl-code" title="Copiar HSL">${colorHsl}</span>
        `;
        
        // Eventos para copiar el código específico al hacer clic en las etiquetas
        const btnHex = tarjeta.querySelector('.hex-code');
        const btnHsl = tarjeta.querySelector('.hsl-code');
        
        btnHex.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita conflictos si agregas clics a la tarjeta entera
            copiarColor(colorHex);
        });
        
        btnHsl.addEventListener('click', (e) => {
            e.stopPropagation();
            copiarColor(colorHsl);
        });
        
        // Insertar en el DOM
        paletteContainer.appendChild(tarjeta);
    }
}

// activar el boton de generar paleta al hacer clic
generateBtn.addEventListener('click', generarPaleta);

