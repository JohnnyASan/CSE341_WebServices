const mongodb = require('../utils/mongodb');
var ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    var results = 
    await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .find()
    .toArray();
    res.jsonp(results);
};

const getById = async (req, res) => {
    var doc = await mongodb.getDb().db('cse341').collection('contacts').findOne({ _id: new ObjectId(`${req.params.id}`) });
    res.jsonp(doc);
};

module.exports = {
    getAll,
    getById
}