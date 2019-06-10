/*VARIABLES GENERALES*/

let storeName = "Verdulería Ada",
    product1 = "🍓Frutilla",
    product2 = "🍊Naranja",
    product3 = "🍍Ananá",
    strawberryPrice = 30,
    orangePrice = 20,
    pineapplePrice = 40,
    welcomeMessage = "🥝Bienvenidas a " + storeName + "🥝",
    fruitList = "Estas son las frutas de la semana:",
    totalMoney = "Total de su compra",
    howManyPays = "¿En cuántas cuotas desea abonar?",
    paymentsPrice = "Sus cuotas serán de",
    shopResume = "Resumen de su compra",
    finalAmount = "Total final",
    productDetails = "Detalle de productos",
    numberOfPayments = "Cantidad de cuotas",
    thankYou = "¡Gracias por elegirnos!";

/*BIENVENIDA Y LISTA DE PRODUCTOS*/

alert(welcomeMessage + "\n" +
    "\n" +
    fruitList + "\n" +
    product1 + " - Precio x kg: $" + strawberryPrice + "\n" +
    product2 + " - Precio x kg: $" + orangePrice + "\n" +
    product3 + " - Precio x kg: $" + pineapplePrice + "\n");

/*PEDIDO DE FRUTAS*/

let strawberry = prompt("🍓¿Cuántos kg de frutilla desea llevar?");
let orange = prompt("🍊¿Cuántos kg de naranja desea llevar?");
let pineapple = prompt("🍍¿Cuántos kg de ananá desea llevar?");

/*CÁLCULO DEL TOTAL*/

let total = strawberry * strawberryPrice + orange * orangePrice + pineapple * pineapplePrice;
alert("🛒" + totalMoney + ":" + " $" + total);

/*PAGO CON TARJETA*/

let payments = prompt(howManyPays);
let paymentsValue = (total / payments);

/*TICKET*/

alert("🛒" + shopResume + ":" + "\n" +
    "\n" +
    "💳" + paymentsPrice + ":" + " $" + paymentsValue + "\n" +
    finalAmount + ": $" + total + "\n" +
    numberOfPayments + ": " + payments + "\n" +
    "\n" +
    productDetails + ":" + "\n" +
    product1 + ": " + strawberry + "kg." + "\n" +
    product2 + ": " + orange + "kg." + "\n" +
    product3 + ": " + pineapple + "kg." + "\n" +
    "\n" +
    "💜" + thankYou);
