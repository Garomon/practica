
let cadena = 'cadena de prueba';
let cadena2 =" cadena 2";
let numero = 500;
let array = ["pedro", "jorge", 30]

let resultado = cadena.concat(cadena2); // .concat() - junta dos o mas cadenas y retorna una nueva 
// 'cadena de prueba cadena 2'


let resultado2 = cadena.startsWith('cadena') // .startsWith() - Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino false
// True
let resultado3 = cadena.startsWith('Cadena')
//False



let resultado4 = cadena.endsWith('prueba') // .endsWith() - Si una cadena termina con los caracteres de otra cadena, devuelve true, sino false
//True
let resultado5 = cadena.endsWith('pruebaa')
//False


let resultado6 = cadena.includes('de ') // .includes() - Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
//True


let resultado7 = cadena.indexOf(' ') // .indexOf() - Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
// 6 (por que es el indice del primer espacio en blanco encontrado)
let resultado8 = cadena.indexOf('cadenaaa')
// -1 (por que no existe en la cadena)


let resultado9 = cadena.lastIndexOf(' ') // .lastIndexOf() - Devuelve el ultimo indice del primer caracter de la cadena, si no existse devuelve -1
// 9 (por que es el indice del ultimo espacio en blanco encontrado)


let resultado10 = cadena.padStart(25, "xD ") // .padStart() - Rellena la cadena al principio con los caracteres deseados especificando el maximo del indice
// xD xD xD cadena de prueba
let resultado11 = cadena.padEnd(25, " xD") // .padEnd() - Rellena cadena al final con los caracteres deseados especificando maximo del indice 
// cadena de prueba xD xD xD


let resultado12 = cadena.repeat(2) // .repeat(); Devuelve la misma cadena pero repetida las veces especificadas
// cadena de pruebacadena de prueba


let resultado13 = cadena.split(" ") // .split(); Transforma una cadena en un array con separador por parametro
// [ 'cadena', 'de', 'prueba' ]


let resultado14 = cadena.substring(0,9) // .substring() Crea un nuevo string con especificacion del indice en parametros.
// "cadena de"


let resultado15 = cadena.toUpperCase(); // .toUpperCase(); Convierte string a mayuscula
// "CADENA DE PRUEBA"
let resultado16 = cadena.toLowerCase(); // .toLowerCase(); Convierte string a minuscula
// "cadena de prueba"


let resultado17 = numero.toString(); // .toString(); Convierte el tipo de dato a String
// "300"
let resultado18 = array.toString();
// "pedro,jorge,30"


let resultado19 = cadena.trim(); //  .trim() elimina los espacios en blanco en ambos extremos del string // "   Hola Mundo   " -> "Hola Mundo"
let resultado20 = cadena.trimEnd(); // trimEnd() elimina los espacios en blanco al final de una cadena de carácteres. // "   Hola Mundo   " -> "   Hola Mundo"
let resultado21 = cadena.trimStart(); // trimStart() method removes whitespace from the beginning of a string. // "   Hola Mundo   " -> "Hola Mundo   "

