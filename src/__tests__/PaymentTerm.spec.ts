import { formatPaymentTerm, listPaymentTerms } from '../PaymentTerm';

it('returns list', () => {
  expect(listPaymentTerms()).toMatchInlineSnapshot(`
    Array [
      "other",
      "ach",
      "comchek",
      "cash_on_pickup",
      "cash_on_delivery",
      "quick_pay",
      "check_on_delivery",
      "check_on_pickup",
      "5_days",
      "7_days",
      "10_days",
      "15_days",
      "20_days",
      "30_days",
      "45_days",
    ]
  `);
});

it('formats known', () => {
  expect([
    formatPaymentTerm('other'),
    formatPaymentTerm('other', { short: true }),
    formatPaymentTerm('ach'),
    formatPaymentTerm('ach', { short: true }),
    formatPaymentTerm('comchek'),
    formatPaymentTerm('comchek', { short: true }),
    formatPaymentTerm('cash_on_pickup'),
    formatPaymentTerm('cash_on_pickup', { short: true }),
    formatPaymentTerm('cash_on_delivery'),
    formatPaymentTerm('cash_on_delivery', { short: true }),
    formatPaymentTerm('quick_pay'),
    formatPaymentTerm('quick_pay', { short: true }),
    formatPaymentTerm('check_on_delivery'),
    formatPaymentTerm('check_on_delivery', { short: true }),
    formatPaymentTerm('check_on_pickup'),
    formatPaymentTerm('check_on_pickup', { short: true }),
    formatPaymentTerm('5_days'),
    formatPaymentTerm('5_days', { short: true }),
    formatPaymentTerm('7_days'),
    formatPaymentTerm('7_days', { short: true }),
    formatPaymentTerm('10_days'),
    formatPaymentTerm('10_days', { short: true }),
    formatPaymentTerm('15_days'),
    formatPaymentTerm('15_days', { short: true }),
    formatPaymentTerm('20_days'),
    formatPaymentTerm('20_days', { short: true }),
    formatPaymentTerm('30_days'),
    formatPaymentTerm('30_days', { short: true }),
    formatPaymentTerm('45_days'),
    formatPaymentTerm('45_days', { short: true }),
  ]).toMatchInlineSnapshot(`
    Array [
      "Other",
      "Other",
      "ACH",
      "ACH",
      "Comchek",
      "Comchek",
      "Cash on Pickup",
      "COP",
      "Cash on Delivery",
      "COD",
      "QuickPay",
      "QuickPay",
      "Check on Delivery",
      "CKOD",
      "Check on Pickup",
      "CKOP",
      "5 Days",
      "5 Days",
      "7 Days",
      "7 Days",
      "10 Days",
      "10 Days",
      "15 Days",
      "15 Days",
      "20 Days",
      "20 Days",
      "30 Days",
      "30 Days",
      "45 Days",
      "45 Days",
    ]
  `);
});

it('formats unknown', () => {
  expect(formatPaymentTerm('FOO' as any)).toMatchInlineSnapshot(`"Unknown"`);
  expect(formatPaymentTerm('BAR' as any)).toMatchInlineSnapshot(`"Unknown"`);
});
