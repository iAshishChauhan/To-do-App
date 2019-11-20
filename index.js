const express = require('express');
const port = 8000;
const app = express();

// Setting up the route
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err) {
        console.log(`Error in running the server :: ${err}`);
        return;
    }
    console.log(`Express Server is up and running on Port: ${port}`);
});