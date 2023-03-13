let numRepe = parseInt(prompt('Ingrese el numero de repeticiones'));

if(isNaN(numRepe) == false){
    if(numRepe > 0 && numRepe <=50){
        let numero, rep;
        for (numero = 0; numero <= numRepe; numero++) {
            for (rep = 1; rep <= numero; rep++) {
                document.write(rep);
            }
            document.write(`<br>`);
        }
    }else{
        alert('El numero ingresado no es valido');
    }
}else{
    alert('Ingrese UN NUMERO');
}