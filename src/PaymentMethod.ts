import { toStartCase } from './internal/toStartCase';

export const PAYMENT_METHODS = [
  'superpay',
  'cash',
  'check',
  'cashiers_check',
  'money_order',
  'comchek',
  'credit_card',
  'direct_deposit',
  'venmo',
  'cashapp',
  'uship',
  'zelle',
  'other',
] as const;

export type PaymentMethod = typeof PAYMENT_METHODS[number];

export function isValidPaymentMethod(input: unknown): input is PaymentMethod {
  return PAYMENT_METHODS.includes(input as PaymentMethod);
}

/** @deprecated – use `PAYMENT_METHODS` */
export function listPaymentMethods(): readonly PaymentMethod[] {
  return PAYMENT_METHODS;
}

interface FormatPaymentMethodOptions {
  fallback?: string;
}

export function formatPaymentMethod(
  input: unknown,
  { fallback = 'Unknown' }: FormatPaymentMethodOptions = {},
): string {
  if (!isValidPaymentMethod(input)) return fallback;

  switch (input) {
    case 'cashapp':
      return 'CashApp';
    case 'uship':
      return 'UShip';
    case 'superpay':
      return 'SuperPay';
    default:
      return toStartCase(input);
  }
}
