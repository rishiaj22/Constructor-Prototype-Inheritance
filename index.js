let accountInfo = (name,ac_no,branch,balance)=>{
    let ob = {
        name : name,
        account_number : ac_no,
        branch: branch,
        balance : balance
    };
    return(ob);    
};
console.log(accountInfo("Rishi",3434,"Bari",2000));
// The given function is called the Factory Function

// "this" it is the global scope and give you the value of it's parent object eg:-
console.log(this);



// call, apply, bind method (this is only applicable for functions)
let person = {
    name: "Rishi",
    age: 20,
    profession: "Student"
};
let person2 ={
    name: "Raj",
    age: 24,
    profession: "Developer"   
}

function print(city){
    console.log(`Name - ${this.name}, Age - ${this.age}, Profession - ${this.profession}, City - ${city}`); // Right now this will print the global object
};
// If we wanted to give "this" keyword parent, which is person object then we use "call";
print.call(person,"Bhopal"); // function.call("object_name");
print.call(person2,"Delhi");
// Call method is used to reuse the function for an object without writing function number of times in a object
// Call method can have many parameter, first parameter is always the object

// --> Apply Method <--
let cityArray = ["Bhopal"];
print.apply(person,cityArray);
// Apply is usefull to enter the array as a parameter whereas in call we cannot enter full array at once
// Apply method can take only two parameter one is object second is array, array can contain multiple parameters 

// --> Bind Method <--
let value = print.bind(person2,"Delhi"); // If I want to print this many time in future I can just call the value 
value(); // I do not need to wirte the whole print line again and again
value();


// ---> Constructor Function <---

// let accountInfo = (name,ac_no,branch,balance)=>{
//     let ob = {
//         name : name,
//         account_number : ac_no,
//         branch: branch,
//         balance : balance
//     };
//     return(ob);    
// };

// We can create the accountInfo function without creating an object inside it
function AccountInfo(name,ac_no,branch,balance){ // first letter of constructor function should be capital
    this.name = name;
    this.account_number = ac_no;
    this.branch = branch;
    this.balance = balance;
};
let info =new AccountInfo('Rishi',322,"Bari",200);
console.log(info);

// new keyword will create and return the object 
