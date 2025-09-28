const morgan = require('morgan');

// use in app.js like -> app.use(morgan('dev'));
module.exports = morgan('dev');
