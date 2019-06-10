/*

* Hacer un sistema para una tienda de ropa. 
* El sistema debe anunciar inicialmente cuatro ofertas disponibles, algunas de las cuales 
deben depender del medio de pago y la tarjeta.
* El descuento es el mismo para todas las ofertas (p.ej.: 20%). 
* Luego, debe preguntar al usuario cuantas cantidades de distintos productos (tres o cuatro) 
desea llevar, con que medio de pago desea realizarlo, y si es y con tarjeta, 
qué tarjeta y en cuantas cuotas. 
* Luego, debe mostrar el resultado de la compra, y si aplica el descuento, indicarlo 
mostrando en cuánto le queda.
* Si paga con tarjeta, dependiendo de la tarjeta y de la cantidad de cuotas, hay que aplicar
un interés, p.ej ("Mastercard con más de 3 cuotas, 5% de interes").
    - Declarar los precios de los productos en variables
    - Mostrar un cartel de bienvenida con los descuentos disponibles, p.ej:
        * "Llevando 3 pantalones y pagando con MasterCard en 3 cuotas"
        * "Llevando 2 pantalones y una remera"
        * "Llevando 3 remeras y pagando en efectivo"
    - Preguntar con un prompt por las cantidades de cada uno de los productos 
    y guardarlos en variables
    - Preguntar por el método de pago, si es con tarjeta, preguntar qué tarjeta 
    y en cuantas cuotas desea realizarlo, y guardar estos datos en variables
    - Chequear todas las condiciones para ver si algún descuento aplica, si lo hace
    guardar el nuevo precio en un variable
    - Chequear si aplica interés, si aplica, calcularlo y guardar el valor final 
    en otra variable
    - Mostrar un resumen de la compra, la cantidad de productos y los subtotales ("3 pantalones: $450"),
    el total inicial, el total con el descuento si aplica, el total con el interes si aplica, y el valor de cada 
    cuota, p.ej:
        
            "Gracias por comprar en nuestra tienda. El resumen de su compra es:
                - 3 jeans: $2800
                - 2 remeras: $900
                - 1 campera: $1800
                
                - Total: $5500
                - Descuento 10%: $550
                - Total: $4950
                - Metodo de Pago: Visa
                - Cantidad de cuotas: 6
                - Interes: 5%
                - Total a pagar: 6 cuotas de $866.25"

*/

/* Variables de productos y precios */

let sweater = 300,
    scarf = 200,
    jacket = 600,
    shoes = 500;

/* Bienvenida y ofertas del día */

alert("Bienvenidxs a Tienda Ada, las ofertas del día son:" + "\n" +
    "1) Llevando tres sweaters y pagando con Visa tenés 3 cuotas" + "\n" +
    "2) Llevando dos bufandas y unos borcegos, tenés 6 cuotas pagando con MasterCard" + "\n" +
    "3) Combinando dos sweaters y una campera, y pagando con Tarjeta Naranja, tenés 3 cuotas");

let combo1 = prompt("¿Cuántos combos 1 vas a llevar?");

