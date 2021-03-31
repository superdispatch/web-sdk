import { toStartCase } from './internal/toStartCase';

export type LoadPaymentMethod = typeof LOAD_PAYMENT_METHODS[number];

export const LOAD_PAYMENT_METHODS = [
  'cod',
  'quickpay',
  'comcheck',
  'cop',
  'ckod',
  'ach',
  'factoring',
  'venmo',
  'cashapp',
  'uship',
  'zelle',
  'other',
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
    case 'comcheck':
      return 'COMcheck';
    case 'cashapp':
      return 'CashApp';
    case 'uship':
      return 'UShip';

    case 'cod':
    case 'cop':
    case 'ckod':
    case 'ach':
      return input.toUpperCase();

    default:
      return toStartCase(input);
  }
}
