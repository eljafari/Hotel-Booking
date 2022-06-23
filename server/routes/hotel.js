const express = require('express');
const router = express.Router();
const { getHotels, createHotel, getHotelById,
    updateHotel, deleteHotel, bookHotelRoom,
    searchHotelByCity,
    countByCity } = require('../controller/hotel');

router.get('/', getHotels);
router.get('/countByCity', countByCity);
// router.get('/countByType', getHotels);

router.post('/', createHotel);

router.get('/find/:id', getHotelById);

router.put('/:id', updateHotel);

router.delete('/:id', deleteHotel);

router.post('/bookHotelRoom', bookHotelRoom)

router.post('/searchHotelByCity/:city', searchHotelByCity)

module.exports = router;