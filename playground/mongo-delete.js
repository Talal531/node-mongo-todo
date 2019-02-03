const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log('Unable To Connect to MongoDB Server')
    }
    console.log("Connected To MongoDB Server");
    const db = client.db("TodoApp");

   //delete many - delete all of the items with text of 'Something added 2'

    // db.collection('Todos').deleteMany({text: 'Something added 2'})
    // .then((result) => {
    //     console.log(result);
    // });
    
    //delete one - same as delete many but only delete first match item
    db.collection('Todos').deleteOne({text: 'Something added 2'})
    .then((result) => {
        console.log(result);
    });
    

   //find one and delete
   db.collection('Todos').findOneAndDelete({completed: false})
    .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });


    // client.close();
});