require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.use('*', (req, res) => {
        res.sendFile('../client/build/index.html');
    });
}

module.exports = app;