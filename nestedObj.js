const user = {
    username:"Adnan",
    1:"100",
    userEmail:"golamfaruk680@gmail.com",
    phone:'012321312',
    details:{
        job:{
            workStation:"office",
            salary:"40k",
            address:"dhaka,motijil"
        },
        marrid:true,
        religion:'islam'
        
    }
}
console.log(user['username'])
console.log(user[1])
//ternary operator diya ck korte hobe j ...tayle amra website crash theke bece jabo
console.log(user.details?.job?.workStation)