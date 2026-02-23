import express from "express";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin:'http://localhost:5174',
    methods:['GET','POST']
}))

app.get('/',(req,res)=>{
    res.send('Server ready!');
});

app.get('/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'a joke',
            content: 'a'
        },
        {
            id:2,
            title:'b joke',
            content: 'b'
        },
        {
            id:3,
            title:'c joke',
            content: 'c'
        },
        {
            id:4,
            title:'d joke',
            content: 'd'
        },
    ];
    res.send(jokes);
})
app.listen(PORT,()=>{
    console.log("Server Started");
});

