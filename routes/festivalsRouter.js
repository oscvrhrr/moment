const { Router } = require("express");
const festivalsController = require("../controllers/festivalController");


const festivalRouter = Router()


festivalRouter.get("/", (req, res) => {
    festivalsController.getSortedFestivals(req, res)
});

festivalRouter.get("/:festID", (req, res) => {
    festivalsController.getFestivalById(req, res)
});

festivalRouter.get("/:festID/updateItem", (req, res) => {
    festivalsController.updateFestivalById(req, res)
});

festivalRouter.post("/:festID/updateItem", (req, res) => {
    festivalsController.sendUpdFest(req, res)
});


festivalRouter.post("/:festID/delete", (req, res) => {
    festivalsController.deleteRecord(req, res)
})



module.exports = festivalRouter;