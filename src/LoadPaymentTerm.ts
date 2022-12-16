import { toStartCase } from './internal/toStartCase';

export type LoadPaymentTerm = typeof LOAD_PAYMENT_TERMS[number];

export const LOAD_PAYMENT_TERMS = [
  '5_days',
  '7_days',
  '10_days',
  '15_days',
  '20_days',
  '30_days',
  '45_days',
  '60_days',
  'other',
] as const;

export function isValidLoadPaymentTerm(
  input: unknown,
): input is LoadPaymentTerm {
  return LOAD_PAYMENT_TERMS.includes(input as LoadPaymentTerm);
}

/** @deprecated – use `LOAD_PAYMENT_TERMS` */
export function listLoadPaymentTerms(): readonly LoadPaymentTerm[] {
  return LOAD_PAYMENT_TERMS;
}

interface FormatLoadPaymentTermOptions {
  fallback?: string;
}

export function formatLoadPaymentTerm(
  input: unknown,
  { fallback = 'Unknown' }: FormatLoadPaymentTermOptions = {},
): string {
  if (!isValidLoadPaymentTerm(input)) return fallback;

  switch (input) {
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
