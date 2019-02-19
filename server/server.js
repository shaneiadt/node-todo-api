const express = require('express');
const bodyParser = require('body-parser');

const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./db/mongoose');

const {
    Todo
} = require('./models/todo');

const {
    User
} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then(doc => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.send({
            todos
        })
    }, e => res.status(400).send(e));
});

app.get('/todos/:id', (req, res) => {
    const {
        id
    } = req.params;
    if (ObjectID.isValid(id)) {
        Todo.findById(id).then(todo => {
            if (todo !== null) {
                return res.send({
                    todo
                });
            } else {
                return res.status(404).send();
            }
        }, (e) => {
            return res.status(400).send();
        });
    } else {
        return res.status(404).send();
    }
});

app.delete('/todos/:id', (req, res) => {
    const {
        id
    } = req.params;

    if (ObjectID.isValid(id)) {
        Todo.findByIdAndRemove(id)
            .then(todo => {
                if (null) return res.status(404).send();

                return res.status(200).send({
                    todo
                });
            })
            .catch(e => res.status(400).send());
    } else {
        return res.status(404).send();
    }

});

app.listen(port, (req, res) => {
    console.log(`Started up at port ${port}`);
});

module.exports = {
    app
};