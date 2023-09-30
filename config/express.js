//import
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// function configExpress(app) {
//     app.use(morgan('dev'));
//     app.use(compress());
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(bodyParser.json());
//     app.use(methodOverride());
// }
module.exports = () =>{
    const app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('Dev'));
    } else if(process.env.NODE_ENV === 'production') {
        app.use(morgan('Prod'));
        app.use(compress());
    };

    app.use(bodyParser.urlencoded({
        extended: true 
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());

    //set template engine
    app.set('views', './views');
    app.set('view engine', 'ejs');
    //app.use('/', require('../app/controller/index.server.controller').render);
    app.use('/', require('../routes/index.server.routes'));

    app.use(express.static('./node_modules'));

    return app
       
}