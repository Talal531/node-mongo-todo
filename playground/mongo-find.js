const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable To Connect to MongoDB Server')
    }
    console.log("Connected To MongoDB Server");
    const db = client.db("TodoApp");

    //by default .find() requires no argument

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c508c57fb3f7281791e526d')})
    //     .toArray()
    //     .then((docs)=> {
    //         console.log('====================================');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //         console.log('====================================');
    //     }, (err) => {
    //         console.log('unable to fetch todos', err);
    //     });

    // db.collection('Todos').find().count()
    //     .then((count)=> {
    //         console.log('==========Todos Count================');
    //         console.log(`Total: ${count}`);
    //         // console.log(JSON.stringify(count, undefined, 2));
    //         console.log('====================================');
    //     }, (err) => {
    //         console.log('unable to fetch todos', err);
    //     });

    db.collection('Users').find({name: 'Ahsan'}).toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        });

    client.close();
});