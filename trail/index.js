import express from 'express'
const app=express()
const port= 3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.status(200).send("Hello Welcome to go!")
});

app.get('/get',(req,res)=>{
    res.status(200).json({message:'Welcome and learn go '})
});

app.post('/post',(req,res)=>{
    const mybody= req.body
    res.status(200).send(mybody)
});

app.post('/postform',(req,res)=>{
    res.status(200).send(JSON.stringify(req.body))
});

app.listen(port,()=>console.log("Serever started"))
