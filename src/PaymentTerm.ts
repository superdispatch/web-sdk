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

export function listPaymentTerms(): PaymentTerm[] {
  return [
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
  ];
}

export interface FormatPaymentTermOptions {
  short?: boolean;
}

export function formatPaymentTerm(
  value: PaymentTerm,
  { short = false }: FormatPaymentTermOptions = {},
): string {
  switch (value) {
    case 'other':
      return 'Other';
    case 'ach':
      return 'ACH';
    case 'comchek':
      return 'Comchek';
    case 'cash_on_pickup':
      return short ? 'COP' : 'Cash on Pickup';
    case 'cash_on_delivery':
      return short ? 'COD' : 'Cash on Delivery';
    case 'quick_pay':
      return 'QuickPay';
    case 'check_on_delivery':
      return short ? 'CKOD' : 'Check on Delivery';
    case 'check_on_pickup':
      return short ? 'CKOP' : 'Check on Pickup';
    case '5_days':
      return '5 Days';
    case '7_days':
      return '7 Days';
    case '10_days':
      return '10 Days';
    case '15_days':
      return '15 Days';
    case '20_days':
      return '20 Days';
    case '30_days':
      return '30 Days';
    case '45_days':
      return '45 Days';

    default:
      return 'Unknown';
  }
}
