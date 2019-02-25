require ('dotenv'). config ();
const fastify = require('fastify')({
    logger:true
})

const mongoose = require('mongoose')
// Import Swagger Options
const swagger = require('./config/swagger')
const routes = require('./src/routes')

//database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Mongo Database Connected '))
    .catch(err => console.log(err))

// This function is to make us able to post via www-url-encoded.
fastify.register (require ('fastify-formbody'))

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

//get routes
routes.forEach((route, index) =>{
    fastify.route(route)
})
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
