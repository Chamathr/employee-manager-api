import express from 'express';
require('express-async-errors');
import loadApp from './src/startup/app';
import mongoDbConnection from './src/startup/database';
require('dotenv').config()
const app = express();
import  mongoose from "mongoose"

loadApp(app);
mongoDbConnection.getInstance();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

process.on('exit', function (){
  mongoose.disconnect();
  console.log('Goodbye!');
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

  