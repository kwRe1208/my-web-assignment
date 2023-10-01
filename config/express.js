/*
Student ID: 301363058
Student Name: Yu Kwan Wong
File Name: express.js
*/
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = () =>{
    const app = express();
    
    app.use(bodyParser.urlencoded({
        extended: true 
    }));

    //set template engine
    app.set('views', './views');
    app.set('view engine', 'ejs');

    app.use('/', require('../routes/index'));

    app.use(express.static('public'));


    return app
       
}