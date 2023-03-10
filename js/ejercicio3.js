let sumaDeTexto =''

do{ let cadena = prompt('Ingrese un texto');
    if(sumaDeTexto ==''){
        sumaDeTexto = sumaDeTexto + cadena;
    }else{
        sumaDeTexto = sumaDeTexto + '-' + cadena;
    }
}while(confirm('¿Seguimos sumando texto?'));
    
document.write(sumaDeTexto);