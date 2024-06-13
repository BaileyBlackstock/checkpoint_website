const express = require('express');
const path = require('path');
const routes = require('./routes');
const port = process.env.port || 8000;

const app = express();

// static folder
app.use(express.static(path.join(__dirname,"public")));

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.use('/', routes.start);

app.listen(port, () => {
    console.log(`Server is Running on port ${port}.`)
});