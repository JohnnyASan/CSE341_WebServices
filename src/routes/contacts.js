const contactsRouter = require('express').Router();
const contactsController = require('../controllers/contacts');

 
contactsRouter.get('/contacts', contactsController.getAll);

module.exports = contactsRouter;