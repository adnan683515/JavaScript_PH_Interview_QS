/*
const num1 = true; 

// ai khane true ar value hocce 1 and num2 value 1 ..double equal ar karone se 1==1 ck korse so ata correct

//but jdi amra three-equal diya bostam tkhn true type hocce boolen vlaue hocce 1 
//ar num2 ar value hoccce 1 but type hocce number so this is not correct



//jdi amra num2 a num1 ar address or referance use kori tayle ..num2 oi address giya oi value ta k niya asbe so ata correct


//non-premitive data type ar khetre if condition compare korte pare na so ata..incorrect
but jdi address use kori tayle correct hobe

const num2 = 1;
*/

const num1 = []; 


const num2 = num1;

if(5*"2" === 10){
    console.log("this is equal value")
}else{
    console.log("this is not equal value")
}
console.log(typeof(5*"4"))