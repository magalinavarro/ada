/*
Hacer un programa que sea un mini editor de texto. El programa debe
inicialmente pedir para ingresar un texto, luego debe preguntar qué es lo que queremos hacer.
Opciones:
    * "duplicar": duplicar el texto
    * "agregar": agregar texto
    * "mayusculas": poner todo el texto a mayusculas
    * "minusculas": poner todo el texto en minusculas
    * "contar": mostrar cuantos caracteres tiene el texto

Al final debe mostrar el texto modificado

// Ingrese texto

let text = prompt("Por favor ingresá el texto a continuación:");

// Acciones posibles

let action = prompt("¿Qué acción querés realizar sobre el texto ingresado?:" + "\n" +
            "*duplicarlo" + "\n" +
            "*agregar texto" + "\n" +
            "*poner todo el texto en mayusculas" + "\n" +
            "*poner todo el texto en minusculas" + "\n" +
            "*contar cuantos caracteres contiene");

// Si lo duplica

switch(action) {
    case "duplicarlo":
        alert(text + "\n" + text);
    break;

// Si agrega más texto

    case "agregar texto":
        let text2 = prompt("Ingresá el texto que quieras agregar:");
        alert(text + "\n" + text2);
    break;

// Si pasa todo a mayúsculas

    case "poner todo el texto en mayusculas":
        alert(text.toUpperCase());
    break;

// Si pasa todo a minúsculas

    case "poner todo el texto en minusculas":
        alert(text.toLowerCase());
    break;

// Contar caracteres

    case "contar cuantos caracteres contiene":
        alert(text.length);

// Si es inválido 

    default:
        alert("Por favor, ingresá una opción válida");
}

*/

/* Para casos en los que quiero repetir el código, usamos una función para ahorrar espacio.
Para esto usamos un bucle. Así se ejecuta una y otra vez sobre sí mismo. En algún momento
sale de ese bucle y se sigue ejecutando normalmente.

Bucle "for": tiene una sintaxis en principio un poco rara. Se escribe así:

for(todo lo que es la condición de ejecución del bucle) {
    todo lo que queremos que se ejecute en la vuelta de bucle, es decir en la interacción
}

Es decir:

for(ejecución del bucle) {
    interacción
}

EJ:
for(let i = 0; i < 5; i++) {

}

Tiene tres partes. La función tiene que ser válida para que se siga ejecutando el bucle.
Hay una variable que lleva la cuenta de las vuetas (es la variable i).

Se separan por punto y coma.

La del medio es la condición de la ejecución.
En este ejemplo, si es menor a 5, se ejecuta lo que está entre llaves.

La tercera parte es lo que apsa con la variable de control cuando se da una vuelta.

(Aclaración: i++ es la forma abreviada de i = i + 1.
    Si pongo i +=2 quiero sumar de dos en dos).

Entonces:

console.log("Antes del bucle");

for(let i = 0; i < 5; i++) {
    console.log('El valor de la variable i es: ${i++}')
}

console.log("Después del bucle");

*/

/*

let mensaje = "Los colores que ha ingresado son";

for(let i = 0; i < 6; i++) {
    let color = prompt("Ingrese un color");
    mensaje += '\n ${color}';
    alert(mensaje);
}

*/

/* Ojo con poner variables dentro del bucle porque sino se va a sobreescribir cada vez.
Hay que traerla desde afuera como en el ejemplo de los colores.
si pongo el mensaje afuera, no va a imprimir uno por uno los colores,
sino que los va a mostrar al final. Tenemos que hacer que i vaya variando (incrementando) para
que en algún momento la función deje de ser válida, sino va a ejecutarse infinitamente.

*/

/*

* Hacer un programa para una heladeria
que pregunte cuantos kilos vamos a llevar
y dependiendo de la cantidad que llevemos
nos va a tener que pedir distintas cantidad de sabores,
pidiendonos un sabor a la vez y mostrando los sabores que 
vayamos eligiendo

    - 1/4 kg: 2 sabores
    - 1/2 kg: 3 sabores
    - 3/4 kg: 4 sabores
    - 1 kg: 5 sabores

Restriccion: usar un solo bucle for

*/

/* Variables

let iceCreamQuantity = "Bienvenidx a Freddo, por favor indicanos cuánto helado llevás"+ "\n" +
            "* 1/4 kg" + "\n" +
            "* 1/2 kg" + "\n" +
            "* 3/4 kg" + "\n" +
            "* 1 kg";

let writeAFlavor = "Ingresá un sabor"
let flavorsQuantity = 0;
let ticket = "Detalle de tu compra: " + "\n" +
            "*Cantidad de helado: " + iceCreamQuantity + "\n" +
            "*Sabores:" + flavorsQuantity + "\n" +
            writeAFlavor + "\n" +
            "¡Gracias por elegirnos!";

//Bienvenida

prompt(iceCreamQuantity);

//************ Opciones posibles

switch(iceCreamQuantity) {
    
    //Si lleva 1/4 kg

    case "1/4 kg":
        flavorsQuantity = 2;
    break;

    //Si lleva 1/2 kg

    case "1/2 kg":
        flavorsQuantity = 3;
    break;

    //Si lleva 3/4 kg

    case "3/4 kg":
        flavorsQuantity = 4;
    break;

    //Si lleva 1 kg

    case "1 kg":
        flavorsQuantity = 5;

    //Si hay errores

default:
    alert("Esa no es una opción. Intentalo nuevamente.")
}

for(let i = 0; i < flavorsQuantity; i++) {
    let color = prompt("Ingrese un sabor");
    alert(ticket);
}

/*
Resolución

let cantidadSabores = 0;

alert("Bienvenida al e-shop de Rapanui!");
let kg = prompt("Cuántos kg desea llevar?");

switch (kg){
    case("1/4"): 
        cantidadSabores = 2;
        break;
    case("1/2"):
        cantidadSabores = 3;
        break;
    case("3/4"):
        cantidadSabores = 4;
        break;
    case("1"):
        cantidadSabores = 5;
        break;
    default:
        alert("Disculpe no ofrecemos esa cantidad de helado");
}

if (cantidadSabores !== 0) {
    alert(`Podes elegir ${cantidadSabores} sabores`);

    let mensaje = (`Gracias por comprar en Rapanui.
    Detalles de su pedido:
    ${kg} kg.
    Los gustos elegidos son: `);
    
    for(let i = 0; i < cantidadSabores; i++) {
        gusto = prompt("Ingrese el sabor");
        mensaje += `\n ${gusto}`;
    }
    alert (mensaje);
}
