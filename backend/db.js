const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/todo-app';

mongoose.connect('MONGO_URL')
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo: todo
}