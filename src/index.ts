import express from 'express';
import * as bodyParser from 'body-parser';
import booksRoutes from './routes/booksRoutes';

const cors = require('cors');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cors());
app.options('*', cors());

app.use('/books', booksRoutes);

app.listen(port, () => { console.log("Server Listening on 8080")} );