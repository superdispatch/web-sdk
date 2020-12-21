export type LoadPaymentMethod =
  | 'cod'
  | 'quickpay'
  | 'comcheck'
  | 'cop'
  | 'ckod'
  | 'ach'
  | 'factoring'
  | 'other';

const values = new Map<LoadPaymentMethod, string>([
  ['cod', 'COD'],
  ['quickpay', 'QuickPay'],
  ['comcheck', 'COMcheck'],
  ['cop', 'COP'],
  ['ckod', 'CKOD'],
  ['ach', 'ACH'],
  ['factoring', 'Factoring'],
  ['other', 'Other'],
]);

export function listLoadPaymentMethods(): LoadPaymentMethod[] {
  return Array.from(values.keys());
}

interface FormatLoadPaymentMethodOptions {
  fallback?: string;
}

export function formatLoadPaymentMethod(
  value: LoadPaymentMethod,
  { fallback = 'Unknown' }: FormatLoadPaymentMethodOptions = {},
): string {
  return values.get(value) || fallback;
}
