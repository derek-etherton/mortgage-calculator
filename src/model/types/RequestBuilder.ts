import { MortgageAmountRequest } from "./MortgageAmountRequest";
import { PaymentAmountRequest } from "./PaymentAmountRequest";

export namespace RequestBuilder {
    export function buildPaymentAmountRequest(input: any): PaymentAmountRequest {
        let request = input as PaymentAmountRequest;

        if (request.amortizationPeriod === undefined || request.downPayment === undefined ||
            request.paymentSchedule == undefined || request.askingPrice === undefined) {
            throw new Error('Missing required input fields, please provide amortizationPeriod, '
                + 'downPayment, paymentSchedule, and askingPrice');
        }

        return request;
    }

    export function buildMortgageAmountRequest(input: any): MortgageAmountRequest {
        let request = input as MortgageAmountRequest;

        if (request.paymentAmount === undefined) {
            throw new Error('paymentAmount is a required field');
        }

        return request;
    }
}