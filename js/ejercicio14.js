let cadena = prompt("Escriba un texto:");

let numletra = cadena.length; 
let letra;

let i;
for (i = 0; i < numletra; i++) {
    letra = cadena.charAt(i); 
    if (i == numletra - 1) {
    document.write(letra);
    } else {
    document.write(letra + "-");
    }
}
