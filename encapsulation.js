class Student{
    #status;//encaptulation kore rakhlam 
    constructor(name,age,status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    details(){
        console.log("yes ami details function boltesi")
    }
    stutusFun(){
        return this.#status //amra sudu ai class ar modde status access korte parbo ..ami chaile kono function ar madddome o access nite pari
    }
}
const student1 = new Student('adnan',34,'single')
const s = student1.stutusFun()
console.log(s)
function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);