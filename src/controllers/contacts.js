const mongodb = require('../utils/mongodb');
var ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
    // #swagger.summary = 'Get All Contacts'
    // #swagger.description = 'Gets all contacts in the collection. This endpoint is NOT paginated.'
    // #swagger.tags = ['Contacts']

    const result = await mongodb.getDb().db('cse341').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

const getById = async (req, res) => {
    // #swagger.summary = 'Get Contact By ID'
    // #swagger.description = 'Gets a single contact by the provided ID.'
    // #swagger.tags = ['Contacts']
    // #swagger.parameters['id'] = { description: 'ID of the contact to be retrieved.' }

    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const postRecord = async (req, res) => {
   /* 
        #swagger.summary = 'Create a new Contact'
        #swagger.description = 'Creates a new contact in the contacts collection.'
        #swagger.tags = ['Contacts']
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Create a new contact',
            schema: {
                $firstName: 'John',
                $lastName: 'Doe',
                $email: 'email@example.com',
                $favoriteColor: 'blue',
                $birthday: '01/01/2000'
            }
        }
        #swagger.responses[200] = {
            description: 'Create a new contact.',
            schema: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'email@example.com',
                favoriteColor: 'blue',
                birthday: '01/01/2000'
            }
         } 
    */
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };
      const response = await mongodb.getDb().db('cse341').collection('contacts').insertOne(contact);
      if (response.acknowledged) {
        res.status(201).json(response);
      } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
      }
};

const putRecord = async (req, res) => {    
    /*
        #swagger.summary = 'Update a Contact by ID'
        #swagger.description = 'Updated a contact in the contacts collection by provided ID.'
        #swagger.tags = ['Contacts']
        #swagger.parameters['id'] = { description: 'ID of the contact to be updated.' }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Update a contact',
            schema: {
                $firstName: 'John',
                $lastName: 'Doe',
                $email: 'email@example.com',
                $favoriteColor: 'blue',
                $birthday: '01/01/2000'
            }
        }
        #swagger.responses[200] = {
            description: 'Update a contact.',
            schema: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'email@example.com',
                favoriteColor: 'blue',
                birthday: '01/01/2000'
            }
        } 
    */
    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .replaceOne({ _id: userId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
}

const deleteRecord = async (req, res) => {
    // #swagger.summary = 'Delete a Contact by ID'
    // #swagger.description = 'Deletes a contact from the contacts collection for the provided ID.'
    // #swagger.tags = ['Contacts']
    //  #swagger.parameters['id'] = { description: 'ID of the contact to be deleted.' }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('cse341').collection('contacts').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
}

module.exports = {
    getAll,
    getById,
    postRecord,
    putRecord,
    deleteRecord
}