/**
 * Hacer un programa que pida por el nombre de la playlista, y luego actualice
 * el elemento con id "playlist" con dicho valor.
 * Luego, debe preguntar cuantas canciones se desee agregar
 * y que vaya pidiendo una por una, preguntando por el nombre de la banda y la cancion. 
 * A medida que se ingresa cada cancion, debe ir agregando al elemento html con id 
 * "songs-container" el siguiente html:
 * 
 * `<div class="card mb-3">
 *     <div class="card-header">
 *         Nombre Banda
 *     </div>
 *     <div class="card-body">
 *         <p class="card-text">Nombre cancion</p>
 *     </div>
 * </div>`
 * 
 *  Donde "Nombre banda" y "Nombre cancion" se reemplaza por el numero
 *  por los valores ingresados, correspondientemente
 */

let textElement = document.getElementById("playlist");

let text = prompt("¿Cómo se va a llamar la playlist");
textElement.innerHTML = "Nombre de la playlist:" + "\n" + text;

let question = parseInt(prompt("¿Cuántas canciones querés agregar?"));

if(question>0){

    for(let i = 0 ; i < question ; i++) {

        let song = prompt("Ingresá la canción");

        let artist = prompt("Ingresá el/la artista");

        textElement = document.getElementById("songs-container");
        textElement.innerHTML = `<div class="card mb-3">
             <div class="card-header">
                 ${artist}
             </div>
             <div class="card-body">
                 <p class="card-text">${song}</p>
             </div>
         </div>`
        
    }
}

    alert (mensaje);
