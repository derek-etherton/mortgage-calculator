import assert from 'assert';

import 'mocha';
import { MortgageCalculator } from '../model/MortgageCalculator';
import { PaymentAmountRequest } from '../model/types/PaymentAmountRequest';
import { MortgageAmountRequest } from '../model/types/MortgageAmountRequest';

import { Constants } from './Constants';

describe('Intended API use cases', function () {
    describe('payment calculator', function () {
        it('should work with monthly payment schedule', function () {
            const REQUEST = new PaymentAmountRequest(Constants.NORMAL_PROPERTY_PRICE,
                Constants.NORMAL_DOWN_PAYMENT, 'monthly', Constants.NORMAL_AMORTIZATION_RATE);

            assert.strictEqual(MortgageCalculator.calculatePayment(REQUEST), '2241.62');
        });
        it('should work with biweekly payment schedule', function () {
            const REQUEST = new PaymentAmountRequest(Constants.NORMAL_PROPERTY_PRICE, Constants.NORMAL_DOWN_PAYMENT,
                'biweekly', Constants.NORMAL_AMORTIZATION_RATE);

            assert.strictEqual(MortgageCalculator.calculatePayment(REQUEST), '1120.42');
        });
        it('should work with weekly payment schedule', function () {
            const REQUEST = new PaymentAmountRequest(Constants.NORMAL_PROPERTY_PRICE, Constants.NORMAL_DOWN_PAYMENT,
                'weekly', Constants.NORMAL_AMORTIZATION_RATE);

            assert.strictEqual(MortgageCalculator.calculatePayment(REQUEST), '517.02');
        });
    });
    describe('mortgage calculator', function () {
        it('should work with a low down payment', function () {
            const REQUEST = new MortgageAmountRequest(Constants.LOW_DOWN_PAYMENT, Constants.NORMAL_AMORTIZATION_RATE, 'monthly');

            assert.strictEqual(MortgageCalculator.calculateMaxMortgage(REQUEST), 200000);
        });
        it('should work with the breakpoint downpayment', function () {
            const REQUEST = new MortgageAmountRequest(25000, Constants.NORMAL_AMORTIZATION_RATE, 'monthly');

            assert.strictEqual(MortgageCalculator.calculateMaxMortgage(REQUEST), 500000);
        });
        it('should work with a high downpayment', function () {
            const REQUEST = new MortgageAmountRequest(Constants.HIGH_DOWN_PAYMENT, Constants.NORMAL_AMORTIZATION_RATE, 'monthly');

            assert.strictEqual(MortgageCalculator.calculateMaxMortgage(REQUEST), 5250000);
        });
    });
});