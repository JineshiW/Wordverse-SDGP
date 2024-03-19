require("dotenv").config();
const cors = require("cors");
var bodyParser = require("body-parser");

// const { errorHandler } = require("./middleware/errorMiddleware");

const express = require("express");
const mongoose = require("mongoose");

//routes
const courseRoutes = require("./course/course.routes");
const levelRoutes = require("./level/level.routes");

//express app
const app = express();

//middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/course", courseRoutes);
app.use("/api/level", levelRoutes);
// auth only
app.use("/api/auth", require("./auth/userRoutes"));

// app.use(errorHandler);

//Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
