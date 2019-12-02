// import express from 'express';

const express = require('express');

const db = require('./data/hubs-model.js'); //<<<< step 1: import the databse file ...

const server = express();

// server.use(express.json);

server.get('/', (req, res) => {
  res.send({ api: 'up and running...' });
});

//list of hubs GET /hubs <<< step 2: implement endpoint..
server.get('/hubs', (req, res) => {
  // get the list of hubs from the databse
  db.find()
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      console.log('error on GET /hubs', error);
      res.status(500).json({ errorMessage: 'error getting list of hubs frorm database' });
    });
});

const port = 4000;
server.listen(port, () => console.log(`/n ** API running on port ${port} **/n`));
