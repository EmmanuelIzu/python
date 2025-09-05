import govhouse from "./learn4.js";

const newgovhouse = new govhouse(30,31,"white","bungalow",true)

console.log(newgovhouse.govStatus)
console.log(newgovhouse.BuildingInfo.BNum)
console.log(newgovhouse.BuildingInfo.RNum)

newgovhouse.changeGovStatus(false)
newgovhouse.changeBNum(59,60)

console.log(newgovhouse.govStatus)
console.log(newgovhouse.BuildingInfo.BNum)
console.log(newgovhouse.BuildingInfo.RNum)