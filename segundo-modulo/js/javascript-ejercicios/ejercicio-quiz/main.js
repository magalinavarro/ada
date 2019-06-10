/* alert("Descubrí cuánto sabés de memes con este quiz")

let question1 = prompt("¿Qué animal dice Ola Ke Ase?" + "\n" +
                "a) una llama" + "\n" +
                "b) un perro" + "\n" +
                "c) un caballo");

let question2 = prompt("¿A qué cantante se parece el Ayuwoki?" + "\n" +
                "a) ricky martin" + "\n" +
                "b) chayanne" + "\n" +
                "c) michael jackson");

let question3 = prompt("Cuando decimos 'No lo sé Rick, parece falso', ¿en qué programa de TV pensás?" + "\n" +
                "a) el precio de la historia" + "\n" +
                "b) por el mundo con marley" + "\n" +
                "c) intrusos en el espectaculo");

question1 = question1 === "una llama"; //true
question2 = question2 === "michael jackson";
question3 = question3 === "el precio de la historia";

if (question1 === "una llama" && question2 === "michael jackson" && question3 === "el precio de la historia") {
    alert("Pasás mucho tiempo en redes sociales, vamo a calmarno.");

    } else if (question1 === "una llama" && question2 === "michael jackson" && question3 === "por el mundo con marley") {
        alert("Tenés el 75% del cerebro ocupado por memes, con unas horas más en Facebook la rompes.");

    } else if ("una llama" && question2 === "michael jackson" && question3 === "intrusos en el espectaculo") {
        alert("Tenés el 75% del cerebro ocupado por memes, con unas horas más en Facebook la rompes.");

    } else if ("un perro" && question2 === "michael jackson" && question3 === "el precio de la historia")
        alert("Tenés el 75% del cerebro ocupado por memes, con unas horas más en Facebook la rompes.");

    else if ("un perro" && question2 === "michael jackson" && question3 === "por el mundo con marley")
        alert("Tenés el 75% del cerebro ocupado por memes, con unas horas más en Facebook la rompes.");

    else if ("un perro" && question2 === "michael jackson" && question3 === "intrusos en el espectaculo") {
        alert("Tenés el 75% del cerebro ocupado por memes, con unas horas más en Facebook la rompes.");

    } else if ("un caballo" && question2 === "michael jackson" && question3 === "el precio de la historia") {
    alert("Tenés el 25% del cerebro ocupado por memes, todavía tenés vida social.");

    } else if ("un caballo" && question2 === "michael jackson" && question3 === "por el mundo con marley") {
    alert("Tenés el 25% del cerebro ocupado por memes, todavía tenés vida social.");

    } else if ("un caballo" && question2 === "michael jackson" && question3 === "intrusos en el espectaculo") {
    alert("Tenés el 25% del cerebro ocupado por memes, todavía tenés vida social.");

    } else {
    alert("¡Felicitaciones, tenés vida más allá del teléfono!");
    }

*/

/*

let month = prompt("Dime en qué mes estamos, y te diré cuántos días tiene:");

month = january = "enero" === "31" ||
february = "febrero" === "28 (29 en años bisiestos)",
    march = "marzo" === "31",
    april = "abril" === "30",
    may = "mayo" === "31",
    june = "junio" === "30",
    july = "julio" === "31",
    august = "agosto" === "31",
    september = "septiembre" === "30",
    october = "octubre" === "31",
    november = "noviembre" === "30",
    december = "diciembre" === "31";

    if */

/* Hacer un programa que juzgue los gustos. Debe pedir al usuario que ingrese su preferido
de algo (helados, comida, música, animales, películas de Disney, etc) y en base a eso
decirle que tan buen gusto tiene. */

