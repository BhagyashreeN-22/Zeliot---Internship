import express from "express";
const app = express();
const PORT = 5000;

app.get('/products',(req,res)=>{
    const prod =[
        {
            id:1,
            name:"a",
            age:23
        },
        {
            id:2,
            name:"b",
            age:29
        },
        {
            id:3,
            name:"c",
            age:78
        },
        {
            id:4,
            name:"d",
            age:60
        }                
    ]
    if(req.query.search){
        const filterprod = prod.filter((product)=>product.name.includes(req.query.search));
        return res.send(filterprod);
    }
    setTimeout(()=>{
      res.send(prod);
    },3000);

});

app.listen(PORT,()=>console.log("Server started"));
