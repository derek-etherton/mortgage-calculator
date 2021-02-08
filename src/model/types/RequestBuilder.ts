import { PaymentAmountRequest } from "./PaymentAmountRequest";

export namespace RequestBuilder {
    export function buildPaymentAmountRequest(input: any): PaymentAmountRequest {
        let request = input as PaymentAmountRequest;

        if (request.amortizationPeriod === null || request.downPayment === null ||
            request.paymentSchedule == null || request.askingPrice === null) {
            throw new Error('Missing required input fields, please provide amortizationPeriod, '
                + 'downPayment, interestRate, paymentSchedule, and propertyPrice');
        }

        // TODO: add more validation

        return request;
    }


}