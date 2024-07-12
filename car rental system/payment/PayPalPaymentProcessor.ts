import { PaymentProcessor } from "./PaymentProcessor";

export class PayPalPaymentProcessor implements PaymentProcessor {
    processPayment(amount: number): boolean {
        return true;
    }
}
