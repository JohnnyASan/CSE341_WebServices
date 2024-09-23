const contactsRouter = require('express').Router();
const contactsController = require('../controllers/contacts');

 
contactsRouter.get('/contacts', contactsController.getAll);
contactsRouter.get('/contacts/:id', contactsController.getById);

module.exports = contactsRouter;