/*VARIABLES*/

let countryName = "España",
    capitalCity = "Madrid",
    demography = "20 millones",
    continent = "Europa",
    typicalFood1 = "Tapas",
    typicalFood2 = "Tortilla española",
    typicalFood3 = "Empanada gallega",
    welcomeMessage = "¡Bienvenidxs al tour!",
    thankYou = "¡Gracias por su visita!";

/*BIENVENIDA Y MENSAJE GENERAL*/

    let generalMessage = `${welcomeMessage}
    Nuestro próximo destino es ${countryName}.
    💃 Su capital es ${capitalCity}.
    🌍 Se encuentra en ${continent}.
    🏽‍🤝‍🧑🏼 Su población es de ${demography} de personas.
    🥘 Sus platos típicos son:
    🥄 ${typicalFood1}
    🥄 ${typicalFood2}
    🥄 ${typicalFood3}`;

alert(generalMessage);