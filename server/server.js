require('../db');// this line runs db-index.js to initialize database
require('../models'); // runs our models. This is important because it loads indexes into RAM

/* === External Modules === */
const express = require('express');
const morgan = require('morgan');

/* === Internal Modules === */

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
app.use(express.json({limit: 500})); //accept json as body data.  limits size to 500bytes
app.use(express.urlencoded({extended: true}));


// Router
var router = require('./routes.js');

// Set up our routes
app.use('/', router); // this sends stuff to the router

//Bind port
const port = 4000;
app.listen(port, ()=>{
  console.log('listening on port: ', port)
});

