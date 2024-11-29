const express = require('express')
const taskRouter = express.Router({mergeParams: true});

// TO-DO: Create task routes: addTask, deleteTask, getTasks, completeTask, undoCompleteTask