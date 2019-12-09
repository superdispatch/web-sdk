export type CustomerType =
  | 'BUSINESS'
  | 'DEALER'
  | 'PRIVATE'
  | 'AUCTION'
  | 'REPO_YARD'
  | 'PORT';

export function listCustomerTypes(): CustomerType[] {
  return ['BUSINESS', 'DEALER', 'PRIVATE', 'AUCTION', 'REPO_YARD', 'PORT'];
}

export function formatCustomerType(value: CustomerType): string {
  switch (value) {
    case 'BUSINESS':
      return 'Business';
    case 'DEALER':
      return 'Dealer';
    case 'PRIVATE':
      return 'Private';
    case 'AUCTION':
      return 'Auction';
    case 'REPO_YARD':
      return 'Repo Yard';
    case 'PORT':
      return 'Port';
    default:
      return 'Unknown';
  }
}
