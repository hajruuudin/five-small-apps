const express = require('express');
const catchAsync = require('../utils/CatchAsync');
const ListController = require('../controller/listController')
const listRouter = express.Router({mergeParams: true});

// TO-DO: Create routes for list functions: addList, deleteList, getAllLists, getList

listRouter.route("/")
    .get(catchAsync(ListController.findAll))

module.exports = listRouter;