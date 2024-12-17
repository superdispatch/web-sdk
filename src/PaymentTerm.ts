import { toStartCase } from './internal/toStartCase';
import { PaymentMethod } from './PaymentMethod';

export type PaymentTerm =
  | 'other'
  | 'superpay'
  | 'ach'
  | 'comchek'
  | 'on_delivery'
  | 'on_pickup'
  | 'cash_on_pickup'
  | 'cash_on_delivery'
  | 'quick_pay'
  | 'check_on_delivery'
  | 'check_on_pickup'
  | '1_3_days'
  | '2_days'
  | '5_days'
  | '7_days'
  | '10_days'
  | '15_days'
  | '20_days'
  | '30_days'
  | '45_days'
  | '60_days';

// @deprecated – use `OTHER_PAYMENT_TERMS`
export const PAYMENT_TERMS: PaymentTerm[] = [
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
];
export const OTHER_PAYMENT_TERMS = PAYMENT_TERMS;

export const SUPERPAY_TERMS: PaymentTerm[] = [
  '1_3_days',
  '5_days',
  '10_days',
  '15_days',
  '20_days',
  '30_days',
];

export const CASH_TERMS: PaymentTerm[] = [
  'cash_on_pickup',
  'cash_on_delivery',
  '2_days',
  '5_days',
];

// Check, Comcheck, Cashiers Check, Money Order
export const CHECK_TERMS = [
  'check_on_delivery',
  'check_on_pickup',
  '2_days',
  '5_days',
  '7_days',
  '10_days',
  '15_days',
  '20_days',
  '30_days',
  '45_days',
  '60_days',
] as const;

// Zelle, Venmo, Cash App, uShip, Credit Card, ACH, Direct Deposit
export const ELECTRONIC_PAYMENT_TERMS: PaymentTerm[] = [
  'on_delivery',
  'on_pickup',
  '2_days',
  '5_days',
  '7_days',
  '10_days',
  '15_days',
  '20_days',
  '30_days',
  '45_days',
  '60_days',
];

const ALL_PAYMENT_TERMS: PaymentTerm[] = [
  ...OTHER_PAYMENT_TERMS,
  ...SUPERPAY_TERMS,
  ...CASH_TERMS,
  ...CHECK_TERMS,
  ...ELECTRONIC_PAYMENT_TERMS,
];

export type SuperPayTerm = typeof SUPERPAY_TERMS[number];
export type CashTerm = typeof CASH_TERMS[number];
export type CheckTerm = typeof CHECK_TERMS[number];
export type ElectronicPaymentTerm = typeof ELECTRONIC_PAYMENT_TERMS[number];

export function isValidPaymentTerm(input: unknown): input is PaymentTerm {
  return ALL_PAYMENT_TERMS.includes(input as PaymentTerm);
}

export function isValidSuperPayTerm(input: unknown): input is SuperPayTerm {
  return SUPERPAY_TERMS.includes(input as SuperPayTerm);
}

export function listPaymentTerms(
  method: PaymentMethod,
): readonly PaymentTerm[] {
  switch (method) {
    case 'superpay':
      return SUPERPAY_TERMS;
    case 'cash':
      return CASH_TERMS;
    case 'check':
    case 'comchek':
    case 'cashiers_check':
    case 'money_order':
      return CHECK_TERMS;
    case 'ach':
    case 'credit_card':
    case 'direct_deposit':
    case 'venmo':
    case 'cashapp':
    case 'uship':
    case 'zelle':
      return ELECTRONIC_PAYMENT_TERMS;
    default:
      return OTHER_PAYMENT_TERMS;
  }
}

export interface FormatPaymentTermOptions {
  short?: boolean;
  fallback?: string;
}

export function formatPaymentTerm(
  input: unknown,
  { short = false, fallback = 'Unknown' }: FormatPaymentTermOptions = {},
): string {
  if (!isValidPaymentTerm(input)) {
    return fallback;
  }

  switch (input) {
    case 'ach':
      return 'ACH';
    case 'quick_pay':
      return 'QuickPay';
    case 'superpay':
      return 'SuperPay';

    case 'on_delivery':
      return 'On Delivery';
    case 'on_pickup':
      return 'On Pickup';

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
    case '2_days':
      return '2 Business Days';
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
