import { toStartCase } from './internal/toStartCase';

export type CustomerType = typeof CUSTOMER_TYPES[number];

export const CUSTOMER_TYPES = [
  'BUSINESS',
  'DEALER',
  'PRIVATE',
  'AUCTION',
  'REPO_YARD',
  'PORT',
  'CAR_RENTAL',
] as const;

export function isValidCustomerType(input: unknown): input is CustomerType {
  return CUSTOMER_TYPES.includes(input as CustomerType);
}

/** @deprecated – use `CUSTOMER_TYPES` */
export function listCustomerTypes(): readonly CustomerType[] {
  return CUSTOMER_TYPES;
}

interface FormatCustomerTypeOptions {
  fallback?: string;
}

export function formatCustomerType(
  input: unknown,
  { fallback = 'Unknown' }: FormatCustomerTypeOptions = {},
): string {
  return !isValidCustomerType(input) ? fallback : toStartCase(input);
}
