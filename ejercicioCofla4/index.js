/*
1 Crear una funcion que al pasarle como parametro la materia nos devuelva:
- Profesor asignado
- El nombre de todos los alumnos
2 Crear funcion que nos diga en cuantas clases esta cofla.
3 Nombrar las clases en las que esta y los profersores de cada una.
*/

const alumnos = {
    historia: ["Garo", "Pepe", "Maria", "Alexa", "Joaquin", "Ivonne", "Ana Carolina", "Andrea", "Cofla"],
    espanol: ["Garo", "Maria", "Alexa", "Joaquin", "Ivonne"],
    ingles: ["Joaquin", "Ivonne", "Andrea", "Cofla"],
    biologia: ["Garo", "Andrea", "Cofla"]
}


class Materia {
    constructor(materia,profesor,alumnos){
        this.materia = materia;
        this.profesor = profesor;
        this.alumnos = alumnos
    }
}

const historia = new Materia("Historia", "Pedro Paramo", alumnos.historia)
const espanol = new Materia("Espanol", "Maria Becerra", alumnos.espanol)
const ingles = new Materia("Ingles", "Nicolas Lacarmon", alumnos.ingles)
const biologia = new Materia("Biologia", "Maria Becerra", alumnos.biologia)



const clasesUniversidad = (materia) => {

    return `
    MATERIA: ${materia.materia}<br>
    PROFESOR: ${materia.profesor}<br>
    ALUMNOS: ${materia.alumnos}<br>
    <br>
    `
}

document.write(clasesUniversidad(historia))
document.write(clasesUniversidad(espanol))
document.write(clasesUniversidad(ingles))
document.write(clasesUniversidad(biologia))


const clasesPersonales = (alumno) => {
    let counter = 0;
    for(alumno in alumnos){
       for(alumno of alumnos[alumno]){
           if(alumno === "Cofla")
           counter++;
       }
    }
    return `
    El alumno <b>${alumno}</b> se encuentra enrolado
    en <b>${counter}</b> clases. 
    `
}


document.write(clasesPersonales("Cofla"));

