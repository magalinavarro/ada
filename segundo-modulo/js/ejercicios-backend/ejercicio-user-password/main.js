//Iniciar sesión y registrarse:

/*
let login = function() {
    let usuario = document.getElementById("nick-name").value;
    let password = document.getElementById("pass-word").value;
    fetch("https://preguntadas.herokuapp.com/v1/users/login", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;  charset=UTF-8"
        },
        method: "post",
        body: JSON.stringify({
            username: usuario,
            password: password,
        })  
   }).then(function(result) {
        return result.json();
   }).then(function(result) {
    console.log(result);
    if (result.success) {
        alert(result.message);
    } else {
        alert(result.message);
    }
   
   }).catch(function(error) {
   
   });
}

let registrarse = function() {
    let usuario = document.getElementById("nickname").value;
    let password = document.getElementById("password").value;
fetch("https://preguntadas.herokuapp.com/v1/users/signin", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8"
     },
     method: "post",
     body: JSON.stringify({
         username: usuario,
         password: password,
     })  
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
    if (result.success) {
        alert(result.message);
    } else {
        alert(result.message);
    }
}).catch(function(error) {

});

} */


//Para agregar categorías:

/*
fetch("https://preguntadas.herokuapp.com/v1/categories", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8",
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
     },
     method: "post",
     body: JSON.stringify({
         name: "historia",
         color: "violeta",
     })  
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
}).catch(function(error) {

}); */

//Para agregar preguntas:

/*

fetch("https://preguntadas.herokuapp.com/v1/questions", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8",
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
     },
     method: "post",
     body: JSON.stringify({
           title: "¿Qué día de la semana se realiza la vuelta a la Plaza de Mayo por las Abuelas?",
           answer: 4,
           answers: [
                   "Lunes",
                   "Martes",
                   "Miércoles",
                   "Jueves"
               ],
           category: "historia"		
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
}).catch(function(error) {
 console.log(error);
 
}); */

//Para obtener preguntas:

/*

fetch("https://preguntadas.herokuapp.com/v1/questions/all", {
     headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",
     },
     method: "get",
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
}).catch(function(error) {

});

*/

//Responder preguntas:

let responderPreguntas = function() {
    let questions = document.getElementById("question").value;
}

fetch("https://preguntadas.herokuapp.com/v1/questions/answer", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8",
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hZ2FuIiwiaWF0IjoxNTU5ODMyMTQxfQ.U4HB7Ld3jICdlhmSQP2iwmQyVc5ffcUkDDtJFVwrsug",

     },
     method: "post",
     body: JSON.stringify({
          questions: [
              "Famosa diarista, poeta, periodista y escritora nacida en Suiza y radicada en Argentina.",
              "¿Dónde cierra la puerta Gilda?",
              "Su vida estuvo marcada por el infortunio de contraer poliomielitis y después por un grave accidente en su juventud que la mantuvo postrada en cama durante largos periodos, llegando a someterse hasta a 32 operaciones quirúrgicas… ¿De quién se trata?",
              "Considerada prócer cultural, ícono de casi todas las infancias y autora de canciones como 'Manuelita la tortuga' y 'La reina Batata'.",
              "¿Qué día de la semana se realiza la vuelta a la Plaza de Mayo por las Abuelas?",
              "Los pañuelos que llevan las Abuelas de Plaza de Mayo en sus cabezas son de color blanco. ¿Cuál es su significado?",
              "¿A qué se dedicaba Evita antes de convertirse en dirigente política?",
              "Primer mujer con rango militar en el mundo.",
              "¿Quién fue la primer mujer en dedicarse a la medicina en Argentina?",
              "Primer mujer en ganar dos premios Nobel de distintas especialidades (Física y Química).",
              "¿Cómo se llama la científica que ayudó a crear el algoritmo que hizo posible la primer foto de un agujero negro?",
              "Si decimos 'mujer pionera en la programación', hablamos de...",
          ],
       })
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
}).catch(function(error) {

});