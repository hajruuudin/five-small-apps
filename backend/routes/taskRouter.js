const express = require('express');
const taskRouter = express.Router({mergeParams: true});
const catchAsync = require('../utils/CatchAsync');
const TaskController = require('../controller/taskController');

// TO-DO: Create task routes: addTask, deleteTask, getTasks, completeTask, undoCompleteTask
taskRouter.route("/")
    .get(catchAsync(TaskController.findAll))


module.exports = taskRouter;