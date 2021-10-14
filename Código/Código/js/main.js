/*let player2 = {
    nombre : "Tu imaginacion",
    vida=100
    //ataqueImagincacion()
  }
  
  let player3 ={
    nombre: "Tu imaginacion",
    vida=100,
    ataqueImagincacion()
  }
  
  let player4 = {
    nombre: "Tu imaginacion",
    vida=100,
    ataqueImagincacion()
  }*/

/*let players= [
{name:"Tu imaginacion"},
{name:"Tu imaginacion"},
{name:"Tu imaginacion"}
];*/


var gameState=Enumerator([INIT,WAIT,ATACK,]);




function update(){
  switch(state){


    case playerStatus().INIT:
      changeStatus(gameState.WAIT);
      break;

      case playerStatus().WAIT:
        players[0].atack=false;
        players[1].atack=false;

        if(players[1].atack == false){
          players[0].atack = true;
          changeStatus(gameState.players[0]);
        }else{
          players[1].atack = true;
          changeStatus(gameState.players[1]);
        }
        break;

        case playerStatus().ATACK:
          

  }
}

class players {
  constructor(name, life, atack){
  this.name =name,
  this.life=life,
  this.atack=atack
  }
  
  playerStatus()
  changeStatus()
};

class player02 extends players{
  constructor(name,life,atack){
    this.name=" Tu Imaginacion",
    this.life=100,
    this.atack=25
  }
}
class player03 extends players{
  constructor(name,life,atack){
    this.name="Mi Imaginacion",
    this.life=100,
    this.atack=25
  }
}
class player01 extends players{
  constructor(name,life,atack){
    this.name="Su Imaginacion",
    this.life=100,
    this.atack=25
  }
}
class player01 extends players{
  constructor(name,life,atack){
    this.name="La Imaginacion",
    this.life=100,
    this.atack=25
  }
}



  function Click(){
    
    if(onclick){
        console.log("click");
        document.body.style.backgroundColor="white";
    }
    
  }

  