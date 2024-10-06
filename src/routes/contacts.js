const contactsRouter = require('express').Router();
const contactsController = require('../controllers/contacts');

 
contactsRouter.get('/contacts', contactsController.getAll);
contactsRouter.get('/contacts/:id', contactsController.getById);
contactsRouter.post('/contacts', contactsController.postRecord);
contactsRouter.put('/contacts', contactsController.putRecord);
contactsRouter.delete('/contacts', contactsController.deleteRecord);

module.exports = contactsRouter;