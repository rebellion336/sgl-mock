export const getInventory = {
  httpStatus: 200,
  header: {
    'X-Transaction-Id': 'dsddsdss',
    'X-Public-Id': 'example@gmail.com'
  },
  body: {
    resultData: [
      {
        paymentMethodName: 'Rabbit Linepay',
        paymentMethodValue: '7',
        paymentMethodImage:
          'https://iot-apiv3.ais.co.th/static/payments/paymentmethod/rabbitlinepay.png'
      },
      {
        paymentMethodName: 'Credit Card',
        paymentMethodValue: '4',
        paymentMethodImage:
          'https://iot-apiv3.ais.co.th/static/payments/paymentmethod/creditcard.png'
      }
    ],
    rowCount: 2
  }
};
