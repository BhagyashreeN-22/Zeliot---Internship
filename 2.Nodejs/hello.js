// import {add,sub} from "./math.js"  //here ./ means current directory

// console.log(add(1,2));
// console.log(sub(2,1));

// const fs = require("fs");
// fs.writeFileSync("./read.txt","Helloo");

// //fs.writeFile("./read.txt","Helloo from Async",(err)=>{});console.log(fs.readFileSync("./read.txt"));
// fs.appendFileSync("./read.txt"," Apending....");const fs = require("fs");
// fs.writeFileSync("./read.txt","Helloo");

// fs.writeFile("./read.txt","Helloo from Async",(err)=>{});console.log(fs.readFileSync("./read.txt"));
// fs.appendFileSync("./read.txt","Apending....");

const os = require("os");
console.log(os.cpus().length);