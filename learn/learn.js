const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  straplength:{
    left: 26,
    right: 26,
  },
  lidOpen: false,
  
  toggleLid: function(lidStatus){// Methods are properties containing functions
    this.lidOpen = lidStatus;
  },

  newStrapLength: function(LengthLeft, LengthRight){
    this.straplength.left = LengthLeft
    this.straplength.right = LengthRight
  },
};


//console.log(backpack.straplength.left)
console.log(backpack.lidOpen)


const car = {
  type: "Saloon",
  make: "toyota",
  model: "camry",
  year: "2013",
  color: "Grey",
  engine: {
    litre: 2,
    transmission: "automatic"
  },

  changeColor : function(color){
    this.color = changeColor(blue)
  },

  changeEngine : function(EngLitre, EngTrans){
    this.engine.litre = EngLitre
    this.engine.transmission = EngTrans
  }
}

//console.log(backpack.color.valueOf()) 
//console.log(backpack.color.lastIndexOf("c")) 