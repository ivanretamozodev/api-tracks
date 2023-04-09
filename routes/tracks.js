const express = require('express');
const router = express.Router();
const {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks.controller');

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
