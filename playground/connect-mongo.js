const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable To Connect to MongoDB Server')
    }
    console.log("Connected To MongoDB Server");
    const db = client.db("TodoApp");

    // create collection(table) - Todos
    // db.collection('Todos').insertOne({
    //     text: 'Something added',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert record', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    // create collection(table) - User
    // db.collection('Users').insertOne({
    //     name: 'Talal Malick',
    //     age: 22,
    //     location: 'Karachi'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert record', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});