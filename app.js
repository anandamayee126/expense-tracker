const express= require('express');
const app = express();
const cors= require('cors');
const database= require('./database/db');
const router= require('./Router/router');
const bodyParser= require('body-parser');

app.use(cors());

app.use(express.json());

app.use('/user',router);


app.listen(4000);
