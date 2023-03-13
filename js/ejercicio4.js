let resultadoSuma =0;

do{ let numero = parseInt(prompt('Ingrese un numero'));
    if(isNaN(numero) == false) {
        resultadoSuma = resultadoSuma + numero;
    }else{
        alert('Introduce un número válido');
    }
}while(confirm('¿Seguimos sumando?'));

document.write(resultadoSuma);