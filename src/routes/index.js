const taskController = require('../controllers/tasks')

const routes = [
    {
        method: "GET",
        url: "/",
        handler: (request, reply)=> {
            reply.send({ hello: 'world' })
        }
    },
    {
        method: "GET",
        url: '/api/tasks',
        handler: taskController.getTasks
    },
    {
        method: "GET",
        url: '/api/task/:id',
        handler: taskController.getTask
    },
    {
        method: "POST",
        url: '/api/task',
        handler: taskController.addTask
    },
    {
        method: "PUT",
        url: '/api/task/:id',
        handler: taskController.updateTask
    },
    {
        method: "DELETE",
        url: '/api/task/:id',
        handler: taskController.deleteTask
    }
]
module. exports = routes;
