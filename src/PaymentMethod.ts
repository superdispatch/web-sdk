export type PaymentMethod =
  | 'cash'
  | 'check'
  | 'cashiers_check'
  | 'money_order'
  | 'comchek'
  | 'credit_card'
  | 'direct_deposit'
  | 'other';

export function listPaymentMethods(): PaymentMethod[] {
  return [
    'cash',
    'check',
    'cashiers_check',
    'money_order',
    'comchek',
    'credit_card',
    'direct_deposit',
    'other',
  ];
}

export function formatPaymentMethod(value: PaymentMethod): string {
  switch (value) {
    case 'cash':
      return 'Cash';
    case 'check':
      return 'Check';
    case 'cashiers_check':
      return 'Cashiers Check';
    case 'money_order':
      return 'Money Order';
    case 'comchek':
      return 'Comchek';
    case 'credit_card':
      return 'Credit Card';
    case 'direct_deposit':
      return 'Direct Deposit';
    case 'other':
      return 'Other';
    default:
      return 'Unknown';
  }
}
