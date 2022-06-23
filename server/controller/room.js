const mongoose = require('mongoose');
const Hotel = require('../models/hotel');
const Room = require('../models/room')



const createRoom = async (req, res) => {
    try {
        const hotelId = req.params.hotelid;
        const room = new Room({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            maxPeople: req.body.maxPeople,
            roomNumber: req.body.roomNumber
        })

        const saveRoom = await room.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: saveRoom._id },
            });
        } catch (err) {
            return res.status(500).json({
                message: "There was an error!",
                error
            })
        }
        res.status(200).json(saveRoom)
    } catch (err) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}
const getRoom = async (req, res) => {
    try {
        const data = await Room.find();

        return res.status(200).json({
            message: "Succesfully fetched list of Rooms",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getRoomById = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Room.findOne({ _id: id });

        return res.status(200).json({
            message: "Succesfully fetched Room based on ID",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


const updateRoom = (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Room.findOneAndUpdate({ _id: id }, body, {
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


const deleteRoom = async (req, res) => {
    const id = req.params.id;
    const hotelId = req.params.hotelid;
    try {
        await Room.findOneAndDelete({ _id: id });
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: id },
            });
        } catch (err) {
            return res.status(500).json({
                message: "There was an error!",
                error
            })
        }
        res.status(200).json({
            message: "Succesfully deleted the Hotel by given ID",
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    }
}


module.exports = {
    createRoom,
    deleteRoom,
    getRoom,
    updateRoom,
    getRoomById
}
