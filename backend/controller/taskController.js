// TO-DO: Implement functionalities and logic from the routes
const Task = require('../models/task');
const List = require('../models/list')

const TaskController = {
    findAll: async (req, res) => {
        const tasks = await Task.find({});
        res.json(tasks);
    },
    
    setCompletedTask: async (req, res) => {
        const { taskId } = req.params;
        console.log(req.body);
        const updatedTask = await Task.findByIdAndUpdate(taskId, {status: true})
        res.json(updatedTask);
        console.log(updatedTask);
    },

    setIncompletedTask: async (req, res) => {
        const { taskId } = req.params;
        console.log(req.body);
        const updatedTask = await Task.findByIdAndUpdate(taskId, {status: false})
        res.json(updatedTask);
        console.log(updatedTask);
    },

    findAndDelete: async (req, res) => {
        const { taskId } = req.params;
        await Task.findByIdAndDelete(taskId)
        res.status(200).json("Deleted")
    },

    addTask: async (req, res) => {
        try {
            const { task, list } = req.body;
    
            const newTask = new Task(task);
            console.log(newTask)
            await newTask.save();
    
            const updatedList = await List.findByIdAndUpdate(
                list,
                { $push: { tasks: newTask._id } },
                { new: true }
            );
    
            console.log("New Task Added:", newTask);
            console.log("Updated List:", updatedList);
    
            res.status(200).json({ message: `List with id ${list} has a new task.` });
        } catch (error) {
            console.error("Error Adding Task:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = TaskController;