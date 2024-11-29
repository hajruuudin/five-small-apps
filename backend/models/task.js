const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true,"Every task must have a name!"]
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"]
    },
    status: {
        type: Boolean,
        required: [true, "Every task must have a status!"]
    }
})

module.exports = mongoose.model('Task', TaskSchema);