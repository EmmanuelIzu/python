import building from "./learn2.js";

class govhouse extends building{
    constructor
    (
    RoomNum,
    BuildingNum,
    BuildingColor,
    BuildingType,
    govStatus,
    ){
        super(RoomNum,BuildingNum,BuildingColor,BuildingType)
        this.govStatus = govStatus
    }

    changeGovStatus(status){
        this.govStatus = status;
    }

    changeBNum(bnum,Rnum){
        super.newnumber(bnum,Rnum);
    }
}

export default govhouse