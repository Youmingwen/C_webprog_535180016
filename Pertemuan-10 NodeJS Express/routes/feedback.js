const express = require("express");
//const FeedbackService = require("../services/FeedbackService");

const router = express.Router();

module.exports = (params) => {

    const { feedbackService } = params;

    router.get("/", async (request, response) => {
        //response.send(`Ini Halaman Feedback`)
        const feedback = await feedbackService.getList();
        return response.json(feedback);
    });
    return router;
};
