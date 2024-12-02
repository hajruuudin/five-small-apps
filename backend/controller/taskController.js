// TO-DO: Implement functionalities and logic from the routes
const Task = require('../models/task');

const TaskController = {
    findAll: async (req, res) => {
        const tasks = await Task.find({});
        res.json(tasks);
    }
}

module.exports = TaskController;