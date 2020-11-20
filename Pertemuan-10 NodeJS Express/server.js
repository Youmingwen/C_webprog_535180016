const { request, response } = require('express');
const express = require('express');

const app = express();

const port = 3000;

app.get('/',(request, response) => {
    response.send('hello world express');
});

app.listen(port,()=>{
    console.log(`express server berjalan pada port ${port}`);
});