const { get } = require("../routes/genresRouter");
const pool = require("./pool");

async function getAllFestivals() {
    const { rows } = await pool.query("SELECT * FROM festivals");
    return rows;
}

async function getAllGenres() {
    const { rows } = await pool.query("SELECT * FROM genres");
    return rows
}

async function getGenreById(id) {
    const { rows } = await pool.query("SELECT * FROM festivals WHERE genre_id = $1", [id])
    console.log(rows)
    return rows
}


module.exports = {
    getAllFestivals,
    getAllGenres,
    getGenreById
}