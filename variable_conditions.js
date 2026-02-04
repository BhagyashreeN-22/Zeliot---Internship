const { use } = require("react");

name="Bhagya";
console.log(name)
aa=null;  // explicitly mentioned , to be empty
bb=undefined; //Value is not defined yet, default value of variables if nt defined
istrue=true;
console.log(aa);
console.log(bb);

//variables names are case sensistive . alphabets, digits, _ , $ are allowed to declare variable name

/* var is early methodto declare variables 
var: can be redefined and updated ,global scope
let: can be updated not redefined, block scope
const:cannot be updated or redefined,block scope*/

let age = 15;
console.log(age);
let name = "Bhagyashree";
console.log(name);
const price= 78;
console.log(price); //this cannot be changed  or updated

const student= {    //object
     age: 56,
     name:"Bhgaya",
     isfollow: true
};
console.log(student.isfollow);

student.age = student.age +1;
console.log(student.age);

const user={
    username: "Bhagyashree N",  // Even user is defined as const we can still update valuespresent inside it
    posts: 8,
    followers: 790,
    following: 900
};

//OPERATORS

let a =3;
let b =2;

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a%b=",a%b);
console.log("a^b=",a**b);

let checka=3;
let checkb = '3';
console.log(checka===checkb)//it is false even though both areassignedto 3 but datatype is differentso === checks value along with datatype

const num=10;
if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}


num%2==0? console.log("Even"):console.log("odd") //ternary operator

let exp = "papayaa";
switch(exp){
    case "apple":
        console.log('apple');
        break;
    case "papaya":
        console.log("papaya");
        break;
    case "mango":
        console.log("mango");
        break;
    default:
        console.log("fruit");
        break;
};

