const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema(
    {
        title: String,
        categories: String,
        done: Boolean
    }
) 

const Todo = mongoose.model ("Todo", TodoSchema)


module.exports = Todo