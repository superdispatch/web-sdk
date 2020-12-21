export type PaymentTerm =
  | 'other'
  | 'ach'
  | 'comchek'
  | 'cash_on_pickup'
  | 'cash_on_delivery'
  | 'quick_pay'
  | 'check_on_delivery'
  | 'check_on_pickup'
  | '5_days'
  | '7_days'
  | '10_days'
  | '15_days'
  | '20_days'
  | '30_days'
  | '45_days';

const values = new Map<PaymentTerm, string>([
  ['other', 'Other'],
  ['ach', 'ACH'],
  ['comchek', 'Comchek'],
  ['cash_on_pickup', 'Cash on Pickup'],
  ['cash_on_delivery', 'Cash on Delivery'],
  ['quick_pay', 'QuickPay'],
  ['check_on_delivery', 'Check on Delivery'],
  ['check_on_pickup', 'Check on Pickup'],
  ['5_days', '5 Days'],
  ['7_days', '7 Days'],
  ['10_days', '10 Days'],
  ['15_days', '15 Days'],
  ['20_days', '20 Days'],
  ['30_days', '30 Days'],
  ['45_days', '45 Days'],
]);

const shortValues = new Map<PaymentTerm, string>([
  ['cash_on_pickup', 'COP'],
  ['cash_on_delivery', 'COD'],
  ['check_on_delivery', 'CKOD'],
  ['check_on_pickup', 'CKOP'],
]);

export function listPaymentTerms(): PaymentTerm[] {
  return Array.from(values.keys());
}

export interface FormatPaymentTermOptions {
  short?: boolean;
  fallback?: string
}

export function formatPaymentTerm(
  value: PaymentTerm,
  { short = false, fallback = 'Unknown' }: FormatPaymentTermOptions = {},
): string {
  return (short && shortValues.get(value)) || values.get(value) || fallback;
}
