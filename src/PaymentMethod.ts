import { toStartCase } from './internal/toStartCase';

export type PaymentMethod =
  | 'superpay'
  | 'cash'
  | 'check'
  | 'cashiers_check'
  | 'money_order'
  | 'comchek'
  | 'credit_card'
  | 'ach'
  | 'direct_deposit'
  | 'venmo'
  | 'cashapp'
  | 'uship'
  | 'zelle'
  | 'other';

export const SUPERPAY_PAYMENT_METHODS: PaymentMethod[] = ['superpay'];

export const CASH_PAYMENT_METHODS: PaymentMethod[] = ['cash'];

export const CHECK_PAYMENT_METHODS: PaymentMethod[] = [
  'check',
  'cashiers_check',
  'money_order',
  'comchek',
];

export const ACH_PAYMENT_METHODS: PaymentMethod[] = ['ach', 'direct_deposit'];

export const CREDIT_CARD_PAYMENT_METHODS: PaymentMethod[] = ['credit_card'];

export const ELECTRONIC_PAYMENT_METHODS: PaymentMethod[] = [
  'venmo',
  'cashapp',
  'uship',
  'zelle',
];

export const OTHER_PAYMENT_METHODS: PaymentMethod[] = ['other'];

const ALL_PAYMENT_METHODS_SET = new Set([
  ...SUPERPAY_PAYMENT_METHODS,
  ...CASH_PAYMENT_METHODS,
  ...CHECK_PAYMENT_METHODS,
  ...ACH_PAYMENT_METHODS,
  ...CREDIT_CARD_PAYMENT_METHODS,
  ...ELECTRONIC_PAYMENT_METHODS,
  ...OTHER_PAYMENT_METHODS,
]);

export const ALL_PAYMENT_METHODS: PaymentMethod[] = Array.from(
  ALL_PAYMENT_METHODS_SET,
);

// @deprecated – use `ALL_PAYMENT_METHODS`
export const PAYMENT_METHODS = [
  'superpay',
  'cash',
  'check',
  'cashiers_check',
  'money_order',
  'comchek',
  'credit_card',
  'ach',
  'direct_deposit',
  'venmo',
  'cashapp',
  'uship',
  'zelle',
  'other',
] as const;

export function isValidPaymentMethod(input: unknown): input is PaymentMethod {
  return ALL_PAYMENT_METHODS_SET.has(input as PaymentMethod);
}

/** @deprecated – use `ALL_PAYMENT_METHODS` */
export function listPaymentMethods(): readonly PaymentMethod[] {
  return PAYMENT_METHODS;
}

interface FormatPaymentMethodOptions {
  fallback?: string;
}

export function formatPaymentMethod(
  input: unknown,
  { fallback = 'Unknown' }: FormatPaymentMethodOptions = {},
): string {
  if (!isValidPaymentMethod(input)) return fallback;

  switch (input) {
    case 'cashapp':
      return 'CashApp';
    case 'uship':
      return 'uShip';
    case 'ach':
      return 'ACH';
    case 'superpay':
      return 'SuperPay';
    default:
      return toStartCase(input);
  }
}
