/*Escribir un algoritmo que: imprima los numeros del 1 al 100, con la condicion que si el numero a imprimir es multiplo de 3, imprimar el string 'Fizz, si el numero es
multiplo de 5 que imprima 'Buzz', y si es multiplo de de ambos que imprima 'FizzBuzz' */


function imprimeNumeros() {
    for(let i = 1; i < 101; i++){
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if(i % 5 == 0) {
            console.log('Buzz')
        } else if(i % 3 == 0){
            console.log('Fizz')
        }
        console.log(i);
    }
}

imprimeNumeros();

