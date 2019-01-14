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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then(result => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Hey buddy!'}).then(result => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Hey buddy!'}).then(result => {
    //     console.log(result);
    // });

    // client.close();
});