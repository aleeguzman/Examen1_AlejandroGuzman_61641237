//npm init
//npm install express
//npm install cors
//npm install mongoose
//npm install path

var path = require("path");
var cors = require('cors');
var express = require('express');

const BDConnect = require('./BD/database');
var VideosRuta = require('./options/VideosRuta')

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

BDConnect();

app.use(express.static('public'));

app.get("/", (req, res) =>
{
    return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/videos", VideosRuta);

app.use(function(req, res, next) 
{
    res.status(404);
    res.send('404: File Not Found');
});

app.listen(3000, () => 
{
    console.log(`Escuchando el puerto 3000`)
})