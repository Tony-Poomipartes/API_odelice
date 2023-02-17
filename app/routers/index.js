const express = require('express');
const cadexController = require('../controllers/cadexController');

const router = express.Router();

router.get('/cadex', cadexController.get);
router.post('/cadex', cadexController.post);

module.exports = router;
