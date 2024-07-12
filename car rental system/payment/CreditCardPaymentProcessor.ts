import { PaymentProcessor } from "./PaymentProcessor";

export class CreditCardPaymentProcessor implements PaymentProcessor {
    
    processPayment(amount: number): boolean {
        return true;
    }
}