const express =  require('express');
const app  = express();
const port =2302;
app.use(express.json());
const to_do_list= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


app.get("/", (req, res)=>{
    res.send("hey");
});

app.get("/todo", (req, res)=>{
    res.send(to_do_list);
});

app.post( "/todo", (req ,res)=>{
    const newtodo = req.body.item;
    to_do_list.push(newtodo);
    res.send({message: "successful"});
});


app.delete("/todo", (req, res) => {
    const delete_item = req.body.item;
    if(to_do_list.find((ele, index) => {
        if (ele === delete_item) {
            to_do_list.splice(index, 1);
            console.log(to_do_list);
            return true;
        }
        return false;
    })){
        res.status(200).send({ message: "Deletion successful" });
    }else{
        res.status(404).send({ message: "Item not in list" });
    } 
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

