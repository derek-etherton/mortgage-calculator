import { Request, Response } from 'express';
import { Data } from '../model/Data';
import { RequestBuilder } from '../model/types/RequestBuilder';
import { MortgageCalculator } from '../model/MortgageCalculator';

import express from 'express';
import { Validator } from '../model/Validator';

const app = express();

app.get('/', async (req: Request, res: Response) => {
    res.send('healthy');
});

app.get('/payment-amount', async (req: Request, res: Response) => {
    const query = req.query;
    // TODO: add validation

    try {
        let paymentRequest = RequestBuilder.buildPaymentAmountRequest(query);
        Validator.verifyPaymentRequest(paymentRequest);

        let paymentPerPeriod = MortgageCalculator.calculatePayment(paymentRequest);

        res.send({ paymentAmount: paymentPerPeriod });
    } catch (error) {
        res.status(400).json(error.message);
    }

});

app.get('/mortgage-amount', async (req: Request, res: Response) => {
    const query = req.query;
    // TODO: add validation

    try {
        let mortgageRequest = RequestBuilder.buildMortgageAmountRequest(query);
        Validator.verifyMortgageRequest(mortgageRequest);

        let maxMortgageAmount = MortgageCalculator.calculateMaxMortgage(mortgageRequest);

        res.send({ maxMortgage: maxMortgageAmount });
    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.patch('/interest-rate', async (req: Request, res: Response) => {
    const newInterestRate = req.body.interestRate;

    if (!Validator.isNumber(newInterestRate)) {
        res.status(400).json("Invalid interest rate provided, must be a number");
        return;
    }

    const oldInterestRate = Data.getInterestRate();
    Data.setInterestRate(newInterestRate);

    res.send({ oldInterestRate: oldInterestRate, interestRate: newInterestRate });
});

export = app;