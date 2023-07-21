const express = require("express");

const app = express();

var items = [];
var classes =[];

app.get("/addItem/:food", (req, res) => {
  const add = req.params.food;
  if (items.includes(add)) {
    res.send("Already exist");
  } else {
    items.push(add);
    res.send("Item added");
  }
});

app.get("/list", (req, res) => {
  res.send(items);
});
app.use(express.json())
app.get("/deleteItem/:name", (req, res) => {
  const value = req.params.name;
  const id = items.indexOf(value);
  if (id === -1) {
    res.send("Dose not exist");
  } else {
    const remove = items.splice(id, 1);
    //const remove = items.pop(value);
    res.send(remove + " has been deleted");
  }
});

app.post("/post", (req, res) => {
 
  res.send(items)
});
app.post("/get", (req, res) => {
  console.log(req.body);
  const cos ={
    id: classes.length+1 ,
    name: req.body.name
  }
  classes.push(cos)
  res.send(classes)
});

app.listen(200, () => {
  console.log("Listening to port 200");
});