/*

alert("Descubrí si tenés buen gusto musical con este test")

let question1 = prompt("Sábado a la noche. No salís, te quedás solx en casa bajoneando helado y ponés una lista de Spotify. ¿Cuál de todas estas elegís?: " + "\n" +
                "a) exitos del rock nacional" + "\n" +
                "b) boleros de luis miguel" + "\n" +
                "c) a perrear con este reggaeton");

    if(question1 === "exitos del rock nacional") {
                    alert("Merecés que el helado te lo lleve Charly");

        } else if(question1 === "boleros de luis miguel" || question1 === "a perrear con este reggaeton") {
            alert("Mmmmmm...");
            } else {
                alert("Ingresá una opción válida");
    }

let question2 = prompt("Podés elegir ir gratis a cualquiera de estos recitales, ¿a cuál vas?:" + "\n" +
                "a) ac/dc" + "\n" +
                "b) ricky maravilla" + "\n" +
                "c) palito ortega");
    
    if(question2 === "ac/dc") {
                    alert("¡Sos crack!");

        } else if(question2 === "ricky maravilla" || question2 === "palito ortega") {
                alert("¿Posta?");
                    } else {
                        alert("Ingresá una opción válida");
    }           

let question3 = prompt("Cae la familia de tu pareja a cenar y querés impresionarlxs con tu buen gusto musical, ¿qué ponés para escuchar de fondo?:" + "\n" +
                "a) paulina rubio" + "\n" +
                "b) arctic monkeys" + "\n" +
                "c) divididos");

    if (question3 === "arctic monkeys" || question3 === "divididos") {
        alert("Entendiste todo");
        } else if(question3 === "paulina rubio") {
            alert("No te lo recomiendo...");
            } else {
                alert("Ingresá una opción válida");
    }

if (question1 === "exitos del rock nacional" && question2 === "ac/dc" && question3 === "arctic monkeys" || question3 === "divididos") {
    alert("Tenés un oído privilegiado, quiero juntarme con vos.")
} else {
    alert("¿Por qué eres así?")
}

*/
/*

let paraguas = prompt("¿Tiene paraguas?");
let dia = prompt("¿Cómo está el día");

let tieneParaguas = paraguas === "si";
let diaFeo = dia === "nublado" || dia === "lluvioso";

//if (paraguas === "si" && (dia === "nublado" // dia === "lluvioso"))

if (tieneParaguas && diaFeo) {
    alert("Te conviene llevar paraguas");
}
*/

/* Hacer un programa que pida adivinar los ingredientes de un trago (3 ó 4).
Nos tiene que pedir ingresar los ingredientes de a uno, y no debe importar el orden
en el que se ingresan. */

alert("🍸 Ingresá los ingredientes para preparar un mojito. 🍸");

let ingredient1 = prompt("Primer ingrediente");
    ingredient1 = ingredient1.toLowerCase ();
let ingredient2 = prompt("Segundo ingrediente");
    ingredient2 = ingredient2.toLowerCase ();
let ingredient3 = prompt("Tercer ingrediente");
    ingredient3 = ingredient3.toLowerCase ();
let ingredient4 = prompt("Cuarto ingrediente");
    ingredient4 = ingredient4.toLowerCase ();

let answer1 = ingredient1 === "ron"||
              ingredient1 === "lima" ||
              ingredient1 === "menta" ||
              ingredient1 === "azucar";

let answer2 = ingredient2 === "ron"||
              ingredient2 === "lima" ||
              ingredient2 === "menta" ||
              ingredient2 === "azucar";

let answer3 = ingredient3 === "ron"||
              ingredient3 === "lima" ||
              ingredient3 === "menta" ||
              ingredient3 === "azucar";

let answer4 = ingredient4 === "ron"||
              ingredient4 === "lima" ||
              ingredient4 === "menta" ||
              ingredient4 === "azucar";

if (answer1 &&
    answer2 &&
    answer3 && 
    answer4 &&
    ingredient1 !== ingredient2 &&
    ingredient1 !== ingredient3 &&
    ingredient1 !== ingredient4 &&
    ingredient2 !== ingredient3 &&
    ingredient2 !== ingredient4 &&
    ingredient3 !== ingredient4) {
    alert("🍸 ¡Felicitaciones! Ya podés servir tragos. 🍸");
} else {
    alert("Intentalo nuevamente, alguna de las opciones no es válida.");
}






