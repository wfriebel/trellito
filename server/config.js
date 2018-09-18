const path = require('path');

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    require('dotenv').configure(path.join(__dirname, './.env.develpment'));
}

if (env === 'test') {
    require('dotenv').configure(path.join(__dirname, './.env.test'));
}