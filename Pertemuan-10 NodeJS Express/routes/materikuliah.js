const express = require("express");

const router = express.Router();

module.exports = () => {
    router.get("/", (request, response) => {
        response.send(`Ini Response List Materi Kuliah`)
    });

    router.get("/:matkul", (request, response) => {
        response.send(`Ini Response Materi Kuliah ${request.params.matkul}`);
    });
    return router;
};
