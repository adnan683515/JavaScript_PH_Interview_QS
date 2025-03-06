

const add = (a, b = 4) => {
    return a * b;
};
console.log(add(5))

const array = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum;
}
// console.log(array([3,5,67,8]))

const test = () => console.log("Test")
// console.log(test())

const test2 = a => a * 3;
console.log(test2(2))


document.getElementById('title').addEventListener('click', (event) => {
    console.log(event.target.childNodes)
})


