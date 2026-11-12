paletteSizeSelect = document.getElementById("palette-size");
const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.getElementById("palette-container");
const toastContainer = document.getElementById("toast-container");

function generarColorHEX() {
  const colorAleatorio = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${colorAleatorio}`;
}

function generarColorHSL() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 101);
  const lightness = Math.floor(Math.random() * 101);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function generarPaleta() {
  paletteContainer.innerHTML = "";
  const size = parseInt(paletteSizeSelect.value, 10);
  for (let i = 0; i < size; i++) {
    const colorHex = generarColorHEX();
    const colorHsl = generarColorHSL();

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("color-card");
    tarjeta.style.backgroundColor = colorHex;

    tarjeta.innerHTML = `
            <span class="hex-code" title="Copiar HEX">${colorHex}</span>
            <span class="hsl-code" title="Copiar HSL">${colorHsl}</span>
        `;

    const btnHex = tarjeta.querySelector(".hex-code");
    const btnHsl = tarjeta.querySelector(".hsl-code");

    btnHex.addEventListener("click", (e) => {
      e.stopPropagation();
      copiarColor(colorHex);
    });

    btnHsl.addEventListener("click", (e) => {
      e.stopPropagation();
      copiarColor(colorHsl);
    });

    paletteContainer.appendChild(tarjeta);
  }
}

function showToast(mensaje) {
  toastContainer.textContent = mensaje;
  toastContainer.classList.remove("hidden");

  setTimeout(() => {
    toastContainer.classList.add("hidden");
  }, 2500);
}

function copiarColor(color) {
  navigator.clipboard
    .writeText(color)
    .then(() => {
      showToast(`¡Copiado: ${color}!`);
    })
    .catch((err) => {
      console.error("Error al copiar el color:", err);
    });
}

generateBtn.addEventListener("click", generarPaleta);

window.addEventListener("load", generarPaleta);
