const contactsRouter = require('express').Router();
const contactsController = require('../controllers/contacts');

 
contactsRouter.get('/', contactsController.getAll);
contactsRouter.get('/:id', contactsController.getById);
contactsRouter.post('/', contactsController.postRecord);
contactsRouter.put('/:id', contactsController.putRecord);
contactsRouter.delete('/:id', contactsController.deleteRecord);

module.exports = contactsRouter;