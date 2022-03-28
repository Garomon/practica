// functions


let sumador = numero => numero += 1;




function sumador2(numero){
    return numero += 1
}



console.log(sumador(5))
console.log(sumador2(6))



const suma = (num1, num2) => num1 + num2;

function suma2(num1, num2){
    return num1 + num2
}

console.log(suma(3,7))
console.log(suma2(3, 8))



const  saludar = (nombre, casa, mascota) => document.write(`Hola ${nombre}! Bienvenido a Hogwarts, haz elegido la casa de ${casa} y se te ha asignado tu companero ${mascota} <br>`)

function saludar2(nombre, casa, mascota){
    document.write(`Hola ${nombre}! Bienvenido a Hogwarts, haz elegido la casa de ${casa} y se te ha asignado tu companero ${mascota} <br>`)
}

saludar("Harry","Gryffindor","Lechuza")
saludar2("Ron","Gryffindor","Rata")
saludar("Draco","Slytherin","serpiente")
