const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

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
    await createTodo.craete({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", function(req, res) {
    const todos = todo.find({});

    res.json({
        todos: todos
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
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo completed"
    })
});

app.listen(3000);