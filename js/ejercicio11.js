const nombre1 = prompt('Escribe nombre1');
const edad1 = prompt('Escribe edad1');

const nombre2 = prompt('Escribe nombre2');
const edad2 = prompt('Escribe edad2');

const nombre3 = prompt('Escribe nombre3');
const edad3 = prompt('Escribe edad3');

const edadMax = Math.max(edad1, edad2, edad3);

if (edadMax == edad1) {
    document.write(`El mayor es ${nombre1}`)
}
if (edadMax == edad2) {
    document.write(`El mayor es ${nombre2}`)
}
if (edadMax == edad3) {
    document.write(`El mayor es ${nombre3}`)
}