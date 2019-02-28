require ('dotenv'). config ()

const fastify = require('fastify')({
    logger:true
})

const JWT = require('fastify-jwt')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const swagger = require('./config/swagger')
fastify.register(require('fastify-cors'), {
    origin: true
})

fastify.register (require ('fastify-formbody'))

//database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Mongo Database Connected '))
    .catch(err => console.log(err))

//register jwt
fastify.register(JWT, Object.assign(
    {},
    {secret: process.env.JWT_SECRET }
))

//get routes
routes.forEach((route,  index) =>{
    fastify.route(route)
})
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

const start = async () => {
    try {
        await fastify.listen(process.env.APP_PORT || 3000, process.env.APP_HOST || '0.0.0.0')
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (e) {
        fastify.log.error(e)
        process.exit(1)
    }
}

start()
