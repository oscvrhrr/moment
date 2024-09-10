require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// parses the req.body
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(4001, () => {
    console.log("running on port 4001")
})