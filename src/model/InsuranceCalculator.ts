import { Constants } from './Constants';

export namespace InsuranceCalculator {
    export function calculateInsurance(mortgageAmount: number, downPaymentPercentage: number) {
        let insuranceCost = 0;

        if (downPaymentPercentage < Constants.INSURANCE_BREAKPOINT_ONE) {
            insuranceCost = mortgageAmount * Constants.INSURANCE_BREAKPOINT_ONE_RATE;
        } else if (downPaymentPercentage < Constants.INSURANCE_BREAKPOINT_TWO) {
            insuranceCost = mortgageAmount * Constants.INSURANCE_BREAKPOINT_TWO_RATE;
        } else if (downPaymentPercentage < Constants.INSURANCE_BREAKPOINT_THREE) {
            insuranceCost = mortgageAmount * Constants.INSURANCE_BREAKPOINT_THREE_RATE;
        }

        return insuranceCost;
    }
}