const number = [3, 4, 5, 6, 7, 8, 9];


const temp = []
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const value = element + 1;
    temp.push(value)
}
// console.log(temp)

const newArray = number.map((element, index) => {

    if (element % 2 === 0) {
        console.log(index)
    }
    return element;
});
// console.log(newArray)

const friends = ['Adnan', 'Rimon', 'Ratul', 'Kabir', 'Kulsum Apa']

const friendsLenth = friends.map(item => item.length)
// console.log(friendsLenth)

const fristLetter = friends.map(item => item[0])
console.log(fristLetter)