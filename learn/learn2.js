class building{
  constructor(
    RoomNum,
    BuildingNum,
    BuildingColor,
    BuildingType)
    {
    this.BuildingColor = BuildingColor
    this.BuildingType = BuildingType
    this.BuildingInfo = {
      RNum : RoomNum,
      BNum : BuildingNum

    }
  }

  newnumber(rnum,bnum){
    this.BuildingInfo.RNum = rnum
    this.BuildingInfo.BNum = bnum
  }

}

const house = {
  color: "green",
  roof: "true",
  rooms: "5",
  type: "duplex",
  kitchen: {
    cabinet: "true",
    knife: "true",
    plates: "true",
  },
  garage: "true",

  changeColor : function(color){
    this.color = color
  },
  
  removeRoof : function(status){
    this.roof = "flase"
  }
  
}

console.log(house.color)
house.changeColor("yellow")
console.log(house.color)

export default building