const express = require('express');
const router = express.Router();
const {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks.controller');
const {
  validatorCreateTrack,
  validatorGetTrack,
} = require('../validators/tracks.validator');
const customHeader = require('../middlewares/customHeader');
const { authMiddleware } = require('../middlewares/session');
const { authRole } = require('../middlewares/role');

router.get('/', [authMiddleware, authRole(['admin']), customHeader], getItems);
router.get('/:id', validatorGetTrack, getItem);
router.post('/', validatorCreateTrack, postItem);
router.put('/:id', [validatorGetTrack, validatorCreateTrack], updateItem);
router.delete('/:id', [validatorGetTrack], deleteItem);

module.exports = router;
