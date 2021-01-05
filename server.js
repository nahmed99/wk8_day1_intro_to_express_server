const express = require('express'); // import express from 'express'
const app = express(); // get a handle on express

const cors = require("cors");
app.use(cors()); // use cors (security problem with using different ports for client and server)

// request and response - you can use any name
app.get("/", function(request, response) {
    response.send({message: "Hello Dunya"});
});

// Listen for requests
app.listen(3000, function () {
    console.log("App running on port 3000");
});
