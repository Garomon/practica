const contenedor = document.querySelector(".flex-container")

document.querySelector(".send-button").value = 'COMPRAR'

const crearLlave = (nombre,modelo,precio) => {
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p><em>Precio: <b>$${precio}</b></em></p>`;
    return [img,nombre,modelo,precio];
}


const changeHidden = (number) => {
    document.querySelector(".key-data").value = number
}

let documetFragment = document.createDocumentFragment();

for(let i = 1; i <= 20; i++) {
    let modeloRandom = Math.floor(Math.random()*1000)
    let precioRandom = Math.floor(Math.random()*100)
    let llave = crearLlave(`Llave ${i}`, `Modelo: #${modeloRandom}`, precioRandom)
    let newDiv = document.createElement("DIV");
    newDiv.addEventListener("click",() => {{document.querySelector(".key-data").value = modeloRandom}});
    newDiv.tabIndex = i;
    newDiv.classList.add(`item-${i}`, 'flex-item');
    newDiv.innerHTML = `${llave[0]} ${llave[1]} ${llave[2]} ${llave[3]}`
    documetFragment.appendChild(newDiv);
}


contenedor.appendChild(documetFragment)