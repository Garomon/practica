//dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres sin metodos


function inversor(texto){
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }

    console.log(invertido)
    return invertido;
}


inversor('Garo')