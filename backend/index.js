const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');
const todo = require('./db');
const app = express();

app.use(bodyParser.json());
app.use(express.json());


app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return;
    }

    // put it in mongo db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", async function(req, res) {
    // const todos = todo.find({});

    res.json({
        todos: []
    });
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return;
    }
    await Todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo completed"
    })
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});