const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        const data = await User.find();

        return res.status(200).json({
            message: "Succesfully fetched list of User",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createUser = async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: encryptedPassword,
            isAdmin: req.body.isAdmin
        })

        const data = await user.save();

        return res.status(200).json({
            message: "Succesfully created user",
            data

        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const body = req.body;

    User.findOneAndUpdate({ _id: id }, body, {
        returnOriginal: false
    }).then((data) => {
        return res.status(200).json({
            message: "Succesfully updated the data by given ID",
            data
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    })
}


const loginUser = async (req, res) => {
    try {
        const findUser = await User.findOne({ email: req.body.email });

        if (findUser) {

            const matchPassword = await bcrypt.compare(req.body.password, findUser.password);
            if (matchPassword) {
                const token = jwt.sign({
                    id: req.body._id,
                    email: req.body.email,
                    isAdmin: findUser.name === "admin"
                }, process.env.SECRETKEY);

                return res.status(200).json({
                    message: "Succesfully logged in",
                    user: {
                        name: findUser.name,
                        email: findUser.email,
                        id: findUser._id,
                    },
                    token
                })

            } else {
                return res.status(401).json({
                    message: "User Unauthorized! Wrong email or password",

                })
            }



        } else {
            return res.status(404).json({
                message: "User not found!",
                error
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getUserById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await User.findOne({ _id: id });

        return res.status(200).json({
            message: "Succesfully fetched user based on ID",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    loginUser,
    updateUser
}