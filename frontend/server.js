const host = "localhost"
const port = 3000;

const fs = require('fs')
const path = require("path")
const morgan = require('morgan')
const express = require("express"),
    app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});
app.get("/add", function (req, res) {
    res.render("add");
});
app.get("/edit", function (req, res) {
    res.render("edit");
});
app.use('/edit', (req, res) => {
    res.status(404);
    res.send('<h1>404 NOT FOUND</h1>');
});

app.listen(port, function () {
    console.log(`Server is running on http://${host}:${port}`);
});