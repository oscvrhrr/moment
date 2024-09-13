const db = require("../db/queries");

async function getFestivals(req, res) {
    const festivals = await db.getAllFestivals();
    res.render("index", { festivals });
}

async function getSortedFestivals(req, res) {
    const sortedFest = await db.getFestivalsAlphaSorted();
    res.render("festivals", { sortedFest });
}

async function getFestivalById(req, res) {
    const id = req.params.id;
    const festival = await db.getFestivalById(id);
    res.render("festivalDetails", { festival });
}

async function getGenres(req, res) {
    const genres = await db.getAllGenres();
    res.render("genres", { genres });
}

async function createGetGenreId(req, res) {
    const id  = req.params.genreID;
    const festivalsByGenre = await db.getGenreById(id);
    res.render("festivalsByGenre", { festivalsByGenre });
}

async function getFestForm(req, res) {
    res.render("addFestForm")
}

async function sendFestData(req, res) {
    const { name, location, date} = req.body;
    await db.insertNewFest(name, location, date);
    res.redirect("/");
}



module.exports = {
    sendFestData,
    getFestForm,
    getFestivals,
    getSortedFestivals,
    getFestivalById,
    getGenres,
    createGetGenreId
}