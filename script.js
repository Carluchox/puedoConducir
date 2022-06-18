let nombre = prompt ("Hola, internauta. ¿Cómo te llamas?");

let edad = prompt ("Veo que quieres manejar un automovil. Antes te pregunto: ¿Qué edad tienes?");

function puedoConducir(nombre, edad) {
    if (edad < 18){
        console.log(`Lo siento, ${nombre}. No puedes conducir aún.`);
        document.write(`Lo siento, ${nombre}. No puedes conducir aún.`);
    } else {
        console.log(`${nombre}, por supuesto que puedes conducir`);
        document.write(`${nombre}, por supuesto que puedes conducir`);
    }
}

puedoConducir(nombre, edad);
