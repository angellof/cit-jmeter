var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      index: {
        image: 'https://i.pinimg.com/originals/0b/ee/24/0bee24efd19c52e691333c172939e818.jpg',
        title: 'Ola pessoal !',
        phrase: 'Estamos prontos para começar com o JMeter'
      }
    });
});

module.exports = router;
