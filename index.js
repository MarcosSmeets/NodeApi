const mongoose = require("mongoose");
const express = require("express");
const productRoute = require('./routes/product.route')
const app = express();

app.use(express.json());

app.use('/api/products', productRoute)

mongoose
  .connect(
    "mongodb+srv://admin:root@backenddb.trfoejy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb"
  )
  .then(() => {
    app.listen(3000, () => {});
  });
