import { encrypt, decrypt } from './encryption.js';

const textarea = document.getElementById('input-text');
const btnEncrypt = document.getElementById('btn-encrypt');
const rectangle = document.getElementById('rectangle');
const image = document.getElementById('image');
const subtitle = document.querySelector('.subtitle');
const parrafo = document.querySelector('.parrafo');
const btnDecrypt = document.getElementById('btn-decrypt');


const encryptedTextarea = document.createElement('textarea');
encryptedTextarea.id = 'encrypted-textarea';
encryptedTextarea.readOnly = true; 
rectangle.appendChild(encryptedTextarea);

const buttonsContainer = document.createElement('div');
buttonsContainer.id = 'buttons-container';

const copyBtn = document.createElement('button');
const copyBtnText = document.createElement('h3');
copyBtnText.textContent = 'Copiar';
copyBtn.appendChild(copyBtnText);
copyBtn.id = 'copy-btn';
copyBtn.addEventListener('click', () => {
    const encryptedText = encryptedTextarea.value;
    navigator.clipboard.writeText(encryptedText).then(() => {
        console.log('Texto encriptado copiado al portapapeles');
    }).catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
    });
});

const resetBtn = document.createElement('button');
const resetBtnText = document.createElement('h3');
resetBtnText.textContent = 'Resetear';
resetBtn.appendChild(resetBtnText);
resetBtn.id = 'reset-btn';
resetBtn.addEventListener('click', () => {
    location.reload(); 
});

buttonsContainer.appendChild(copyBtn);
buttonsContainer.appendChild(resetBtn);


btnEncrypt.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (text === '') {
        alert('Por favor, ingresa un texto');
        return;
    }
    const encryptedText = encrypt(text);

    image.style.display = 'none';
    parrafo.style.display = 'none';
    encryptedTextarea.style.display = 'block';
    encryptedTextarea.value = encryptedText;

    rectangle.style.display = 'block';
    subtitle.textContent = 'Texto encriptado';
    parrafo.innerHTML = "";

    if (!parrafo.contains(buttonsContainer)) {
        parrafo.appendChild(buttonsContainer);
    }
    parrafo.style.display = 'block';
});


btnDecrypt.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (text === '') {
        alert ('Por favor, ingresa un texto');
        return;
    }  

    const decryptedText = decrypt(text);
    
    image.style.display = 'none';
    parrafo.style.display = 'none';
    encryptedTextarea.style.display = 'block';
    encryptedTextarea.value = decryptedText;

    rectangle.style.display = 'block';
    subtitle.textContent = 'Texto desencriptado';
    parrafo.innerHTML = "";

    if (!parrafo.contains(buttonsContainer)) {
        parrafo.appendChild(buttonsContainer);
    }
    parrafo.style.display = 'block';
});