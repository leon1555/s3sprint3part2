const express = require('express');
const path = require('path');
const treemaker = require('./treemaker');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'))
});

app.post('/', treemaker.numbersToTree)

app.listen(3002, () => {
    console.log('Listening at http://localhost:3002')
});