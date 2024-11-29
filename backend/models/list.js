const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Task = require('./task'); // Shorthand in order to not type this thing always.

const ListSchema = new Schema({
    listName: String,
    tasks: {
        type: [Schema.Types.ObjectId],
        ref: 'Task'
    }
})

ListSchema.post('findOneAndDelete', async function (list){
    if(list){
        await Task.deleteMany({
            _id: {
                $in: list.tasks
            }
        })
    }
})

module.exports = mongoose.model('List', ListSchema)