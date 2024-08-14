

function encriptar() {
    let capturaMensaje = document.querySelector('.contenedor__texto__encriptacion').value;
    let textoEncriptado = capturaMensaje

        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    let resultado = document.querySelector('.contenedor__mensaje');
    resultado.value = textoEncriptado;
    resultado.style.backgroundImage = 'none';
    
    

}
function desencriptar() {
    let capturaMensaje = document.querySelector('.contenedor__texto__encriptacion').value;
    let textoDesencriptado = capturaMensaje
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    let resultado = document.querySelector('.contenedor__mensaje');
    resultado.value = textoDesencriptado;
    resultado.style.backgroundImage = 'none';

}

function copiar() {
    let texto = document.querySelector('.contenedor__mensaje').value;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado");
}