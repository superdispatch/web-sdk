import {
  formatLoadPaymentMethod,
  listLoadPaymentMethods,
} from '../LoadPaymentMethod';

it('returns list', () => {
  expect(listLoadPaymentMethods()).toMatchInlineSnapshot(`
    Array [
      "cod",
      "quickpay",
      "comcheck",
      "cop",
      "ckod",
      "ach",
      "factoring",
      "venmo",
      "cashapp",
      "uship",
      "zelle",
      "other",
    ]
  `);
});

it('formats known', () => {
  expect([
    formatLoadPaymentMethod('cod'),
    formatLoadPaymentMethod('quickpay'),
    formatLoadPaymentMethod('comcheck'),
    formatLoadPaymentMethod('cop'),
    formatLoadPaymentMethod('ckod'),
    formatLoadPaymentMethod('ach'),
    formatLoadPaymentMethod('factoring'),
    formatLoadPaymentMethod('venmo'),
    formatLoadPaymentMethod('cashapp'),
    formatLoadPaymentMethod('uship'),
    formatLoadPaymentMethod('zelle'),
    formatLoadPaymentMethod('other'),
  ]).toMatchInlineSnapshot(`
    Array [
      "COD",
      "QuickPay",
      "COMcheck",
      "COP",
      "CKOD",
      "ACH",
      "Factoring",
      "Venmo",
      "CashApp",
      "UShip",
      "Zelle",
      "Other",
    ]
  `);
});

it('formats unknown', () => {
  expect(formatLoadPaymentMethod('FOO' as any)).toMatchInlineSnapshot(
    `"Unknown"`,
  );
  expect(formatLoadPaymentMethod('BAR' as any)).toMatchInlineSnapshot(
    `"Unknown"`,
  );
  expect(
    formatLoadPaymentMethod('BAR' as any, { fallback: 'No info' }),
  ).toMatchInlineSnapshot(`"No info"`);
});
