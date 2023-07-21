//const express = require('express');
const Express = require('express');

const app = Express();

var courses = [];
var items = [];

app.get('/api/:item',(req,res)=>{
    const item = req.params.item;
    items.push(item);

    res.send('Item added');

});

app.get("/let/:year/:month/:day",function(req,res){
    res.send(req.params)
})

app.get('/getItems',(req,res)=>{
    res.send(items);
});
app.use(Express.json())
app.post('/create',(req,res)=>{
    console.log(req.body)
    const bird = req.body
    courses.push(bird)
    res.send(courses);
    //res.send(bird)
});

app.get("/all/:id",(req,res)=>{
    const as = req.params.id;
    res.send(courses[as]);
})

app.put('/updateItems/:id',(req,res)=>{
    res.send(items);
});
 
app.listen(5000,()=>{
    console.log('Listening to port  5000');
});

//module.exports = fetch;