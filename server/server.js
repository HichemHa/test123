const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const card = require('./routes/card');
const livreur = require('./routes/livreur')
const category = require('./routes/catgory')
const app = express();
const path = require('path');

app.use(express.json());

connectDB();

app.use('/livreur', livreur);
app.use('/category', category);
app.use('/card', card);
app.use('/user', user);
app.use('/product', product);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(process.cwd(),'client','build','index.html'));
  })
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on PORT ${PORT}`)
);
