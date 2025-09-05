import building from "./learn2.js";

const newhouse = new building(3,4,"green","duplex");

console.log(newhouse)
console.log(newhouse.BuildingColor)
console.log(newhouse.BuildingType)
console.log(newhouse.BuildingInfo.BNum)
console.log(newhouse.BuildingInfo.RNum)

newhouse.newnumber(8,9)

console.log(newhouse.BuildingInfo.BNum)
console.log(newhouse.BuildingInfo.RNum)