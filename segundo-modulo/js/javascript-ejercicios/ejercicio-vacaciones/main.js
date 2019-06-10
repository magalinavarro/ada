/* Hacer un programa que muestre información de reserva turística. Inicialmente, debe mostrar los siguientes valores:
    * Destino turístico
    * Cantidad de días de hospedaje
    * Cantidad de personas que viajan
    * Total del viaje: que se calcula a partir de un costo inicial por día por persona en el destino, multiplicado por la cantidad de días y personas
A continuación, debe preguntar si se desea modificar algún valor, dando las opciones:
    * destino
    * días
    * personas
    * ninguno
Y en caso de que sea alguno de los 3 primeros, mostrar un cartel que permita ingresar un nuevo valor. 
Luego se muestra un mensaje con los valores y el precio final actualizado.
Para el caso del destino, dar 3 opciones posibles, si se elige una que no existe, informarlo con un mensaje.      
Cada destino debe tener un precio por dia por persona distinto. */


/* Variables

let londonPrice = 200,
    romePrice = 150,
    madridPrice = 100,
    onePeople = "Una persona",
    twoPeople = "Dos personas",
    threePeople = "Tres personas";

Opciones

let option = prompt("Ingrese alguna de las opciones:" + "\n" +
            "destino" + "\n" +
            "personas" + "\n" +
            "dias" + "\n");

Destino

if (option === "destino") {
    let city = prompt("Elija la ciudad que desea visitar" + "\n" +
                "londres - precio por día $" + londonPrice + "\n" +
                "roma - precio por día $" + romePrice + "\n" +
                "madrid - precio por día $" + madridPrice + "\n")
}

Personas

else if (opcion === "personas") {
    let people = prompt("Elija la cantidad de personas a viajar" + "\n" +
                "una" + "\n" +
                "dos" + "\n" +
                "tres")
}

Días

else if (opcion === "dias") {
    let people = prompt("Elija la cantidad de días que desea hospedarse:" + "\n" +
                "5" + "\n" +
                "7" + "\n" +
                "10")
}

/*RESOLUCIÓN

let destino = "Londres";
let dias = 7;
let personas = 2;
let precioDestino = 1000;
let valorTotal = dias * personas * precioDestino;

alert(`Usted tiene reservado un viaje a ${destino} por ${dias} dias para ${personas} personas. El valor total del viaje es: $${valorTotal}`);

let pregunta = prompt("Desea modificar algún valor?");
pregunta = pregunta.toLowerCase();

if (pregunta === "si") {
    let cambio = prompt("Que desea cambiar? Destino, personas o dias?");
    cambio = cambio.toLowerCase();

    if (cambio === "destino") {
        destino = prompt("Ingrese el nuevo destino: Roma, Madrid o Lisboa");

        if (destino.toLowerCase() === "roma") {
            precioDestino = 1500;
            valorTotal = dias * personas * precioDestino;

            alert(`Usted tiene reservado un viaje a ${destino} por ${dias} dias para ${personas} personas. El valor total del viaje es: $${valorTotal}`);
        } else if (destino.toLowerCase() === "madrid") {
            precioDestino = 2500;

            valorTotal = dias * personas * precioDestino;

            alert(`Usted tiene reservado un viaje a ${destino} por ${dias} dias para ${personas} personas. El valor total del viaje es: $${valorTotal}`);
        } else if (destino.toLowerCase() === "lisboa") {
            precioDestino = 2000;

            valorTotal = dias * personas * precioDestino;

            alert(`Usted tiene reservado un viaje a ${destino} por ${dias} dias para ${personas} personas. El valor total del viaje es: $${valorTotal}`);
        } else {
            alert("Ese no es un destino valido");
        }

    } else if (cambio === "dias") {
        dias = prompt("Ingrese la cantidad de dias");
        valorTotal = dias * personas * precioDestino;

        alert(`Usted tiene reservado un viaje a ${destino} por ${dias} dias para ${personas} personas. El valor total del viaje es: $${valorTotal}`);
    } else if (cambio === "personas") {
        personas = prompt("Ingrese la cantidad de personas");
        valorTotal = dias * personas * precioDestino;

        alert(`Usted tiene reservado un viaje a ${destino} por ${dias} dias para ${personas} personas. El valor total del viaje es: $${valorTotal}`);
    } else {
        alert("Ese no es un valor valido");
    }
} else {
    alert("Gracias por utilizar nuestros servicios");
}
*/

/* CHEQUEAR DOS CONDICIONES

Hay una forma para no estar anidando un if adentro de otro. Combinamos comparaciones:

____________________________________________

Ej: "si el usuario y contraseña son válidos, mostrame el cartel que diga que me loguee ok".

let user = prompt("Ingrese el usuario");
let password = prompt("Ingrese la contraseña");

let usuarioCorrecto = user === "adaitw"; // true
let passwordCorrecta = password === "2019"; // true
let resultado = usuarioCorrecto && passwordCorrecta; // true

if (resultado) {
    alert("Usted se ha logueado")
} else {
    alert("Usuario o contraseña incorrectos");
}

____________________________________________

Para esto usamos tres operadores:
- and: se escribe así &&.
- or
- not

&&: devuelve el verdadero si todas sus condiciones son verdaderas. Si una de las condiciones no es válida, va a dar falsa.
Entonces pasa al else. El resultado es falso.

true && true // true
false && true // false
true && false // false
false && false // false

Pueden no sólo ser dos valores, sino tres.

Ej: al ejercicio anterior agregamos la variable
let = paginaFuncionando = true;

if (usuarioCorrecto && passwordCorrecta && paginaFuncionando) {
    alert("Usted de ha logueado");
} else {
    alert("Usuario o contraseña incorrectos");
}

Se pueden poner miles, pero las reglas aplican igual. El & es todo o nada.

*/

/* Hacer un programa que permita cambiar la contraseña de usuario. Para eso,
tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas
correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue
cambiada.
En caso de que al menos alguna pregunta fue respondida incorrectamente,
debe mostrar un mensaje advirtiéndolo */


let firstAnswer = "belgrano";
let secondAnswer = "arquitecto";
let thirdAnswer = "pizza";
let resultado = firstAnswer && secondAnswer && thirdtAnswer;

let firstAnswer = prompt ("¿Cuál es el nombre de la calle donde vive?");
let secondAnswer = prompt ("¿Cuál fue la profesión de su padre?");
let thirdAnswer = prompt ("¿Cuál es su comida preferida?");

if (resultado) {
    prompt("Ingrese su nueva contraseña");
    alert("Contraseña modificada con éxito");

} else {
    alert("Datos incorrectos, inténtelo nuevamente");
}

