const mongodb = require('../utils/mongodb');

const getAll = async (req, res) => {
    var results = 
    await
    mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .find()
    .toArray();
    res.jsonp(results);
};

module.exports = {
    getAll
}