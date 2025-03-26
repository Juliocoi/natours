const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Middlewares
app.use(morgan('dev'));

// Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoute);

module.exports = app;
