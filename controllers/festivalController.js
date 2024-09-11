const db = require("../db/queries");

async function getFestivals(req, res) {
    const festivals = await db.getAllFestivals()
    res.render("index", { festivals });
}



module.exports = {
    getFestivals
}