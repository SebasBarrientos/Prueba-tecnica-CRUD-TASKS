const Todo = require("../models/Todo");


const TodoControlleer = {
    async create(req, res) {
        try {
            const NewTodo = { ...req.body, done: "false" };
            const CreateTodo = await Todo.create(NewTodo)
            res.status(201).send({ message: `Task created successfully.`, value: CreateTodo })
        }
        catch {
            console.error(error);
            res.status(500).send({ message: "Error during task creation.", error });

        }
    },
    async getAll(req, res) {
        try {
          const { page = 1, limit = 10 } = req.query;
          const todos = await Todo.find().limit(limit).skip((page - 1) * limit);
          res.send({ message: "All the tasks", value: todos });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Something went wrong while getting the tasks.", error });
        }
      },
      async getById(req, res) {
        try {
          const todo = await Todo.findById(req.params._id)
          res.send({ message: "Task found", value: todo });
        } catch (error) {
          console.error(error);
        }
      },
    async todoCompleted(req, res) {
        try {
            const todo = await Todo.findByIdAndUpdate(
                req.params._id,
                {done:true},
                { new: true }
            );
            if (todo === undefined) {
                return res.status(400).send({ message: "The task doesnt exist" });
            }
            res.send({ message: "Todo successfully updated", value:todo });
        } catch (error) {
            console.error(error);
        }
    },
    
    async update(req, res) {
        try {

            const update = { ...req.body }
            const todo = await Todo.findByIdAndUpdate(
                req.params._id,
                update,
                { new: true }
            );
            res.send({ message: "Todo successfully updated", value:todo });
        } catch (error) {
            console.error(error);
        }
    },
    async delete(req, res) {
        try {
          const todo = await Todo.findByIdAndDelete(req.params._id);
          
          res.send({ message: "Task deleted", todo });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem trying to remove the task" });
        }
      },

}
module.exports = TodoControlleer