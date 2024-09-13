require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

const genresRouter = require("./routes/genresRouter")

const festivalsController = require("./controllers/festivalController")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parses the req.body
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use("/genres", genresRouter );

app.get("/festivals", (req, res) => {
    festivalsController.getSortedFestivals(req,res)
});

app.get("/", (req, res) => {
    festivalsController.getFestivals(req, res)
});

app.get("/:id", (req, res) => {
    festivalsController.getFestivalById(req, res)
})





app.listen(4001, () => {
    console.log("running on port 4001")
});