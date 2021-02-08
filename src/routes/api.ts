import { Request, Response } from 'express';

import express from 'express';

const app = express();

app.get('/', async (req: Request, res: Response) => {
    return 'ok';
});

export = app;
