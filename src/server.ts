import express from 'express';

import apiRouter from './routes/api';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/', apiRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running`);
});