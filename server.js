const express = require('express'); // import express from 'express'
const app = express(); // get a handle on express

// request and response - you can use any name
app.get("/", function(request, response) {
    response.send('Hello World');
});


// Listen for requests
app.listen(3000, function () {
    console.log("App running on port 3000");
});
