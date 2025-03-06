// class Product {
//     name = "Adnan";
//     details() {
//         console.log("ami details")
//     }
// }

class Product {

    constructor(name,price,brand,colour){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.colour = colour;
    }

    details(){
        console.log("Yes I am details function" ,this.name)
    }
}
const item1 = new Product('samsung',300,'sam','gray') 
item1.details()


const item2 = new Product('apple',400,'apple','black')
item2.details()

console.log(item1 instanceof Product)// amra kono akta object oi class ar instance kina seta ck o korte pari