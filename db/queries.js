const pool = require("./pool");

async function getAllFestivals() {
    const { rows } = await pool.query("SELECT * FROM festivals");
    console.log(rows)
    return rows;
}


module.exports = {
    getAllFestivals
}