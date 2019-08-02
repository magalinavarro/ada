/*

# Ejercicio 46

* Crear un documento con el nombre ej46.js
* Declarar la variable **usuarioYPassword** y asignarle el siguiente texto:
'ada2019,12345'
* Declarar la variable **nombreDeUsuario** y utilizar el método **substr**
para obtener el nombre de usuario (ada2019)
* Declarar la variable **password** y utilizar el método **substr** para
obtener el password (12345)
* Mostrar en consola el siguiente mensaje: `El usuario ${nombreDeUsuario}
tiene ${password} como password`.

*/

let usuarioYPassword ="ada2019,12345";
let nombreDeUsuario = usuarioYPassword.substr(0,7);
let password = usuarioYPassword.substr(-5,6);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password.`)