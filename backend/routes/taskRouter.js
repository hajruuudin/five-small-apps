const express = require('express');
const taskRouter = express.Router({mergeParams: true});
const catchAsync = require('../utils/CatchAsync');
const TaskController = require('../controller/taskController');

taskRouter.route("/")
    .get(catchAsync(TaskController.findAll))
    .post(catchAsync(TaskController.addTask))

taskRouter.route("/:taskId/complete")
    .patch(catchAsync(TaskController.setCompletedTask))
    
taskRouter.route("/:taskId/incomplete")
    .patch(catchAsync(TaskController.setIncompletedTask))

taskRouter.route("/:taskId")
    .delete(catchAsync(TaskController.findAndDelete))



module.exports = taskRouter;