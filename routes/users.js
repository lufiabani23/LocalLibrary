var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/cool', function(req, res, next) {
  res.send('Você é tão legal.');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Adoro praia!');
});

router.get('/ifc', function(req, res, next) {
  res.send('Bem-vindo ao IFC.');
});
module.exports = router;
