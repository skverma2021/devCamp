const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
// const logger = require('./middleware/logger')
const morgan = require('morgan');
const colors = require('colors');
const connectDb = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDb();
const PORT = process.env.PORT || 5000;

const app = express();

// app.use(logger)
if (process.env.NODE_ENV.trim() === 'development'.trim()) {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(PORT, () => {
  console.log(
    `The server started listening in ${process.env.NODE_ENV} mode on Port ${PORT}`
      .yellow.bold
  );
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Error: ${err.message}'.red);
  //close the server and exit the process
  server.close(() => {
    process.exit(1);
  });
});
