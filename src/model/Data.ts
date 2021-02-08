export namespace Data {
    const DEFAULT_INTEREST_RATE = 2.5;
    let interestRate = DEFAULT_INTEREST_RATE;

    export function getInterestRate() {
        return interestRate;
    }

    export function setInterestRate(newRate: number) {
        interestRate = newRate;
    }
}