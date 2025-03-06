const value = [301,41,16,20,8,9,11]

const filteringValue = value.filter(element=>{
    if(element%2 === 0) {
        return element;
    }
})
console.log(filteringValue)

const [three,four,thirty,twinty,fourty] = value;
// console.log(three,four,thirty,twinty,fourty)

const fuirtes  = ['mango','jack-fruit','banana','apple']


const newArray = [...value,...fuirtes]
// console.log(newArray)

const studentInfo = {
    name:'Rahim',
    hight : "3ft 5' ",
    status:"marrid",
    wight:50,
    blood:'A+'
}
for(const item in studentInfo){
    console.log(`${item} :  ${studentInfo[item]}`)
}
// console.log(studentInfo)
// Object.seal(studentInfo);
Object.freeze(studentInfo)
studentInfo.blood='b+';
studentInfo['guirdian']="mother"

console.log(studentInfo)

const xm = {
    xmName:"Physics",
    mark:30
}

// delete studentInfo.wight
const newObject = {...studentInfo,...xm}

const {mark,name,xmName} = newObject;
console.log(mark,name,xmName)

const add = (a , b)=>a*b;
console.log(add(30,40))