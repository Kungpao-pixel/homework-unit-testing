require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(router);

// console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV != 'test') {
    app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
}

module.exports = app
