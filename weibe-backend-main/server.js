const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const designUploadRoute = require("./routes/designUploadRoute");
const categoryRoutes = require("./routes/category.routes");
const priceRoutes = require("./routes/price.routes");
const designRoutes = require("./routes/design.routes");
const addressRoutes = require("./routes/address.routes");
const app = express();

app.use(cors({}));

app.use(express.static("files"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", designUploadRoute);
app.use(categoryRoutes);
app.use(priceRoutes);
app.use(designRoutes);
app.use(addressRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(process.env.MONGO_DB_URI, {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("connection success");
    app.listen(process.env.PORT);
    console.log("Listening at 8000");
  });
