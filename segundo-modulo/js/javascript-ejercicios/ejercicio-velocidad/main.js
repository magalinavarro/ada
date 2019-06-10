/*VARIABLES*/

let bicycle = 4
    motocycle = 6 
    busInWorkingHour = 8 
    car = 10
    train = 12
    walkingSpeed = 10
    welcomeMessage = "Bienvenido a Cómo Llego, por favor ingrese la distancia a recorrer:"

    let generalMessage = `${welcomeMessage}`

let distance = prompt(welcomeMessage)

alert(`Caminando: ${distance / walkingSpeed}.
    En bici: ${bicycle}.
    En moto: ${motocycle}.
    En colectivo en hora pico: ${busInWorkingHour}.
    En tren: ${train}`)

