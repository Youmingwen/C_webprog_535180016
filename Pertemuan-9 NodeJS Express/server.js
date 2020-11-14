const { request } = require('express');
const express = require('express');

const path = require('path');

const routes = require('./routes');
const feedbackService = require('./services/FeedbackService');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes(
    {
        feedbackService,
    }
));

app.listen(port, () => {
    console.log(`Express Server Berjalan Pada Port ${port}`);
});

//Install eslint
//npm install eslint -D
//npx eslint --init
//Setelah selesai npm install -D prettier eslint-config-prettier eslint-config-plugin
//Jika ada Error mungkin plugin sudah terinstall
//npm install -D prettier eslint-config-prettier

//Install ejs
//npm install ejs