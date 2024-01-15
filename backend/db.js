const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pphuphaas:ctw0DeNjrAf20RPf@cluster0.sxyujsp.mongodb.net/todos')
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = todo;