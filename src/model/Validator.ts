import { MortgageAmountRequest } from "./types/MortgageAmountRequest";
import { PaymentAmountRequest } from "./types/PaymentAmountRequest";
import { PaymentSchedule, paymentScheduleToString } from "./types/PaymentSchedule";

export namespace Validator {

    export function verifyPaymentRequest(paymentRequest: PaymentAmountRequest) {
        if (!isNumber(paymentRequest.amortizationPeriod)) {
            throw new Error('Amortization period must be a number');
        } else if (!isNumber(paymentRequest.downPayment)) {
            throw new Error('Down payment must be a number');
        } else if (!isNumber(paymentRequest.askingPrice)) {
            throw new Error('Asking price must be a number');
        }

        if (!(paymentRequest.paymentSchedule in PaymentSchedule)) {
            throw new Error('Invalid payment schedule given, valid options are: ' + paymentScheduleToString());
        }
    }

    export function verifyMortgageRequest(mortgageRequest: MortgageAmountRequest) {
        if (!isNumber(mortgageRequest.paymentAmount)) {
            throw new Error('Payment amount must be a number');
        }
    }

    export function isNumber(value: number) {
        return !isNaN(Number(value));
    }
}