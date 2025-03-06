class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    details() {
        console.log(`My name is  ${this.name} and my roll number ${this.roll}`)
    }
}
class Man extends Student {
    constructor(name, roll, status) {
        super(name, roll);//super function inherit class k call kore jabotio parameter gula diya dei
        this.status = status;
    }
    family(){
        console.log('my family is so beauty')
    }
}
const student1 = new Man("Adnan",34,'single')
student1.details()
student1.family()