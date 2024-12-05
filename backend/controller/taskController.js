const Task = require('../models/task');
const List = require('../models/list');
const task = require('../models/task');

const TaskController = {
    findAll: async (req, res) => {
        const tasks = await Task.find({});
        res.json(tasks);
    },

    findById: async (req, res) => {
        const { taskId } = req.params;
        console.log(taskId);
        const responseTask = await Task.findById(taskId);
        console.log(responseTask);
        res.json(responseTask);
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
        const { list } = req.body;

        console.log(taskId)
        console.log(list)

        try {
            const deletedTask = await Task.findByIdAndDelete(taskId);
    
            const updatedList = await List.findByIdAndUpdate(
                list,
                { $pull: { tasks: taskId} },
                { new: true }
            );
    
            res.status(200).json({ message: 'Task deleted successfully', updatedList });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting task', error: err });
        }
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
    },

    editTask: async (req, res) => {
        try {
            const { newTitle, newDescription, newPriority } = req.body;
            const { taskId } = req.params;

            const editedTask = await Task.findByIdAndUpdate(
                taskId,
                {
                    title: newTitle,
                    description: newDescription,
                    priority: newPriority
                },
                {new: true}
            )
    
            res.status(200).json({ message: `Task ${editedTask._id} edited.` });
        } catch (error) {
            console.error("Error Adding Task:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = TaskController;