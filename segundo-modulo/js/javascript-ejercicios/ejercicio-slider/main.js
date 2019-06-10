let imagenActual = 1;


let actualizarTitulo = function () {
    
    let h1 = document.getElementById("title_" + imagenActual);
    h1.classList.toggle("hidden");
}
 
let avanzarImagen = function () {
    actualizarTitulo();
    imagenActual = imagenActual + 1
    actualizarTitulo();
    actualizarImagen();
}

let retrocederImagen = function () {
    actualizarTitulo();
    imagenActual = imagenActual - 1
    actualizarTitulo();
    actualizarImagen();
}

let actualizarImagen = function () {
    let clonarVariable = document.getElementById("imagen-animal");    
    clonarVariable.src = "imagen_" + imagenActual + ".jpg";
}