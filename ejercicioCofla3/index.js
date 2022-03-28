/*
A) Cofla entró a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atencion 3 telefonos especificamente,
El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
el antes de comprar esos celulares quiere ver las cualidas y comportamientos de cada uno para poder comprarlos ahi entramos nosotros.

CREAR SOLUCIONES

- Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares. 
- Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara, y memoria ram
- Cada celular debe poder prender y apagar, reiniciar, tomar fotos y grabar

======================================

B) Cofla no está satisfecho con los celulares así que decide ir a la seccion de celulares de alta gama, donde va a poder encontrar los celulares mas caros de lugar, asi que al enttar
vio dos celulares que le encantaron, estos 2 celulares de alta gama pueden hacer todo lo que podian hacer los 3 anteriores pero tienen mejores caracteristicas y ademas pueden grabar
en camara super lenta, tiene reconocimiento facial y una camara extra.

CREAR SOLUCIONES

- Implementar todas estas cualidades en los celulares de alta gama

======================================
*/



class Celular {
    constructor(color,peso,resPan,resCam,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resPan = resPan;
        this.resCam = resCam;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
    }

    prenderApagar(){
        if(this.encendido == false){
            alert('Encendiendo el celular...')
            alert('Celular encendido')
            this.encendido = true;
        } else if(this.encendido == true){
            alert('Apagando el celular...')
            alert('Adios Maquinola ;) ')
            this.encendido = false;
        }
    }   


    reiniciar(){
        if(this.encendido == true){
            alert('Reiniciando celular...')
            alert('Celular reiniciado')
        } else {
            alert('El celular se encuentra apagado')
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resCam}`)
    }

    grabarVideo(){
        alert(`Video grabado en una resolucion de: ${this.resCam}`)
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Resolucion de pantalla: <b>${this.resPan}</b> <br>
        Resolucion de camara: <b>${this.resCam}</b> <br>
        Memoria Ram: <b>${this.memoriaRam}</b> <br>
        `
    }
}


class AltaGama extends Celular{
    constructor(color,peso,resPan,resCam,memoriaRam, extraCam){
        super(color,peso,resPan,resCam,memoriaRam);
        this.extraCam = extraCam
    }

    camaraLenta(){
        alert('Haz grabando en camara super lenta')
    }

    reconocimientoFacil(){
        alert('Iniciando un reconocimiento facial')
    }
    altaGamaInfo(){
        return this.mobileInfo() + `Camara Extra: <b>${this.extraCam}</b><br>`
    }
}


const iphone = new Celular("Space Gray", "150gr", "1920 x 1080", "40 Mpx", "12 GB")
const android = new Celular("Rojo", "200gr", "1920 x 1080", "12 Mpx", "8 GB")
const blackberry = new Celular("Perla", "100gr", "1920 x 1080", "18 Mpx", "32 GB")
const iphonePlus =  new AltaGama("Space Gray Rose", "80gr", "4920 x 6080", "60 Mpx", "42 GB", "7 Mpx")
const androidPlus =  new AltaGama("Verde", "80gr", "4920 x 6080", "60 Mpx", "32 GB", "8 Mpx")


document.write(iphonePlus.altaGamaInfo() + "<br>");
document.write(androidPlus.altaGamaInfo() + "<br>");
document.write(blackberry.mobileInfo() + "<br>");
document.write(android.mobileInfo() + "<br>");
document.write(iphone.mobileInfo()) + "<br>";