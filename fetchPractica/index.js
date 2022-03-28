




let pokemon = prompt("Que pokemon quieres buscar ?")

let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

async function traerPokemon(){

    const respuesta = await fetch(url);

    if(!respuesta.ok){
        let oops = "404 no encontre ni maiz"
        alert(oops)
        throw new Error(oops);
    }

    const nombre = respuesta.json();
    return nombre;
}

function mostarNombre(n){
    document.getElementById('mensaje').innerHTML = n.name
}


traerPokemon().then(mostarNombre)

