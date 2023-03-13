let i;
let j;

let filas = parseInt(prompt('Ingrese el numero de filas'));
let col = parseInt(prompt('Ingrese el numero de columnas'));

let filcol = filas * col;

document.write(`<table border>`);

for(i = 0; i < filas; i++){
    document.write(`<tr>`);
    for(j = 0; j < col; j++){
        document.write(`<td>`)
        document.write(filcol);
        filcol--;
        document.write(`</td>`);
    }
    document.write(`</tr>`)
}
document.write(`</table>`)