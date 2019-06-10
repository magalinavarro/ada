/*

Hacer un programa informativo sobre algun tema, por ejemplo animales, ciudades, planetas, comidas, etc
que pida al usuario ingresar algun valor para obtener informacion, por ejemplo
"Bienvenida a la wiki sobre animales"
"Ingrese algun animal para obtener mas informacion sobre este"
Y dependiendo de la opcion que elija  (4 o 5 opciones), mostrar un cartel con informacion elegida
if (opcion === "vaca") {
} else if (opcion === "perro") {
} else {
    alert("No tenemos informacion sobre ese animal")
}

*/

/*

alert("Bienvenidxs a Wikianimales");

let animal = prompt("Ingrese el nombre del animal sobre el que desea aprender" + "\n" +
            "elefante" + "\n" +
            "vaca" + "\n" +
            "cerdo");

if (animal === "elefante") {
    alert("Algunos datos curiosos:" + "\n" +
    "*Se ha demostrado que entienden algunas palabras y siguen instrucciones simples." + "\n" +
    "*A diferencia de lo que se cree, los elefantes no tienen miedo a los ratones, sino a las hormigas y las abejas." + "\n" +
    "*Aunque te parezca que la piel de un elefante es bastante gruesa, en realidad es muy sensible y es por eso que se dan baños en el lodo. Esta sustancia los protege de los rayos ultravioletas y las picaduras de insectos." + "\n");
} else if (animal === "vaca") {
    alert("Algunos datos curiosos:" + "\n" +
    "*Pasan de 6 a 7 horas al día comiendo alimento y alrededor de 8 horas masticándolo." + "\n" +
    "*Sólo tienen un estómago, pero cuatro compartimentos digestivos." + "\n" +
    "*Tienen un magnífico sentido del olfato y pueden oler algo a 10 km.")
} else if (animal === "cerdo") {
    alert("Algunos datos curiosos:" + "\n" +
    "*Son muy sociales. Son capaces de formar lazos con personas, otros animales y mostrar afecto." + "\n" +
    "*Son curiosos, perspicaces y tienen una excelente memoria." + "\n" +
    "*Como los niños, los cerdos también les encanta jugar a la pelota, correr y realizar otros juegos. Ellos transforman en juguetes cajas de cartón y otros objetos en su camino.")
} else {
    alert("Por favor ingrese un animal de la lista")
} */

/*
Hacer un programa que permitar editar un registro de una wiki sobre alguna persona famosa/historica/ficticia. 
El programa debe inicialmente mostrar los datos de la persona, por ejemplo:
"Adapedia:
    Nombre: Ada
    Apellido: Lovelace
    Fecha de Nacimiento: 10/12/1815
    Nacionalidad: Inglesa
    Conocida por: ser la primera programadora de la historia
"
Luego debe preguntar si desea modificar alguno de los valores. Si la respuesta es no,
debe salir del programa. Si la respuesta es si, debe preguntar que valor modificar,
luego preguntar por el nuevo valor, y mostrar el registro actualizado.    
Contraer
*/


let name = "Ellen",
    surname = "Church",
    birthDate = "22/09/1904",
    nationality = "Estadounidense",
    story = "Ser la primer azafata de la historia. Ofreció sus servicios como enfermera abordo a la compañía Boeing Air Transport. Así, sin saberlo, daba origen a la profesión de azafata.";

alert ("Adapedia:" + "\n" +
        "Nombre: " + name + "\n" +
        "Apellido: " + surname + "\n" +
        "Fecha de nacimiento: " + brithDate + "\n" +
        "Nacionalidad: " + nationality + "\n" +
        "Conocida por: " + story);

let newEntry = prompt("¿Desea modificar algun dato?");

if (newEntry === "si") {
    prompt("¿Qué dato desea modificar?");

} else if (newEntry === name) {
    prompt("¿Qué valor desea modificar?");

} else if (newEntry === name) {
    alert("Adapedia: " + "\n" +
    "Nombre: " + name + "\n" +
    "Apellido: " + surname + "\n" +
    "Fecha de nacimiento: " + brithDate + "\n" +
    "Nacionalidad: " + nationality + "\n" +
    "Conocida por: " + story);
} else if (newEntry === surname) {
    alert("Adapedia: " + "\n" +
    "Nombre: " + name + "\n" +
    "Apellido: " + surname + "\n" +
    "Fecha de nacimiento: " + brithDate + "\n" +
    "Nacionalidad: " + nationality + "\n" +
    "Conocida por: " + story);
} else if (newEntry === surname) {
    alert("Adapedia: " + "\n" +
    "Nombre: " + name + "\n" +
    "Apellido: " + surname + "\n" +
    "Fecha de nacimiento: " + brithDate + "\n" +
    "Nacionalidad: " + nationality + "\n" +
    "Conocida por: " + story);



}
