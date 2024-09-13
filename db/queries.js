const { get } = require("../routes/genresRouter");
const pool = require("./pool");

async function getAllFestivals() {
    const { rows } = await pool.query("SELECT * FROM festivals LIMIT 12");
    return rows;
}

async function getFestivalsAlphaSorted() {
    const { rows } = await pool.query("SELECT * FROM festivals ORDER BY name ASC");
    return rows
}   

async function getFestivalById(id) {
    const { rows } = await pool.query("SELECT * FROM festivals WHERE id = $1", [id]);
    console.log(rows)
    return rows
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

async function insertNewFest(name, location, date) {
    await pool.query("INSERT INTO festivals (name, location, start_date) VALUES($1, $2, $3)", [name, location, date])
}


module.exports = {
    insertNewFest,
    getAllFestivals,
    getFestivalsAlphaSorted,
    getFestivalById,
    getAllGenres,
    getGenreById
}