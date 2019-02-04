var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var  { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        res.status(200).send(doc);
    },(err) => {
        res.status(400).send(err);
    });

});

app.listen(5000, () => {
    console.log(`Server is up on 5000 port`);
});

module.exports = { app };