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
    return rows
}

async function getAllGenres() {
    const { rows } = await pool.query("SELECT * FROM genres");
    return rows
}

async function getGenreById(id) {
    const { rows } = await pool.query("SELECT * FROM festivals WHERE genre_id = $1", [id])
    return rows
}

async function insertNewFest(name, location, date, genre_id, image_url) {
    await pool.query("INSERT INTO festivals (name, location, start_date, genre_id, image_url) VALUES($1, $2, $3, $4, $5)", [name, location, date, genre_id, image_url])
}

async function putNewFest(name, location, date, genre_id, image_url, id) {
    await pool.query("UPDATE festivals SET name = $1, location = $2, start_date = $3, genre_id = $4, image_url = $5 WHERE id = $6", [name, location, date, genre_id, image_url, id])
    
}

async function deleteFest(id) {
    await pool.query("DELETE FROM festivals WHERE id = $1", [id]);
    
}


module.exports = {
    deleteFest,
    putNewFest,
    insertNewFest,
    getAllFestivals,
    getFestivalsAlphaSorted,
    getFestivalById,
    getAllGenres,
    getGenreById
}