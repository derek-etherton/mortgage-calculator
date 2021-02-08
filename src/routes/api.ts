import { Request, Response } from 'express';
import { Data } from '../model/Data';

import express from 'express';

const app = express();

app.get('/', async (req: Request, res: Response) => {
    res.send('healthy');
});


app.patch('/interest-rate', async (req: Request, res: Response) => {
    const newInterestRate = req.body.interestRate;
    // add validation

    const oldInterestRate = Data.getInterestRate();
    Data.setInterestRate(newInterestRate);

    res.send({ oldRate: oldInterestRate, newRate: newInterestRate });
});

export = app;