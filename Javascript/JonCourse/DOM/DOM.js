//* DOM (Document Object Model)

//? Permite manejar el HTML por medio de JS en los navegadores

//Todo >> Introduccion

//? Elementos del Documento
//?     >> Contexto Global o padre es el objeto "windows" y de este cuelgan
//?         todas las demas api's del navegador como el DOM
//?         >>> No es necesario indicar el objeto window en llamdas

//          document.head, document.body, document.doctype, document.charset, document.title ...

//Para obtener la etiqueta HTML se usa document.documentElement

console.log(window.document);
console.log(document)
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
//Lista de enlaces -- Nodos no son arreglos y no comparten metodos de arrays de JS
//Las listas que se obtienen son arreglos de elementos HTML como links, images, ...
console.log(document.links); 
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
//Seleccion con Mouse y mapeo con JS
setTimeout(() => {
    console.log(document.getSelection().toString());
},3000);
//Escritura rapida y no recomendada en HTML con JS
//  La escritura se realiza antes del cierre de la etiqueta body
document.write("<h2>Hola Mundo desde JS a HTML</h2>");

//Todo >> Nodos, Elementos y Selectores

//https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

//? !!Una etiqueta HTML no es un nodo, en HTML y en JS eso es un elemento!!
//? Existen diferentes tipos de nodos en JS como comentarios, textos, etiquetas etc.

//? Cada nodo tiene su razon y para intereaccion de HTML nos interesa los
//? nodos de tipo ELEMENT (etiqueta html en particular) y TEXT (texto que tiene adentro una etiqueta h1...)

//? >> Metodos del DOM para capturar elementos en JS
//* Comparten algunos metodos de arreglos de JS

//Coleccion HTML de elementos
console.log(document.getElementsByTagName("li"));// --> Ya no es tan usado
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//* Importante poner el atributo "name" en los formularios ya que permite en app de lado
//* del servidor detectarlo como una variable al momento de envio de formulario

console.log(document.getElementById("menu"));

//? >> Metodos de reemplazo populares

//Recibe como parametro un selector de CSS (id, class, etiqueta html dentro de otro);
//sin ser pseudoelementos

console.log(document.querySelector("#menu")); // --> Solo trae el primer selector especificado que encontro
console.log(document.querySelector("a"));

console.log(document.querySelectorAll("a")); // --> Trae todos los selectores encontrados
//* !!! En rendimiento es mucho mas lento querySelector y mucho mas los getElements... !!!

document.querySelectorAll("a").forEach( (e) => {console.log(e)});

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));

//Seleccion de elementos de la lista basado en arrays
console.log(document.querySelectorAll(".card")[2]);

//Selectores descendiente
console.log(document.querySelectorAll("#menu li"));

//? Ejemplo de selector JS
document.write(document.querySelectorAll(".card")[3].outerHTML);

//Todo >> Atributos y Data Attributes

//? Interaccino con atributos de etiquetas html (charset, src, ...);
//* Creacion de atributos (Data-Attribute) -> data-description="..." "Para la creacion 
//* de atributos debe empezar con (data-)".


//* >>> Obtencion de Datos
console.log(document.querySelector(".link-dom").href); // https:127.0.0.1/...
console.log(document.documentElement.lang);

//? Elementos poseen un atributo que es getAttribute("name attribute")
//? Ademas solo trae el valor del atributo

console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").getAttribute("href"));

//* >>> Seteo de datos
document.documentElement.lang = "es";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//* Guardado en variables

const $linkDOM = document.querySelector(".link-dom"); //Guardar elementos del DOM en constantes

//Arrays y Objectos podemos guardar en const y permiten modificar cosas que poseen adentro
//Ademas no valida que algo cambie dentro del objeto. En valores primitivos si se valida
//* En Arrays y Objetos no se accede al valor como tal si no a una referencia de dicho valor

//No importa si se realiza cambios con el dinamismo de JS el elemento del DOM va hacer el mismo 
//Algo recomendable es usar $ en las variables de JS del DOM cuando se guarda en variables
//?  >> Hace referencia que dicha variable guarda un elemento del DOM

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");

//Cualquier enlace con target se agrega el atributo rel --> noopener

$linkDOM.setAttribute("rel","noopener");

//* Validacion de atributos en el elemento
console.log($linkDOM.hasAttribute("rel"));

//* Quitar Atributos 
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); //Validacionde atributos

//* >> Data-Attributes
//? Data Attributes los guarda a manera de un mapa conocido como Data Set
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); //DomStringMap collecion de Data Attributes 

console.log($linkDOM.dataset.description); //Obtener valores de Data Set

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento"); //Establecer Data Attributes
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "Suscribete al canal de youtube"; //Cambiar de otra manera
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));

