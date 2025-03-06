let person = "Adnan"
const newPerson = person;//premitive data type ki kore janen?
//ai khane person ar value ta k niya newPerson arekta variable banaipele 
//then amra jdio person k change kori . newPerson kintu cng  hobe na
//ata hocce premitive data type

// person="hasib"

// console.log(newPerson)

//.................................premitive......................................
/*
1.number
2.string
3.boolen
4.Null
5.undefine

*/


/*
                            Non-premitive
1.Object
2.Array
3.function

*/


const Obj = {name:"Adnan"};
const newObj = Obj;
//non-premitive 
//ai khane amra j akta obj daclare korlam seta kintu akta object {}
//so amra ai khane value cng korte parbo but object cng korte parbo na
//so ai karone ata k non-premitive data type bole
Obj.name = "kabir";
// console.log(newObj



let array = [30,40];
let newArray = array;

array[0]=10;
console.log(newArray)