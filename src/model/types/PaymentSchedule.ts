export enum PaymentSchedule {
    monthly = 12,
    biweekly = 24,
    weekly = 52,
}

export function paymentScheduleToString() {
    return Object.keys(PaymentSchedule).filter(key => isNaN(Number(key)));
}