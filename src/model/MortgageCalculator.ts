import { PaymentAmountRequest } from "./types/PaymentAmountRequest";

import { Data } from './Data';
import { PaymentSchedule } from './types/PaymentSchedule';
import { MortgageAmountRequest } from "./types/MortgageAmountRequest";
import { InsuranceCalculator } from "./InsuranceCalculator";

import { Constants } from "./Constants";

export namespace MortgageCalculator {
    export function calculatePayment(input: PaymentAmountRequest) {
        const interestRate = Data.getInterestRate();

        const downPaymentPercentage = input.downPayment / input.askingPrice;

        let loanAmount = input.askingPrice - input.downPayment;

        // add insurance to loan principal, if applicable
        if (loanAmount < Constants.MAX_INSURABLE_MORTGAGE) {
            loanAmount += InsuranceCalculator.calculateInsurance(loanAmount, downPaymentPercentage);
        }

        const termLength = input.amortizationPeriod;

        // converts input schedule into useable number (e.g. 'monthly' becomes 12)
        const schedule: any = input.paymentSchedule;
        const paymentsPerYear = Number(PaymentSchedule[schedule]);

        const lifetimePayments = termLength * paymentsPerYear;
        const interestPerPeriod = (interestRate / paymentsPerYear) / 100;

        const numerator = interestPerPeriod * (1 + interestPerPeriod) ** lifetimePayments;
        const denominator = ((1 + interestPerPeriod) ** lifetimePayments) - 1;

        return (loanAmount * (numerator / denominator)).toFixed(2);
    }

    export function calculateMaxMortgage(input: MortgageAmountRequest) {
        // only using the down payment amount, could not find a use for
        // 'payment schedule' and 'amortization period' in this calculation
        const downPayment = input.paymentAmount;

        let mortgageAmount = 0;
        if (downPayment > Constants.INTEREST_BREAKPOINT) {
            mortgageAmount = Constants.INTEREST_BREAKPOINT / Constants.INTEREST_UNDER_BREAKPOINT;
            let remainingDownPayment = downPayment - Constants.INTEREST_BREAKPOINT;
            mortgageAmount += remainingDownPayment / Constants.INTEREST_OVER_BREAKPOINT;
        } else {
            mortgageAmount = downPayment / Constants.INTEREST_UNDER_BREAKPOINT;
        }

        return mortgageAmount;
    }
}