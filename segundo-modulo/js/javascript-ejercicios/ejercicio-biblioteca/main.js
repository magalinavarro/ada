/*
* CONSIGNA:
 * - Crear una variable biblioteca, que sea un array que contenga
 * tres arrays
 * - Hacer que cuando se haga click en uno de los elementos "seleccion"
 * a ese elemento se le agregue la clase "seleccionado", y a los otros
 * elementos que tengan esa clase que se la saque
 * - Crear una variable libroSeleccionado, y hacer que cuando se haga
 * click en uno de los libros seleccionables, se guarde en dicha variable el
 * libro que contiene
 * - Hacer que cuando se haga click en uno de los elementos con clase "estante", se agregue
 * al array correspondiente el libro guardado en la variable libroSeleccionado,
 * hasta un maximo de 5 libros por estante
 * - Hacer una funcion actualizarBiblioteca, que recorra el array biblioteca
 * y vaya agregando a los nodos de clase "estante" un elemento div de clase "libro"
 * con los items del array
 */



 /*_____________________________________________*/

 /*
 * - Crear una variable biblioteca, que sea un array que contenga
 * tres arrays.
 */
 
const biblioteca = [[], [], []];
 
 /*
 * - Hacer que cuando se haga click en uno de los elementos "libro-seleccionable"
 * a ese elemento se le agregue la clase "seleccionado", y a los otros
 * elementos que tengan esa clase que se la saque.
 */

const librosSeleccionables = document.getElementsByClassName('libro-seleccionable');

/*
 * - Crear una variable libroSeleccionado, y hacer que cuando se haga
 * click en uno de los libros seleccionables, se guarde en dicha variable el
 * libro que contiene.
*/

let libroSeleccionado;

for(let libro of librosSeleccionables){
    libro.onclick = function(){
        removerSeleccionados();
        libro.classList.add('seleccionado');
        libroSeleccionado = libro.innerHTML;
    }
}


const removerSeleccionados = function(){
    for(let seleccionado of librosSeleccionables) {
        seleccionado.classList.remove('seleccionado');
    }
}


/*
* - Hacer que cuando se haga click en uno de los elementos con clase "estante", se agregue
* al array correspondiente el libro guardado en la variable libroSeleccionado,
* hasta un maximo de 5 libros por estante.
*/

const estante = document.getElementsByClassName('estante');

for (let i = 0; i < estante.length; i++) {
    estante[i].onclick = function() {
        biblioteca[i].push(libroSeleccionado);
        estante[i].innerHTML = biblioteca;
    }
}

/* - Hacer una funcion actualizarBiblioteca, que recorra el array biblioteca
* y vaya agregando a los nodos de clase "estante" un elemento div de clase "libro"
* con los items del array. */

const actualizarBiblioteca = function() {
    for (let i = 0; i < estanteSeleccionado.length; i++) {
        actualizarBiblioteca[i].onclick = function() {
            actualizarBiblioteca[i].innerHTML = biblioteca;
        }
    }
}

/* Revisar esta última función, faltan cosas. */
