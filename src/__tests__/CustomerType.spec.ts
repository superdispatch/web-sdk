import { CUSTOMER_TYPES, formatCustomerType } from '../CustomerType';

it('formats known', () => {
  expect(CUSTOMER_TYPES.map((type) => [type, formatCustomerType(type)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "BUSINESS",
        "Business",
      ],
      Array [
        "DEALER",
        "Dealer",
      ],
      Array [
        "PRIVATE",
        "Private",
      ],
      Array [
        "AUCTION",
        "Auction",
      ],
      Array [
        "REPO_YARD",
        "Repo Yard",
      ],
      Array [
        "PORT",
        "Port",
      ],
      Array [
        "CAR_RENTAL",
        "Car Rental",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatCustomerType('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatCustomerType('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
