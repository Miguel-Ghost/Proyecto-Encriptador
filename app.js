const encriptacionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};


const inputText = document.getElementById('inputText');
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const outputSection = document.querySelector('.output-section');


function encriptar() {
    let texto = inputText.value.toLowerCase();
    let textoEncriptado = '';

    for (let char of texto) {
        textoEncriptado += encriptacionMap[char] || char;
    }

    mostrarResultado(textoEncriptado);
}


function desencriptar() {
    let texto = inputText.value.toLowerCase();

    for (let [key, value] of Object.entries(encriptacionMap)) {
        texto = texto.replaceAll(value, key);
    }

    mostrarResultado(texto);
}


function mostrarResultado(texto) {
    if (texto.trim() === '') {
        outputSection.innerHTML = `
            <div id="result">
                <img src="imagenes/imagen.png" alt="">
                <h2>Ningún mensaje fue encontrado</h2>
                <p>Ingresa el texto que desees encriptar o desencriptar.</p>
            </div>
        `;
    } else {
        outputSection.innerHTML = `
            <div id="result">
                <p>${texto}</p>
                <button class= "copiar" onclick="copiarTexto()">Copiar</button>
            </div>
        `;
    }
}


function copiarTexto() {
    const textoCopiar = outputSection.querySelector('p').textContent;
    navigator.clipboard.writeText(textoCopiar)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar: ', err));
}


encriptarBtn.addEventListener('click', encriptar);
desencriptarBtn.addEventListener('click', desencriptar);


mostrarResultado('');
