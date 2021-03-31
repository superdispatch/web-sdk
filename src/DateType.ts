import { toStartCase } from './internal/toStartCase';

export type DateType = typeof DATE_TYPES[number];

export const DATE_TYPES = [
  'estimated',
  'exact',
  'not_earlier_than',
  'not_later_than',
] as const;

export function isValidDateType(input: unknown): input is DateType {
  return DATE_TYPES.includes(input as DateType);
}

/** @deprecated – use `DATE_TYPES` */
export function listDateTypes(): readonly DateType[] {
  return DATE_TYPES;
}

interface FormatDateTypeOptions {
  fallback?: string;
}

export function formatDateType(
  input: unknown,
  { fallback = 'Unknown' }: FormatDateTypeOptions = {},
): string {
  if (!isValidDateType(input)) return fallback;

  switch (input) {
    case 'not_earlier_than':
      return 'No Earlier than';
    case 'not_later_than':
      return 'No Later than';
    default:
      return toStartCase(input);
  }
}
