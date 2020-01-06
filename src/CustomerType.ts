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

export function formatCustomerType(value: CustomerType): string {
  return values.get(value) || 'Unknown';
}
