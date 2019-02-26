var express = require('express');
var morgan = require('morgan');
var path = require('path');
const expHandlebars = require('express-handlebars');

var app = express();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname,'public')));


app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',expHandlebars({
        extname : 'hbs',
        defaultLayout : 'mainLayout',
        layoutsDir : __dirname+'/views/layouts/'
}));
app.set('view engine','hbs');




var userController = require('./controllers/userController');

app.use('/',userController);



app.listen(8020,function(){
        console.log('listening on 8020');
});