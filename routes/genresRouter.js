const { Router } = require("express");
const festivalsController = require("../controllers/festivalController")

const genresRouter = Router();


genresRouter.get(("/"), (req, res) => {
    festivalsController.getGenres(req, res);
})

genresRouter.get("/:id", (req, res) => {
    festivalsController.createGetGenreId(req,res);
});


module.exports = genresRouter;