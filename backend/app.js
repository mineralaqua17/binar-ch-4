const host = "localhost"
const port = 4000;

const fs = require('fs')
const path = require("path")
const cors = require('cors');
const morgan = require('morgan')
const express = require("express"),
    app = express();

app.use(cors({
    origin: '*'
}));

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan("dev"))

app.use(express.json());

const router = require("./src/routes");

app.use("/api", router);

app.listen(port, function () {
    console.log(`Server is running on http://${host}:${port}`);
});