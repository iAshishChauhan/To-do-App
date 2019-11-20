const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const addTaskController = require('../controllers/addTask_controller');

router.get('/', homeController.home);
router.post('/add-task', addTaskController.AddTask);

module.exports = router;