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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c3858edb9761635d87288ea')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({
        name: 'Jen'
    }).toArray().then(docs => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});