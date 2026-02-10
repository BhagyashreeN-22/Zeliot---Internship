// const express = require("express");
// const app = express();

// app.get('/',(req,res)=>{
//   res.send("Hello Home page!");
// });

// app.get('/about',(req,res)=>{
//     res.send(`Hi About ${req.query.name}  your age is ${req.query.age}`);  //similar to res.end in nodejs ..only 1 sendcan b used
// });

// app.listen(5000,()=>{console.log("server started!")});

const express = require("express");
const app =express();
const usersdata = require("./MOCK_DATA.json");
const port=5000;

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req,res,next)=>{
    console.log("middleware1");
    next();
});

app.use((req,res,next)=>{
    console.log("middleware2");
    next();
});

app.get("/users",(req,res)=>{
    res.setHeader("myname","bhagya");   //header  creation
    return res.send(usersdata);
});

app.get("/api/users", (req, res) => {
    const html = `
        <ul>
            ${usersdata
                .map(user => `<li>${user.first_name}</li>`)
                .join("")}
        </ul>
    `;
    return res.send(html);
});

app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const userid =  usersdata.find((user)=>user.id === id);
    return res.send(userid);
});

app.post("/users",(req,res)=>{
    console.log("req pending");
    res.send("user created");
});

app.listen(port,()=>{
    console.log("server started");
});
