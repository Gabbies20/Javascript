/**
 * Modifica la siguiente función JavaScript e inclúyela dentro de un fichero .js, de manera que no use innerHTML, es decir, crea los nodos elementos y textos necesarios y añádelos a un HTML. 

function get_fortune() {
var hoy = new Date(); dichos= new Array(
"Carpe Diem.",
"El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
"Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
);
var n=dichos.length;
numero = Math.floor(Math.random()*n);
dicho = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice:
<br /><br /><em>" +dichos[numero] +"</em>"; document.getElementById('divdicho').innerHTML = dicho;
}

 */
window.addEventListener("load",get_fortune);

function get_fortune() {
    var hoy = new Date();dichos= new Array(
    "Carpe Diem.",
    "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
    "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
    );
    

    var n=dichos.length;
    console.log('La longitud de dichos es: ' + n);
        numero = Math.floor(Math.random()*n);


        div = document.getElementById("divDicho")

        txt1 = document.createTextNode("Hoy es: " + hoy)
        div.appendChild(txt1)

        br1 = document.createElement("br")
        br2 = document.createElement("br")
        div.appendChild(br1)
        div.appendChild(br2)

        txt2 = document.createTextNode("Hoy la suerte te dice:")
        div.appendChild(txt2)

        br3 = document.createElement("br")
        br4 = document.createElement("br")
        div.appendChild(br3)
        div.appendChild(br4)

        em = document.createElement("em")
        dicho = document.createTextNode(dichos[numero])
        em.appendChild(dicho)
        div.appendChild(em)

    }
    
/**
 * Este código JavaScript modifica la función get_fortune para evitar el uso de innerHTML y, en su lugar, crea nodos de elementos y textos para construir la estructura HTML necesaria. El objetivo es generar un mensaje de suerte aleatorio cada vez que se carga la página.

Aquí está una explicación detallada del código:

Evento de carga (window.addEventListener("load", get_fortune);): Se añade un evento de carga a la ventana (la página) que llama a la función get_fortune cuando la página se carga por completo.

Función get_fortune:

var hoy = new Date();: Crea un objeto de fecha representando el momento actual.

dichos= new Array(...);: Define un array llamado dichos que contiene varias frases de la suerte.

var n=dichos.length;: Calcula la longitud del array dichos.

numero = Math.floor(Math.random()*n);: Genera un número aleatorio entre 0 (inclusive) y la longitud de dichos (no inclusivo) para seleccionar una frase de la suerte al azar.

Creación de elementos del DOM para construir el mensaje de suerte:

div = document.getElementById("divDicho"): Obtiene el elemento con el ID "divDicho".
txt1 = document.createTextNode("Hoy es: " + hoy): Crea un nodo de texto con la fecha actual.
br1 = document.createElement("br") y br2 = document.createElement("br"): Crea nodos de salto de línea (<br>) para separar el contenido.
txt2 = document.createTextNode("Hoy la suerte te dice:"): Crea un nodo de texto indicando que el siguiente mensaje es de suerte.
br3 = document.createElement("br") y br4 = document.createElement("br"): Otros nodos de salto de línea.
em = document.createElement("em"): Crea un elemento <em> (énfasis) para resaltar la frase de la suerte.
dicho = document.createTextNode(dichos[numero]): Crea un nodo de texto con la frase de la suerte seleccionada.
Se ensamblan los elementos creados dentro del elemento con ID "divDicho":

div.appendChild(txt1): Añade el texto con la fecha.
div.appendChild(br1), div.appendChild(br2): Añade los nodos de salto de línea.
div.appendChild(txt2): Añade el texto indicando que sigue un mensaje de suerte.
div.appendChild(br3), div.appendChild(br4): Añade más nodos de salto de línea.
em.appendChild(dicho): Añade la frase de la suerte al elemento de énfasis.
div.appendChild(em): Añade el elemento de énfasis al contenedor principal.
Este código construye la estructura del mensaje de suerte utilizando la manipulación de nodos del DOM en lugar de establecer directamente el contenido HTML con innerHTML. Esto es considerado más seguro en términos de seguridad web y evita problemas potenciales de inyección de código.
 * 
 */