
class player {
  constructor(name,damage, life){
  this.name =name,
  this.damage=damage;
  this.life=life
  }
};

let player00 = new player('', -5,100, () => {

})


let player01 = new player('j1',-5, 100, () => {
  
})

let player02 = new player('j1',-5, 100, () => {
  
})

let player03 = new player('j1',-5, 100, () => {
  
})

let game ={
  players:[player00,player01,player02,player03]
}



function playerSelecter(playerSeleced){

  if(game.players.length == 2){

    // Añado las imagenes de los jugadores seleccionados en la pantalla de pelea(oculta)

    let playerImage1 = game.players[0].image;
  }


}





  