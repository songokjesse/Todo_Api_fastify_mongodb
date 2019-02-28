const taskController = require('../controllers/tasks')
const userController = require('../controllers/users')

const routes = [
    {
        method: "GET",
        url: "/",
        handler: (request, reply)=> {
            reply.send({ hello: 'Todo Fastify API with Mongodb' })
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
        url: '/api/tasks',
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
    },
    {
        method:'POST',
        url: '/api/user/register',
        schema:{
            body: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    }
                },
                required: ['name', 'email', 'password']
            }
        },
        handler: userController.create
    },
    {
        method: 'POST',
        url: '/api/user/authenticate',schema:{
            body: {
                type: 'object',
                properties: {
                    username: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    }
                },
                required: ['email', 'password']
            }
        },
        handler: userController.authenticate
    }
]
module. exports = routes;
