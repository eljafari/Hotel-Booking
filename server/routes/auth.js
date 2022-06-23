const express = require('express');
const { register } = require('../controller/auth.js');
const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('auth ')
// })
router.post('/register', register)


module.exports = router;