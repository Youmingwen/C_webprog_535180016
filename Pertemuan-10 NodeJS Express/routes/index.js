const express = require("express");

const materKuliahRoute = require('./materikuliah');
const feedbackRoute = require('./feedback');
const { Template } = require("ejs");

const router = express.Router();

module.exports = () => {
    router.get("/", (request, response) => {
        //response.render("pages/index", { pageTitle: `kelas web programming`});
        response.render("layout", { pageTitle: `kelas web programming` ,template:'index'});

    });
    router.use('/materikuliah', materKuliahRoute());
    router.use('/feedback', feedbackRoute());
    return router;
};