if (combo1 >= 1) {
    alert("Agregado al carrito");

let combo2 = prompt("¿Cuántos combos 2 vas a llevar?");

if (combo2 >= 1) {
    alert("Agregado al carrito");
}

let combo3 = prompt("¿Cuántos combos 3 vas a llevar?");

if (combo2 >= 1) {
    alert("Agregado al carrito");

}

let cashOrCard = prompt("¿Qué medio de pago elegís?" + "\n" +
                "*tarjeta" + "\n" +
                "*efectivo");

if (cashOrCard === "tarjeta") {
    let creditCard = prompt("Por favor, indicanos con qué tarjeta abonás la compra:" + "\n" +
            "*visa" + "\n" +
            "*mastercard" + "\n" +
            "*naranja");

            } else if (creditCard === "visa" || creditCard === "mastercard" || creditCard === "naranja") {
                let payments = prompt("Y ahora decinos en cuántas cuotas:" + "\n" +
            "*1" + "\n" +
            "*2" + "\n" +
            "*3" + "\n" +
            "*6");
            
        } else (cashOrCard === "efectivo"); {
            alert("Elegiste abonar en efectivo")
        }
    }


    /* Resolución
    
    alert(`Bienvenidos a nuestra tienda online. Esta semana 20% de descuento en los siguientes productos y medios de pago:
Llevando 3 remeras pagando en efectivo.
Llevando 2 remeras, 1 pollera y 1 pantalón pagando con Visa en 6 cuotas.
Llevando 2 o más camperas pagando con MasterCard en 3 cuotas.
Llevando 2 o más pantalones pagando en efectivo.`)

let shirts = parseInt(prompt('¿Cuántas remeras desea llevar?'));
let skirts = parseInt(prompt('¿Cuántas polleras desea llevar?'));
let trousers = parseInt(prompt('¿Cuántos pantalones desea llevar?'));
let jackets = parseInt(prompt('¿Cuántas camperas desea llevar?'));

let shirtValue = 500;
let skirtValue = 700;
let trousersValue = 1100;
let jacketValue = 1500;

let shirtsTotal = shirtValue * shirts;
let skirtsTotal = skirtValue * skirts;
let trousersTotal = trousersValue * trousers;
let jacketsTotal = jacketValue * jackets;
let clothesTotal = jacketsTotal + trousersTotal + skirtsTotal + shirtsTotal;
let discount = 0;
let interest = 0;

let payment = prompt('¿Desea pagar en efectivo o tarjeta?');
    payment = payment.toLowerCase();

if (payment === 'tarjeta') {
    let card = prompt(`Elija una de las siguientes tarjetas:
    * Visa
    * MasterCard`);
        card = card.toLowerCase();
    let cuotas = parseInt(prompt('Seleccione la cantidad de cuotas: 3, 6 o 12.'));
    if ((card === 'visa' && shirts === 2 && skirts === 1 && trousers === 1 && cuotas === 6)||
        (card === 'mastercard' && jackets >=2 && cuotas === 3)){
    discount = 20 * clothesTotal / 100
    } 
    if (card === 'visa') {
        if (cuotas === 3) {
            interest = 5 * clothesTotal / 100
        } else if (cuotas === 6) {
            interest = 12 * clothesTotal / 100
        } else if (cuotas === 12) {
            interest = 17 * clothesTotal / 100
        } else {
            alert('Ese no es un número válido de cuotas.')
        }
    } else if (card === 'mastercard') {
        if (cuotas === 3) {
            interest = 8 * clothesTotal / 100
        } else if (cuotas === 6) {
            interest = 16 * clothesTotal / 100
        } else if (cuotas === 12) {
            interest = 22 * clothesTotal / 100
        } else {
            alert('Ese no es un número válido de cuotas.')
        }
    } else {
        alert('Esa no es una tarjeta válida.')
    }
    alert(`Gracias por elegirnos. Su compra:
    * ${shirts} remeras = $${shirtsTotal}
    * ${skirts} polleras = $${skirtsTotal}
    * ${trousers} pantalones = $${trousersTotal}
    * ${jackets} camperas = $${jacketsTotal}
    * Total = $${clothesTotal}
    * Tarjeta = ${card}
    * Cuotas = ${cuotas}
    * Descuento = $${discount}
    * Interés = $${interest}
    * Total actualizado = $${clothesTotal - discount + interest}
    * Valor de cada cuota = $${(clothesTotal - discount + interest) / cuotas}`)
} else if (payment === 'efectivo') {
    if (trousers >= 2 ||
        shirts === 3) {
    discount = 20 * clothesTotal / 100
    }
    alert(`Gracias por elegirnos. Su compra:
    * ${shirts} remeras = $${shirtsTotal}
    * ${skirts} polleras = $${skirtsTotal}
    * ${trousers} pantalones = $${trousersTotal}
    * ${jackets} camperas = $${jacketsTotal}
    * Total = $${clothesTotal}
    * Descuento = $${discount}
    * Total actualizado = $${clothesTotal - discount}`)
}

    */
