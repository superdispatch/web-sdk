import { toStartCase } from './internal/toStartCase';

export const PAYMENT_TERMS = [
  'other',
  'superpay',
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
  '60_days',
] as const;

export type PaymentTerm = typeof PAYMENT_TERMS[number];

export const SUPERPAY_TERMS = [
  '1_3_days',
  '5_days',
  '10_days',
  '15_days',
  '20_days',
] as const;

export type SuperPayTerm = typeof SUPERPAY_TERMS[number];

export function isValidPaymentTerm(input: unknown): input is PaymentTerm {
  return PAYMENT_TERMS.includes(input as PaymentTerm);
}

export function isValidSuperPayTerm(input: unknown): input is SuperPayTerm {
  return SUPERPAY_TERMS.includes(input as SuperPayTerm);
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
  if (!isValidPaymentTerm(input) && !isValidSuperPayTerm(input)) {
    return fallback;
  }

  switch (input) {
    case 'ach':
      return 'ACH';
    case 'quick_pay':
      return 'QuickPay';
    case 'superpay':
      return 'SuperPay';

    case 'cash_on_pickup':
      return short ? 'COP' : 'Cash on Pickup';
    case 'cash_on_delivery':
      return short ? 'COD' : 'Cash on Delivery';
    case 'check_on_delivery':
      return short ? 'CKOD' : 'Check on Delivery';
    case 'check_on_pickup':
      return short ? 'CKOP' : 'Check on Pickup';

    case '1_3_days':
      return '1-3 Business Days';
    case '5_days':
      return '5 Business Days';
    case '7_days':
      return '7 Business Days';
    case '10_days':
      return '10 Business Days';
    case '15_days':
      return '15 Business Days';
    case '20_days':
      return '20 Business Days';
    case '30_days':
      return '30 Business Days';
    case '45_days':
      return '45 Business Days';
    case '60_days':
      return '60 Business Days';

    default:
      return toStartCase(input);
  }
}
