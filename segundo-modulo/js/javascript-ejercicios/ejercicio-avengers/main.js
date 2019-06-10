/*let avengers = "Tu equipo de Avengers es: ";

let superhero1 = prompt("A quién quiere llamar? ");
avengers += superhero1;
alert(avengers);

let superhero2 = prompt("A quién quiere llamar? ");
avengers += `, ${superhero2}`;
alert(avengers);

let superhero3 = prompt("A quién quiere llamar? ");
avengers += `, ${superhero3}`;
alert(avengers);


let stannis = 20000;
let robb = 30000;
let jofrey = 40000;
let renly = 25000;
let balon = 15000;

let resultado = robb > jofrey; //Mayor que
let resultado2 = stannis < renly; //Menor que
let resultado3 = robb >= renly; //Mayor o igual que
let resultado4 = robb <= renly; //Menor o igual que
let resultado5 = balon === jofrey; //Igual que
let resultado6 = balon !== jofrey; //Distinto que

console.log(resultado); */

/*______________________________________________________________*/

/*Ejercicio cine

Crear un programa que sea un cajero de un cine,
e ir ofreciendo combos y productos mediante prompts.
Si el usuario responde si, ir actualizando el valor total en una variable. También ir actualizando una variable con la lista de productos escogidos y su precio, y mostrarla al final junto al total de la compra:
Por ejemplo:
¿Quiere pochoclos?
Si
Valor total: $200
¿Quiere chocolate?
No
Valor total: $200
¿Quiere gaseosa?
Si
Valor total: $350
Usted ha comprado:
* Pochoclos: $200
* Gaseosa: $150
Total: $350
Contraer

Dos listas a ir actualizando:

- Precio total
- Una variable con la lista de productos comprados*/

/*Variables*/

let storeName = "Cine Hoyts",
        totalAmount = 0,
        subtotalMessage = "Hasta el momento, el subtotal de su compra es: ",
        comboDetails = "Detalle de su combo:"
        totalMessage = "El total de su compra es:"
        popCornPrice = 200,
        tacosPrice = 100,
        sodaPrice = 50;


/*Saludo de bienvenida*/

alert("📽️ " + "Bienvenidxs a " + storeName + " 📽️" + "\n" +
"Ingrese su pedido a continuación");

/*Pochoclos*/
let popCorn = prompt("🍿" + "¿Desea agregar pochoclos?");

if (popCorn === "si") {
        alert("✔️" + "Agregó pochoclos a su combo");
        totalAmount += 200;
}

/* Status */

alert(`💲 ${subtotalMessage} $${totalAmount}
        `);

/*Tacos*/
let tacos = prompt("🌮" + "¿Desea agregar tacos?");

if (tacos === "si") {
        alert("✔️" + "Agregó tacos a su combo");
        totalAmount += 100;
}

/* Status */

alert(`💲 ${subtotalMessage} $${totalAmount}`);

/*Gaseosas*/
let soda = prompt("🥤" + "¿Desea agregar una gaseosa?");

if (soda === "si") {
        alert("✔️" + "Agregó una gaseosa a su combo");
        totalAmount += 50;
}

/*Ticket*/

alert(`📄 ${comboDetails}:
🍿 Pochoclos - $${popCornPrice}
🌮 Tacos - $${tacosPrice}
🥤 Gaseosa - $${sodaPrice}
${totalMessage} $${totalAmount}
¡Que disfrute la película!
Al salir, por favor no spoilee. 🤫🧡`);

/* comboDetails +=`gaseosa - $${sodaPrice}`;
Con esto si pongo "no" en algún producto me lo saca del ticket, aplicarlo en el extracto del producto arriba, no en el ticket.*/