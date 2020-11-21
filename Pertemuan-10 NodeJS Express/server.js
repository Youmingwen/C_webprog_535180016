const { request, response } = require("express");
const express = require("express");

const mongoose = require('mongoose');



// Modul MongoDB
// const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/db-untar-cafe";
// End MongoDB

const path = require("path");
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');

const feedbackService = new FeedbackService('./data/feedback.json');

const routes = require("./routes");

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(cookieSession(
  {
    name: 'session',
    keys: ['youmingwen', 'webprogramming'],
  }
))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.use("/", routes(
    {
        feedbackService,
    }
));

//app.get('/',(request, response) => {
//response.send('hello world express');
//response.sendFile(path1.join(__dirname,'./static/index.html'));
//response.render('pages/index', {pageTitle:`kelas web programming`});
//});

app.listen(port, () => {
  console.log(`express server berjalan pada port ${port}`);
});

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// Koneksi Menggunakan Modul MongoDB
// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//   if(err) {
//     throw err;
//   } else {
//     console.log("Connected!");
//   }
//   db.close();
// })
// End Koneksi Menggunakan Modul MongoDB