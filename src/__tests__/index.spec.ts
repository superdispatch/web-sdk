import * as api from '../index';

it('exports public api', () => {
  expect(api).toMatchInlineSnapshot(`
    Object {
      "ACH_PAYMENT_METHODS": Array [
        "ach",
        "direct_deposit",
      ],
      "ALL_PAYMENT_METHODS": Array [
        "superpay",
        "cash",
        "check",
        "cashiers_check",
        "money_order",
        "comchek",
        "ach",
        "direct_deposit",
        "credit_card",
        "venmo",
        "cashapp",
        "uship",
        "zelle",
        "other",
      ],
      "ALL_PAYMENT_TERMS": Array [
        "other",
        "superpay",
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
        "60_days",
        "1_3_days",
        "2_days",
        "on_delivery",
        "on_pickup",
      ],
      "CASH_PAYMENT_METHODS": Array [
        "cash",
      ],
      "CASH_TERMS": Array [
        "cash_on_pickup",
        "cash_on_delivery",
        "2_days",
        "5_days",
      ],
      "CHECK_PAYMENT_METHODS": Array [
        "check",
        "cashiers_check",
        "money_order",
        "comchek",
      ],
      "CHECK_TERMS": Array [
        "check_on_delivery",
        "check_on_pickup",
        "2_days",
        "5_days",
        "7_days",
        "10_days",
        "15_days",
        "20_days",
        "30_days",
        "45_days",
        "60_days",
      ],
      "CREDIT_CARD_PAYMENT_METHODS": Array [
        "credit_card",
      ],
      "CUSTOMER_TYPES": Array [
        "BUSINESS",
        "DEALER",
        "PRIVATE",
        "AUCTION",
        "REPO_YARD",
        "PORT",
        "CAR_RENTAL",
      ],
      "DATE_TYPES": Array [
        "estimated",
        "exact",
        "not_earlier_than",
        "not_later_than",
      ],
      "ELECTRONIC_PAYMENT_METHODS": Array [
        "venmo",
        "cashapp",
        "uship",
        "zelle",
      ],
      "ELECTRONIC_PAYMENT_TERMS": Array [
        "on_delivery",
        "on_pickup",
        "2_days",
        "5_days",
        "7_days",
        "10_days",
        "15_days",
        "20_days",
        "30_days",
        "45_days",
        "60_days",
      ],
      "LOAD_PAYMENT_METHODS": Array [
        "cod",
        "quickpay",
        "comchek",
        "cop",
        "ckod",
        "ach",
        "factoring",
        "venmo",
        "cashapp",
        "uship",
        "zelle",
        "superpay",
        "other",
      ],
      "LOAD_PAYMENT_TERMS": Array [
        "5_days",
        "7_days",
        "10_days",
        "15_days",
        "20_days",
        "30_days",
        "45_days",
        "60_days",
        "other",
      ],
      "OTHER_PAYMENT_METHODS": Array [
        "other",
      ],
      "OTHER_PAYMENT_TERMS": Array [
        "other",
        "superpay",
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
        "60_days",
      ],
      "PAYMENT_METHODS": Array [
        "superpay",
        "cash",
        "check",
        "cashiers_check",
        "money_order",
        "comchek",
        "credit_card",
        "ach",
        "direct_deposit",
        "venmo",
        "cashapp",
        "uship",
        "zelle",
        "other",
      ],
      "PAYMENT_TERMS": Array [
        "other",
        "superpay",
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
        "60_days",
      ],
      "SUPERPAY_PAYMENT_METHODS": Array [
        "superpay",
      ],
      "SUPERPAY_TERMS": Array [
        "1_3_days",
        "5_days",
        "10_days",
        "15_days",
        "20_days",
        "30_days",
      ],
      "VEHICLE_TYPES": Array [
        "sedan",
        "2_door_coupe",
        "suv",
        "pickup",
        "4_door_pickup",
        "van",
        "truck_daycab",
        "truck_sleeper",
        "motorcycle",
        "boat",
        "rv",
        "heavy_machinery",
        "freight",
        "livestock",
        "atv",
        "trailer_bumper_pull",
        "trailer_gooseneck",
        "trailer_5th_wheel",
        "other",
      ],
      "formatCustomerType": [Function],
      "formatDateType": [Function],
      "formatLoadPaymentMethod": [Function],
      "formatLoadPaymentTerm": [Function],
      "formatPaymentMethod": [Function],
      "formatPaymentTerm": [Function],
      "formatVehicleType": [Function],
      "isValidCustomerType": [Function],
      "isValidDateType": [Function],
      "isValidLoadPaymentMethod": [Function],
      "isValidLoadPaymentTerm": [Function],
      "isValidPaymentMethod": [Function],
      "isValidPaymentTerm": [Function],
      "isValidSuperPayTerm": [Function],
      "isValidVehicleType": [Function],
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
