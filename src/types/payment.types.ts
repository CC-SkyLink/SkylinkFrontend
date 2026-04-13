export type PaymentMethod = "card" | "gcash" | "paypal" | "bank_transfer";

export type PaymentStatus =
  | "pending"
  | "otp_required"
  | "otp_verified"
  | "authorized"
  | "captured"
  | "failed"
  | "declined"
  | "refund_pending"
  | "refunded";

export type PaymentGateway = "default" | "stripe" | "paypal" | "gcash_gateway";

export interface PaymentCardInput {
  cardholderName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export interface PaymentRequest {
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  gateway?: PaymentGateway;
  card?: PaymentCardInput;
}

export interface OTPChallenge {
  paymentId: string;
  channel: "sms" | "email";
  maskedTarget: string;
  expiresAt: string;
  attemptsRemaining: number;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  gateway?: PaymentGateway;
  status: PaymentStatus;
  transactionId?: string;
  otpChallenge?: OTPChallenge;
  createdAt: string;
  updatedAt?: string;
}

export interface PaymentFailure {
  code?: string;
  reason: string;
  isRetriable: boolean;
}
