import client from "./client.js";

async function init(){
   // await client.set("msg:1","Hii");
   //await client.expire("msg:1",2); this msg:1 with id 1 expries in 2 sec
    const result = await client.get("msg:1");
    console.log("Result:",result);
}
init();