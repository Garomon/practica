/*

let titulo = document.getElementById("tituloUno")

alert(titulo.textContent) // CAMBIAME

let titulo2 = titulo.textContent = "Ya te cambie maquinola :)"

alert(titulo.textContent) // "Ya te cambie maquinola :)" 

*/

//innerHTML
//outerHTML
//textContent

/*
DOM

Document Object Model

Nodo: Un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista.
    -Document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
    -Element: nodos definidos por etiquetas html
    -Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text.
    -Attribute: los atributos de las etiquetas definen nodos,(en JS no los veremos como nodos, sino como informacion asociada al nodo de tipo element)
    *Comentarios y otros: los comentarios y otros elementos como las declaraciones dectype en cabera de los documentos HTML generan nodos. 



Document - Metodos de seleccion de elementos

    -getElementById() - Selecciona un elemento por ID
    -getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
    -querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
    -querySelectorAll() - Devuelve todos los elementos que concidan con el grupo especificado de selectores.

============================================================================================================================


        - Metodos para Definir, obtener y Eliminar valores de atributos.
            -setAttribute() - Modifica el valor de un atributo
            -getAtributte() - Obtiene el valor de un atributo
            -removeAttribute() - Remueve el valor de un attributo


============================================================================================================================

     - Metodos Clases, classList 
        -add() - añade una clase
        -remove() - remueve una clase
        -item() - devuelve la clase del indice especificado
        -contains() - verifica si ese elemento posee o no, la clase especificada
        -replace() - reemplaza una clase por otra
        -toggle() - si el elemento no tiene la clase especificada la agrega, si ya la tiene la elimina 



    - Creacion de Elementos
        -createElement() - Crea nuevo elemento "li" "p" "div" etc....
        -createTextNode() - Crea un elemento nodo de texto
        -appendChild() - Inserta un hijo dentro de un elemento
        -createDocumentFragment() - Crea un fragmento de un elemento vacio y lo llena para despues haer appendChild una vez y no cada vez en la iteracion

    - Obtencion y modificacion de Childs
        -firstChild - Tiene en cuenta los nodos incluyendo de espacio Text
        -lastChild - Tiene en cuenta los nodos incluyendo de espacio Text
        -firstElementChild
        -lastElementChild 
        -childNode - Tiene en cuenta los nodos incluyendo de espacio Text
        -children
*/

const contenedor = document.getElementById('contenedor');

const fragmento = document.createDocumentFragment();

for(i = 0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);

const primerHijo = contenedor.childNodes;

console.log(primerHijo)
