const db = require("../db/queries");

async function getFestivals(req, res) {
    const festivals = await db.getAllFestivals();
    res.render("index", { festivals });
}

async function getGenres(req, res) {
    const genres = await db.getAllGenres();
    console.log(genres)
    res.render("genres", { genres });
}

async function createGetGenreId(req, res) {
    const id  = req.params.id;
    const festivalsByGenre = await db.getGenreById(id);
    console.log(festivalsByGenre)
    res.render("festivalsByGenre", { festivalsByGenre });
}



module.exports = {
    getFestivals,
    getGenres,
    createGetGenreId
}