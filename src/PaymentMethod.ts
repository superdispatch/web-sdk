export type PaymentMethod =
  | 'cash'
  | 'check'
  | 'cashiers_check'
  | 'money_order'
  | 'comchek'
  | 'credit_card'
  | 'direct_deposit'
  | 'other';

const values = new Map<PaymentMethod, string>([
  ['cash', 'Cash'],
  ['check', 'Check'],
  ['cashiers_check', 'Cashiers Check'],
  ['money_order', 'Money Order'],
  ['comchek', 'Comchek'],
  ['credit_card', 'Credit Card'],
  ['direct_deposit', 'Direct Deposit'],
  ['other', 'Other'],
]);

export function listPaymentMethods(): PaymentMethod[] {
  return Array.from(values.keys());
}

export function formatPaymentMethod(value: PaymentMethod): string {
  return values.get(value) || 'Unknown';
}
