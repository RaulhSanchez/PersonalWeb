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

class players {
  constructor(name, life, atack){
  this.name =name,
  this.life=life,
  this.atack=atack
  }
  //playerAtack()
  //playerStatus()
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
  