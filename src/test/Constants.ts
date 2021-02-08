export namespace Constants {
    export const NORMAL_PROPERTY_PRICE = 750000;
    export const NORMAL_DOWN_PAYMENT = 200000;
    export const NORMAL_AMORTIZATION_RATE = 30;

    export const LOW_DOWN_PAYMENT = 10000;
    export const HIGH_DOWN_PAYMENT = 500000;

    export const SIMPLE_QUERY = {
        askingPrice: Constants.NORMAL_PROPERTY_PRICE,
        downPayment: Constants.NORMAL_DOWN_PAYMENT,
        paymentSchedule: 'monthly',
        amortizationPeriod: Constants.NORMAL_AMORTIZATION_RATE
    }
}