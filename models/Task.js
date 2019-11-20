// Creating the schema for Tasks

const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duedate: {
        type: String,
        required: true
    }
});

// Adding Schema to Model or Collection

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;