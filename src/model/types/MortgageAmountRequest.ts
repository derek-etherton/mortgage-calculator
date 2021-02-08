export class MortgageAmountRequest {
    constructor(public paymentAmount: number, public paymentSchedule: number,
        public amortizationPeriod: string) { }
}