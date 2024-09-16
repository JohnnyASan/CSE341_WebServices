const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.johnnyRoute);
routes.get('/rada', lesson1Controller.radaRoute);
routes.get('/gig', lesson1Controller.gigRoute);

module.exports = routes;