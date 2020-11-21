const express = require("express");

const materKuliahRoute = require('./materikuliah');
const feedbackRoute = require('./feedback');
const memberRoute = require('./member');
//const { Template } = require("ejs");
const {request} = require('express');

const router = express.Router();

router.use(express.json());

module.exports = (params) => {
    router.get("/", (request, response) => {
        //response.render("pages/index", { pageTitle: `kelas web programming`});
        response.render("layout", { pageTitle: `kelas web programming` ,template:'index'});

    });
    router.use('/materikuliah', materKuliahRoute());
    router.use('/feedback', feedbackRoute(params));
    router.use('/member', memberRoute());
    return router;
};
