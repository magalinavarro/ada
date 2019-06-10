/* Variables */

let mes = prompt("Ingrese el mes");
let dia = prompt("Ingrese el dia de su nacimiento");

/* Aries */

if ((mes === "marzo" && dia >= 21 && dia <= 31) || 
    (mes === "abril" && dia >= 1 && dia <= 20)) {  
    alert("♈ Tu signo es Aries ♈" + "\n" +
    "Hoy se despertará con más valentía que la habitual. Exprese las ideas con franqueza, pero deberá cuidarse de no herir los sentimientos ajenos.");

/* Tauro */

} else if ((mes === "abril" && dia >= 21 && dia <= 30) ||
    (mes === "mayo" && dia >= 1 && dia <= 20)) {
    alert("♉ Tu signo es Tauro ♉" + "\n" +
    "Seguramente la comunicación con los demás será casi imposible en este día. Dedique más atención al modo de expresar sus ideas y todo mejorará.");

/* Geminis */

} else if ((mes === "mayo" && dia >=21 && dia <= 31) ||
    (mes === "junio" && dia >= 1 && dia <= 21)) {
    alert("♊ Tu signo es Geminis ♊" + "\n" +
    "Gracias a la presencia lunar, podrá terminar todo lo que se propuso, Sepa que toda su energía vital se desplegará en todas las actividades que tenga.");

/* Cancer */

} else if ((mes === "junio" && dia >= 1 && dia <= 22 ||
    (mes === "julio" && dia >= 1 && dia <= 22))) {
    alert("♋ Tu signo es Cancer ♋" + "\n" +
    "Intente observar a la gente que lo rodea y de esta forma, comprobará que usted tiene las mismas oportunidades que los demás. Deje de desvalorizarse sin causa.");

/* Leo */

} else if ((mes === "julio" && dia >= 1 && dia <= 23 ||
    (mes === "agosto" && dia >= 1 && dia < 23))) {
    alert("♌ Tu signo es Leo ♌" + "\n" +
    "Entienda que antes de establecer cualquiera de los objetivos que tiene para su futuro, debe determinar las pautas concretas sabiendo con claridad los contras.");

/* Virgo */

} else if ((mes === "agosto" && dia >= 1 && dia <= 24 ||
    (mes === "septiembre" && dia >= 1 && dia <= 23))) {
    alert("♍ Tu signo es Virgo ♍" + "\n" +
    "Sepa que necesitará tranquilizarse y estar preparado para lo que se acerque. En esta jornada, sentirá que algo nuevo y bueno está por suceder.");

/* Libra */

} else if ((mes === "septiembre" && dia >= 1 && dia <= 24 ||
    (mes === "octubre" && dia >= 1 && dia <= 22))) {
    alert("♎ Tu signo es Libra ♎" + "\n" +
    "En esta jornada intente estar preparado, ya saldrán a la luz aquellos cuestionamientos que permanecieron ocultos en su interior por mucho tiempo.");

/* Escorpio */

} else if ((mes === "octubre" && dia >= 1 && dia <= 23 ||
    (mes === "noviembre" && dia >= 1 && dia <= 22))) {
    alert("♏ Tu signo es Escorpio ♏" + "\n" +
    "Momento para reconsiderar muchos aspectos de su vida que lo atormentan. No postergue por más tiempo una decisión que determinará su futuro cercano.");

/* Sagitario */

} else if ((mes === "noviembre" && dia >= 1 && dia <= 23 ||
    (mes === "diciembre" && dia >= 1 && dia <= 21))) {
    alert("♐ Tu signo es Sagitario ♐" + "\n" +
    "Deberá aprovechar este período profesional para cosechar todo lo que sembró hace tiempo para su vida. Relájese y disfrute de las ganancias de los proyectos.");

/* Capricornio */

} else if (mes === "diciembre" && dia >= 1 && dia <= 23 ||
    (mes === "enero" && dia >= 1 && dia <= 21)) {
    alert("♑ Tu signo es Capricornio ♑" + "\n" +
    "Aproveche que sus poderes perceptivos estarán muy afinados. Utilícelos para ayudar a alguien que atraviesa un mal momento y necesita de ayuda.");

/* Acuario */

} else if ((mes === "enero" && dia >= 1 && dia <= 20 ||
    (mes === "febrero" && dia >= 1 && dia <= 19))) {
    alert("♒ Tu signo es Acuario ♒" + "\n" +
    "Evite debilitarse, ya que todo va a salir como lo tenía planeado. Aunque la lentitud a usted lo exaspere, sepa que tendrá que ser paciente para alcanzar el éxito.");

/* Piscis */

} else if ((mes === "febrero" && dia >= 1 && dia <= 20 ||
    (mes === "marzo" && dia >= 1 && dia <= 20))) {
    alert("♓ Tu signo es Piscis ♓" + "\n" +
    "Hoy será una jornada donde podrá exponer su vitalidad e inteligencia. Ponga en marcha todos los proyectos postergados y en poco tiempo tendrá ganancias.");

    } else {
        alert("Alguno de los datos ingresados está mal, intentalo de nuevo.")
    }