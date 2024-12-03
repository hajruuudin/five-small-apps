// TO-DO: Implement functionalities and logic from the routes
const List = require('../models/list')

const ListController = {
    findAll : async (req, res) => {
        const lists = await List.find({});
        res.json(lists);
    },

    findById: async (req, res) => {
        const { listId } = req.params;
        const targetList = await List.findById(listId).populate('tasks');
        res.json(targetList);
    }
}

module.exports = ListController;