const http = require(`http`)
const app=http.createServer((req,res)=>{
    if(req.url === `/home`){
        res.statusCode = 200;
        return fs.readFile("./public/home.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }
    else if(req.url === `/contact`){
        res.statusCode = 200;
        return fs.readFile("./public/contact.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }
    else if(req.url === `/about`){
        res.statusCode = 200;
        return fs.readFile("./public/about.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }
    else if(req.url === `/service`){
        res.statusCode = 200;
        return fs.readFile("./public/service.html", "utf-8", (err, data) => {
            res.end(data);
        });
    }else if(req.url === `/style.css`){
        res.setHeader("Content-Type", "text/css");
        return fs.readFile("./public/style.css", (err, data) => res.end(data));
    }else {
        res.statusCode = 404;
        fs.readFile("./public/404.html", "utf-8", (err, data) => res.end(data));
    }
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
         </head>
        <body>
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/about">About-Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                 </ul>
             </div>
         </body>
         </html>`)
    res.end()
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`NODE server is live on http://localhost:${PORT}`)
})