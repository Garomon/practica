/* 
A) Tres chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante
con su respectivo helado.
Ellos quieren comprar el helado más caro que puedan con el dinero que tienen, asi que... veamos como ayudarlos.

Roberto tiene $1,5 usd
Pedro tiene $1.7 usd
Cofla tiene $3 usd 

Los precios de helados son los siguientes:
Palito de helado de agua: $0.6 usd
Palito de helado de crema: $1 usd
Bombon de helado marca heladix: $1.6 usd
Bombon de helado marca heladivich: $1.7 usd
Bombon de helado marca helardo: $1.8 usd
Potecito de helado con confites: $2.9 usd
Pote 1/4 KG --> $2.9 usd


Crear soluciones: 
-Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar
-Si hay 2 o mas con el mismo precio, mostrar ambos.
-Cofla quiere saber cuanto es el vuelto.
*/



const helAgua = 0.6
const helCrema = 1
const bombonHeladix = 1.6
const bombonHeladivich = 1.7
const bombonHelardo = 1.8
const potConfite = 2.9
const potMedioKg = 2.9
let cambioDeVuelta = 0
let helado = ''

let monto = prompt("Cuanto dinero tienen ?")

monto = parseInt(monto)

    if(monto >= 0.6 && monto < 1){
        helado = "Palito de helado de agua"
        cambioDeVuelta =  monto - helAgua
    } else if (monto >= 1 && monto < 1.6){
        helado = "Palito de helado de crema"
        cambioDeVuelta = monto - helCrema
    } else if (monto >= 1.6 && monto < 1.7){
        helado = "Bombon de helado marca heladix"
        cambioDeVuelta = monto - bombonHeladix
    } else if (monto >= 1.7 && monto < 1.8){
        helado = "Bombon de helado marca heladivich"
        cambioDeVuelta = monto - bombonHeladivich
    } else if (monto >= 1.8 && monto < 2.9){
        helado = "Bombon de helado marca helardo"
        cambioDeVuelta = monto - bombonHelardo
    } else if (monto >= 2.9){
        helado = "Potecito de helado con confites, " + "o " + "Pote 1/4 KG "
        cambioDeVuelta = monto - 2.9
    } else {
        helado = "Ningun Helado disponible con ese dinero pobreton"
    }



document.write(`El helado mas caro que pueden comprar es: ${helado} y tu cambio seria ${cambioDeVuelta} `)