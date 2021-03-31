import { toStartCase } from './internal/toStartCase';

export const PAYMENT_TERMS = [
  'other',
  'ach',
  'comchek',
  'cash_on_pickup',
  'cash_on_delivery',
  'quick_pay',
  'check_on_delivery',
  'check_on_pickup',
  '5_days',
  '7_days',
  '10_days',
  '15_days',
  '20_days',
  '30_days',
  '45_days',
] as const;

export type PaymentTerm = typeof PAYMENT_TERMS[number];

export function isValidPaymentTerm(input: unknown): input is PaymentTerm {
  return PAYMENT_TERMS.includes(input as PaymentTerm);
}

/** @deprecated – use `PAYMENT_TERMS` */
export function listPaymentTerms(): readonly PaymentTerm[] {
  return PAYMENT_TERMS;
}

export interface FormatPaymentTermOptions {
  short?: boolean;
  fallback?: string;
}

export function formatPaymentTerm(
  input: unknown,
  { short = false, fallback = 'Unknown' }: FormatPaymentTermOptions = {},
): string {
  if (!isValidPaymentTerm(input)) return fallback;

  switch (input) {
    case 'ach':
      return 'ACH';
    case 'quick_pay':
      return 'QuickPay';

    case 'cash_on_pickup':
      return short ? 'COP' : 'Cash on Pickup';
    case 'cash_on_delivery':
      return short ? 'COD' : 'Cash on Delivery';
    case 'check_on_delivery':
      return short ? 'CKOD' : 'Check on Delivery';
    case 'check_on_pickup':
      return short ? 'CKOP' : 'Check on Pickup';

    default:
      return toStartCase(input);
  }
}
