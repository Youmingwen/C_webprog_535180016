const express = require('express');

const materiKuliahRoute = require('./materikuliah');
const feedbackRoute = require('./feedback');
const  {request} = require('express');

const router = express.Router();

module.exports = (params) => {

    router.get('/',(request, response) => {
        response.render('layout', { pageTitle: 'Web Programming', template: 'index' });
    });
    router.use('/materikuliah', materiKuliahRoute());
    router.use('/feedback', feedbackRoute(params));
    return router;

}

