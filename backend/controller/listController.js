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
    },

    addList: async (req, res) => {
        const { list } = req.body;
        const newList = new List(list);
        await newList.save();
        res.status(200).json(newList._id)
    },

    deleteById: async (req, res) => {
        const { listId } = req.params;
        await List.findOneAndDelete({_id: listId});
        res.status(200).json(`Deleted List with id: ${listId}`)
    }
}

module.exports = ListController;