const http = require("http");
const fs = require("fs");
const url = require("url");

const  myserver = http.createServer((req,res)=>{
    const log =`${Date.now()} ${req.method}:${req.url} New req received\n`;
    const myurl = url.parse(req.url,true);
    fs.appendFile("log.txt",log,()=>{
      switch(myurl.pathname){
        case "/":
            //res.end("Home page");
            if(req.method === "GET") res.end("get method Home");
            else if(req.method === "POST") res.end("Post method");
            break;
        case "/about":
            const username = myurl.query.name ;
            res.end(`Hiii ${username}`);
            break;
        case  "/search":
            const searchurl = myurl.query.search;
            res.end(`Here  r u results of ${searchurl}`);
        case "/signup":
            if(req.method=="GET")res.end("Signup get");
            else if(req.method==="POST")res.end("Success!");
            break;
        default :
            res.end("404 Page not found"); break;
      }
    });
});

myserver.listen(5000,()=>{console.log("server started!")});