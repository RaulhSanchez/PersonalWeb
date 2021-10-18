# PersonalWeb

## Descripción

Esta web personal es el inicio de un proyecto, que finalizando esta parte que es la base de la web, se seguirá continuando a lo largo del curso. Además se puede encontar un acceso a la otra parte del proyecto, que es la programación de un videojuego, en el que a través de un boton para cada jugador, reduce la vida del contrario y anuncia quien ha sido el ganador.

---

## Web Peronsal

###Descripción

Esta parte de la web es la plantilla con la que se va a trabjar a lo largo del curso para convertirla en un porfolio web. Tiene un diseño simple y responsive para cualquier formato de movil y pc.


###HTML

la estructura HTML se divide en tres partes: Header, body y footer.

En la parte del Header se encuntra el boton de acceso al juego(que posteriormente será eliminado) y los botones de: Sobre mi y Contacto, con los que la persona interesada podrá acceder a la información que esté buscando.

...

<header class="header">
    <div clas="enlaceJuego">
        <button class="botonJuego" ><a href="/Código/game.html">Enlace al juego</a> </button>
    </div>
    <div class="botonesTop">
        <button class="sobreMi">Sobre mi</button>
        <button class="contacto">Contacto</button>
    </div>
      
</header>


...

La parte principal del Body es una imagen de fondo de un estilo minimalista y una gama de colores oscuros con las letras de Web Design que acompañan hasta cierto punto de la página al hacer scroll hasta llegar a la parte de Game Design, quee también será sticky al añadir más comlementos a la página.


...
div class="webDesignDiv">
    <p class="web">WEB </p><br>
    <p class="design">DESIGN</p>
</div>



<div class="mainImagen">
    <img class="imagenMain"src="/Imagenes/IMG_0786.jpeg">
</div>


...


El footer tiene el enlace directo a las redes sociales personales de contacto más usadas y con referencias del trabajo realizado publicado en GitHub y Linkedin entre otras.

...


<footer class="footer">

    <div class="rrss">
        <p class="redes">Redes Sociales</p><br>
        <a class="github"href="https://github.com/RaulhSanchez">GitHub</a>
        <a class="instagram" href="https://www.instagram.com">Instagram</a>
        <a class="linkedin" href="https://www.instagram.com">Linkedin</a>
       
    </div>

</footer>


...

###CSS

La parte que destaca de CSS es la que se centra el las letras sticky de Web Design que acompañan al usuario a lo largo de la partde superior de la página. Esto se ha conseguido de la siguiente manera.

´´´

.webDesignDiv{
   
    display: flex;
    position: sticky;
    top: 0em;
    left: 0;
    font-size: 4em;
    color: white;
    margin-bottom:  2rem;
}
.web{
    text-align:auto;
    font-size: 2em;
    color: rgb(8, 8, 8);
    position: fixed;
    font-family:  New, monospace;
    margin-left: 0.5em;
}
.design{
    text-align:auto;
    font-size: 2em;
    color: white;
    position: fixed;
    font-family:  New, monospace;
    margin-top:2em;
    margin-left: 1.5em;
}

´´´


