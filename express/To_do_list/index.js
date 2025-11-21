const express  = require('express');
const app = express();
const port = 4000;

// array destructuring in order to see content while get request
const {todolist}= require('./To_do_List.json');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// a get request to check the server whether it's live or not
app.get('/', (req,res)=>{
    res.status(200).json({ message: 'hey' });
});

// get request to see all the tasks/data that are/is available
app.get('/todos', (req,res)=>{
    res.status(200).json(todolist);
});

/* post request for posting new task/data where id is auto updated,
 so user need not care about id but the task and dates related to it.*/
app.post('/todo/newtodo', (req, res) => {
    const data = req.body;

    if (data.Id) return res.status(400).json({ success: false, message: 'Id not required' });
    if (!data.message) return res.status(400).json({ success: false, message: 'No message/task provided' });
    if (!data.due_date) return res.status(400).json({ success: false, message: 'No due date provided' });
    if (!data.start_date) return res.status(400).json({ success: false, message: 'No start date provided' });

    // Parsing the dates
    const startDate = new Date(data.start_date);
    const dueDate = new Date(data.due_date);

    // Validating both dates: checking for invalid dates or format
    if (isNaN(startDate.getTime()) || isNaN(dueDate.getTime())) {
        return res.status(400).json({ 
            success: false, message: 'Invalid date format. Please use YYYY-MM-DD.'
        });
    }
    // Comparing dates
    if (startDate > dueDate) return res.status(400).json({ 
        success: false, message: 'Due date must be of date after the start date.'
    });
    
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // zero out the time (for comparing dates)
    var is_active = true;
    // if the due date has already been crossed then task become inactive
    if(dueDate < currentDate) is_active= false;
    
    const maxId = todolist.length > 0 ? Math.max(...todolist.map(u => u.Id)) : 0;
    const newId = maxId + 1;

    const newTodo = {
        Id: newId,
        message: data.message,
        due_date: data.due_date,
        start_date: data.start_date,
        is_active: is_active
    };

    todolist.push(newTodo);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTodo
    });
});


// put request for updating the existing task.
// although user can change not only message and dates,
// but also can add new field (haven't thought about restriction)
app.put('/todo/:Id', (req, res) => {
    const { Id } = req.params;
    const data = req.body;
    console.log(data);
    // const {message} = req.body;
    // console.log(req.body);

    // Find todo index
    const ind = todolist.findIndex(each => String(each.Id) === String(Id));
    if (ind === -1) return res.status(404).json({ 
        success: false, message: 'Task not found'
    });

    // Updating Id field is not allowed
    if ('Id' in data)  return res.status(400).json({ 
        success: false, message: 'Id cannot be modified'
    });
    //Fields allowed be changed
    const allowedFields = ['message', 'due_date', 'start_date', 'is_active']; 
    // Reject any extra fields not in allowedFields
    const keys = Object.keys(data);
    for (const key of keys){
        if (!allowedFields.includes(key))  return res.status(400).json({
             success: false, message: `Field '${key}' cannot be modified or does not exist`
            });
    }

    // Check dates if updated
    const newStart = data.start_date !== undefined ? new Date(data.start_date) : new Date(todolist[ind].start_date);
    const newDue = data.due_date !== undefined ? new Date(data.due_date) : new Date(todolist[ind].due_date);
    if (isNaN(newStart.getTime()) || isNaN(newDue.getTime())) return res.status(400).json({
        success: false, message: 'Invalid date format. Use YYYY-MM-DD.' 
    });
    if (newStart > newDue) return res.status(400).json({ 
        success: false, message: 'Start date must not be after due date.'
    });
    
    // Update only allowed fields provided
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if(data.is_active!==false){
        // if the due date has already been crossed then task become inactive
        if(newDue < currentDate) data.is_active= false;
    }

    allowedFields.forEach(field => {
        if (field in data) {
            todolist[ind][field] = data[field];
        }
    });

    res.status(200).json({
        success: true,
        message: 'Task updated successfully',
        data: todolist[ind]
    });
});


/*delete request where user need to provide id only and 
based on that id all the task with that id will be deleted*/
app.delete('/todo/:Id', (req,res)=>{
    const {Id} = req.params;
    const ind = todolist.findIndex((each)=>String(each.Id) === String(Id));
    if(ind===-1) return res.status(404).json({
        success: false, message: 'task not found'
    });
    todolist.splice(ind,1);
    res.status(200).json({
        message:'task deleted successfully'
    });
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});


