const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable To Connect to MongoDB Server')
    }
    console.log("Connected To MongoDB Server");
    const db = client.db("TodoApp");

    db.collection('Todos').find({completed: false}).toArray().then((docs)=> {
        console.log('====================================');
        console.log(JSON.stringify(docs, undefined, 2));
        console.log('====================================');
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    client.close();
});