//Todo >> Estilos y Variables CSS

console.log($linkDOM.style); //Mapa que agrega las propiedades CSS validas
//                          Solo valores afectados en HTML muestran el valor
console.log($linkDOM.getAttribute('style')); //Accede al valor del atributo

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//Propiedades dinamicas o Compputadas
console.log(window.getComputedStyle($linkDOM));
//Muestra el valor por defecto que le da el navegador a la etiqueta HTML en la propiedad CSS

console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

//* Establecer Valores CSS

$linkDOM.style.setProperty('text-decoration','none');
$linkDOM.style.setProperty('display','block');

$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem'

console.log($linkDOM.style);

//* >>> Variables CSS - Custom Properties CSS
//? Acceder propiedades CSS

const $html = document.documentElement,
     $body = document.body;

//Variables CSS (root)
let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
   varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor; //En estilos JS, estilo CSS va con CamelCase
$body.style.color = varYellowColor;

//Actualizar nuevo valor de la variable CSS

$html.style.setProperty('--dark-color', '#000');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');

$body.style.setProperty('background-color', varDarkColor); //En setProperty en estilo CSS va con el formato CSS

//Todo >> Clases CSS
//"class" esta reservada en lenguajes de programacion por lo que acceder a clases de CSS cambia
//? Se accede con className o por medio de un objeto (DOMTokenList) que regresa un arreglo de clases

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList); //Poseen metodos que ayudan een las clases

console.log($card.classList.contains("rotate-45"));

//? Agregar clases

$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList.contains("rotate-45"));

//?Quitar clases

$card.classList.remove("rotate-45"); //Quita clase

//? Metodo de tugle (interruptor)
//Si elemento tiene la clase se la quita y si no tiene una clase se le agrega

$card.classList.toggle("rotate-45"); //Agrega clase "depende del estado de una clase"
console.log($card.classList.contains("rotate-45"));

//? Reemplazar clases
$card.classList.replace("rotate-45", "rotate-135");

//? Agregar varias clases

$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");

//* Mas usado classList por los metodos de manejo que tiene

//Todo >> Texto y HTML
//Interaccion con elementos HTML

const $whatIsDOM = document.getElementById("text");

let text = `<p>Document Object Model o DOM es esencialmente una interfaz de plataforma, o API de programación para documentos HTML</p>`;

//Agregar contenido textual a elemento

$whatIsDOM.innerText = text; //No reconoce etiquetas HTML solo imprime como texto y no es parte del estandar
$whatIsDOM.textContent = text; // No respeta el formato de las template strings y se imprime todo como texto 
//? Renderizar contenido como HTML

$whatIsDOM.innerHTML = text; // Se respeta etiquetas HTML y todo el formato del template string
//      > Produce un error de sintaxis HTML ya que los parrafos se agregan en un elemento <p>
//      > Reemplaza el contenido HTML del elemento "<p>" pero no elimina el elemento osea estara 
//      <p> | <p></p> <p></p> ... | </p> --> Anida el contenido de la variable text en el elemento


//* Cuando se inserta texto se usa Content y se inserta codigo HTML pues solo innerHTML

$whatIsDOM.outerHTML = text; 
//      > Reemplaza el contenido del elemento HTML, pero reemplaza el elemento por el contenido de la variabel
//          <p> </p> <p> </p> ...

//Todo >> DOM Traversing: Recorrido del DOM

//Propiedades del API para poder recorrer los elementos o desde un punto de referencia
//recorrer diferentes elementos

//? Se usara para propiedades que reccoren elementos osea solo etiquetas HTML como tal

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.childNodes); // Lista de los nodos hijos (texto y eitiquetas)
console.log($cards.children); // --> Hijos Elementos del elemento
console.log($cards.children[2]);

console.log($cards.parentElement); // --> Padre del elemento

console.log($cards.firstChild); // --> Primer Nodo Hijo "Nodo Texto"
console.log($cards.firstElementChild); // --> Primer Hijo Nodo Elemento

console.log($cards.lastElementChild); // Ultimo Hijo Nodo Elemento

console.log($cards.previousElementSiblingg); // Elemento Nodo Previo Hermano del Elemento

console.log($cards.nextElementSibling); // Hermano Elemento Siguiente 
console.log($cards.closest("body")); // Metodo que busca el padre mas cercano del tipo de selector 
console.log($cards.children[3].closest("section")); //Referencia de la etiqueta 3 busca la etiqueta section mas cercana

//Todo >> Creando Elementos y Fragmentos
//Crear elementos (etiqueta HTML) dinamicamente en JS

const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    
    $figure2 = document.createElement("figure");

