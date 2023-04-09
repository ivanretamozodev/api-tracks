const express = require('express');
const router = express.Router();
const {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} = require('../controllers/users.controller');

router.get('/', getItems);
router.get('/:id', getItem);
router.get('/', postItem);
router.get('/:id', updateItem);
router.get('/:id', deleteItem);

module.exports = router;
