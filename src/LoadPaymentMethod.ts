import { toStartCase } from './internal/toStartCase';

export type LoadPaymentMethod = typeof LOAD_PAYMENT_METHODS[number];

export const LOAD_PAYMENT_METHODS = [
  'cod', // term
  'quickpay', // term
  'comchek', // term
  'ckop', // term
  'cop', // term
  'ckod', // term
  'ach', // term
  'factoring', // term
  'venmo', // method
  'cashapp', // method
  'uship', // method
  'zelle', // method
  'superpay', // method
  'other', // method
] as const;

export function isValidLoadPaymentMethod(
  input: unknown,
): input is LoadPaymentMethod {
  return LOAD_PAYMENT_METHODS.includes(input as LoadPaymentMethod);
}

/** @deprecated – use `LOAD_PAYMENT_METHODS` */
export function listLoadPaymentMethods(): readonly LoadPaymentMethod[] {
  return LOAD_PAYMENT_METHODS;
}

interface FormatLoadPaymentMethodOptions {
  fallback?: string;
}

export function formatLoadPaymentMethod(
  input: unknown,
  { fallback = 'Unknown' }: FormatLoadPaymentMethodOptions = {},
): string {
  if (!isValidLoadPaymentMethod(input)) return fallback;

  switch (input) {
    case 'quickpay':
      return 'QuickPay';
    case 'comchek':
      return 'Comchek';
    case 'cashapp':
      return 'CashApp';
    case 'uship':
      return 'uShip';
    case 'superpay':
      return 'SuperPay';

    case 'ckop':
    case 'cod':
    case 'cop':
    case 'ckod':
    case 'ach':
      return input.toUpperCase();

    default:
      return toStartCase(input);
  }
}
