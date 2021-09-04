const express = require("express");

var port = 3000;
var app = express();
app.use(express.json());
//this is used to pass data from url
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});




