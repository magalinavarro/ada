/*
 
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
*/

/**
 
 - Crear una variable pin, e inicializarla con un string vacío 
 - Crear una función actualizarPin, que actualice el contenido del elemento
 con id pin con el valor de la variable pin
 - Crear una función insertarDigito, que tome por parametro un digito, y
 lo concatene al string del pin, y luego que llame a la función actualizarPin
 - Crear una función resetearPin, que setee el valor de la variable pin a una
 string vacía, y luego llame a la función actualizarPin
 - Crear una función borrarDígito, que borre el último dígito de la variable pin,
 usando pin.slice(0, -1) y luego llame a la función actualizarPin
 - Crear una función chequearPin, que debe comparar el valor de la variable pin
 con una valor determinado (p. ej. 5546). Si el pin es correcto, debe mostrar un 
 alert informándolo, si no lo es, debe mostrar un alert informándolo y llamar a 
 la función resetearPin
 - Poner la llamado a la función que corresponde en cada botones, pasándole los
 valores del parámetro si es necesario 

 */

//Crear una variable pin, e inicializarla con un string vacío.

 let pin = "";

 //Crear una función actualizarPin, que actualice el contenido del elemento
 //con id pin con el valor de la variable pin.

 let actualizarPin = function() {
    let titulo = document.getElementById('pin');
    titulo.innerHTML += pin;
 }

 //Crear una función insertarDigito, que tome por parametro un digito, y
 //lo concatene al string del pin, y luego que llame a la función actualizarPin.

 let insertarDigito = function(digito) {
    pin = digito;
    actualizarPin();

 }

 //Crear una función resetearPin, que setee el valor de la variable pin a una
 //string vacía, y luego llame a la función actualizarPin.

let resetearPin = function() {
    pin = "";
    actualizarPin();
}

//Crear una función borrarDígito, que borre el último dígito de la variable pin,
 //usando pin.slice(0, -1) y luego llame a la función actualizarPin.

let borrarDigito = function() {
    digito = pin.slice(0 , -1);
    actualizarPin();
}

 //Crear una función chequearPin, que debe comparar el valor de la variable pin
 //con una valor determinado (p. ej. 5546). Si el pin es correcto, debe mostrar un 
 //alert informándolo, si no lo es, debe mostrar un alert informándolo y llamar a 
 //la función resetearPin.

 let chequearPin = function() {
    if (pin === "1234") {
    alert("El pin es correcto.");
    } else {
        alert("El pin es incorrecto, intentalo nuevamente.");
    } resetearPin();
 }
 
 //Poner la llamado a la función que corresponde en cada botones, pasándole los
 //valores del parámetro si es necesario.