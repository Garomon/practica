

const clubAmerica = {
    Nombre: "Club America",
    partidos: [],
    plantilla: [],
    campeonatos: [],
    entrenador: "Tano Ortiz"
}


const agregaPartidos = (contrincante, fecha) => {

    let partido = [contrincante, fecha]
    clubAmerica.partidos.push(partido)

}

agregaPartidos("Monterrey", "26/03/2022")

const muestraPartidos = () => {
    document.write(`El proximo partido del America es contra ${clubAmerica.partidos[0][0]} el dia ${clubAmerica.partidos[0][1]}`)
}

muestraPartidos();

