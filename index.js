const express = require('express');
const app = express();
const port = 3000;
const tasksData = require('./task.json');
var tasksArray = [];
tasksArray.push(tasksData);
console.log(JSON. stringify(tasksArray, undefined, 4));

app.use(express.json());
app.listen(port, (err) => {
    if(err){
        return console.log('error occured: '+err);
    }
    console.log('app is up and running on port: '+port);
});

app.get('/tasks', (req, res) => {
    return res.status(200).json(tasksData);
});

app.get('/tasks/:id', (req, res) => {
    let tasks = tasksData.tasks;
    let taskIdRequested = req.params.id;
    let returnTask = tasks.filter(val => val.id == taskIdRequested);
    if(returnTask.length == 0){
        return res.status(404).json('No task found for the passed task id');
    }
    return res.status(200).json(returnTask);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    console.log(newTask);
    tasksArray[tasksArray.length-1].tasks.push(newTask);
    console.log('Array after insertion: '+JSON. stringify(tasksArray, undefined, 4));
    console.log('New Entry: '+JSON. stringify(tasksArray[tasksArray.length-1].tasks[newTask.id-1], undefined, 4));
    return res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const updatedTask = req.body;
    console.log(updatedTask);
    tasksArray[tasksArray.length-1].tasks[req.params.id].completed = updatedTask.completed;
    console.log('Array after updation: '+JSON. stringify(tasksArray, undefined, 4));
    console.log('Updated Entry: '+JSON. stringify(tasksArray[tasksArray.length-1].tasks[req.params.id], undefined, 4));
    return res.status(201).json(tasksArray[0].tasks[req.params.id]);
});

app.delete('/tasks/:id', (req, res) => {
    tasksArray[tasksArray.length-1].tasks.splice(req.params.id,1);
    console.log('Array after deletion: '+JSON. stringify(tasksArray, undefined, 4));
    return res.status(200).send(req.params.id+' Deleted successfully');
});