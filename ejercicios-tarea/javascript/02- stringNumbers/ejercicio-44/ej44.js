/*

# Ejercicio 44

* Crear un documento con el nombre ej44.js
* Declarar la variable **texto** y asignar el siguiente valor: **HOLA**
* Declarar la variable **resultado** y asignar el valor de la variable **texto** invirtiendo cada uno de los caracteres y concatenandolos
* Mostrar en consola el contenido de la variable **resultado** en minúscula
* Deberías ver como resultado la palabra **aloh**

*/

let texto = "HOLA";
let resultado = texto.split('').reverse().join('')

console.log(resultado.toLowerCase());