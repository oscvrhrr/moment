const { Router } = require("express");
const festivalsController = require("../controllers/festivalController")


const indexRouter = Router();


indexRouter.get("/", (req, res) => {
    festivalsController.getFestivals(req, res)
});


indexRouter.get("/:id", (req, res) => {
    festivalsController.getFestivalById(req, res)
})



module.exports = indexRouter;