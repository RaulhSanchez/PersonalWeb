let mainScreen =document.getElementById("seleccion").style.visibility="visible";
let gameScreen = document.getElementById("game").style.visibility="hidden";

class player{
  constructor(name,damage, life, image){
    this.name =name
    this.damage=damage
    this.life=life
    this.image=image
  }
};

let player00 = new player('player00',-5, 100,"/Imagenes/neoclinus-blanchardi.jpg.imgo.jpeg")
let player01 = new player('player01',-5, 100,"/Imagenes/PM-animales-raros-1.jpeg")
let player02 = new player('player02',-5, 100,"/Imagenes/tarsero-fantasma-top-de-animales-mas-raros-del-mundo.jpg")
let player03 = new player('player03',-5, 100,"/Imagenes/Unknown.jpeg")

let game={
  player:[]
}


console.log(game.player);

let playerSelecter=(playerSelected)=>{
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


let player1Button= document.getElementById("player1");
let player2Button= document.getElementById("player2");
let livep1=document.getElementById("p1Live");
let livep2=document.getElementById("p2Live");


  let onClick = (damage) => {
  console.log(damage);
  switch(damage){
    case 'player1':
      if(game.player[1].life -5){
        player1Button.style.visibility="hidden"
        player2Button.style.visibility="visible"
      }
        game.player[1].life =game.player[1].life -5;
        livep2.innerHTML = game.player[1].life;
        if(game.player[1].life <=0){
          alert("You win player 1")
    
        }
        console.log(livep2)
      break; 
    case 'player2':
      if(game.player[0].life -5){
        player2Button.style.visibility="hidden"
        player1Button.style.visibility="visible"
      }
        game.player[0].life =game.player[0].life -5;
        livep1.innerHTML = game.player[0].life;
        if(game.player[0].life <=0){
          alert("You win player 2")
        }
        console.log(livep1)
      break;  
  } 
  
}

let winner= document.getElementById("winner");

