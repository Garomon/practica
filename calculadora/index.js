const suma = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
const raizCuadrada =  (num1) => Math.sqrt(num1);
const raizCubica = (num1) => Math.cbrt(num1);
const potencia =  (num1, num2) => Math.pow(num1, num2)


alert("Que operacion deseas realizar?")
let operacion =  prompt("1: Suma, 2: Resta, 3: Multiplicar, 4: Dividir, 5: Raiz cuadrada, 6: Raiz cubica, 7: Potencia");



if(operacion == 1 || operacion == "Suma"){
    let numero1 = parseInt(prompt('Ingresa el primer numero a sumar'))
    let numero2 = parseInt(prompt('Ingresa el segundo numero a sumar'))
    document.write(`El resultado de tu suma es: ${suma(numero1,numero2)}`)
} else if (operacion == 2 || operacion == "Resta" ){
    let numero1 = parseInt(prompt('Ingresa el primer numero a restar'))
    let numero2 = parseInt(prompt('Ingresa el segundo numero a restar'))
    document.write(`El resultado de tu resta es: ${restar(numero1,numero2)}`)
} else if (operacion == 3 || operacion == "Multipliacion"){
    let numero1 = parseInt(prompt('Ingresa el primer numero a multiplicar'))
    let numero2 = parseInt(prompt('Ingresa el segundo numero a multiplicar'))
    document.write(`El resultado de tu multiplicacion es: ${multiplicar(numero1,numero2)}`)
} else if (operacion == 4 || operacion == "Dividir"){
    let numero1 = parseInt(prompt('Ingresa el primer numero a dividir'))
    let numero2 = parseInt(prompt('Ingresa el segundo numero a dividir'))
    document.write(`El resultado de tu division es: ${dividir(numero1,numero2)}`)
} else if (operacion == 5 || operacion == 'Raiz cuadrada'){
    let numero1 = parseInt(prompt('Ingresa el numero para su raiz cuadrada'))
    document.write(`El resultado de tu division es: ${raizCuadrada(numero1)}`)
} else if (operacion == 6 || operacion == 'Raiz cubica') {
    let numero1 = parseInt(prompt('Ingresa el numero para su raiz cubica'))
    document.write(`El resultado de tu division es: ${raizCubica(numero1)}`)
} else if (operacion == 7 || operacion == "Potencia"){
    let numero1 = parseInt(prompt('Ingresa el numero a potenciar'))
    let numero2 = parseInt(prompt('Ingresa la potencia o exponencial'))
    document.write(`El resultado de tu division es: ${potencia(numero1,numero2)}`)
} else {
    alert("No se encontro valor asociado a la operacion, intenta con 1,2,3,4,5,6,7 o 'Suma','Resta','Multiplicacion' ,'Division', 'Raiz cuadrada' 'Raiz cubica' 'Potencia'")
}

