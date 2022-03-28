/*
C) Cofla ya tiene su nuevo celular y ahora está mirando las apps de la Play store ya que quiere jugar algunosjuego populares, que tengan buena ountuacion y que pesen poco.
Pero las 7 apps que llamaron su atencion son un tanto similares y sabe que si se descarga todas, probablemente juegue con todas, pero el se va a decargar solo 2 para tener tiempo perdido,
ayuda a dedcidir a cofla

CREAR SOLUCIONES

- Crear un sistema que permita ayudar a cofla a decidir cual app descargar.
- La informacion de los instaladores debe contener la contaidad de descargas y la puntuacion
- Las Apps se deben poder instalar, abrir, cerrar y desinstalar.
*/


class App{

    constructor(nombre, puntuacion, peso, descargas){
        this.nombre = nombre;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.descargas =  descargas;
        this.instalada = false;
        this.iniciada =  false;
    }

    instalar(){
        if(this.instalada == false){
        alert('App instalada exitosamente')
        this.instalada = true;
        } else if(this.instalada == true){
        alert('App instalada anteriormente')    
        }
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
        alert('Abriendo app')
        this.iniciada = true;
        } else if (this.iniciada == true){
            alert('La App se encuentra actualmente abierta')
        } else {
            alert('Instala la aplicacion')
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            alert('La app se ha cerrado exitosamente')
            this.iniciada = false;
            } else if (this.iniciada == false){
                alert('No esta abierta o instalada la app')
            }
    }

    desintalar(){
        if(this.instalada == true){
            alert('App desinstalada')
            this.instalada = false;
        } else if(this.instalada == false){
            alert('No tienes instalada de App, porfavor Instalala')
        }
    }

    appInfo(){
        return `
        Nombre: <b>${this.nombre}</b> <br>
        Puntuacion: <b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Descargas: <b>${this.descargas}</b> <br>
        <br>
        `
    }
}




const monkeyGame = new App("Monkey Game","9/10", "5GB", "16.000")
const dogGame = new App("Dog Game","8/10", "1GB", "86.000")
const catGame = new App("Cat Game","9/10", "11GB", "6.000")
const humanGame = new App("Human Game","9.5/10", "7GB", "6.000")
const birdGame = new App("Bird Game","8/10", "10GB", "8.000")
const emberGame = new App("Ember Game","9/10", "1GB", "81.000")
const bloodGame = new App("Blood Game","10/10", "1GB", "85.000")




document.write(monkeyGame.appInfo())
document.write(dogGame.appInfo())
document.write(catGame.appInfo())
document.write(humanGame.appInfo())
document.write(birdGame.appInfo())
document.write(emberGame.appInfo())
document.write(bloodGame.appInfo())