export class PaymentAmountRequest {
    constructor(public askingPrice: number, public downPayment: number,
        public paymentSchedule: number, public amortizationPeriod: string) { }
}