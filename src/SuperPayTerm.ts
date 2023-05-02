import { toStartCase } from './internal/toStartCase';

export const SUPERPAY_TERMS = [
  '1_3_days',
  '5_days',
  '10_days',
  '15_days',
  '20_days',
] as const;

export type SuperPayTerm = typeof SUPERPAY_TERMS[number];

export function isValidSuperPayTerm(input: unknown): input is SuperPayTerm {
  return SUPERPAY_TERMS.includes(input as SuperPayTerm);
}

export interface FormatSuperPayTermOptions {
  fallback?: string;
}

export function formatSuperPayTerm(
  input: unknown,
  { fallback = 'Unknown' }: FormatSuperPayTermOptions = {},
): string {
  if (!isValidSuperPayTerm(input)) return fallback;

  switch (input) {
    case '1_3_days':
      return '1-3 Business Days';
    case '5_days':
      return '5 Business Days';
    case '10_days':
      return '10 Business Days';
    case '15_days':
      return '15 Business Days';
    case '20_days':
      return '20 Business Days';

    default:
      return toStartCase(input);
  }
}
