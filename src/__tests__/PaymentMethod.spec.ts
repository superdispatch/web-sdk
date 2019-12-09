import { formatPaymentMethod, listPaymentMethods } from '../PaymentMethod';

it('returns list of Date types', () => {
  expect(listPaymentMethods()).toMatchInlineSnapshot(`
    Array [
      "cash",
      "check",
      "cashiers_check",
      "money_order",
      "comchek",
      "credit_card",
      "direct_deposit",
      "other",
    ]
  `);
});

it('formats known Date type', () => {
  expect([
    formatPaymentMethod('cash'),
    formatPaymentMethod('check'),
    formatPaymentMethod('cashiers_check'),
    formatPaymentMethod('money_order'),
    formatPaymentMethod('comchek'),
    formatPaymentMethod('credit_card'),
    formatPaymentMethod('direct_deposit'),
    formatPaymentMethod('other'),
  ]).toMatchInlineSnapshot(`
    Array [
      "Cash",
      "Check",
      "Cashiers Check",
      "Money Order",
      "Comchek",
      "Credit Card",
      "Direct Deposit",
      "Other",
    ]
  `);
});

it('formats unknown Date type', () => {
  expect(formatPaymentMethod('FOO' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatPaymentMethod('BAR' as any)).toMatchInlineSnapshot(`"Unknown"`);
});
