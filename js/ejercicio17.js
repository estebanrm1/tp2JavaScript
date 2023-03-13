const vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Escribe un texto");

let textomin = texto.toLowerCase();

let posicion = 0;

let parar = false;
let i, j;

for (i = 0; i < textomin.length; i++) {
    for (j = 0; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write(`La primera vocal está en la posición : ${posicion}`);