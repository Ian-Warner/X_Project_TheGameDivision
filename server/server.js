const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const moment = require('moment');

const config = require('./config/config.js').get(process.env.NODE_ENV);
const app = express();

////######### HBS SETUP ############/////
app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout: 'main',
    layoutsDir:__dirname + '/views/layouts',
    partialsDir:__dirname + '/views/partials'
}));
app.set('view engine','hbs')

// GET
app.get('/',(req,res)=>{
    res.render('home.hbs');
});


app.listen(config.PORT,()=>{
    console.log(`Started at port ${config.PORT}`)
})