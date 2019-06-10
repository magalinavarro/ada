let cantidadvalijas = parseInt(prompt(`¿Cuantas valijas desea llevar? :`));
let lista = "";

for(let i = 1; i < cantidadvalijas; i++) {
    let cantidadItems = parseInt(prompt(`¿Cuantos items quiere guardar en la valija? :`));
    lista += `\n valija ${i}:`

    for(let j = cantidadItems; j > 0 ; j--) {
        alert (`Le quedan ${j} items por agregar`);
        let item = prompt("¿Que desea guardar en la valija? :");
        lista += `\n -Item n° ${j} ${item}`;
        alert(lista);
    }    
}