let numRepe = parseInt(prompt('Ingrese el numero de repeticiones'));

if(isNaN(numRepe) == false){
    if(numRepe > 0 && numRepe <=50){
    let i,rep
        for(i = numRepe; i >= 1; i--){
            for(rep = i; rep >= 1; rep--){
                document.write(i);
            }
            document.write(`<br>`);
        }
    }else{
        alert('El numero ingresado no es valido');
    }
}else{
    alert('Ingrese UN NUMERO');
}