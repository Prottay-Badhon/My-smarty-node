const express = require('express')
const cors = require('cors');
const { query } = require('express');

const app = express();
app.use(cors())
app.use(express.json());
const port= process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("Hello over my new world");
})
const users = [
    {id: "1",name:"Badhon",phone: "01703512032"},
    {id: "2",name:"Sami",phone: "01703512032"},
    {id: "3",name:"Rafik",phone: "01703512032"},
    {id: "4",name:"Chayan",phone: "01703512032"},
    {id: "5",name:"Sohag",phone: "01703512032"},
    {id: "6",name:"Sowad",phone: "01703512032"},
    {id: "7",name:"Zisad",phone: "01703512032"},
]
app.get('/users',(req,res)=>{
    if(req.query.name){
        //filter by search query
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else
    res.send(users);
})
app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
   const user = users.find( u => u.id===id)
    res.send(user);
})
app.post('/user',(req,res)=>{
    const user = req.body;
    user.id = users.length+1;
    users.push(user);
    res.send(user);
})
app.listen(port,()=>{
    console.log("Example app listening on port");
})