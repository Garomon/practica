/*
A) El pobre que gano la loteria decide hacer una fiesta oara festejar que salio de la pobreza y compro una maquina que:
    - Deja pasar solo a mayores de edad
    - La primer persona que entre despues de las 2AM , no paga
*/

let entraGratis = false;

const maquinaValidadora = () => {
    let edad = prompt('Ingresa tu edad')
    let time = prompt('Ingresa la hora')

    if(time >= 2 && edad >= 18 && entraGratis === false){
        entraGratis = true;
        document.write('Eres la primera persona en llegar despues de las 2AM, puedes entrar gratis')
    } else if(edad >= 18){
        document.write('Puedes pasar joven')
    } else if (time === 2 && edad < 18 && entraGratis === false) {
        document.write('Tas chavo no puedes entrar aunque hayas llegado primero que nadie a las 2AM y sea gratis, Sorry')
    } else {
        document.write('Nel tas muy morro, abrete')
    }
}



/* ====================== Fin de A ====================== */

/*
B) Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
    Pasados los 30 días mostrar la situacion final de todos los alumnos (# total de presentes y austentes).
    Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas acalar que esta reprobado.
*/


let cantindad = prompt('Cuantos alumnos hay?')
let arrayAlumnos = [];

for (let i = 0; i < cantindad; i++){
    arrayAlumnos[i] = [prompt('Nombre del alumno ' + (i + 1)), 0]
}

const tomarAsistencia = (nombre, p) => {

    let presencia = prompt(nombre);
    if (presencia == "P" || presencia == "p"){
        arrayAlumnos[p][1]++;
    }
}


for (let i = 0; i < 30; i++){
    for(alumno in arrayAlumnos){
        tomarAsistencia(arrayAlumnos[alumno][0], alumno);
    }
}

for (alumno in arrayAlumnos){
    let resultado = `${arrayAlumnos[alumno][0]}: <br>
    __________Asistencias: ${arrayAlumnos[alumno][1]} <br>
    __________Ausencias: ${30 - arrayAlumnos[alumno][1]} <br>`

    document.write(resultado)

    if((30 - arrayAlumnos[alumno][1]) > 3){
        document.write(`Estas reprobado en este Mes por INASISTENCIAS MAQUINOLA. Faltase a : ${30 - arrayAlumnos[alumno][1]} clases del mes que es mayor al 10% de faltas permitidas (3)`)
    }
    
}
