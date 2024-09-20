const { Router } = require("express");
const festivalsController = require("../controllers/festivalController")

const genresRouter = Router();


genresRouter.get(("/"), (req, res) => {
    festivalsController.getGenres(req, res);
})

genresRouter.get("/:genreID", (req, res) => {
    festivalsController.createGetGenreId(req,res);
});

genresRouter.get("/:genreID/:festID", (req, res) => {
    festivalsController.getFestivalById(req,res);
})



module.exports = genresRouter;