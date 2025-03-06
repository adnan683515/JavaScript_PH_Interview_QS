const products = [
    { id: 1, title: "samsung", price: 1400, brand: "sam", colour: "black" },
    { id: 2, title: "redmiA10", price: 140, brand: "redmi", colour: "gold" },
    { id: 3, title: "redmiA12", price: 100, brand: "redmi", colour: "blue" },
    { id: 4, title: "samsungAltra", price: 100, brand: "sam", colour: "white" },
    { id: 5, title: "samsungS20", price: 1400, brand: "sam", colour: "Gold" }
]

const newArray = products.filter(element => {
    return element.price > 1000;
})
// console.log(newArray)


const increamentProducts = products.map(item => {

    if (item.brand === 'sam') {
        item.price += 100;

    }
    return item;
})
// console.log(increamentProducts)

const product = products.find(item => item.id === 4);
// console.log(product)


// products.forEach(element=>{
//     if(element.colour.toLowerCase()==="gold"){
//         console.log(element)
//     }
// })

// products.forEach(element=>{
//     console.log(element)
// })

const BrandSem = products.filter(item=>{
    if(item.brand === 'sam') return item;
})
console.log(BrandSem)