require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

const genresRouter = require("./routes/genresRouter")
const indexRouter = require("./routes/indexRouter");


const festivalsController = require("./controllers/festivalController");



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parses the req.body
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.get('/favicon.ico', (req, res) => res.status(204));


app.post("/:festId/updateItem/new", (req, res) => {
    festivalsController.sendUpdFest(req, res);
});

app.get("/:festId/updateItem", (req, res) => {
    festivalsController.updateFestivalById(req, res)
});


app.get("/festivals", (req, res) => {
    festivalsController.getSortedFestivals(req,res)
});

app.get("/festform", (req, res) => {
    festivalsController.getFestForm(req, res);
});


app.post("/festform", (req, res) => {
    festivalsController.sendFestData(req, res)
})  



app.use("/genres", genresRouter );
app.use("/", indexRouter);





app.listen(4001, () => {
    console.log("running on port 4001")
});