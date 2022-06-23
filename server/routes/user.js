const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserById, loginUser, updateUser } = require('../controller/user');

router.get('/', getUsers);

router.post('/login', loginUser);
router.put('/:id', updateUser);
router.get('/:id', getUserById);

router.post('/', createUser);

module.exports = router;