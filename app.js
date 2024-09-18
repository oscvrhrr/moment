require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");


const festivalsRouter = require("./routes/festivalsRouter");
const genresRouter = require("./routes/genresRouter")
const indexRouter = require("./routes/indexRouter");


const festivalsController = require("./controllers/festivalController");



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parses the req.body
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get('/favicon.ico', (req, res) => res.status(204));


app.get("/add-fest", (req, res) => {
    festivalsController.getFestForm(req, res);
});

app.post("/add-fest", (req, res) => {
    festivalsController.sendFestData(req, res)
})  

app.use("/genres", genresRouter );

app.use("/festivals", festivalsRouter);

app.use("/", indexRouter);

app.listen(4001, () => {
    console.log("running on port 4001")
});