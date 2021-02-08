import { Request, Response } from 'express';
import { Data } from '../model/Data';
import { RequestBuilder } from '../model/types/RequestBuilder';
import { MortgageCalculator } from '../model/MortgageCalculator';

import express from 'express';

const app = express();

app.get('/', async (req: Request, res: Response) => {
    res.send('healthy');
});


app.get('/payment-amount', async (req: Request, res: Response) => {
    const query = req.query;
    // TODO: add validation

    let paymentRequest = RequestBuilder.buildPaymentAmountRequest(query);
    let paymentPerPeriod = MortgageCalculator.calculatePayment(paymentRequest);

    res.send({ paymentAmount: paymentPerPeriod });
});

app.patch('/interest-rate', async (req: Request, res: Response) => {
    const newInterestRate = req.body.interestRate;
    // TODO: add validation

    const oldInterestRate = Data.getInterestRate();
    Data.setInterestRate(newInterestRate);

    res.send({ oldInterestRate: oldInterestRate, interestRate: newInterestRate });
});

export = app;