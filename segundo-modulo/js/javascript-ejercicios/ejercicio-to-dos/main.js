/**
 - Crear una función agregarTodo que appendee al elemento con id todos-container
 el siguiente html:

    `<div class="card mb-3 bounceIn faster">
        <div class="card-header">
            Titulo Tarea
        </div>
        <div class="card-body">
            <p class="card-text">Descripcion tarea</p>
        </div>
    </div>`
 
    Donde "Titulo tarea" y "Descripcion tarea" son reemplazados por los valores
de los inputs correspondientes. Si alguno de los campos está vacío, no debe 
agregar el todo.
  
- Crear una función eliminarTodos que borre todos los todos del elemento todos-container
- Bindear las funciones con los botones correspondientes
 */



let toDoContainer = document.getElementById ("todos-container");
let toDoTitle = document.getElementById ("todo-title");
let toDoDescription = document.getElementById ("todo-description");

let toShowMessage = function () {
    if (toDoTitle.value.length !==0 && toDoDescription.value.length !== 0) {    
    toDoContainer.innerHTML += `<div class="card mb-3 bounceIn faster">
    <div class="card-header">
        ${toDoTitle.value}
    </div>
    <div class="card-body">
        <p class="card-text">${toDoDescription.value}</p>
    </div>
</div>`;

    }
}

let deleteAll = function () {
    toDoContainer.innerHTML = "";
    }

    
