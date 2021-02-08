import { PaymentAmountRequest } from "./types/PaymentAmountRequest";

import { Data } from './Data';
import { PaymentSchedule } from './types/PaymentSchedule';

export namespace MortgageCalculator {
    export function calculatePayment(input: PaymentAmountRequest) {
        const interestRate = Data.getInterestRate();

        const loanAmount = input.askingPrice - input.downPayment;
        console.log('loanAmount: ' + loanAmount);

        const termLength = input.amortizationPeriod;

        const schedule: any = input.paymentSchedule;
        const paymentsPerYear = Number(PaymentSchedule[schedule]);

        const lifetimePayments = termLength * paymentsPerYear;

        console.log('lifetime payments: ' + lifetimePayments);

        const interestPerPeriod = (interestRate / paymentsPerYear) / 100;
        console.log('interest per period: ' + interestPerPeriod);

        // magic mortgage formula
        const numerator = interestPerPeriod * (1 + interestPerPeriod) ** lifetimePayments;
        const denominator = ((1 + interestPerPeriod) ** lifetimePayments) - 1;

        return (loanAmount * (numerator / denominator)).toFixed(2);
    }
}