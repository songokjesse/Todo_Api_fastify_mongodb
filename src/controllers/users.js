const User = require('../models/users')
const boom = require('boom')
const Bcrypt = require('bcrypt')
const saltHash = 10
// require the Joi module
const Joi = require('joi')
// register user
exports.create = async (req,reply) =>{
    // fetch the request data
    const data = req.body
    // define the validation schema
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(7).alphanum().required()
    })
// validate the request data against the schema
    Joi.validate(data, schema, (err, value) => {
        if (err) {
          throw boom.boomify(err)
        }
    })

            const { email } = req.body

            try {
                req.body.password = Bcrypt.hashSync(req.body.password, saltHash)
                const user = new User(req.body)
                await user.save()
            } catch (e) {
                throw boom.boomify(e)
            }
            const token = await reply.jwtSign({email})
            return {status: 'OK', token }
}


// get a single task
exports.authenticate = async (req,reply) =>{
    const { email } = req.body

    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if(!user) {
            return reply.status(400).send({ message: "The email or password does not exist" });
        }
        if(!Bcrypt.compareSync(req.body.password, user.password)) {
            return reply.status(400).send({ message: "The email or password is invalid" });
        }
        const token = await reply.jwtSign({ email })

        return { status: 'ok', token }
    } catch (error) {
       throw boom.boomify(error)
    }
}
