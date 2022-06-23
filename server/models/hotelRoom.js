const mongoose = require('mongoose');

const HotelRoomSchema = mongoose.Schema({
    hotelId: mongoose.Types.ObjectId,
    title:  String,
    description: String,
    features: String,
    available: Boolean,
    price: Number
})

const HotelRoom = mongoose.model("HotelRoom", HotelRoomSchema);

module.exports = HotelRoom;