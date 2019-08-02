/*
# Ejercicio 43

* Crear un documento con el nombre ej43.js
* Declarar una variable **texto** con el siguiente valor: the dark knight
* Declarar 3 variables en una línea con los siguientes nombres:
  * primerLetra
  * segundaLetra
  * tercerLetra
* Asignar a la variable **primerLetra** el primer caracter del contenido de la variable **texto**
* Asignar a la variable **segundaLetra** el caracter número 4 del contenido de la variable **texto**
* Asignar a la variable **tercerLetra** el caracter número 9 del contenido de la variable **texto**
* Declarar una variable **resultado** con el valor de concatenar las variables **primerLetra**, **segundaLetra** y **tercerLetra**
* Mostrar en consola el contenido de la variable **resultado** en mayúscula
* Deberías ver **TDK** como resultado.
*/

let texto = "the dark knight";
let primeraLetra;
let segundaLetra;
let tercerLetra;

primeraLetra = texto.substr(0,1);
segundaLetra = texto.substr(4,1);
tercerLetra = texto.substr(9,1);

let resultado = primeraLetra + segundaLetra + tercerLetra;

console.log(resultado.toUpperCase());