const express = require('express'); // import express from 'express'
const app = express();

// request and response - you can use any name
app.get("/", function(request, response) {
    response.send('Hello World');
});