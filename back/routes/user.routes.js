const express = require('express');
const { setUser, getUsers, updateUser, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', getUsers)
router.post('/', setUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser);


module.exports = router;