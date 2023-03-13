let texto = prompt("Escribe un texto:");

let numletra = texto.length;
let i;
let letra;
let res = "";

for (i = 0; i < numletra; i++) {
        letra = texto.charAt(i);
        res = letra + res;
    }
    document.write(res);