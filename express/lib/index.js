const express =  require('express');

const usersrouter = require("./routes/users");
const booksrouter = require("./routes/books");

const app  = express();
const port =2302;

app.use(express.json());
app.use('/users', usersrouter);
app.use('/books', booksrouter);

app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Hello and welcome to library"
    })
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});