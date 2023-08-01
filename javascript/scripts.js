let index = 0;
let mostrar = 0;
const imagenes = document.querySelectorAll('.sabores');
const totalImagenes = imagenes.length;
const cantidadAMostrar = 3; 

function moverCarrusel(direccion) {
    index += direccion;
    mostrar += cantidadAMostrar;
    if (mostrar < 0) {
        index = totalImagenes - cantidadAMostrar;
    } else if (mostrar > totalImagenes) {
        mostrar = 0
        index = 0;
    }
    const translateXValue = -index * (100 / cantidadAMostrar);
    document.querySelector('.imagenes').style.transform = `translateX(${translateXValue}%)`;
}


