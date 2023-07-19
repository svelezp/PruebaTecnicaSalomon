const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/task.routes'));
app.use('/api/tasks', require('./routes/task.routes'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(3000, () => {
    console.log('server on port 3000')
});