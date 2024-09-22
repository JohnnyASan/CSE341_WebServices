const mongodb = require('../utils/mongodb');


  console.log(mongodb.getDb()
    .db()
    .collection('your_collection_name'));