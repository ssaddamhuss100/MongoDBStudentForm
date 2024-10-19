const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(url);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(dbName);
        const collection = db.collection('myCollection');

        // Create - Insert a document
        const insertResult = await collection.insertOne({ name: 'Saddam', age: 25 });
        console.log('Inserted document:', insertResult.insertedId);

        // Read - Find a document
        const findResult = await collection.findOne({ name: 'Saddam' });
        console.log('Found document:', findResult);

        // Update - Update a document
        const updateResult = await collection.updateOne(
            { name: 'Saddam' },
            { $set: { age: 26 } }
        );
        console.log('Updated document count:', updateResult.modifiedCount);

        // Read - Find the updated document
        const updatedDocument = await collection.findOne({ name: 'Saddam' });
        console.log('Updated document:', updatedDocument);

        // Delete - Delete a document
        const deleteResult = await collection.deleteOne({ name: 'Saddam' });
        console.log('Deleted document count:', deleteResult.deletedCount);
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection to the database
        await client.close();
    }
}

// Run the CRUD operations
run();
