import * as api from '../index';

it('exports public api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "formatCustomerType": [Function],
      "formatDateType": [Function],
      "formatLoadPaymentMethod": [Function],
      "formatLoadPaymentTerm": [Function],
      "formatPaymentMethod": [Function],
      "formatPaymentTerm": [Function],
      "formatVehicleType": [Function],
      "listCustomerTypes": [Function],
      "listDateTypes": [Function],
      "listLoadPaymentMethods": [Function],
      "listLoadPaymentTerms": [Function],
      "listPaymentMethods": [Function],
      "listPaymentTerms": [Function],
      "listVehicleTypes": [Function],
    }
  `);
});
