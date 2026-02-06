const user={
    name: "bhagya",
    age:21,
    city:"Bengaluru"
};

const{name,age} = user;  //if we want to use user name n age many times its better to assign a variable to it. this is destructing
console.log(name);
console.log(age);

const fruits =["Banana","Mango","Apple"];

const[firstfruit,secondfruit] = fruits;
console.log(secondfruit);

const user2 = {...user, address:"Mudhol" , gender:"female"};  // spread operator ... are used to define what values hv to be copied
console.log(user2);

const numbers =[1,2,3];
const morenumbers= [...numbers,4,5];

console.log(morenumbers);

//rest is used in functions when number of arguments are not known

const sum1=(...number)=>{  //rest 
    let sum = 0
    number.forEach((num)=>{
       sum+=num;
    });
    return sum;
};

console.log(sum1(1,2,3));


const arr = [1,2,3,4,5,6,7,8,9,10];
//foreach do not return any values

// const greaternum = arr.filter((num)=>{
//     return num>5;
// })

// console.log(greaternum);

// const addten = arr.map((num)=>{    //map returns value
//     return num+10; 
// });
// console.log(addten);

const chaining = arr.map((num)=>{
    return num+10;
}).filter((num)=>{
    return num>15;
});

console.log(chaining);

const sum2 = arr.reduce((total,num)=>{
     return total+=num;
},0);
console.log(sum2);

