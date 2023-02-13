const express = require('express');
const apiRouter = require('./api');
const websiteRouter = require('./website');

const router = express.Router();

// On organise toujours les routes, de la plus précise à la plus simple
router.use('/api', apiRouter);
router.use('/', websiteRouter);

module.exports = router;
