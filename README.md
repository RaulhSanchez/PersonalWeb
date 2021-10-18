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

   
    display: flex;
    position: sticky;
    top: 0em;
    left: 0;
    font-size: 4em;
    color: white;
    margin-bottom:  2rem;
}



    text-align:auto;
    font-size: 2em;
    color: rgb(8, 8, 8);
    position: fixed;
    font-family:  New, monospace;
    margin-left: 0.5em;
}

    text-align:auto;
    font-size: 2em;
    color: white;
    position: fixed;
    font-family:  New, monospace;
    margin-top:2em;
    margin-left: 1.5em;
}

´´´


##Videojuego

###JavaScript
Al iniciar el juego, se puede ver una página inical donde se puede seleccionar a dos jugadores, que una vez seleccionados, se desactivará esta parte de la página y activará la parte del juego.

Para preparar la mecánica del juego se ha creado un objeto **Player** con un nombre, daño y vida que a traves de 4 variables, reciben los atributos de este padre **Player** que más alante serán selelcciondos desde un array vacio que cogerá a cada uno de los hijos.

```


class player {
  constructor(name,damage, life, playerImage){
  this.name =name,
  this.damage=damage,
  this.life=life,
  this.image=playerImage
  }
};

let player00 = new player('player00',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")
let player01 = new player('player01',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")
let player02 = new player('player02',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")
let player03 = new player('player03',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")



let game={
  player:[]
}

```



Para seleccionar a los jugadores desde este array, se ha creado una funcion **PlayerSelecer** que devuelve un **PlayerSelected** o jugador seleccionado desde l array anteriormente mostrad.

para ello se utiliza la siguiente estructura de control:

```

function playerSelecter(playerSelected){
  

  if(game.player.length == 2){
    console.log(playerSelected);
    let mainScreen =document.getElementById("seleccion").style.visibility;
    mainScreen =document.getElementById("seleccion").style.visibility="hidden";
    

    let gameScreen = document.getElementById("game");
    gameScreen.style.visibility="visible";

   }
   else{

    if(game.player[0] == undefined){
      if(playerSelected == 'player00'){
          game.player[0] = player00
      }   
      if(playerSelected == 'player01'){
          game.player[0] = player01
      }   
      if(playerSelected == 'player02'){
          game.player[0] = player02
      }   
      if(playerSelected == 'player03'){
          game.player[0] = player03
      }   

    }else{

      if(game.player[1] == undefined){
        if(playerSelected == 'player00'){
            game.player[1] = player00
        }   
        if(playerSelected == 'player01'){
            game.player[1] = player01
        }   
        if(playerSelected == 'player02'){
            game.player[1] = player02
        }   
        if(playerSelected == 'player03'){
            game.player[1] = player03
        }   
      }
    }
 
   }


}


```



Posteriormente se enlaza la vida del **Player** con el boton de ataque del player contrario con la funcion **OnClick**, añadida a los botones de ataque de cada jugador y que quita daño de vida cada vez que se presiona. Esto se consiguie con el siguiente código.

```

function onClick(damage){
  console.log(damage);
 switch(damage){

  case 'player1':

   
    game.player[1].life =game.player[1].life -5;
    livep2.innerHTML = game.player[1].life;
    if(game.player[1].life <=0){
      alert("You win player 1")
  
      //lamar a funcion (nueva) de pantalla de winner
     
    }
    console.log(livep1)
  break;

  case 'player2':
  
      game.player[0].life =game.player[0].life -5;
      livep1.innerHTML = game.player[0].life;
      if(game.player[0].life <=0){
        alert("You win player 2")
      }
      console.log(livep2)
    break;
 }
  
}

```

Trás esto aparece un **Alert** diciendo quien es el ganador..









