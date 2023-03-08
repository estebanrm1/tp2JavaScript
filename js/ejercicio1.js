const edad = parseInt(prompt("Ingrese su edad"));

if (edad > 10 && edad <= 80) {
    if (edad > 18) {
        document.write("Usted ya puede conducir");
    } else {
        document.write("Usted no puede conducir");
    }
} else {
    document.write("Ingreso un valor invalido");
}