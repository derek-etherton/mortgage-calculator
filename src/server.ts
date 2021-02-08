import express from 'express';

import apiRouter from './routes/api';

const app = express();

app.use('/', apiRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running`);
});