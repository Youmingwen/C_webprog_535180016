const express = require('express');

const router = express.Router();

module.exports = (params) => {

    const { feedbackService } = params;

    router.get('/',(request, response) => {
        //response.send('Ini Halaman Feedback');
        const feedback = feedbackService.getList();
        return response.json(feedback);
    });
    return router;
    
}