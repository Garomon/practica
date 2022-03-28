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
    ingles: ["Joaquin", "Ivonne", "Cofla"],
    biologia: ["Garo", "Cofla"]
}


class Materia {
    constructor(materia,profesor,alumnos){
        this.materia = materia;
        this.profesor = profesor;
        this.alumnos = alumnos
    }
}

const Historia = new Materia("Historia", "Pedro Paramo", alumnos.historia)
const Espanol = new Materia("Espanol", "Maria Becerra", alumnos.espanol)
const Ingles = new Materia("Ingles", "Nicolas Lacarmon", alumnos.ingles)
const Biologia = new Materia("Biologia", "Maria Lorena Briseno", alumnos.biologia)



const clasesUniversidad = (materia) => {

    return `
    MATERIA: ${materia.materia}<br>
    PROFESOR: ${materia.profesor}<br>
    ALUMNOS: ${materia.alumnos}<br>
    <br>
    `
}


const inscribir = (alumno, materia) => {
  
    if(alumnos[materia].length >= 20){
        document.write(`Lo siento ${alumno}, las clases de la materia ${materia} ya estan llenas <br>`)
    } else if (alumnos[materia].length < 20) {
        document.write(`Inscrito en la materia <b>${materia}</b> <br>
        <br>`)
        alumnos[materia].push(`${alumno}`)
    } 
}


document.write(clasesUniversidad(Historia))
document.write(clasesUniversidad(Espanol))
document.write(clasesUniversidad(Ingles))
document.write(clasesUniversidad(Biologia))

let persona = prompt("Ingresa Nombre de Alumno")
let matInscripcion = prompt("Ingresa la materia que deseas inscribir")

inscribir(persona, matInscripcion);


const clasesPersonales = (persona) => {
   
    let counter = 0;
    var clasesAlumno = [];
    let profesAlumno = [];
    for(alu1 in alumnos){
       for(alu2 of alumnos[alu1]){
           if(alu2 === persona){
           counter++;
           clasesAlumno.push(alu1)
           } 
       }
    }
 
    switch(clasesAlumno.includes("historia")){
    case true:
    profesAlumno.push(Historia.profesor);
    break;
    case false:
    break;    
    }
    
    switch(clasesAlumno.includes("espanol")){
    case true:
    profesAlumno.push(Espanol.profesor);
    break;
    case false:
    break;    
    }

    switch(clasesAlumno.includes("ingles")){
    case true:
    profesAlumno.push(Ingles.profesor);
    break;
    case false:
    break;    
    }

    switch(clasesAlumno.includes("biologia")){
    case true:
    profesAlumno.push(Biologia.profesor);
    break;
    case false:
    break;    
    }

    

    return `
    El alumno <b>${persona}</b> se encuentra enrolado
    en <b>${counter}</b> clases. <br>
    <br>
    Clases: ${clasesAlumno.map(elem => elem.toUpperCase())} <br>
    Profesores: ${profesAlumno}
    <br> <br>
    `
}


document.write(clasesPersonales(persona));

document.write(clasesUniversidad(Historia))
document.write(clasesUniversidad(Espanol))
document.write(clasesUniversidad(Ingles))
document.write(clasesUniversidad(Biologia))




