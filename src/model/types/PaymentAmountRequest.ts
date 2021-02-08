export class PaymentAmountRequest {
    constructor(public askingPrice: number, public downPayment: number,
        public paymentSchedule: string, public amortizationPeriod: number) { }
}