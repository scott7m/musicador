var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 1337));

app.use(express.static(__dirname + '/public'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + "/images"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/", express.static(__dirname + "/"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


//app.get('/', function(request, response) {
//response.send("Welcome to the Music MMO! (C) Northwestern University. Fahad, Mark, and Scott.");
//});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});