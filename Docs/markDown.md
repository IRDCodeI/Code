# Markdown
Lenguaje de Marcado para simplificar las etiquetas HTML
Convierte contenido a HTML

Usado en:
 - Wordpress
 - Stack Overflow
 - Documentacion de Software
 - Bookdown
 - GitHub y GitLab (readme.md)
 - GitHub Profile

## Formato de texto

Texto normal es igual a `<p>` de html.

Para dar un salto de linea de usan "dos saltos de lineas".

Titulos se establecen con `#` = `<h1>` y van disminuyendo conforme a mas asteriscos se coloquen, hasta un maximo de 6 = `<h6>`

Texto en **negrita** se usa `**text**` o con `__text__`.

Texo en *italic* se usa `*text*` o `_text_`

Texto en ***italic y negrita*** se usa `***text***`

>Para las citas se usa  en texto -- Markdown `> texto -- "Autor"`.

~~~
Para bloque de codigo usamos virgulillas "~ (alt + 126)"
git.clone "url"
cd folder
make
~~~

Texto preformateado usamos 4 espacio
    
    
    Text preformateado test.

## Listas

### Listas Desordenadas

Usamos guion "-, *, +", y para una sub lista usamos una tabulacion con el mismo signo.
- Lista 1
  - SubLista 2
    - SubLista 3
      - ...
+ Lista 2
* Lista

### Listas Ordenadas

Usamos "numero." = 1.

1. Lista 1  
   1. SubLista 2
      1. Sublista 2.1
   2. SubLista 3
2. Lista 2
3. Lista 3

## Creacion de Links

Para crear link a otras paginas usamos `1[msj](url "Titulo") o <emails>` [webpage](https://github.com/IRDCodeI "RDCode"), ademas se puede dar un formato de texto negrita, italic, etc.

<rkostalin@gmail.com>

Para crear una referencia con enlace de la fuente usamos `[1] y [1]: "url"`

Referencia [github]


[github]: https://github.com/IRDCodeI

## Agregar Imagenes

Para agregar imagenes usamos `![AlterText](url)`

![Imagen Test](https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Simbolo-600x338.jpg "Github")

## Badges

Son insignias estaticos o dinamicos (shield.io) ocupados en redes sociales, tecnologias usadas, etc

Fuente: 

[150 Badges - DevTo](https://dev.to/envoy_/150-badges-for-github-pnk)


[Shields.io](https://shields.io/)

![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)

## Reglas y Emojis

### Lineas Horizontales

***
Para usar una linea horizontal usamos `*** o --- o ___`

### Emojis

Lista [emojis](https://gist.github.com/rxaviers/7360908) para github, copiamos el nombre clave y lo colocamos :blush: 