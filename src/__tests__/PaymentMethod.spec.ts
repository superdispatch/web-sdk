import { formatPaymentMethod, PAYMENT_METHODS } from '../PaymentMethod';

it('formats known', () => {
  expect(PAYMENT_METHODS.map((method) => [method, formatPaymentMethod(method)]))
    .toMatchInlineSnapshot(`
    Array [
      Array [
        "cash",
        "Cash",
      ],
      Array [
        "check",
        "Check",
      ],
      Array [
        "cashiers_check",
        "Cashiers Check",
      ],
      Array [
        "money_order",
        "Money Order",
      ],
      Array [
        "comchek",
        "Comchek",
      ],
      Array [
        "credit_card",
        "Credit Card",
      ],
      Array [
        "direct_deposit",
        "Direct Deposit",
      ],
      Array [
        "venmo",
        "Venmo",
      ],
      Array [
        "cashapp",
        "CashApp",
      ],
      Array [
        "uship",
        "UShip",
      ],
      Array [
        "zelle",
        "Zelle",
      ],
      Array [
        "other",
        "Other",
      ],
    ]
  `);
});

it('formats unknown', () => {
  expect(formatPaymentMethod('FOO')).toMatchInlineSnapshot(`"Unknown"`);
  expect(
    formatPaymentMethod('BAR', { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
