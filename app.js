require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// parses the req.body
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const festivalsController = require("./controllers/festivalController")

app.get("/", (req, res) => {
    festivalsController.getFestivals(req, res)
})

app.listen(4001, () => {
    console.log("running on port 4001")
})