const mongoose = require('mongoose');
const Hotel = require('../models/hotel');

const getHotels = async (req, res) => {
    const { min, max, ...others } = req.query;

    try {
        const data = await Hotel.find({
            ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}
const countByCity = async (req, res) => {
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city => {
            // this cost a lot as should fetch all data every tim
            // return Hotel.find({ city: city }).length
            return Hotel.countDocuments({ city: city })
        }))
        return res.status(200).json({
            message: "Succesfully fetched list of Hotels",
            list
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body)

        const data = await hotel.save();

        return res.status(200).json({
            message: "Succesfully created hotel",
            data

        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


const getHotelById = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Hotel.findOne({ _id: id });

        return res.status(200).json({
            message: "Succesfully fetched Hotel based on ID",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateHotel = (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Hotel.findOneAndUpdate({ _id: id }, body, {
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


const searchHotelByCity = async (req, res) => {
    const city = req.params.city;

    try {
        const data = await Hotel.find({ city: city });

        return res.status(200).json({
            message: "Succesfully fetched Hotel based on ID",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const deleteHotel = (req, res) => {
    const id = req.params.id;

    Hotel.findOneAndDelete({ _id: id }).then((data) => {
        return res.status(200).json({
            message: "Succesfully deleted the Hotel by given ID",
        })
    }).catch((error) => {
        return res.status(500).json({
            message: "There was an error fetching the data",
            error
        })
    })
}

const bookHotelRoom = (req, res) => {
    console.log(req.query.hotelId);
    console.log(req.query.roomId);
    const hotelId = new mongoose.Types.ObjectId(req.params.hotelId);
    const roomId = new mongoose.Types.ObjectId(req.params.roomId);
    const body = req.body;

    const xx = Hotel.findOne({ _id: hotelId, "room._id": roomId });

    Hotel.updateOne({ _id: hotelId, "room._id": roomId }, body).then((data) => {
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

};

const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getHotels,
    createHotel,
    getHotelById,
    updateHotel,
    deleteHotel,
    bookHotelRoom,
    searchHotelByCity,
    countByCity,
    getHotelRooms
}