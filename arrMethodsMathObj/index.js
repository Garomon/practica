// ========================= Metodos transformadores ============================ 
// (Modifican el array original)

let animales = ["perro", "gato", "raton", "jirafa"]

let resultadoPop = animales.pop(); //.pop() elimina el ultimo elemento de un array y lo devuelve
// jirafa
// [perro,gato,raton]



let animales2 = ["perro", "gato", "raton", "jirafa"]

let resultadoShift = animales2.shift(); // .shift() elimina el primer elemnto de un array y lo devuelve
//perro]
//[gato,raton,jirafa



let animales3 = ["perro", "gato", "raton", "jirafa"]

let resuladoPush = animales3.push("cucaracha") // .push(); agrega uno o mas elemento al final del array y devuelve nueva longitud
// [perro,gato,raton,jirafa,cucaracha]



let animales4 = ["perro", "gato", "raton", "jirafa"]

let resuladoReverse = animales4.reverse() // .reverse(); invierte el orden de los elementos de un array
// [ 'jirafa', 'raton', 'gato', 'perro' ]



let animales5 = ["perro", "gato", "raton", "jirafa"]

let resultadoUnShift =  animales5.unshift("caracol") // .unshift(); agrega uno o mas elementos al inicio del array y devuelve nueva longitud
// [ 'caracol', 'perro', 'gato', 'raton', 'jirafa' ]



let animales6 = ["perro", "gato", "raton", "jirafa"]

let resultadoSort = animales6.sort(); // .sort() Orden alfabetico o numero segun Unicode
//[ 'gato', 'jirafa', 'perro', 'raton' ]


let animales7 = ["perro", "gato", "raton", "jirafa"]

let resultadoSplice = animales7.splice(1,1,"leon") // .splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. 
// (i inicial, # a eliminar, elemento agregar)
// [ 'perro', 'leon', 'raton', 'jirafa' ]



// ========================= Metodos accesores ============================ 
// (NO Modifican el array original y retornan representacion del array)




let nombres = ["garo", "marco", "pedro", "elena"]

let resultadoJoin = nombres.join("-") // .join() une los elementos de un array en una cadena y devuelve esta cadena (se puede asignar separador)
// "garo-marco-pedro-elena"


let resultadoSlice = nombres.slice(0,3) // .slice() devuelve una copia de una parte del array dentro de un nuevo array
// [ 'garo', 'marco', 'pedro' ]


// ========================= Metodos de Iteracion ============================ 

let myArray = [10,20,30,40,50]
let nombress = ["Garo", "Tono", "Angela", "Pepe", "Alberto"]

let valoresFiltrados = myArray.filter(numero => numero <= 30) // .filter(); itera sobre todo el array y retorna un nuevo arreglo con los elementos que cumplen con los requerimientos 
// [ 10, 20, 30 ]

let valoresMapeados = myArray.map(numero => numero * 2) // .map(); itera todos los elementos de un array y retorna un nuevo arreglo
// [ 20, 40, 60, 80, 100 ]

let valoresReduce = myArray.reduce((acc, num) => acc + num) // .reduce(); Nos permite, dada una función, “reducirlo” los elementos de un arreglo en un nuevo y único valor. (Acumulador,Elemento)
// 150


// ========================== OBJETO MATH ============================ 
let numeroMath = Math.sqrt(25) // Raiz Cuadrada positiva de un numero
// 5
let numeroMath2 = Math.cbrt(25) // Raiz Cubica de un numero
// 2.924017738212866
let numeroMath3 = Math.max(25, 5, 10, 1000, 50) //Devuelve el numero mas grande
// 1000
let numeroMath4 = Math.min(25, 5, 10, 1000, 50) //Devuelve el numero mas chico
// 5
let numeroMath5 = Math.random() // Devuelve un numero aleatorio entre 0 y 1 
// random
let numeroMath6 = Math.round(25.4) // Redondea al numero mas cercano hacia arriba o abajo
// 25
let numeroMath8 = Math.floor(25.9) // Redonde el numero para abajo lo decimales
// 25
let numeroMath9 = Math.trunc(25.7) // Elimina los decimales
//25



