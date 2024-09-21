const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");

dotenv.config();



async function dbTest() {
    const connStr = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5rwti.mongodb.net/`;

    const client = new MongoClient(connStr);

    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = {
    dbTest
}
