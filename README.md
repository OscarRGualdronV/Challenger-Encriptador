# Challenger - Encriptador de Texto

**Challenger - Encriptador de Texto** es una aplicación web que te permite encriptar y desencriptar textos utilizando una serie de reglas simples. Ideal para intercambiar mensajes secretos con personas que conozcan el "secreto" de la encriptación utilizada.

## Descripción del Proyecto

La aplicación encripta textos utilizando las siguientes reglas:

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas.
- No deben usarse letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra a su versión encriptada y también devolver una palabra encriptada a su versión original.

Por ejemplo:
- "gato" => "gaitober"
- "gaitober" => "gato"

La página tiene campos para insertar el texto que será encriptado o desencriptado, y el usuario puede escoger entre las dos opciones. El resultado se muestra en una sección a la derecha de la pantalla, en la posición donde antes aparecía una imagen.

## Tecnologías Utilizadas

- **HTML:** Estructura de la aplicación.
- **CSS:** Estilos y diseño visual.
- **JavaScript:** Lógica de encriptación y desencriptación.

## Instalación

Para comenzar a utilizar **Challenger - Encriptador de Texto**, sigue estos sencillos pasos:

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/challenger-encriptador.git

2. **Navegar al Directorio del Proyecto:**
    ```bash
    cd challenger-encriptador

3. **Abrir el Archivo index.html:**

Puedes abrir el archivo index.html directamente en tu navegador web. Simplemente haz doble clic en el archivo o arrástralo y suéltalo en una ventana del navegador.

¡Eso es todo! No se requiere ninguna instalación adicional de software o configuración.

## Uso

Una vez que hayas instalado la aplicación siguiendo los pasos anteriores, puedes empezar a utilizar **Challenger - Encriptador de Texto** de la siguiente manera:

1. **Abrir la Aplicación:**
   - Abre el archivo `index.html` en tu navegador web.

2. **Ingresar el Texto:**
   - En la página principal, encontrarás un campo de texto donde puedes ingresar el texto que deseas encriptar o desencriptar.

3. **Seleccionar la Opción:**
   - Debajo del campo de texto, encontrarás dos botones: uno para encriptar y otro para desencriptar el texto. Selecciona la opción que prefieras.

4. **Ver el Resultado:**
   - El resultado se mostrará en una sección a la derecha de la pantalla, en la posición donde antes aparecía una imagen. Si ingresas "gaitober" y presionas el botón de desencriptar, verás el resultado "gato" en esta sección.

5. **Copiar el Resultado:**
   - Debajo de la sección donde aparece el resultado, encontrarás un botón "Copiar" que te permitirá copiar el texto encriptado o desencriptado fácilmente.

6. **Restablecer la Página:**
   - Si deseas empezar de nuevo, puedes utilizar el botón "Resetear" que se encuentra debajo del botón "Copiar". Este botón borrará todo el contenido ingresado y devolverá la página a su estado inicial.

7. **Cambiar el Tema**
   - La aplicación **Challenger - Encriptador de Texto** incluye una funcionalidad para cambiar entre el tema claro y el tema oscuro. Esto te permite ajustar el diseño de la aplicación según tus preferencias o condiciones de visualización.

## Código Ejemplo

**Función de Encriptación:**

Aquí tienes un fragmento del código utilizado para encriptar el texto:

```javascript
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}
```

## Capturas de Pantalla

Para ayudarte a entender cómo se ve la aplicación en acción, aquí tienes algunas capturas de pantalla:

- **Pantalla de Inicio:**

  <img src="./assets/image/MacBook Pro-1723773126771.jpeg" alt="Pantalla de Inicio" width="600"/>

  *Descripción:* Aquí puedes ver el campo de texto donde puedes ingresar el texto a encriptar o desencriptar.

- **Resultado Encriptado:**

  <img src="./assets/image/MacBook Pro-1723773331013.jpeg" alt="Resultado Encriptado" width="600"/>

  *Descripción:* Muestra la sección a la derecha de la pantalla donde aparece el resultado encriptado o desencriptado.

  ## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE). Consulta el archivo LICENSE en el repositorio para más detalles.


  ## Autores

- **Oscar Raul Gualdron Villamizar** - Desarrollo 

