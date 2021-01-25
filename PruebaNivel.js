   // Demuestra que la siguiente cadena "geeksforgeeks" no es un palíndromo
   function palindromo (a){
    var a
    var b
    b = ''
    for (i=a.length-1; i>=0; i--){
        b += a[i];
    }
    if (a!==b){
        return  a + " " + "no es palindromo"
    }
    return a + " "+ "es palindromo"
}

// Diferencias entre Flexbox y CSS grid:
        /*
        Flexbox para componentes y CSS Grid para estructura
        Flexbox se creó para diseños de una dimensión, en una fila o una columna. En cambio CSS Grid Layout se pensó para el diseño bidimensional.
        Con CSS Grid podemos construir nuestra propia plantilla indicando el número de columnas y filas que queremos que la conformen, así como el espacio entre cada una de ellas
        */   
   
   
   
   // 1. crea un div
    var div
    div = document.createElement('div')

    // 2. crea un svg
    var svg
    svg = document.createElementNS('http://www.w3.org/2000/svg','svg')

    // 3. agrega una clase al div creado en el punto 1
    div.classList.add('black')

    // 4. agrega un estilo que cambie la propiedad color al punto 1
    div.style.setProperty('color', yellow)

    // 5. agrega un atributo id al punto 1
    div.setAttribute('id', 'DNI')

    // 6. crea una pagina en blanco y agrega al body el div con "hello world"
    document.body.textContent='' // Para dejar la paginal en blanco 
    let text = document.createTextNode('Hello World')
	div.appendChild(text)
	document.body.appendChild(div)

    // 7. crea un nuevo div y agregalo como hijo al punto 1 antes de "hello world"
    let child = document.createElement('div')
	div.insertBefore(child,text)

    // 8. dime los nodos que tiene el primer div
    div.childNodes

    // 9. dime los elementos que tiene el primer div
   let children = div.children

    // 10. busca todos los div de la página
    document.querySelectorAll('div')

    // 11. busca los div que contienen la clase agregada al punto 3
    document.querySelectorAll('.black')
	document.getElementByClassName('black')

    // 12. busca los div que tienen el id agregado en punto 5
    document.querySelectorAll('#DNI')
    document.getElementById('DNI')
    

    

    // Diferencias entre Flexbox y CSS grid:
        /*
        Flexbox para componentes y CSS Grid  para estructura
        Flexbox se creó para diseños de una dimensión, en una fila o una columna. En cambio CSS Grid Layout se pensó para el diseño bidimensional.
        Con CSS Grid podemos construir nuestra propia plantilla indicando el número de columnas y filas que queremos que la conformen, así como el espacio entre cada una de ellas
        */