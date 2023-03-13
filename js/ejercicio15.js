let texto = prompt("Escribe un texto:");

let numletra = texto.length;
texto = texto.toUpperCase();
    let letra;
    let contador = 0;
    let i;
    for (i = 0; i < numletra; i++) {
        letra = texto.charAt(i);
        if ((letra == "A") || (letra == "E") || (letra == "I") || (letra == "O") || (letra == "U")) {
            contador++;
        }
    }
    document.write(`El texto tiene ${contador} vocales`);