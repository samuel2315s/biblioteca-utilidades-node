develop
function sonAnagramas(palabra1, palabra2) {
    const limpiar = palabra => {
        return palabra
            .toLowerCase()
            .replace(/\s/g, "")
            .split("")
            .sort()
            .join("");
    };

    return limpiar(palabra1) === limpiar(palabra2);

function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoReverso = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoReverso;
develop
}