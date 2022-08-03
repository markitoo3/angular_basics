const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json()) //body parse from json to native js

const users = [

];

app.get('/user', (req, res) => {
    console.log(`REQUEST URL: ${req.url}`);
    console.log(`REQUEST METHOD: ${req.method}`);

    res.json(users);
})

app.post('/user', (req, res) => {
    console.log(`REQUEST URL: ${req.url}`);
    console.log(`REQUEST METHOD: ${req.method}`);

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        id: users.length + 1
    }

    users.push(user);

    res.status(201).json(user);
})

app.listen(port, () => {
    console.log(`app is listening at port: ${port}`);
})