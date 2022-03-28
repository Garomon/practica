//Dada una cadena de texto, comprobar si es un palindromo o no.
//Los palindromos son palabras que se leen igual aun estando invertidas
// por ejemplo: ana bob otto allivessevilla



function palindromo(texto){
    let arrTexto = texto.split('').reverse().join('');
    console.log(arrTexto);
    
    if(arrTexto === texto){
        return console.log(true);
    } else {
        return console.log(false);
    }
    
}

palindromo('bob'); 



