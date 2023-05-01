const express = require('express');
const apiRouteur = require('./api');
const websiteRouter = require('./website');

const router = express.Router();

router.use('/api', apiRouteur);
router.use('/', websiteRouter);

module.exports = router;
