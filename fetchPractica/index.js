
let pokemon = "charizard"
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
    document.querySelector('#mensaje').innerHTML = `Hola soy ${n.name} y mi experiencia base es de ${n.base_experience} y mido ${n.height} <br>
     Mi ataque favorito se llama ${n.moves[0].move.name}
     `
}

traerPokemon().then(mostarNombre)
