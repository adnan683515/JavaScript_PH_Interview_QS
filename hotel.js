class Hotel{


    constructor(name,numberOfRoom,Cost){
        this.name = name;
        this.numberOfRoom = numberOfRoom;
        this.Cost = Cost;
        this.roomList = [] ;
    }

    getName(){
        return `Hotel Name: ${this.name}`
    }

    addroom(roomName,status,price){
        const makeObj = {}
        makeObj["name"] = roomName;
        makeObj['status'] = status;
        makeObj['price'] = price;
        this.roomList.push(makeObj)
    }

    getAllRoomiList(){
        
        this.roomList.forEach(element=>{
            console.log(element)
        })
    }

}

const hotel1 = new Hotel("MIYAMI",23,3400)
hotel1.addroom("AB12","expensive",15000)
hotel1.addroom("AC24","mid-level",13000)
hotel1.addroom("AA11","local",1000)
hotel1.getAllRoomiList()