const product = {
    title: "Mango",
    price: 160,
    quantity: 23,
    cetagory: 'ruplali',
    city: 'Ragshai',
    des: "Just osthir chilo am ta"
}
delete product.title
console.log(product)
//object ar upor for of loop chalano jai na ..for in loop chalaite hoi

// for(const item in product){
//     console.log(item)
// }

//object.entries a dile amader akta array dibe tar modde abr array thakbe [key,value]
// for(const [item,value] of Object.entries(product)){
//     console.log(item ,value)
// }



//object.keys dile amader akta array dibe jar modde key gula store kora thakbe
// for (const item of Object.keys(product)) {
//     console.log(item)
// }


//object.values dile amader akta array return korbe jar modde value gula thakbe

for(const value of Object.values(product)){
    console.log(value)
}