const { request, response } = require("express");
const express = require("express");

const path = require("path");

const routes = require("./routes");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.use("/", routes());

//app.get('/',(request, response) => {
//response.send('hello world express');
//response.sendFile(path1.join(__dirname,'./static/index.html'));
//response.render('pages/index', {pageTitle:`kelas web programming`});
//});

app.listen(port, () => {
  console.log(`express server berjalan pada port ${port}`);
});
