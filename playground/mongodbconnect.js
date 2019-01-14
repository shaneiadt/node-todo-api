// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const client = new MongoClient(`${url}/${dbName}`, {
    useNewUrlParser: true
});

client.connect((error, client) => {
    if (error) {
        return console.log('Unable to connect to MondoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Carl',
    //     age: 43,
    //     location: 'Dublin, Ireland'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});