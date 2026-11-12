Generador de Paletas 🎨

Una aplicación web sencilla y rápida para generar paletas de colores aleatorias. Ideal para diseñadores, desarrolladores o cualquier persona que busque inspiración para sus proyectos.

### 📝 Descripción

El Generador de Paletas permite a los usuarios crear combinaciones de colores de forma dinámica. Con una interfaz limpia e intuitiva, puedes elegir cuántos colores deseas generar y, con un solo clic, obtener tanto el código HEX como el código HSL de cada color.

Además, incluye una función de copiado rápido al portapapeles para facilitar tu flujo de trabajo.

### ✨ Características Principales

Generación Aleatoria: Crea colores únicos al instante.

Formatos Múltiples: Muestra los códigos de color en formato HEX (ej. #5f5bcd) y HSL (ej. hsl(241, 55%, 58%)).

Tamaños Personalizables: Permite elegir entre paletas de 6, 8 o 9 colores a través de un menú desplegable.

Copiado al Portapapeles: Haz clic en cualquier código (HEX o HSL) sobre la tarjeta de color para copiarlo automáticamente.

Notificaciones (Toast): Muestra una pequeña alerta en pantalla confirmando que el color se ha copiado con éxito.
Este proyecto fue construido utilizando tecnologías web estándar (Vanilla), sin dependencias externas:

HTML5: Estructura semántica de la aplicación.

CSS3: Estilos, diseño basado en Grid/Flexbox (transiciones y notificaciones tipo toast).

JavaScript (ES6): Lógica para la generación de colores matemáticos, manipulación del DOM y uso de la API del Portapapeles (navigator.clipboard).

### 🚀 Cómo usar el proyecto

Como es un proyecto de frontend estático, no necesitas instalar nada especial para que funcione.

Clona o descarga este repositorio en tu computadora.

Asegúrate de tener la carpeta recursos/ con el archivo Logo.svg en el directorio correcto.

Abre el archivo index.html directamente en tu navegador web favorito (Chrome, Firefox, Safari, Edge).

¡Listo! Selecciona la cantidad de colores que quieres y presiona "Generar paleta".

### 📂 Estructura de Archivos

/
├── index.html     # Estructura principal de la página
├── style.css      # Hoja de estilos de la aplicación
├── app.js         # Lógica de programación y eventos
└── recursos/
    └── Logo.svg   # Logotipo de la barra de navegación

###    Link a la WEB:
 https://tavoide.github.io/ProyectoM1_GustavoBenitez/ 

 ### PROMPTS: 
 ## 🧠 Prompts Utilizados (Proceso de Desarrollo Asistido por IA)

Para construir esta aplicación, se utilizó asistencia de IA mediante una serie de *prompts* estructurados. El objetivo no fue generar código automáticamente, sino comprender la arquitectura, la lógica detrás de cada tecnología y asegurar la calidad del producto.

### 1. Planificación Arquitectónica y Estructura
**Prompt:**
> "Tengo que realizar un challenge para una página web estática e interactiva que genere paletas de colores. La aplicación debe permitir elegir entre 6, 8 o 9 colores, generarlos en HSL y HEX, y tener un botón operativo. Actúa como un desarrollador senior y hazme una guía paso a paso para estructurar este proyecto. No escribas código todavía; explícame la arquitectura de archivos necesaria, cómo debo organizar la lógica para cumplir con las normativas de HTML semántico y qué consideraciones de accesibilidad debo planificar desde el inicio."

### 2. Maquetado Semántico y Accesibilidad (HTML)
**Prompt:**
> "Basado en la estructura acordada, escribe el código para el `index.html`. Además del código, necesito que expliques detalladamente:
> 1. Cómo cada etiqueta utilizada cumple con las reglas de HTML semántico.
> 2. Cómo se está resolviendo la accesibilidad requerida (específicamente la asociación de labels y la preparación para el foco visible).
> 3. Cómo este esqueleto se prepara para recibir la inyección dinámica de datos desde JavaScript."

### 3. Layout Adaptable y Estilos (CSS)
**Prompt:**
> "Ahora pasemos al archivo `style.css`. El requerimiento exige que el render dinámico (6, 8 o 9 tarjetas) funcione correctamente en desktop. Proporciona el código CSS utilizando CSS Grid. 
> Después del código, responde:
> - ¿Cómo funciona exactamente la regla matemática de la grilla para que se adapte al número de elementos sin romperse?
> - ¿Qué técnicas aplicaste para garantizar que el texto de los códigos hexadecimales tenga siempre un contraste suficiente sobre los fondos aleatorios?
> - Indícame 2 pruebas manuales que debo hacer en el navegador para verificar que la navegación por teclado (Tab) cumple con el foco visible."

### 4. Lógica de Generación y Renderizado (JavaScript)
**Prompt:**
> "Es hora de programar el motor de la aplicación en `app.js`. Necesito que el botón lea el tamaño seleccionado, genere los colores aleatorios en HSL y HEX, y los renderice en el DOM. 
> Escribe el código dividiéndolo en funciones modulares y luego explícame:
> - La lógica matemática exacta detrás de la generación del código HEX (base 16) y del HSL.
> - Cómo funciona el bucle que limpia el contenedor y reconstruye las tarjetas dinámicamente en cada clic.
> - Qué pruebas de funcionalidad (casos de uso) debo ejecutar en la interfaz para confirmar que el generador no retiene datos viejos al cambiar el tamaño de la paleta."

### 5. Integración de Microfeedback y API del Portapapeles
**Prompt:**
> "Para finalizar el alcance funcional mínimo, necesitamos implementar un microfeedback (Toast) visible que indique cuándo un usuario copia un color. 
> Dame la implementación en JS y CSS, y explícame paso a paso:
> - ¿Cómo se enlaza el evento de clic de la tarjeta con la API `navigator.clipboard` del navegador?
> - ¿Cómo se gestiona el tiempo en JavaScript para que el Toast aparezca y desaparezca sin bloquear la interfaz?
> - Hazme un resumen del flujo de ejecución completo: ¿qué pasa a nivel de eventos en el HTML, CSS y JS desde que el usuario hace clic en un código de color hasta que el mensaje desaparece?"