/**
 
 - Declarar una variable precioTotal
 - Hacer una función agregarVerdura, que tome por parámetro una verdura (nombre) y un 
 precio, dicha función debe: 
    - Cambiar el html del elemento con id "mensaje" por, p.ej "Verdura agregada: tomate!"
    - Sumar a la variable precioTotal el precio pasado por parámetro
    - Actualizar el html del elemento con id "total" con el valor de la variable
    precioTotal
 - Hacer una función reiniciar, que: 
    - Cambie el html del elemento con id "mensaje" por, p.ej "Seleccione una verdura"
    - Ponga el valor de la variable precioTotal en 0
    - Actualizar el html del elemento con id "total" con el valor de la variable
    precioTotal
 - Asignar a las imágenes y botones en el html la llamada a la función en el onclick,
 con los parámetros necesarios en el caso de agregarVerdura, definiendo un precio cualquiera
 para cada verdura

 */

 //Declarar una variable precioTotal

 let precioTotal = 0;

 /* Hacer una función agregarVerdura, que tome por parámetro una verdura (nombre) y un 
 precio, dicha función debe: 
    - Cambiar el html del elemento con id "mensaje" por, p.ej "Verdura agregada: tomate!"
    - Sumar a la variable precioTotal el precio pasado por parámetro
    - Actualizar el html del elemento con id "total" con el valor de la variable
    precioTotal*/

let agregarVerdura = function(nombre, precio) {
    let mensaje = document.getElementById('mensaje');
    mensaje.innerHTML = "Verdura agregada: " + nombre;
    precioTotal = precioTotal + precio;
}

/* Hacer una función reiniciar, que: 
    - Cambie el html del elemento con id "mensaje" por, p.ej "Seleccione una verdura"
    - Ponga el valor de la variable precioTotal en 0
    - Actualizar el html del elemento con id "total" con el valor de la variable
    precioTotal */

let reiniciar = function() {
    let mensaje = document.getElementById('mensaje');
    mensaje.innerHTML = "Seleccione una verdura";
    precioTotal = 0;
    let total = document.getElementById('total');
    total.innerHTML = `${precioTotal}`; 
}

/* Asignar a las imágenes y botones en el html la llamada a la función en el onclick,
 con los parámetros necesarios en el caso de agregarVerdura, definiendo un precio cualquiera
 para cada verdura. */