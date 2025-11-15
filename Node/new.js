// console.log("Hello")

const http = require('http');
// const { Headers } = require('undici-types');

function asimpleserver(req,res){
    console.log(req.url, req.headers, req.method);

    // res.setHeader('Content-type','json')
    res.setHeader('Content-type','text/html')

    res.write('<h3>hi</h3>')

    // process.exit() 
}  

const server = http.createServer(asimpleserver)
const PORT = 2302; 
server.listen(PORT ,()=>{
    console.log(`server is up and running on http://localhost:${PORT}`)
});