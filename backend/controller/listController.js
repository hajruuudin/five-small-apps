// TO-DO: Implement functionalities and logic from the routes
const List = require('../models/list')

const ListController = {
    findAll : async (req, res) => {
        const lists = await List.find({});
        res.json(lists);
    }
}

module.exports = ListController;