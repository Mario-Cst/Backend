require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/routePost.js");

//express app
const app = express();

//Middlewear
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/posts", postsRoutes);

//conect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("Conecting to DB & listening on port 4000!!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
