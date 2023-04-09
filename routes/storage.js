const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handle-storage');
const { postItem } = require('../controllers/storage.controller');

router.post('/', uploadMiddleware.single('myFile'), postItem);

module.exports = router;
