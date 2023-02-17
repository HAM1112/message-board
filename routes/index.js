const messages = [
  {
    text: "The monkey juggled the coconuts with ease, impressing the onlookers",
    user: "Yasmin",
    added: new Date()
  },
  {
    text: "As the sun set behind the mountains, the sky was painted with shades of pink and orange, creating a stunning display of natural beauty",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req,res,next){
  res.render('form' ,{title:"Add MSG"})
})

router.post('/new' ,function(req,res,next){
  if(req.body.user === '' && req.body.text === ''){
    res.render('form',{title: 'Add MSG',error: 'Inputs cannot be empty'})
  }else{
    messages.push({text: req.body.text , user : req.body.user, added : new Date() })
    res.redirect('/')
  }
} )

module.exports = router;
