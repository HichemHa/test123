const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
 categoryName :String
});

module.exports = Category = mongoose.model("category", categorySchema);