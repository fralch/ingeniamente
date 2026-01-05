const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/home', pageController.getHome);
router.get('/topics', pageController.getAllTopics);
router.get('/pages/:page', pageController.getPage);
router.get('/pages/:category/:page', pageController.getSubPage);

module.exports = router;
