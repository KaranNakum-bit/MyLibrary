const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const { response } = require('express');
const{mongoDbUrl,PORT} = require('./config/configuration')

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

mongoose.connect(mongoDbUrl,{useNewUrlParser:true})
    .then(response => {
        console.log("MongoDB connected successfully.")
    })
    .catch(err => {
        console.log('Database conncetion failed')
    })

app.use('/',indexRouter)

app.listen(process.env.PORT || 3000);