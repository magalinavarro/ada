/*

* Hacer un programa para guardar canciones en una playlist
Nos debe pedir inicialmente cuantas canciones queremos agregar
y luego nos debe ir pidiendo para agregar canciones de a una
mostrandonos la cantidad de canciones que nos quedan por agregar y mostrandonos
la playlist a medida que la vamos actualizando */

/*

let thankYou = "Gracias!"

alert("Bienvenida a Spotify");
let songsQuantity = prompt("¿Cuántas canciones querés agregar a tu primer playlist?");


let playlist = "Estas son las canciones que elegiste: "

for(let i=songsQuantity; i > 0; i--) {
    let countdown = `te quedan ${i} por agregar`;
    alert(countdown);
    song = prompt("Ingresá una canción");
    playlist += `\n ${song}`;
    alert(playlist);
}

if (songsQuantity === 0) {
    alert("No hay problema, podés agregarlas en otro momento!");
    }

    alert (thankYou);

*/

/* Hacer un cronómetro para controlar las vueltas de una
deportista. Tiene que preguntar cuántas vueltas va a dar e ir
preguntando el tiempo en segundos de cada vuelta.
Al final, tiene que mostrar la lista con los tiempos de cada
vuelta y el promedio del tiempo de las vueltas. */

/* let thankYou = "Gracias por utilizar nuestra app!"
let secondsByRound = 0;
let totalSeconds = 0;

alert("Bienvenida a Runtastic");
let rounds = prompt("¿Cuántas vueltas vas a dar?");

for(let i=0; i < rounds + 1; i++) {
    secondsByRound = prompt(`Vuelta nro ${rounds}, ¿cuántos segundos tardaste?`);
}

    alert (thankYou); */

/* Resolución

let vueltas = parseInt(prompt(`¿Cuántas vueltas vas a dar?`)); 
let time = "";
let totalTime = 0;
let total = 0;
let example = "";

for (i =1 ; i < vueltas + 1; i++ ){ //i=vueltas; i>0; i--
    time = parseInt(prompt(`Ingrese el tiempo que tardó en realizar la vuelta:`));
    example += `vuelta ${i}: ${time} seg  \n`;
    alert(example);
    totalTime += time;
    total = totalTime/vueltas;
}

alert(`Cantidad de vueltas: ${vueltas}
${example}
Su promedio es de ${total} segundos`); */

