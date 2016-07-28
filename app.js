var express = require('express');
var app = express();
var multer  = require('multer')
  
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render("index");
})

app.post('/getsize', multer({ dest: 'uploads/'}).single('fileUpload'), function(req, res){
  res.json({size: req.file.size});
})

app.listen(process.env.PORT || 3000, function(){
  console.log('listening...');
});