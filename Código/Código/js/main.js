
class player {
  constructor(name,damage, life, playerImage){
  this.name =name,
  this.damage=damage,
  this.life=life,
  this.image=playerImage
  }
};

let player00 = new player('j1',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")
let player01 = new player('j1',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")
let player02 = new player('j1',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")
let player03 = new player('j1',-5, 100, "https://i.pinimg.com/550x/3a/00/00/3a00006d51658920c717c28fbdd7b789.jpg")

let game ={
  players:[]
}



function playerSelecter(playerSeleced){

  if(game.players.length == 2){

    // Añado las imagenes de los jugadores seleccionados en la pantalla de pelea(oculta)
    if(onclick){
      let playerImage = game.players[0].image;
    }
    
    console.log(onclick); 
    // Cambio de pantall, desocilto la pantalla de la pelea que previamente he rellenado con los jugadores seleccionados
    let nodoMainScreen = documen.getElementById("seleccion")
    nodoMainScreen.style.display='none'

    let nodoPantallaPelea = document.getElementById("pelea")
    nodoMainScreen.style.display = 'block'

  }
  else{
    if(game.players[0] == undefined){

      if(playerSeleced == player00){
        game.players[0]=player00

      }
      if(playerSeleced == player01){
        game.players[0]=player01

      }

      if(playerSeleced == player02){
        game.players[0]=player02

      }
      if(playerSeleced == player03){
        game.players[0]=player03

      }

    }else{
      if(playerSeleced == player00){
        game.players[1]=player00

      }
      if(playerSeleced == player01){
        game.players[1]=player01

      }

      if(playerSeleced == player02){
        game.players[1]=player02

      }
      if(playerSeleced == player03){
        game.players[1]=player03

      }
    }

  }


}