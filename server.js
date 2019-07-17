const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const items = require('./routes/api/items');
const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB Config
const uri = process.env.ATLAS_URI;

//Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Use Routes
app.use('/api/items', items);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));