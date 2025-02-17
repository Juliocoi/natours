const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Middlewares
app.use((req, resp, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoute);

module.exports = app;
