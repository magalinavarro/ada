/* EJERCICIO 1 */

/* let ahorros = 1000;

alert(`Tiene $${ahorros} depositados`);

let deposito1 = prompt("Ingrese un depósito inicial");

ahorros = ahorros + parseInt(deposito1);

alert(`Ahora tiene $${ahorros}`); */

/*----------------------------------*/

/* ejercicio 2 */

/* let dinero = 0;

alert("Te depositaron el sueldo!");

dinero = dinero + 15000;

alert(`Dinero en el banco ${dinero}`);

alert("Pagás el resumen de la tarjeta");

dinero = dinero - 3000;

alert(`Dinero en el banco ${dinero}`); */

/*----------------------------------*/

/* EJERCICIO 3:


Ejercicio 3:

* Crear un programa que pida al usuario cuanto dinero le queda, y vaya
preguntandole cuanto tiene que pagar por cada servicio, preguntando por el
nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide para
ingresar un nuevo servicio, debe mostrar cuantos servicios quedan por ingresar,
utilizando una variable. Al final debe mostrar una lista con los servicios a
pagar y el monto de cada uno de ellos, además del dinero que va a quedar luego
de pagar los servicios. Por ejemplo:
    * Ingrese cuanto dinero disponible le queda
    * Quedan 4 servicios por pagar
    * Ingrese un servicio a pagar
    * Ingrese el monto del servicio (nombre del servicio ingresado anteriormente)
    * Quedan 3 servicios por pagar
    * Ingrese un servicio ...
    * El resumen de gastos mensuales es:
        - Aysa $800
        - Edesur $1000
        - ...
      Le quedan $300 disponibles */

/*Dinero inicial*/

let availableMoney = prompt("💰" + " Ingrese cuánto dinero tiene en su cuenta:");

/*Cantidad de servicios*/

alert("💲" + "Quedan tres servicios por pagar");

/*Datos del primer servicio*/

let serviceName1 = prompt("Ingrese un servicio a pagar:");
let serviceToPay1 = prompt("Ingrese monto del servicio:");
let totalMoney = availableMoney - serviceToPay1;

/*Status*/

alert("💲" + "Quedan dos servicios por pagar");

/*Datos del segundo servicio*/

let serviceName2 = prompt("Ingrese un servicio a pagar:");
let serviceToPay2 = prompt("Ingrese monto del servicio:");
totalMoney = totalMoney - serviceToPay2;

/*Status*/

alert("💲" + "Queda un servicio por pagar");

/*Datos del tercer servicio*/

let serviceName3 = prompt("Ingrese un servicio a pagar:");
let serviceToPay3 = prompt("Ingrese monto del servicio:");
totalMoney = totalMoney - serviceToPay3;

/*Resumen final*/

let totalSpending = parseInt(serviceToPay1) + parseInt(serviceToPay2) + parseInt(serviceToPay3); 
alert(`📄 Detalle de sus gastos:
        ${serviceName1}: ${serviceToPay1}.
        ${serviceName2}: ${serviceToPay2}.
        ${serviceName3}: ${serviceToPay3}.
        Total: ${totalSpending}.    
        Dinero en el banco ${totalMoney}.`);