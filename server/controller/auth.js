const User = require('../models/user.js');

const register = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        })

        const authUser = await newUser.save()
        return res.status(200).json({
            message: "Succesfully created user",
            authUser

        })
    } catch (err) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}
module.exports = { register }