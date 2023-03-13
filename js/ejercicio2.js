const nota = parseInt(prompt('Ingrese su nota'));
if (isNaN(nota) == false) {
    if (nota >= 0 && nota <= 10) {
        if (nota >= 0 && nota <= 2) {
            document.write("Muy deficiente")
        };
        if (nota >= 3 && nota <= 4) {
            document.write("Insuficiente")
        };
        if (nota >= 5 && nota <= 6) {
            document.write("Suficiente")
        };
        if (nota == 7) {
            document.write("Bien")
        };
        if (nota >= 8 && nota <= 9) {
            document.write("Notable")
        };
        if (nota == 10) {
            document.write("Sobresaliente")
        };
    }
    else {
        document.write('Número erróneo');
    };
} else {
    document.write('Introduce un número válido')
}