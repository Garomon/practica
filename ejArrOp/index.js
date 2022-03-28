let usuario = {
    nombre: "Garomon",
    colorFav: "rojo",
    hobbie: "programar",
    comidaFav: "cochinita"
}

let arrUsuario = [
    'Garomon',
    'rojo',
    'programar',
    'cochinita'
]

let strinUusario = "xd"

let arr = [0,"xd", 9]

let nombre = usuario['nombre'];
let colorFavorito = usuario['colorFav']
let hobbie = arrUsuario[2]

let frase = `el nombre de usuario es <b>${nombre}</b>, <br/> 
            el color favorito es <b>${colorFavorito}</b>, <br/> 
            el Hobbie es <b>${hobbie}</b>, <br/> 
            y su comida favorita es <b>${arrUsuario[3]}</b>`


console.log(typeof arrUsuario)
console.log(typeof usuario)
console.log(typeof strinUusario)
console.log(typeof arr)