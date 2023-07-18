const { application } = require('express');
const express =require ('express')
application.use(express.json());
let users =[
    {id: 1, name:'nael' , profession:'web developer'},
]
app.get("/",(req,res)=>res.send('test'))
const app = express();
const PORT=4500;
app.listen(PORT,(err)=> {
    err? console.log(err) :
    console.log('server is runinig on port ${PORT}')
});