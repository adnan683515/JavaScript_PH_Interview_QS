const student = {
    nam : "Adnan",
    colour : "gray",
    roll:2324,
    reg : 232432423,
    dep : 'cst'
}
Object.freeze(student) //freeze use korle kono value cng o hobe na add o hobe na

// Object.seal(student) //object . seal  hocce jate new kono value add na hoi ..aka seal mere dilam
student.roll=3 //seal dile tumi value cng korte parba but. add korte parba na

// console.log(student.hasOwnProperty('name'))
// console.log(Object.keys(student))
// console.log(Object.values(student))


// student["status"]="not found" //new entries add korar jonno
student.status ="not found"//new entries add korar another way
console.log(student)
