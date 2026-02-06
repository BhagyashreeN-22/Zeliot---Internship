// console.log("one");
// console.log("two");

// setTimeout(()=>{            //asyncronus function that rus parallely   with other code
//     console.log("Hello");
// },5000);

// console.log("Three");
// console.log("four");


// function getdata(a,getnextdata){
//     setTimeout(()=>{
//       console.log(a);
//       if(getnextdata){
//         getnextdata();
//       }
//     },2000)
// };

// getdata(1,()=>{
//     getdata(2);
// })

// function getdataPromise(a){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log(a);
//         //resolve();
//         reject("apifailed");
//         },2000)
//     });
// };

// getdataPromise(1).then(()=>{
//     getdataPromise(2).then(()=>{
//         getdataPromise(3);
//     })
// })

// let promise = getdataPromise(1);
// promise.then(()=>{
//     console.log("Fullfilled");
// }).catch((err)=>{
//     console.log("failed");
//     console.log(err)
// });


// function print(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("Hello promise");
//         resolve("Fullfilled"); 
//         }, 2000);
//     });
// };

// let p=print();
// p.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })


// function conditionPromise(age){
//     return new Promise((resolve,reject)=>{
//       if(age>18){
//         console.log("age is greater than 18");
//         resolve("fullfilled");
//       }
//       else{
//         console.log("Age notsatisfied");
//         reject("unsatisfied");
//       }
//     });
// };

// const vari= conditionPromise(9);
// vari.then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// });

// function promiseChaining(a){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(a);
//         resolve();
//     },1000);
// })
// }

// const chain= promiseChaining(1);
// chain.then(()=>{
//    return promiseChaining(2); 
// }).then(()=>{
//     return promiseChaining(3);
// }).catch(()=>{
//     console.log("Error");
// });

function getWeather(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
          let val= false;
          if(val){
            console.log("Weather data");
            resolve(200);
          }
          else{
            console.log("Falied");
            reject("weather  failed to fetch");
          }
          
        },2000);
    });
};

async function weather() {
    try{
    await getWeather();//1stcall
    await getWeather();//2ndcall
    console.log("All calls finished");
    }
    catch(err){
        console.log(err);
    }

};

weather();