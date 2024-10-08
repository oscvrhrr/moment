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
    const id = req.params.festID;
    const festival = await db.getFestivalById(id);
    res.render("festivalDetails", { festival })
}

async function updateFestivalById(req, res) {
    const id = req.params.festID;
    const  festival = await db.getFestivalById(id);
    res.render("updateItem", {festival})
    
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
    const { name, location, date, genre_id, image_url} = req.body;
    const numericGenre = Number(genre_id)
    await db.insertNewFest(name, location, date, numericGenre, image_url);
    res.redirect("/");
}

async function sendUpdFest(req, res) {
    const id = req.params.festID
    const { name, location, date, genre_id, image_url } = req.body
    const numericGenre = Number(genre_id)
    await db.putNewFest(name, location, date, numericGenre, image_url, id);
    res.redirect(`/festivals/${id}`)
}

async function deleteRecord(req, res) {
    const id = Number(req.params.festID);
    await db.deleteFest(id);
    res.redirect("/");
}



module.exports = {
    deleteRecord,
    sendUpdFest,
    updateFestivalById,
    sendFestData,
    getFestForm,
    getFestivals,
    getSortedFestivals,
    getFestivalById,
    getGenres,
    createGetGenreId
}