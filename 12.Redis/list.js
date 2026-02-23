import client from "./client.js";
async function init(){
    await client.lpush("list1",1);
    await client.lpush("list1",2);
    await client.lpush("list1",3);
    await client.rpush("list1",4);

    const result =await client.lpop(list1);
    const result2 = await client.blpop(list1,10);
    console.log(result);
    console.log(result2);
} 