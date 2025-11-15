const http = require(`http`)
const { error } = require("console");

const PORT = 8081
const toDoList=["Kanishk", "unemployed", "software developer"]

http.createServer((req,res)=>{
    const {method,url}=req;
    console.log(method, url);
    if(url.toLowerCase()==='/todos'){
        if(method==="GET"){
            res.writeHead(200, {"Content-type":"text/html"})
            res.write(toDoList.toString());
            res.end();
        }else if(method==="POST"){
            let body = '';
            req.on('error',(err)=>{
                console.error(err)
            }).on('data', (data)=>{
                body+=data
                console.log(data)
            }).on('end',()=>{
                body = JSON.parse(body)
                console.log(body)
                let newtodo = toDoList
                toDoList.push(body.item)
            })
            
        }else if(method === "DELETE"){
            let body = ''
             req.on('error',(err)=>{
                console.error(err)
            }).on('data', (data)=>{
                body+=data
                console.log(data)
            }).on('end',()=>{
                body = JSON.parse(body)
                console.log(body)
                const index = toDoList.indexOf(body.item)
                if(index>-1){
                    toDoList.splice(index, 1);
                }
            });
        }else{
            res.writeHead(501);
        }
    }else if(url==='/'){
        res.writeHead(504);
    }
    res.end()
    
}).listen(PORT, ()=>{
    console.log(`To do list app server is live on http://localhost:${PORT}`)
})
