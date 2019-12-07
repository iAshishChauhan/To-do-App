const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const db = require('./config/mongoose');

// Parser
app.use(express.urlencoded());

// Setting up static files.
app.use(express.static('assets'));

// Setting up the View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Setting up the route
app.use('/', require('./routes'));

// Listening to server on port:8000
app.listen(port, function(err){
    if(err) {
        console.log(`Error in running the server :: ${err}`);
        return;
    }
    console.log(`Express Server is up and running on Port: ${port}`);
});