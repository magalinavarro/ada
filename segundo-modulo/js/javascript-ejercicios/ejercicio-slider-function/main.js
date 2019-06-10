/**
 Hacer que cuando se haga click en los puntos de control del slider,
 cambie a la imagen y al titulo correspondiente, y se ponga la clase
 "selected" en el punto de control clickeado y se elimine de los demás,
 usando para eso una funcion con nombre cambiarImagen, que tome por parámetro
 el número de la imagen a la que se desea cambiar
 */

//Declarar una función cambiarImagen, que tome por parámetro numeroImagen.
//cambiarImagen(1), cambiarimagen(2)
//Obtener el elemento con ID imagen y cambiar el atributo src de dicho elemento con 'imagen_${i};
//en el onclick de cada punto, llamar a la función cambiarImagen con el nro de imagen correspondiente.

 
let numeroImagenAnterior = 1;

let cambiarImagen = function(numeroImagen) {
    let imagen = document.getElementById("imagen-animal");
    imagen.src = `imagen_${numeroImagen}.jpg`;

    let puntoAnterior = document.getElementById(`dot_${numeroImagenAnterior}`);
    puntoAnterior.classList.remove("selected");

    let punto = document.getElementById(`dot_${numeroImagen}`);
    punto.classList.add("selected");

    let tituloAnterior = document.getElementById(`title_${numeroImagenAnterior}`);
    tituloAnterior.classList.add("hidden");

    let title = document.getElementById(`title_${numeroImagen}`);
    title.classList.remove("hidden");

    numeroImagenAnterior = numeroImagen;
}


for (let i = 1; i <= 5; i++) {
    document.getElementById(`dot_${i}`).onclick = function() {
        cambiarImagen(i);
    }
}


