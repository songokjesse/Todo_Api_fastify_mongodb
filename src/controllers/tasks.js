const boom = require('boom')

// get data models
const Task = require('../models/task')


// get all tasks
exports.getTasks = async (req, reply) =>{
    try{
        const tasks = await Task.find()
        return tasks
    } catch (e) {
      throw boom.boomify(e)
    }
}

// get a single task
exports.getTask = async (req,reply) =>{
    try{
        const id = req.params.id
        const task = await Task.findById(id)
        return task
    }catch (e) {
        throw boom.boomify(e)
    }
}

// create tasks
exports.addTask = async (req,reply) =>{
    try {
        const task = new Task(req.body)
        return task.save()
    } catch (e) {
       throw boom.boomify(e)
    }
}

// update task with id
exports.updateTask = async (req,reply) =>{
    try{
        const id = req.params.id
        const task = req.body
        const  { ...updateData } = task
        const update = await  Task.findByIdAndUpdate(id,updateData, {new: true})
        return update

    }catch (e) {
        throw boom.boomify(e)
    }
}

// delete task
exports.deleteTask = async (req,reply) => {
    try {
        const id = req.param.id
        const task = await Task.findByIdAndRemove(id)
        return task
    }catch (e) {
        throw boom.boomify(e)
    }
}
