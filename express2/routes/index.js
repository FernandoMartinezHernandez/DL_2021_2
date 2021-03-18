var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', (red,res,next)=>{
  console.log('saludando');
  res.send("<h1>Saludos desde el bakckend </h1>")

})

module.exports = router;
