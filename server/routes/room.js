const express = require('express');
const router = express.Router();
const { createRoom,
    deleteRoom,
    getRoom,
    getRoomById,
    updateRoom } = require('../controller/room.js');


router.get('/', getRoom);
router.post('/:hotelid', createRoom);
router.put('/:id', updateRoom);
router.delete('/:id/:hotelid', deleteRoom);
router.get('/:id', getRoomById);

module.exports = router;