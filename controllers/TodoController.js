const Todo = require("../models/Todo");


const TodoControlleer = {
    async create (req,res) {
        try {
            const NewTodo = {...req.body, done: "false"};
            const CreateTodo = await Todo.create(NewTodo) 
            res.status(201).send({ message: `Task created successfully.`, value: CreateTodo })
        }
        catch{
            console.error(error);
            res.status(500).send({ message: "Error during post creation.", error });

        }
    },
    
}
module.exports = TodoControlleer