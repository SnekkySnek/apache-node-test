const router = require('express').Router();
const appController = require('../controllers/app.controller');
// const user = require('../models/user');

module.exports = router;

//routes
router.get('/', appController.readAll)
router.post('/', appController.post)
router.put('/:id([0-9a-fA-F]{24})', appController.put)
router.delete('/:id([0-9a-fA-F]{24})', appController.delete)