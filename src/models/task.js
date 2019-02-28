const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task_title: String,
    task_description: String,
    task_priority: String,
    task_completed: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', taskSchema)
