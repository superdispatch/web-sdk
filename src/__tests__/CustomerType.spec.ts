import { formatCustomerType, listCustomerTypes } from '../CustomerType';

it('returns list of customer types', () => {
  expect(listCustomerTypes()).toMatchInlineSnapshot(`
    Array [
      "BUSINESS",
      "DEALER",
      "PRIVATE",
      "AUCTION",
      "REPO_YARD",
      "PORT",
    ]
  `);
});

it('formats known customer type', () => {
  expect([
    formatCustomerType('BUSINESS'),
    formatCustomerType('DEALER'),
    formatCustomerType('PRIVATE'),
    formatCustomerType('AUCTION'),
    formatCustomerType('REPO_YARD'),
    formatCustomerType('PORT'),
  ]).toMatchInlineSnapshot(`
    Array [
      "Business",
      "Dealer",
      "Private",
      "Auction",
      "Repo Yard",
      "Port",
    ]
  `);
});

it('formats unknown customer type', () => {
  expect(formatCustomerType('FOO' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatCustomerType('BAR' as any)).toMatchInlineSnapshot(`"Unknown"`);
});
