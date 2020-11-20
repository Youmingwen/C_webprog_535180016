const express = require('express');
const MongbClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/db-untar-cafe";

const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');

const feedbackService = new FeedbackService('./data/feedback.json');

const routes = require('./routes');
const { MongoClient } = require('mongodb');

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['irvan', 'webprogramming'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    feedbackService,
  })
);

app.listen(port, () => {
  console.log(`express server listening on port ${port}! `);
});

MongoClient.connect(url, function(err, db){
  if(err){
    throw err;
  }
  else{
    console.log("database mongodb terkoneksi");
  }
  db.close;
}) 
  

