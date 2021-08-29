const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();


const authRoutes = require("./routes/AuthRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());


app.use("/api", authRoutes);

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`server started ${PORT}`);
});