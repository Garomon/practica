//Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
//La frase y la palabra deben ser parametros de una funcion.



function coincidences(phrase, word){

    let cleanText = phrase.toLowerCase().replace(/[!¡.,-]/gi, "");
    let counter = 0;

    if(cleanText.includes(word)){
        let words = cleanText.split(" ");
        words.map(element => element === word ? counter++ : counter)  
        
    } else {
        counter = 0;
    }

    return console.log(`En esta frase se encuentra ${counter} veces la palabra ${word}, y la frase es: ${phrase}`)
}


coincidences('Hola, soy garo, el amigo de todo los niños y garo tambien, soy garo. garo, soy garo por sexta vez garo', 'papuuu')
