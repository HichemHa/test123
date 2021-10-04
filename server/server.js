const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const card = require('./routes/card');
const livreur = require('./routes/livreur')
const category = require('./routes/catgory')
const app = express();

app.use(express.json());

connectDB();

app.use('/livreur', livreur);
app.use('/category', category);
app.use('/card', card);
app.use('/user', user);
app.use('/product', product);

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on PORT ${PORT}`)
);
