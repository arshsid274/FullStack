const express = require('express');
const router = express.Router();

const {createUser, getUser } = require('../Controller/crudcontroller.js');

router.get('/get', getUser);

router.post('/create',createUser );

module.exports = router;