const { response } = require('express');
const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/',(request, response) => {
    //response.send("Hello World Express");
    response.sendFile(path1.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Express Server Berjalan Pada Port ${port}`);
});

//Install eslint
//npm install eslint -D
//npx eslint --init
//Setelah selesai npm install -D prettier eslint-config-prettier eslint-config-plugin
//Jika ada Error mungkin plugin sudah terinstall
//npm install -D prettier eslint-config-prettier