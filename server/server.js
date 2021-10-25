const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

var database;

app.get('/student', function(req, res){
    database.collection('STUDENTDB').find({}).toArray(function(err,result){
        if(err) throw err;
        res.send(result);
    })
})

app.listen(3001, () => {
    MongoClient.connect(process.env.ATLAS_URI, (err, result) =>{
        if(err) throw err;
        database = result.db('faculdadedb');
        console.log('MongoDB database connection')
    })
})
