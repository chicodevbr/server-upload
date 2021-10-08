const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fileRoutes = require('./router/file-upload-routes');

require('dotenv').config();

const connection_string = process.env.CONNECTION_STRING;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => console.log(`server is listening on port ${port}`));

mongoose
  .connect('mongodb://localhost/upload-files-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection established...'))
  .catch((error) => console.log('MongoDB failed: ', error.message));
