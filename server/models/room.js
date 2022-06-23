const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },

    description: {
        type: String,
        require: true
    },
    maxPople: {
        type: Number,
        require: true
    },
    roomNumber: [{
        number: Number,
        unavailableDates: { type: [Date] }

    }],

},
    { timestamps: true }
);

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;