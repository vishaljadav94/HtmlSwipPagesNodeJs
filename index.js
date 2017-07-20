const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // to support URL-encoded bodies
app.use(express.static("html"));
app.set('view engine', 'pug');

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/index.html"));
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/home.html"));
});

app.get("/about", function (req, res) {

    res.sendFile(path.join(__dirname + "/html/about.html"));
});

app.get("/info", function (req, res) {
    res.sendFile(path.join(__dirname + "/html/info.html"));
});

app.post("/submit", function (req, res) {
    console.log("password " + req.body.password);
    res.render('showdata', {username: req.body.username, password: req.body.password})
});


app.listen(3000, function () {
    console.log("server start on port 3000");
});