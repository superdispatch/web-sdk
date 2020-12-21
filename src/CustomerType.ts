export type CustomerType =
  | 'BUSINESS'
  | 'DEALER'
  | 'PRIVATE'
  | 'AUCTION'
  | 'REPO_YARD'
  | 'PORT';

const values = new Map<CustomerType, string>([
  ['BUSINESS', 'Business'],
  ['DEALER', 'Dealer'],
  ['PRIVATE', 'Private'],
  ['AUCTION', 'Auction'],
  ['REPO_YARD', 'Repo Yard'],
  ['PORT', 'Port'],
]);

export function listCustomerTypes(): CustomerType[] {
  return Array.from(values.keys());
}

interface FormatCustomerTypeOptions {
  fallback?: string;
}

export function formatCustomerType(value: CustomerType, { fallback = 'Unknown'}: FormatCustomerTypeOptions = {}): string {
  return values.get(value) || fallback;
}