//? Incorporacion en el DOM de elementos

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");

$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");

$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

//? >> Al agregar un elemento con innerHTML, las etiquetas que esten agregadas no van a ser condicederadas como nodos

$figure2.classList.add("card");
$cards.appendChild($figure2);

//? Agregar multiples datos
const estaciones = ['Primavera', 'Verano', 'Invierno'],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones</h3>");

estaciones.forEach(e => {
    const $li = document.createElement("li");
    $li.textContent = e;
    $ul.appendChild($li);
});

document.body.appendChild($ul);

document.write("<h3>Continentes</h3>");

const continentes = ['Africa', 'America', 'Asia', 'Europa'],
    $ul2 = document.createElement("ul");


document.body.appendChild($ul2);
$ul2.innerHTML = ""; //Inicializacion Explicita para concatenar cadenas

continentes.forEach( e => {
    $ul2.innerHTML += `<li>${e}</li>`
});

//innerHTML no crea nodos HTML pero para visualizar es valida, ademas cuando se usa esto para contenido dinamico
//de varios registros o elementos a la vez se debe inicializar con valor null al elemento innerHTML

//? Inserciones al DOM son una de las operaciones mas demandantes y costosas en recursos en la web
//? --> Alentamiento de aplicaciones

//? Alternativas: "fragmentos dinamicos": Variable que se crea dinamicamente la cual puede ser iterada y se le
//? le puede agregar elementos a dicha variable y una vez agregada con los elementos requeridos se agrega dicho fragmento al DOM
//*     >> Mejora rendimiento
//*     >> Almacena toda la informacion necesaria para ser incertada al DOM

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Julio','Junio','Agosto','Septiembre','...'],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach( e => {
    const $li = document.createElement("li");
    $li.textContent = e;
    $fragment.appendChild($li); // Agregando elemento al nodo fragmento
                                //* Mas recomendado por rendimiento
});

document.write("<h3>Meses</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

//Todo >> Tempaltes HTML
//Es un modelo a seguir, en donde se estructura el contenido HTML que se desea que sea dinamico
//  >> Otra interaccion con el DOM
//  >> Es una etiqueta que no se visualiza
//  >> No se renderiza en el DOM, es como una clase de la cual se genera objetos dinamicamente

const $templateCard = document.getElementById("template-card").content,
    $fragmentCard = document.createDocumentFragment()
    cardContent =[
        {
            title:"Tecnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title:"Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title:"Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        }
    ];

    //Agregado al Template
    cardContent.forEach( e => {
        $templateCard.querySelector("img").setAttribute("src", e.img);
        $templateCard.querySelector("img").setAttribute("alt", e.title);

        $templateCard.querySelector("figcaption").textContent = e.title;

        //Clonacion de Nodo Template para poder seguir asignado contenido 
        let $clone = document.importNode($templateCard, true);
        //  true = Copia toda la etiqueta incluyendo el contenido
        //  false = Copia sola las etiquetas de apertura y cierre
        $fragment.appendChild($clone);
    });

$cards.appendChild($fragment);

//Todo  >> Modificando Elementos (Old Style)
//AppendChild solo agrega el elemento al final del selector objetivo
// >> Diferenes metodos de agregado en diferentes sitios:

const $newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[2]);

//? Insercion antes desde una nodo de referencia

$cards.insertBefore($newCard, $cards.firstElementChild);

//?Eliminar nodos

$cards.removeChild($cards.lastElementChild);

//? Clonacion de nodos

const $cloneCards = $cards.cloneNode(true);
document.body.appendChild($cloneCards);

//Todo >> Modificando Elementos (Cool Style)
//Metodos actuales para insertar elementos:
//  .insertAdjacentElement(pos, element) --> AppendChild
//  .insertAdjacentHTML(pos, html)  --> innerHTML "mas eficiente que innerHTML"
//  .insertAdjacentText(pos, text)  --> textContent

//Posiciones:
//  beforebegin(hermano anterior)
//  afterbeing(first child) 
//  beforeend(last child)
//  afterend(hermano siguiente)

$cards.insertAdjacentElement("beforebegin", $newCard);
$cards.insertAdjacentElement("afterbegin", $newCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard);

const $contentCardHTML = `    
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>`,
$newCard2 = document.createElement("figure");

$newCard2.classList.add("card");

$newCard2.insertAdjacentHTML("beforeend", $contentCardHTML);
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//$cards.insertAdjacentElement("afterbegin", $newCard2);

$cards.prepend($newCard2); //Hijo primero
$cards.before($newCard2);  // Hermano anterior
$cards.append($newCard2); // Ultimo hijo
$cards.after($newCard2); //Hermano Posterior