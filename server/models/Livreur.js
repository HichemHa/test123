const mongoose = require("mongoose");

const livSchema = mongoose.Schema({
    name: String,
    numberPhone: Number,
    address: String,
    isAvaible: { type: Boolean, default: true },
});

module.exports = Livreur = mongoose.model("livreur", livSchema);