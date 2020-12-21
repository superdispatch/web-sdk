export type LoadPaymentTerm =
  | '5_days'
  | '7_days'
  | '10_days'
  | '15_days'
  | '20_days'
  | '30_days'
  | '45_days'
  | 'other';

const values = new Map<LoadPaymentTerm, string>([
  ['5_days', '5 Days'],
  ['7_days', '7 Days'],
  ['10_days', '10 Days'],
  ['15_days', '15 Days'],
  ['20_days', '20 Days'],
  ['30_days', '30 Days'],
  ['45_days', '45 Days'],
  ['other', 'Other'],
]);

export function listLoadPaymentTerms(): LoadPaymentTerm[] {
  return Array.from(values.keys());
}

interface FormatLoadPaymentTermOptions {
  fallback?: string;
}

export function formatLoadPaymentTerm(
  value: LoadPaymentTerm,
  { fallback = 'Unknown' }: FormatLoadPaymentTermOptions = {},
): string {
  return values.get(value) || fallback;
}
