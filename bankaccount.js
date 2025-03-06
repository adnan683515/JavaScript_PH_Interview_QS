class Bank {
    #bankBalance;
    #pin;
    constructor(owner, account, balance) {
        this.owner = owner;
        this.balance = balance;
        this.account = account;
        this.#bankBalance = 2000;
        this.#pin = 1234;
    }

    convertedType(number) {
        return parseInt(number)
    }

    deposite(accountNumber, amount) {

        const convertedaccount = this.convertedType(accountNumber);
        const convertedAmount = this.convertedType(amount);
        if (convertedaccount === this.account) {
            this.balance += convertedAmount;
            this.#bankBalance += convertedAmount;
            console.log(`Congress mr/ms ${this.owner}!! Your Depostie Done! Now Your Balance ${this.balance}$`)
        }
        else {
            console.log(`Your Account Number invalid`)
        }
    }
    withdraw(accountNumber, amount) {
        if (this.account === accountNumber) {
            if (amount > this.balance) {
                console.log("Insufficient Balance!!")
            } else {
                this.balance -= amount;
                this.#bankBalance -= amount;
                console.log(`Congress mr/ms ${this.owner}!! Your ${amount}$ Withdraw  Done! Now Your Balance ${this.balance}$`)
            }
        }
        else {
            console.log("Your Account number invalid")
        }
    }
    displayAmount() {
        console.log(`Your Balance is ${this.balance}`)
    }

}

const member1 = new Bank("Abir Hasan", 60435435, 0)
const member2 = new Bank("Ala Uddin", 45003434, 0)
const member3 = new Bank("kabir", 3243244, 0)
member1.deposite(60435435, 1000)
member2.deposite(45003434, 5000)
// member1.withdraw(60435435, 400)
member1.displayAmount()
