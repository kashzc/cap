var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/top_controller');
var ctrlSession = require('../controllers/session_controller')

router.get('/', ctrlSession.loginRequired, ctrl.index);
router.get('/lista-top' , ctrl.index);

module.exports = router;
