const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    features: {
        type: Boolean,
        require: true
    },
    imagesURL: {
        type: [String],
    },
    distance: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        require: true
    }

})

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;