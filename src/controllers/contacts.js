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

const postRecord = async (req, res) => {
    console.log(req);
    var doc = await mongodb.getDb().db('cse341').collection('contacts').InsertOne({ _id: new ObjectId(),  });
    res.jsonp(doc._id);
};

const putRecord = async (req, res) => {
    var doc = await mongodb.getDb().db('cse341').collection('contacts').updateOne({ _id: new ObjectId(`${req.params.id}`)});
    res.jsonp(doc);
}

const deleteRecord = async (req, res) => {
    var doc = await mongodb.getDb().db('cse341').collection('contacts').deleteOne({ _id: new ObjectId(`${req.params.id}`) });
    res.jsonp(doc);
}

module.exports = {
    getAll,
    getById,
    postRecord,
    putRecord,
    deleteRecord
}