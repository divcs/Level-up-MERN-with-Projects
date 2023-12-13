// Imports statements
const express = require('express');
const homeRouter = require('./routes/home.routes');
const bodyParser = require('body-parser');


// Variables and Configs
const app = express();
const PORT = 8000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes config
app.use('/', homeRouter);


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});