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
  return !isValidLoadPaymentTerm(input) ? fallback : toStartCase(input);
}
