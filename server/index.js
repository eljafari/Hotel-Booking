const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoutes = require('./routes/user');
const HotelRoutes = require('./routes/hotel');
// const AuthRoutes = require('./routes/auth');
const RoomRoutes = require('./routes/room');


const cookieParser = require('cookie-parser');

require('dotenv').config();

const mongoURL = process.env.MONGDB_URL;

app.use(express.json())

app.use(cors());
// app.use(cookieParser)

mongoose.connect(mongoURL, (error) => {
    if (error) {
        console.error(`There was an error connecting database, ${error}`);
    } else {
        console.log("Succefully connected to Database");
    }
})
app.use(cookieParser());
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/hotels', HotelRoutes);
app.use('/api/v1/rooms', RoomRoutes);

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})